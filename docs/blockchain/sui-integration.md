# Sui Integration

Complete guide to Sui blockchain integration in Verakita.

---

## Overview

Verakita uses **Sui blockchain** for:
- Immutable review storage
- Cryptographic verification
- Transparent audit trail
- Decentralized consensus

---

## Configuration

### Environment Variables

```env
# Network Selection
NEXT_PUBLIC_SUI_NETWORK=testnet

# RPC Endpoint
NEXT_PUBLIC_SUI_RPC_URL=https://fullnode.testnet.sui.io:443

# Smart Contract
NEXT_PUBLIC_REVIEW_PACKAGE_ID=0x...
NEXT_PUBLIC_REVIEW_REGISTRY_ID=0x...
```

### Networks

| Network | RPC URL | Purpose |
|---------|---------|---------|
| Mainnet | `https://fullnode.mainnet.sui.io` | Production |
| Testnet | `https://fullnode.testnet.sui.io` | Testing |
| Devnet | `https://fullnode.devnet.sui.io` | Development |
| Localnet | `http://localhost:9000` | Local dev |

---

## SDK Setup

### Initialize Client

```typescript
import { SuiClient } from '@mysten/sui.js/client';

export const suiClient = new SuiClient({ 
  url: process.env.NEXT_PUBLIC_SUI_RPC_URL 
});
```

### Query Balance

```typescript
const balance = await suiClient.getBalance({
  owner: '0x...'
});

console.log(`${balance.totalBalance / 1_000_000_000} SUI`);
```

### Get Objects

```typescript
const objects = await suiClient.getOwnedObjects({
  owner: '0x...'
});
```

---

## Wallet Integration

### Supported Wallets

- **Sui Wallet** - Official wallet
- **Ethos Wallet** - Multi-chain
- **Suiet** - Browser extension
- **Martian** - Mobile & web
- **Nightly** - Developer-focused

### Connection Hook

```typescript
import { useWallet } from '@/lib/sui/hooks';

function MyComponent() {
  const { address, isConnected, connect, disconnect } = useWallet();

  return (
    <div>
      {isConnected ? (
        <>
          <p>Connected: {address}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={() => connect('Sui Wallet')}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
```

### Get Balance

```typescript
import { useWalletBalance } from '@/lib/sui/hooks';

function WalletBalance() {
  const { balance, loading, refetch } = useWalletBalance();

  if (loading) return <div>Loading...</div>;

  return <div>{balance} SUI</div>;
}
```

---

## Transactions

### Create Transaction

```typescript
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { createReview } from '@/lib/sui/reviews';

const tx = new TransactionBlock();

// Add review creation call
tx.moveCall({
  target: `${PACKAGE_ID}::review::create_review`,
  arguments: [
    tx.pure(registryId),
    tx.pure(targetAddress),
    tx.pure(rating),
    tx.pure(contentBlobId)
  ]
});
```

### Sign & Execute

```typescript
import { useTransaction } from '@/lib/sui/hooks';

function SubmitReview() {
  const { signAndExecute, loading } = useTransaction();

  const handleSubmit = async () => {
    const tx = createReview(target, rating, blobId);
    const result = await signAndExecute(tx);
    console.log('Transaction:', result.digest);
  };

  return (
    <button onClick={handleSubmit} disabled={loading}>
      Submit Review
    </button>
  );
}
```

---

## Smart Contracts

### Review Contract Structure

```move
module verakita::review {
    struct Review has key, store {
        id: UID,
        author: address,
        target: address,
        rating: u8,
        content_blob_id: String,
        timestamp: u64,
        verified: bool
    }

    public entry fun create_review(
        registry: &mut ReviewRegistry,
        target: address,
        rating: u8,
        content_blob_id: String,
        ctx: &mut TxContext
    ) {
        // Implementation
    }
}
```

### Deploy Contract

```bash
sui move build
sui client publish --gas-budget 100000000
```

### Update Contract Address

After deployment, update `.env.local`:

```env
NEXT_PUBLIC_REVIEW_PACKAGE_ID=0xYOUR_PACKAGE_ID
NEXT_PUBLIC_REVIEW_REGISTRY_ID=0xYOUR_REGISTRY_ID
```

---

## Gas Management

### Estimate Gas

```typescript
const dryRun = await suiClient.dryRunTransactionBlock({
  transactionBlock: tx.serialize()
});

console.log('Gas used:', dryRun.effects.gasUsed);
```

### Set Gas Budget

```typescript
tx.setGasBudget(10000000); // 0.01 SUI
```

### Get Gas Price

```typescript
const price = await suiClient.getReferenceGasPrice();
console.log('Gas price:', price);
```

---

## Error Handling

### Common Errors

```typescript
try {
  await signAndExecute(tx);
} catch (error) {
  if (error.message.includes('Insufficient gas')) {
    // Handle insufficient funds
  } else if (error.message.includes('User rejected')) {
    // Handle user rejection
  } else {
    // Handle other errors
  }
}
```

---

## Best Practices

### 1. Always Use Try-Catch

```typescript
try {
  const result = await suiClient.getObject({ id });
} catch (error) {
  console.error('Failed to fetch object:', error);
}
```

### 2. Validate Addresses

```typescript
import { isValidSuiAddress } from '@mysten/sui.js/utils';

if (!isValidSuiAddress(address)) {
  throw new Error('Invalid Sui address');
}
```

### 3. Use Gas Budgets Wisely

```typescript
// Too low = transaction fails
// Too high = wastes user funds
tx.setGasBudget(10000000); // ~0.01 SUI
```

### 4. Cache RPC Calls

```typescript
const { data } = useQuery({
  queryKey: ['object', objectId],
  queryFn: () => suiClient.getObject({ id: objectId }),
  staleTime: 60000 // Cache for 1 minute
});
```

---

## Testing

### Testnet Faucet

Get free SUI tokens:

```bash
curl -X POST https://faucet.testnet.sui.io/gas \
  -H "Content-Type: application/json" \
  -d '{"address": "YOUR_ADDRESS"}'
```

Or use the wallet interface:
```typescript
// In development
console.log('Get testnet SUI: https://faucet.testnet.sui.io');
```

---

## Monitoring

### Transaction Status

```typescript
const status = await suiClient.getTransactionBlock({
  digest: txDigest
});

console.log('Status:', status.effects?.status);
```

### Event Subscription

```typescript
const events = await suiClient.queryEvents({
  query: { 
    MoveEventType: `${PACKAGE_ID}::review::ReviewCreated` 
  }
});
```

---

## Resources

- [Sui Documentation](https://docs.sui.io)
- [Sui TypeScript SDK](https://sdk.mystenlabs.com/typescript)
- [Move by Example](https://examples.sui.io)
- [Sui Explorer](https://suiexplorer.com)

---

## Next Steps

- [Walrus Storage](walrus-storage.md)
- [Wallet Connection](wallet-connection.md)
- [Smart Contracts](smart-contracts.md)

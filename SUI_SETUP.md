# Verakita - Sui & Walrus Development Setup

## ✅ Setup Completed

Verakita sekarang sudah siap untuk development dengan Sui blockchain dan Walrus storage!

## 📦 Installed Packages

- `@mysten/sui.js` - Sui SDK untuk berinteraksi dengan blockchain
- `@mysten/wallet-kit` - Wallet connectivity UI
- `@mysten/wallet-adapter-react` - React hooks untuk wallet
- `@tanstack/react-query` - Data fetching & caching

## 🏗️ Structure

```
lib/
├── sui/
│   ├── config.ts          # Konfigurasi network Sui & Walrus
│   ├── client.ts          # Sui client setup
│   ├── hooks.ts           # Custom hooks untuk wallet
│   └── reviews.ts         # Smart contract interactions
└── walrus/
    └── storage.ts         # Walrus storage utilities

components/
├── providers/
│   └── SuiProvider.tsx    # Wallet provider wrapper
└── WalletButton.tsx       # Connect wallet component
```

## 🔧 Environment Variables

File `.env.local` sudah dibuat dengan konfigurasi:

```env
NEXT_PUBLIC_SUI_NETWORK=testnet
NEXT_PUBLIC_SUI_RPC_URL=https://fullnode.testnet.sui.io:443
NEXT_PUBLIC_WALRUS_PUBLISHER_URL=https://publisher.walrus-testnet.walrus.space
NEXT_PUBLIC_WALRUS_AGGREGATOR_URL=https://aggregator.walrus-testnet.walrus.space
```

## 🚀 Next Steps

### 1. **Develop Smart Contract**
Buat Sui Move contracts untuk review system:
```bash
sui move new verakita-contracts
```

### 2. **Deploy Contract ke Testnet**
```bash
sui client publish --gas-budget 100000000
```

### 3. **Update Contract Addresses**
Setelah deploy, update di `.env.local`:
```env
NEXT_PUBLIC_REVIEW_PACKAGE_ID=0x...
NEXT_PUBLIC_REVIEW_REGISTRY_ID=0x...
```

### 4. **Test Wallet Integration**
Tambahkan `WalletButton` ke navigation:
```tsx
import { WalletButton } from '@/components/WalletButton';

<WalletButton />
```

### 5. **Upload Review ke Walrus**
```typescript
import { uploadJsonToWalrus } from '@/lib/walrus/storage';

const review = {
  rating: 5,
  comment: "Great service!",
  timestamp: Date.now()
};

const { blobId } = await uploadJsonToWalrus(review);
```

### 6. **Submit Review ke Blockchain**
```typescript
import { createReview } from '@/lib/sui/reviews';
import { useTransaction } from '@/lib/sui/hooks';

const { signAndExecute } = useTransaction();
const tx = createReview(targetAddress, 5, blobId);
const result = await signAndExecute(tx);
```

## 🎯 Key Features Ready

✅ Sui wallet connection (Sui Wallet, Ethos, Suiet, etc.)  
✅ Balance display  
✅ Transaction signing  
✅ Walrus file upload/download  
✅ Review smart contract interactions  
✅ TypeScript types  

## 📚 Useful Commands

```bash
# Start development
bun dev

# Get SUI tokens from faucet (testnet)
curl -X POST https://faucet.testnet.sui.io/gas \
  -H "Content-Type: application/json" \
  -d '{"address": "YOUR_ADDRESS"}'

# Check wallet setup
sui client active-address
sui client gas

# Test Walrus upload
curl -X PUT "https://publisher.walrus-testnet.walrus.space/v1/store?epochs=5" \
  --upload-file yourfile.txt
```

## 🔗 Resources

- [Sui Documentation](https://docs.sui.io)
- [Sui Move by Example](https://examples.sui.io)
- [Walrus Documentation](https://docs.walrus.site)
- [Wallet Kit Docs](https://sdk.mystenlabs.com/wallet-kit)

## 🎨 Example Usage in Components

```tsx
'use client';

import { useWallet, useWalletBalance } from '@/lib/sui/hooks';
import { WalletButton } from '@/components/WalletButton';

export function MyComponent() {
  const { isConnected, address } = useWallet();
  const { balance } = useWalletBalance();

  return (
    <div>
      <WalletButton />
      {isConnected && (
        <p>Connected: {address}</p>
        <p>Balance: {balance} SUI</p>
      )}
    </div>
  );
}
```

---

**Status: Ready for Sui & Walrus Development! 🎉**

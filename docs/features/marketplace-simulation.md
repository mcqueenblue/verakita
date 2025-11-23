# Marketplace Simulation

Interactive demo for testing Verakita's review workflow.

---

## Overview

The Marketplace Simulation (`/marketplace`) is a **hands-on demonstration** that allows users and hackathon judges to experience the complete review submission process without needing real products or transactions.

**Access:** `https://verakita.com/marketplace`

**Purpose:**
- ✅ Demonstrate the review workflow
- ✅ Test blockchain integration
- ✅ Showcase immutable storage
- ✅ Provide interactive experience for judges

---

## Features

### 🛍️ Virtual Marketplace

**6 Demo Products:**
1. Wireless Headphones Pro - $299
2. Smart Watch Ultra - $399
3. Mechanical Keyboard RGB - $149
4. Portable SSD 2TB - $199
5. Webcam 4K Pro - $129
6. USB-C Hub 8-in-1 - $49

Each product includes:
- Product image (emoji)
- Name and description
- Price
- Seller address
- Average rating
- Review count

---

## User Journey

### Step 1: Browse Products

```
┌─────────────────────────────────────┐
│     Marketplace Simulation          │
├─────────────────────────────────────┤
│                                     │
│  🎧   Wireless Headphones Pro       │
│       $299                          │
│       ⭐⭐⭐⭐☆ 4.5 (124 reviews)    │
│       [Purchase Now]                │
│                                     │
└─────────────────────────────────────┘
```

**Requirements:**
- Wallet must be connected
- Products displayed in 3-column grid
- Hover effects for interactivity

---

### Step 2: Purchase Product

**Checkout Flow:**

1. Click "Purchase Now"
2. Review purchase details
3. See price breakdown:
   - Subtotal
   - Gas fee (Sui)
   - Total amount
4. Confirm or cancel

**Mock Transaction:**
- Simulates blockchain transaction
- No real funds required
- Instant confirmation

---

### Step 3: Submit Review

**Review Form:**

```typescript
{
  rating: 1-5 stars,
  title: string,
  content: string
}
```

**Features:**
- ⭐ Star rating selector (1-5 stars)
- 📝 Review title input
- 📄 Review content textarea
- ℹ️ Blockchain info banner
- ✅ Form validation

**Info Banner:**
> "Your review will be stored immutably on Sui blockchain and Walrus storage. It cannot be edited or deleted once submitted."

---

### Step 4: Blockchain Submission

**Loading States:**

1. **Uploading** 🟢
   - "Uploading content to Walrus storage"
   
2. **Creating Transaction** 🔵
   - "Creating transaction on Sui blockchain"
   
3. **Confirming** 🟣
   - "Waiting for confirmation..."

**Duration:** ~2 seconds (simulated)

---

### Step 5: Success Confirmation

**Displays:**
- ✨ Success message
- ⭐ Star rating visualization
- 📝 Review title and content
- 🔗 Transaction hash (mock)
- 💾 Walrus Blob ID (mock)

**Actions:**
- "Try Again" - Reset simulation
- "View My Reviews" - Go to dashboard

---

## Integration Points

### Landing Page CTA

**Hero Section:**
```tsx
<Link href="/marketplace">
  <button>Try Simulation</button>
</Link>
```

**Changed from:**
- ~~"Learn More"~~ (generic)

**Changed to:**
- "Try Simulation" (action-oriented)

---

### Dashboard Link

From marketplace, users can access:
- `/dashboard` - Main dashboard
- `/dashboard/reviews` - Review management

---

## Technical Implementation

### State Management

```typescript
const [purchaseStep, setPurchaseStep] = useState<
  'browse' | 'checkout' | 'purchased'
>('browse');

const [reviewStep, setReviewStep] = useState<
  'form' | 'submitting' | 'success'
>('form');
```

### Wallet Integration

```typescript
const { address, isConnected } = useWallet();

// Disable purchase if not connected
disabled={!isConnected}
```

### Mock Data

```typescript
const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    description: '...',
    price: 299,
    image: '🎧',
    seller: '0x1234...5678',
    rating: 4.5,
    reviews: 124
  },
  // ... more products
];
```

---

## Animations

### Product Grid

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
```

**Effect:** Staggered fade-in from bottom

### Modal Transitions

```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
>
```

**Effect:** Smooth scale-in with fade

---

## UI Components Used

| Component | Purpose |
|-----------|---------|
| `Card` | Product cards, modals |
| `Button` | CTAs, actions |
| `Input` | Review title |
| `Label` | Form labels |
| `motion.div` | Animations |

### Icons

- `ShoppingCart` - Purchase action
- `Package` - Order confirmation
- `Star` - Rating display
- `ExternalLink` - Blockchain info

---

## User Experience Flow

```
Landing Page
    ↓
[Try Simulation] CTA
    ↓
Browse Products (/marketplace)
    ↓
Select Product
    ↓
Checkout Page
    ↓
Confirm Purchase
    ↓
Review Form
    ↓
Submit to Blockchain
    ↓
Success! → Dashboard
```

---

## For Hackathon Judges

### What This Demonstrates

1. **Complete Workflow**
   - Browse → Purchase → Review → Blockchain
   
2. **Wallet Integration**
   - Connect wallet required
   - Address display
   - Transaction signing (simulated)

3. **Blockchain Features**
   - Walrus storage upload
   - Sui transaction creation
   - Immutable review storage

4. **User Experience**
   - Clean, modern UI
   - Smooth animations
   - Clear progress indicators
   - Helpful info messages

---

### Testing Guide

**Quick Test (2 minutes):**

1. Open `/marketplace`
2. Connect Sui wallet
3. Click "Purchase Now" on any product
4. Confirm checkout
5. Fill review form (5 stars + text)
6. Submit review
7. View success confirmation

**Full Test (5 minutes):**

1. Browse all 6 products
2. Compare ratings and prices
3. Test with/without wallet connected
4. Try different star ratings
5. Test form validation (empty fields)
6. Submit multiple reviews
7. Navigate to dashboard

---

## Customization

### Add More Products

```typescript
const newProduct: Product = {
  id: '7',
  name: 'New Product',
  description: 'Description here',
  price: 99,
  image: '🎮',
  seller: '0xabcd...1234',
  rating: 4.0,
  reviews: 50
};

products.push(newProduct);
```

### Change Simulation Delay

```typescript
// In submitReview function
await new Promise(resolve => 
  setTimeout(resolve, 2000) // 2 seconds
);
```

### Modify Mock Transaction Data

```typescript
<p>Transaction: 0x{Math.random().toString(36).substring(7)}...</p>
<p>Walrus Blob ID: {Math.random().toString(36).substring(7)}</p>
```

---

## Future Enhancements

### Phase 1 (Post-Hackathon)
- [ ] Real Sui transactions
- [ ] Actual Walrus uploads
- [ ] Connect to smart contracts
- [ ] Real product images

### Phase 2
- [ ] Multiple product categories
- [ ] Search and filters
- [ ] Product details page
- [ ] Review browsing

### Phase 3
- [ ] Seller profiles
- [ ] Review verification
- [ ] Reputation system
- [ ] Dispute resolution

---

## Code Location

```
/app/marketplace/page.tsx       # Main simulation page
/app/sections/Hero.tsx          # Updated CTA button
/docs/features/                 # This documentation
  marketplace-simulation.md
```

---

## Troubleshooting

### "Connect Wallet First" Button

**Issue:** Can't purchase products

**Solution:** 
1. Install Sui wallet extension
2. Click WalletButton in header
3. Connect wallet
4. Refresh page

### Review Won't Submit

**Issue:** Submit button disabled

**Solution:**
- Fill in review title
- Fill in review content
- Both fields are required

### Navigation Issues

**Issue:** Can't return to products

**Solution:**
- Click "Try Again" button
- Or navigate to `/marketplace` manually

---

## Best Practices

### For Demonstration

1. **Start Connected**
   - Connect wallet before demo
   - Avoids authentication flow

2. **Prepare Script**
   - "I'll browse products..."
   - "Now I'll purchase this item..."
   - "Let me submit a review..."

3. **Highlight Features**
   - Point out blockchain integration
   - Mention immutability
   - Show transaction details

### For Development

1. **Keep It Simple**
   - Don't add real payments
   - Focus on review workflow
   - Simulate delays realistically

2. **Maintain Consistency**
   - Use same design system
   - Match dashboard styling
   - Keep animations smooth

---

## Resources

- [User Dashboard](user-dashboard.md)
- [Blockchain Integration](blockchain.md)
- [API Reference](../api/reviews.md)

---

**Ready to test?** → [Open Marketplace](/marketplace)

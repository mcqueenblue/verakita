# Tech Stack

Complete breakdown of all technologies used in Verakita.

---

## Frontend

### Core Framework

#### Next.js 15.0.3
**Purpose**: React framework with App Router

**Features Used:**
- App Router for file-based routing
- Server Components for performance
- API Routes for backend endpoints
- Image optimization
- Font optimization

**Why Next.js?**
- ✅ Excellent developer experience
- ✅ Built-in optimizations
- ✅ Server-side rendering
- ✅ Easy deployment

---

#### React 19.2.0
**Purpose**: UI library

**Features Used:**
- Functional components
- Hooks (useState, useEffect, useCallback)
- Context API
- Server Components (experimental)

---

#### TypeScript 5
**Purpose**: Type-safe JavaScript

**Benefits:**
- Catch errors at compile time
- Better IDE autocomplete
- Self-documenting code
- Refactoring confidence

---

### Styling

#### TailwindCSS 4
**Purpose**: Utility-first CSS framework

**Configuration:**
```typescript
// Custom colors, animations, utilities
theme: {
  extend: {
    colors: {
      purple: '#8b5cf6',
      blue: '#3b82f6',
      'dark-bg': '#0a0a0f',
      'dark-card': '#13131a',
    }
  }
}
```

**Why Tailwind?**
- ✅ Rapid development
- ✅ Consistent design
- ✅ Small bundle size (purged)
- ✅ No CSS conflicts

---

#### Shadcn UI
**Purpose**: Accessible component library

**Components Used:**
- Button
- Card
- Input
- Label
- Separator

**Why Shadcn?**
- ✅ Copy-paste components
- ✅ Full customization
- ✅ Radix UI primitives
- ✅ Accessible by default

---

### Animations

#### GSAP 3.13.0
**Purpose**: Professional-grade animations

**Features Used:**
- Timeline sequences
- ScrollTrigger plugin
- Ease functions
- Stagger effects

**Use Cases:**
- Landing page hero animations
- Section transitions
- Parallax effects

```typescript
gsap.from(element, {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
});
```

---

#### Framer Motion 12.23.24
**Purpose**: React animation library

**Features Used:**
- Layout animations
- Gesture animations
- Variants
- Exit animations

**Use Cases:**
- Dashboard page transitions
- Hover effects
- Modal animations

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
/>
```

---

#### Lenis 1.3.15
**Purpose**: Smooth scrolling

**Benefits:**
- Native-feeling scroll
- Performance optimized
- Customizable easing
- Mobile support

---

### UI Components

#### Lucide React 0.553.0
**Purpose**: Icon library

**Examples:**
```tsx
import { ArrowRight, Check, Star } from 'lucide-react';
```

**Why Lucide?**
- ✅ Tree-shakeable
- ✅ Consistent design
- ✅ TypeScript support
- ✅ 1000+ icons

---

## Blockchain

### Sui SDK

#### @mysten/sui.js 0.54.1
**Purpose**: Sui blockchain client

**Features:**
```typescript
import { SuiClient } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
```

**Use Cases:**
- Query blockchain data
- Create transactions
- Verify signatures

---

#### @mysten/wallet-kit 0.8.6
**Purpose**: Wallet connection UI

**Features:**
- Multi-wallet support
- Auto-detection
- Session management

**Supported Wallets:**
- Sui Wallet
- Ethos Wallet
- Suiet
- Martian
- Nightly

---

#### @mysten/wallet-adapter-react 11.0.0
**Purpose**: React wallet hooks

```typescript
import { useWallet } from '@mysten/wallet-kit';

const { address, connected } = useWallet();
```

---

### Storage

#### Walrus
**Purpose**: Decentralized storage

**Endpoints:**
- Publisher: `https://publisher.walrus-testnet.walrus.space`
- Aggregator: `https://aggregator.walrus-testnet.walrus.space`

**Operations:**
- Upload files
- Fetch by blob ID
- Store JSON data

---

## State Management

#### @tanstack/react-query 5.90.10
**Purpose**: Data fetching & caching

**Features:**
- Automatic caching
- Background refetching
- Optimistic updates
- Pagination support

```typescript
const { data, isLoading } = useQuery({
  queryKey: ['reviews'],
  queryFn: fetchReviews
});
```

---

## Utilities

#### clsx 2.1.1
**Purpose**: Conditional classNames

```typescript
clsx('base-class', {
  'active-class': isActive,
  'disabled-class': isDisabled
});
```

---

#### tailwind-merge 3.4.0
**Purpose**: Merge Tailwind classes intelligently

```typescript
import { cn } from '@/lib/utils';

cn('px-4 py-2', 'px-6') // → 'px-6 py-2'
```

---

## Development Tools

### Build Tools

- **PostCSS** - CSS processing
- **TypeScript** - Type checking
- **ESLint** - Code linting
- **Prettier** - Code formatting (optional)

### Package Manager

- **Bun** (recommended) or **npm**

---

## Runtime Environment

### Node.js Requirements
- **Minimum**: Node.js 18.x
- **Recommended**: Node.js 20.x or Bun

### Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Android

---

## Dependencies Summary

```json
{
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@mysten/sui.js": "^0.54.1",
    "@mysten/wallet-kit": "^0.8.6",
    "@tanstack/react-query": "^5.90.10",
    "framer-motion": "^12.23.24",
    "gsap": "^3.13.0",
    "lenis": "^1.3.15",
    "lucide-react": "^0.553.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "tailwindcss": "^4"
  }
}
```

---

## Version Compatibility

| Package | Minimum | Recommended | Notes |
|---------|---------|-------------|-------|
| Node.js | 18.x | 20.x | Required for Next.js 15 |
| React | 19.x | 19.2.0 | Uses latest features |
| Next.js | 15.x | 15.0.3 | App Router required |
| TypeScript | 5.x | 5.x | Latest stable |

---

## External Services

### Required
- **Sui RPC** - Blockchain connectivity
- **Walrus** - Storage endpoints

### Optional
- **Analytics** - Vercel Analytics
- **Monitoring** - Error tracking
- **CDN** - Asset delivery

---

## Next Steps

- [Project Structure](project-structure.md)
- [Design System](design-system.md)
- [Development Setup](../development/setup.md)

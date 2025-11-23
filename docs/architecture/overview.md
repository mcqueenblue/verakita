# Project Overview

## Architecture

Verakita is built with a **modern, scalable architecture** that separates concerns and enables independent scaling of different components.

---

## System Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────────┐   │
│  │  Landing   │  │    User    │  │       Admin         │   │
│  │   Page     │  │  Dashboard │  │     Dashboard       │   │
│  └────────────┘  └────────────┘  └─────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                     APPLICATION LAYER                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Next.js App Router                      │   │
│  │  ┌────────┐  ┌────────┐  ┌─────────┐  ┌──────────┐ │   │
│  │  │  Pages │  │  API   │  │ Actions │  │ Metadata │ │   │
│  │  └────────┘  └────────┘  └─────────┘  └──────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌──────────────────────┐      ┌──────────────────────┐
│   BLOCKCHAIN LAYER   │      │   STORAGE LAYER      │
│                      │      │                      │
│  ┌────────────────┐ │      │  ┌────────────────┐ │
│  │ Sui Blockchain │ │      │  │ Walrus Storage │ │
│  │                │ │      │  │                │ │
│  │ - Reviews      │ │      │  │ - Content      │ │
│  │ - Verification │ │      │  │ - Media Files  │ │
│  │ - Reputation   │ │      │  │ - Metadata     │ │
│  └────────────────┘ │      │  └────────────────┘ │
└──────────────────────┘      └──────────────────────┘
```

---

## Core Components

### 1. Frontend Application

Built with **Next.js 15** and **React 19**.

**Landing Page** (`/`)
- Marketing and information
- GSAP animations
- Lenis smooth scrolling
- Responsive design

**User Dashboard** (`/dashboard`)
- Review management
- Analytics
- Integrations
- Settings

**Admin Dashboard** (`/admin`)
- System monitoring
- API key management
- Logs viewer
- Configuration

### 2. API Layer

RESTful API built with Next.js API Routes.

**Endpoints:**
- `/api/reviews` - Review CRUD operations
- `/api/walrus` - Storage operations
- `/api/user` - User management
- `/api/sui` - Blockchain transactions

### 3. Blockchain Layer

**Sui Blockchain**
- Smart contract deployment
- Review storage (immutable)
- Transaction processing
- Cryptographic verification

**Features:**
- Permanent storage
- Transparent verification
- Gas-optimized transactions
- Multi-signature support

### 4. Storage Layer

**Walrus Distributed Storage**
- Decentralized file storage
- Content addressing
- High availability
- Censorship resistance

**Use Cases:**
- Review content
- User attachments
- Media files
- Metadata

---

## Data Flow

### Creating a Review

```
┌─────────┐       ┌──────────┐       ┌─────────┐       ┌──────────┐
│  User   │──────▶│ Frontend │──────▶│   API   │──────▶│ Walrus   │
│ Actions │       │   Form   │       │  Route  │       │ Storage  │
└─────────┘       └──────────┘       └─────────┘       └──────────┘
                                          │                   │
                                          │              ┌────▼────┐
                                          │              │ Blob ID │
                                          │              └────┬────┘
                                          ▼                   │
                                    ┌──────────┐             │
                                    │   Sui    │◀────────────┘
                                    │Blockchain│
                                    └──────────┘
                                          │
                                          ▼
                                    ┌──────────┐
                                    │   User   │
                                    │Dashboard │
                                    └──────────┘
```

### Reading Reviews

```
┌─────────┐       ┌──────────┐       ┌─────────┐       ┌──────────┐
│  User   │──────▶│ Frontend │──────▶│   API   │──────▶│   Sui    │
│ Request │       │Component │       │  Route  │       │Blockchain│
└─────────┘       └──────────┘       └─────────┘       └──────────┘
                                          ▲                   │
                                          │              ┌────▼────┐
                                          │              │Review ID│
                                          │              │Blob ID  │
                                          │              └────┬────┘
                                    ┌─────┴────┐             │
                                    │ Walrus   │◀────────────┘
                                    │ Storage  │
                                    └──────────┘
                                          │
                                          ▼
                                    ┌──────────┐
                                    │   User   │
                                    │  Screen  │
                                    └──────────┘
```

---

## Security Model

### Authentication
- Wallet-based authentication
- Signature verification
- Session management

### Authorization
- Role-based access control
- API key permissions
- Rate limiting

### Data Integrity
- Blockchain immutability
- Cryptographic proofs
- Content addressing

---

## Scalability Strategy

### Horizontal Scaling
- **Frontend**: Edge deployment (Vercel)
- **API**: Serverless functions
- **Blockchain**: Sui network scaling

### Caching
- **Client**: React Query
- **API**: Response caching
- **CDN**: Static assets

### Performance
- **Code splitting**: Automatic with Next.js
- **Image optimization**: Next.js Image
- **Bundle optimization**: Tree shaking

---

## Technology Decisions

### Why Next.js?
- Server-side rendering
- API routes built-in
- Excellent developer experience
- Production-ready optimizations

### Why Sui?
- High throughput
- Low latency
- Move programming language
- Active development

### Why Walrus?
- Decentralized storage
- Cost-effective
- Sui ecosystem integration
- High availability

### Why TypeScript?
- Type safety
- Better IDE support
- Fewer runtime errors
- Self-documenting code

---

## Next Steps

- [Tech Stack Details](tech-stack.md)
- [Project Structure](project-structure.md)
- [API Reference](../api/overview.md)

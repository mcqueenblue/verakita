# Verakita Documentation

## Trust Through Transparency

Welcome to Verakita - a blockchain-powered proof-of-review platform built on **Sui blockchain** and **Walrus storage**. This documentation will guide you through understanding, developing, and deploying Verakita.

---

## 🎯 What is Verakita?

Verakita is an anti-fake review protocol that provides:

- **Immutable Reviews** - Stored on blockchain, cannot be edited or deleted
- **Cryptographic Proofs** - Verifiable authenticity using blockchain technology
- **Decentralized Storage** - Content stored on Walrus for censorship resistance
- **Transparent System** - All reviews publicly accessible and verifiable

---

## 🚀 Quick Navigation

### For Developers
- [Quick Start Guide](quick-start.md) - Get up and running in 5 minutes
- [API Reference](api/overview.md) - Complete API documentation
- [Blockchain Integration](blockchain/sui-integration.md) - Sui & Walrus setup

### For Administrators
- [Admin Dashboard](admin/dashboard.md) - Manage your system
- [API Key Management](admin/api-keys.md) - Control access
- [System Settings](admin/settings.md) - Configure the platform

### For End Users
- [User Dashboard](features/user-dashboard.md) - Submit and manage reviews
- [Wallet Connection](blockchain/wallet-connection.md) - Connect your Sui wallet

---

## 📊 Key Features

### 🔐 Blockchain-Powered
- Reviews stored immutably on Sui blockchain
- Cryptographic verification for authenticity
- Transparent and publicly auditable

### 💾 Decentralized Storage
- Content stored on Walrus distributed storage
- Censorship-resistant
- High availability and durability

### 🎨 Modern UI/UX
- Beautiful landing page with GSAP animations
- Intuitive user dashboard
- Comprehensive admin panel

### 🔌 Developer-Friendly
- Complete REST API
- TypeScript SDK
- Extensive documentation

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────┐
│           Frontend (Next.js 15)             │
│  ┌──────────────┐      ┌─────────────────┐ │
│  │   Landing    │      │   Dashboards    │ │
│  │     Page     │      │  User │ Admin   │ │
│  └──────────────┘      └─────────────────┘ │
└─────────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
┌───────▼────────┐    ┌────────▼────────┐
│  Sui Blockchain│    │ Walrus Storage  │
│   (Reviews)    │    │   (Content)     │
└────────────────┘    └─────────────────┘
```

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Framework | Next.js 15 | React framework with App Router |
| Language | TypeScript | Type-safe development |
| Styling | TailwindCSS | Utility-first CSS |
| Blockchain | Sui | Review storage & verification |
| Storage | Walrus | Decentralized content storage |
| Animations | GSAP + Framer Motion | Smooth UX |
| State | React Query | Data fetching & caching |

---

## 📦 Project Components

### Frontend
- **Landing Page** - Marketing site with animations
- **User Dashboard** - Review management interface
- **Admin Dashboard** - System administration

### Backend
- **API Routes** - Next.js API endpoints
- **Blockchain Integration** - Sui SDK integration
- **Storage Layer** - Walrus client

### Infrastructure
- **Smart Contracts** - Sui Move contracts
- **Database** - Blockchain as database
- **Storage** - Walrus distributed storage

---

## 🎓 Learning Path

### Beginner
1. [Installation](installation.md)
2. [Quick Start](quick-start.md)
3. [User Dashboard Overview](features/user-dashboard.md)

### Intermediate
1. [Project Structure](architecture/project-structure.md)
2. [API Integration](api/overview.md)
3. [Wallet Connection](blockchain/wallet-connection.md)

### Advanced
1. [Smart Contract Development](blockchain/smart-contracts.md)
2. [Custom Components](components/ui-components.md)
3. [Production Deployment](deployment/production.md)

---

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📞 Support

- **Documentation**: You're reading it!
- **Issues**: [GitHub Issues](https://github.com/artomily/verakita/issues)
- **Discussions**: [GitHub Discussions](https://github.com/artomily/verakita/discussions)

---

## 📄 License

Verakita is released under the MIT License. See [LICENSE](../LICENSE) for details.

---

**Ready to get started?** → [Quick Start Guide](quick-start.md)

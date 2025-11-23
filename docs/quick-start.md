# Quick Start

Get Verakita up and running in **5 minutes**! ⚡

---

## Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 18+** or **Bun** installed
- ✅ **Git** installed
- ✅ A code editor (VS Code recommended)
- ✅ A Sui wallet (optional, for blockchain features)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/artomily/verakita.git
cd verakita
```

### 2. Install Dependencies

Using **Bun** (recommended):
```bash
bun install
```

Using **npm**:
```bash
npm install
```

### 3. Configure Environment

Copy the example environment file:
```bash
cp .env.example .env.local
```

The default configuration works for local development. For production, see [Environment Variables](deployment/environment.md).

### 4. Start Development Server

```bash
bun dev
# or
npm run dev
```

### 5. Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

You should see:
- **Landing Page** at `/`
- **User Dashboard** at `/dashboard`
- **Admin Panel** at `/admin`

---

## ✅ Verify Installation

### Check the Landing Page
1. Navigate to `http://localhost:3000`
2. You should see smooth animations and the hero section
3. Scroll down to see all sections

### Check the User Dashboard
1. Navigate to `http://localhost:3000/dashboard`
2. You should see the dashboard with sidebar
3. Try collapsing/expanding the sidebar

### Check the Admin Panel
1. Navigate to `http://localhost:3000/admin`
2. You should see system health status
3. Explore API Keys, Logs, and Settings

---

## 🎯 Next Steps

### For Users
→ [User Dashboard Guide](features/user-dashboard.md)

### For Developers
→ [Architecture Overview](architecture/overview.md)
→ [API Documentation](api/overview.md)

### For Administrators
→ [Admin Dashboard Guide](admin/dashboard.md)

---

## 🔧 Common Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Run linter |

---

## 🐛 Having Issues?

Check the [Troubleshooting Guide](troubleshooting/common-issues.md) or [FAQ](troubleshooting/faq.md).

Still stuck? [Open an issue](https://github.com/artomily/verakita/issues).

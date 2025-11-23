# Admin Dashboard Guide

Comprehensive guide for system administrators.

---

## Overview

The Admin Dashboard (`/admin`) is a dedicated interface for:

- ✅ System monitoring and health checks
- ✅ API key management
- ✅ Viewing system logs
- ✅ Configuring platform settings

**Access:** `https://verakita.com/admin`

---

## Dashboard Sections

### 1. Overview

**Purpose:** Real-time system health and metrics

**Features:**
- System health status (API, Sui, Walrus)
- Quick statistics (reviews, users, requests)
- Recent API activity
- Quick action shortcuts

**Metrics Displayed:**
- Total Reviews
- Active Users
- API Requests (24h)
- Response Time

---

### 2. API Keys

**Purpose:** Manage API access credentials

**Features:**
- ✅ Create new API keys
- ✅ Set permissions (read/write/delete)
- ✅ View usage statistics
- ✅ Revoke access
- ✅ Copy keys securely

**How to Create API Key:**

1. Click "Create New Key"
2. Enter key name
3. Select permissions
4. Click "Create"
5. Copy key immediately (won't be shown again)

**Security Best Practices:**
- Rotate keys every 90 days
- Use separate keys for dev/staging/prod
- Never commit keys to git
- Monitor usage regularly

---

### 3. System Logs

**Purpose:** Monitor and debug system activity

**Features:**
- Real-time log streaming
- Filter by level (Info, Warning, Error)
- Export logs (CSV, JSON)
- Search functionality

**Log Levels:**
- **Info** (Green) - Normal operations
- **Warning** (Yellow) - Potential issues
- **Error** (Red) - Critical failures

**Export Options:**
- Export as CSV
- Export as JSON
- Download last 24 hours

---

### 4. Settings

**Purpose:** Configure system parameters

#### General Settings
- System Name
- Admin Email
- Maintenance Mode toggle

#### Blockchain Configuration
- Sui Network selection (Mainnet/Testnet/Devnet)
- Review Package ID
- Auto Gas Management

#### Walrus Storage
- Publisher URL
- Aggregator URL
- Default storage duration (epochs)

#### API Rate Limiting
- Requests per minute
- Enable/disable rate limiting

#### Email Notifications
- System errors
- Daily summary
- Security alerts
- New API keys

---

## Common Tasks

### Monitoring System Health

1. Navigate to Admin Dashboard
2. Check status indicators:
   - ✅ Green = Healthy
   - ⚠️ Yellow = Warning
   - ❌ Red = Error
3. Review recent activity
4. Check response times

### Creating API Keys

```bash
# Example: Create production key
Name: "Production API Key"
Permissions: Read, Write
```

### Viewing Logs

1. Go to Logs page
2. Select filter (All/Info/Warning/Error)
3. Review logs in table
4. Click "View Details" for more info
5. Export if needed

### Configuring Settings

1. Navigate to Settings
2. Update desired fields
3. Toggle switches as needed
4. Click "Save Changes"
5. Confirm changes applied

---

## Maintenance Mode

**Purpose:** Temporarily disable public access

**How to Enable:**

1. Go to Settings > General Settings
2. Toggle "Maintenance Mode"
3. Click "Save Changes"

**Effects:**
- Public routes return maintenance page
- Admin panel remains accessible
- API returns 503 status

**Use Cases:**
- System upgrades
- Database maintenance
- Emergency fixes

---

## Troubleshooting

### High Error Rate

**Symptoms:**
- Many red logs
- Error count increasing

**Actions:**
1. Check logs for error messages
2. Review recent API activity
3. Check blockchain connection
4. Verify Walrus endpoints

### Slow Response Times

**Symptoms:**
- Response time > 500ms
- User complaints

**Actions:**
1. Check system resources
2. Review API request volume
3. Check rate limiting settings
4. Monitor blockchain latency

### API Key Issues

**Symptoms:**
- Authentication failures
- Permission errors

**Actions:**
1. Verify key is active
2. Check permissions
3. Confirm key hasn't expired
4. Review usage limits

---

## Security

### Access Control

**Who has access:**
- System administrators only
- Separate from user dashboard
- Role-based permissions

**Authentication:**
- Wallet-based auth (planned)
- Session management
- Activity logging

### Audit Trail

**Tracked Events:**
- API key creation/deletion
- Settings changes
- System access
- Critical operations

---

## Notifications

### Email Alerts

Configure in Settings > Email Notifications:

- **System Errors** - Critical failures
- **Daily Summary** - Activity report
- **Security Alerts** - Suspicious activity
- **New API Keys** - Key creation

### Alert Thresholds

- Error rate > 5%
- Response time > 1s
- API requests > 10,000/hour
- Failed logins > 5/hour

---

## Best Practices

### Daily Tasks
- ✅ Check system health
- ✅ Review error logs
- ✅ Monitor API usage

### Weekly Tasks
- ✅ Review all logs
- ✅ Check API key usage
- ✅ Verify backups

### Monthly Tasks
- ✅ Rotate API keys
- ✅ Review settings
- ✅ Update configurations

---

## FAQ

**Q: How do I reset an API key?**
A: Revoke the old key and create a new one.

**Q: Can I recover a deleted API key?**
A: No, API keys cannot be recovered. Create a new one.

**Q: How long are logs stored?**
A: Logs are stored for 30 days by default.

**Q: Can I customize the dashboard?**
A: Not yet, but it's on the roadmap.

---

## Next Steps

- [API Key Management](api-keys.md)
- [System Logs](logs.md)
- [Settings Configuration](settings.md)

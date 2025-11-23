# API Overview

Complete API reference for Verakita platform.

---

## Base URL

**Local Development:**
```
http://localhost:3000/api
```

**Production:**
```
https://verakita.com/api
```

---

## Authentication

### API Key Authentication

Include your API key in the request headers:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://verakita.com/api/reviews
```

### Wallet Signature Authentication

For user-specific operations:

```typescript
{
  "walletAddress": "0x...",
  "signature": "0x...",
  "message": "..."
}
```

---

## Response Format

### Success Response

```json
{
  "success": true,
  "data": {
    // Response data here
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message here",
  "code": "ERROR_CODE"
}
```

---

## Rate Limiting

**Default Limits:**
- 100 requests per minute per API key
- 1000 requests per hour

**Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000
```

---

## Endpoints Overview

### Reviews
- `GET /api/reviews` - List reviews
- `POST /api/reviews` - Create review
- `GET /api/reviews/:id` - Get review

### Walrus Storage
- `POST /api/walrus/upload` - Upload content
- `GET /api/walrus/:blobId` - Fetch content

### User
- `GET /api/user/profile` - Get profile
- `PATCH /api/user/profile` - Update profile

### Blockchain
- `POST /api/sui/transaction` - Create transaction

---

## Common Parameters

### Pagination

```
?limit=10&offset=0
```

### Filtering

```
?target=0x123&rating=5
```

### Sorting

```
?sort=createdAt&order=desc
```

---

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| `INVALID_REQUEST` | 400 | Invalid request parameters |
| `UNAUTHORIZED` | 401 | Missing or invalid authentication |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMITED` | 429 | Too many requests |
| `SERVER_ERROR` | 500 | Internal server error |

---

## SDKs & Libraries

### TypeScript/JavaScript

```bash
npm install @verakita/sdk
```

```typescript
import { VerakitaClient } from '@verakita/sdk';

const client = new VerakitaClient({
  apiKey: 'your-api-key'
});

const reviews = await client.reviews.list();
```

---

## Webhooks

Subscribe to events:

```json
POST /api/webhooks
{
  "url": "https://your-site.com/webhook",
  "events": ["review.created", "review.verified"]
}
```

**Event Types:**
- `review.created`
- `review.verified`
- `user.registered`

---

## Next Steps

- [Reviews API](reviews.md)
- [Walrus API](walrus.md)
- [User API](user.md)
- [Authentication](authentication.md)

# Project Structure Guide

## 📁 Directory Overview

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (server-only)
│   ├── courses/           # Course pages
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # Radix UI primitive components
├── hooks/                # Custom React hooks
├── integrations/         # External service integrations
│   └── supabase/        # Supabase configuration & types
├── lib/                  # Utilities & helpers
│   ├── api-response.ts   # API response types & helpers
│   ├── api-error-handler.ts # Error handling middleware
│   └── middleware.ts     # Middleware utilities
└── utils/               # Common utility functions
    └── common.ts        # Shared helpers
```

## 🔒 Security Standards

### API Routes Pattern
All API routes follow a standardized response format:

```typescript
import { createSuccessResponse, createErrorResponse, HTTP_STATUS } from '@/lib/api-response'
import { withErrorHandler } from '@/lib/api-error-handler'

export const GET = withErrorHandler(async (request) => {
  // Your logic here
  return Response.json(createSuccessResponse(data), { status: HTTP_STATUS.OK })
})
```

### Headers Security
- `X-Frame-Options: SAMEORIGIN` - Prevent clickjacking
- `Content-Security-Policy: frame-ancestors 'self'` - Restrict frame embedding
- `X-Content-Type-Options: nosniff` - Prevent MIME type sniffing
- `X-XSS-Protection: 1; mode=block` - Enable XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Control referrer information

## 🎨 Component Organization

- **`components/`** - All React components
- **`components/ui/`** - Radix UI primitives (auto-generated)
- **Naming**: Use PascalCase for components

## 🔧 Environment Setup

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

## 📚 Adding Features

### Create New API Route
```typescript
// src/app/api/[resource]/route.ts
import { createSuccessResponse } from '@/lib/api-response'

export async function GET(request: Request) {
  const data = { /* your data */ }
  return Response.json(createSuccessResponse(data))
}
```

### Create New Page
```typescript
// src/app/[feature]/page.tsx
export default function Page() {
  return <div>Your page</div>
}
```

### Create Custom Hook
```typescript
// src/hooks/useCustom.ts
export function useCustom() {
  // Your hook logic
}
```

## ✅ Quality Checks

- **ESLint**: Enabled during builds
- **TypeScript**: Strict mode enabled
- **No console errors** expected in production

## 📝 Best Practices

1. Use TypeScript for all files
2. Always validate user input on server-side
3. Use Supabase Admin client for privileged operations
4. Implement proper error handling with standard response format
5. Document complex functions with JSDoc comments

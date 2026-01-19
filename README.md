# Kali Linux Academy

[![Netlify Status](https://api.netlify.com/api/v1/badges/678c92ac-82dd-45b6-841f-f69eeb0d9b0c/deploy-status)](https://app.netlify.com/projects/ani-dianda/deploys)

Production-ready full-stack Next.js application for learning cybersecurity with Kali Linux, integrated with Supabase, TailwindCSS 4, and Radix UI.

## 🚀 Live Demo

Visit the deployed site: **[ani-dianda.netlify.app](https://ani-dianda.netlify.app)**

## Getting Started

### Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## 📚 Features

- **Courses**: Introduction à Kali Linux, Network Testing, WPA2 Cracking, WPA3, Exercises
- **Authentication**: Supabase integration with login/register
- **Dark/Light Theme**: System-aware theme switching with next-themes
- **Responsive Design**: Mobile-first UI with TailwindCSS 4
- **Security Headers**: Comprehensive security headers configured
- **Type-Safe API**: Standardized API response patterns with TypeScript

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── hooks/           # Custom React hooks
├── integrations/    # Supabase configuration
├── lib/             # Utilities & helpers
└── utils/           # Shared functions
```

## 🔒 Security

- ESLint & TypeScript strict mode enabled
- Security headers (CSP, X-Frame-Options, XSS protection)
- Server-side API route protection
- Environment variables validation

## 📝 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Radix UI Documentation](https://radix-ui.com)

## 📄 License

MIT

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

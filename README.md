# HPS Logistics & Delivery Website

Professional static portfolio website built from the [Figma design](https://www.figma.com/design/eqh3HSOKgO0vw3TIfig6bQ/HPS).

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Inter font (design kit)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Configuration

Copy `.env.example` to `.env.local` and set your API endpoints:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Base URL for all APIs |
| `NEXT_PUBLIC_LOGIN_API` | Login endpoint |
| `NEXT_PUBLIC_TRACKING_API` | Shipment tracking endpoint |
| `NEXT_PUBLIC_TRACKING_API_MOCK` | `true` = dummy tracking data (default), `false` = real API |
| `NEXT_PUBLIC_SHIPMENT_API` | Create shipment base path |
| `NEXT_PUBLIC_SHIPMENT_API_MOCK` | `true` = dummy data (default), `false` = real API |

### Create Shipment — mock vs real API

By default, Create Shipment uses **mock data** (`NEXT_PUBLIC_SHIPMENT_API_MOCK=true`). No backend is required for local development.

When your backend is ready, set in `.env.local`:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
NEXT_PUBLIC_SHIPMENT_API=/shipments
NEXT_PUBLIC_SHIPMENT_API_MOCK=false
```

Expected real API endpoints (relative to `NEXT_PUBLIC_API_BASE_URL`):

| Method | Path | Body |
|---|---|---|
| POST | `{SHIPMENT_API}/send-otp` | `{ email }` |
| POST | `{SHIPMENT_API}/verify-otp` | `{ email, otp }` |
| POST | `{SHIPMENT_API}/calculate` | `{ recipient, order }` |
| POST | `{SHIPMENT_API}` | Full `ShipmentPayload` (sender, recipient, order, shipping) |

Mock mode demo OTP: `123456` (or any 4+ digit code).

## Phase 1 Pages

- `/` — Home
- `/login` — Login (API integrated)
- `/track` — Track Shipment (API integrated)
- `/shipment/create/step-1` … `step-4` — Create Shipment wizard (API integrated)
- `/shipment/success` — Shipment created confirmation (AWB from API / mock)
- `/services` — Services index + mega menu links
- Shared Header (mega menu) + Footer on all pages

## Design Tokens

Colors and typography follow the HPS Design System & UI Kit:

- Primary Navy `#1E3192`
- Secondary Cyan `#39A6EF`
- Action Red `#FF3B31`
- Dark Text `#151B3D`
- Muted Text `#5C6686`
- Background Alt `#F4F7FB`

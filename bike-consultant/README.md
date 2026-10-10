# Motora — Bike Consultant (Clerk edition)

This version preserves the original Motora UI and adds Clerk authentication only. The separate Admin/Customer login buttons are not shown.

## Run locally
1. Install Node.js (LTS).
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Add your Clerk Publishable Key to `VITE_CLERK_PUBLISHABLE_KEY`.
5. Run `npm run dev`.

## Clerk setup
- Create an application at https://dashboard.clerk.com and enable sign-in methods.
- Set the allowed development URL to your Vite URL (usually `http://localhost:5173`).
- For the admin account, open Clerk Dashboard → Users → select the user → Public metadata and set `{ "role": "admin" }`.
- Everyone else is treated as a customer.
- Optional: set `VITE_CLERK_ADMIN_EMAILS` to a comma-separated list of admin email addresses for local/demo convenience.

## Important
Bike listings/photos remain frontend-demo data in browser storage and DummyJSON write requests are simulated. Client-side role checks are for UI behavior only; production authorization requires a trusted backend/API. Never put a Clerk Secret Key in Vite client code.

-- =============================================================================
-- BEANTOWN AUDIO RENTALS — SUPABASE DATABASE SETUP (NO LOGIN REQUIRED)
-- Paste this into Supabase Dashboard -> SQL Editor -> New Query -> Run
-- Project: https://kaalrpvxvvjnvqjqkevt.supabase.co
-- =============================================================================

-- 1. Isolated Anonymous Guest Carts ("My setup")
create table if not exists public.guest_carts (
  session_id text primary key,
  items jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.guest_carts enable row level security;

-- Lock each row strictly to the visitor who owns the x-session-id header
drop policy if exists "Guest can read own cart" on public.guest_carts;
create policy "Guest can read own cart"
  on public.guest_carts for select
  to anon
  using (session_id = coalesce(current_setting('request.headers', true)::json ->> 'x-session-id', ''));

drop policy if exists "Guest can insert own cart" on public.guest_carts;
create policy "Guest can insert own cart"
  on public.guest_carts for insert
  to anon
  with check (session_id = coalesce(current_setting('request.headers', true)::json ->> 'x-session-id', ''));

drop policy if exists "Guest can update own cart" on public.guest_carts;
create policy "Guest can update own cart"
  on public.guest_carts for update
  to anon
  using (session_id = coalesce(current_setting('request.headers', true)::json ->> 'x-session-id', ''))
  with check (session_id = coalesce(current_setting('request.headers', true)::json ->> 'x-session-id', ''));

drop policy if exists "Guest can delete own cart" on public.guest_carts;
create policy "Guest can delete own cart"
  on public.guest_carts for delete
  to anon
  using (session_id = coalesce(current_setting('request.headers', true)::json ->> 'x-session-id', ''));

-- 2. Submitted Quote Requests
create table if not exists public.quote_requests (
  id bigint generated always as identity primary key,
  quote_id text,
  session_id text,
  customer_name text,
  customer_email text,
  customer_phone text,
  event_type text,
  event_date text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.quote_requests enable row level security;

drop policy if exists "Guest can submit quote request" on public.quote_requests;
create policy "Guest can submit quote request"
  on public.quote_requests for insert
  to anon
  with check (true);

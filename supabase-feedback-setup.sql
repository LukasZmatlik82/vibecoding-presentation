-- Run this in Supabase: SQL Editor → New query → Paste → Run
-- Then: Database → Replication → turn on for table `feedback_messages` (Publication: supabase_realtime)

create table if not exists public.feedback_messages (
  id uuid primary key default gen_random_uuid(),
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.feedback_messages enable row level security;

-- Workshop wall: anyone with the app + anon key can read/write (use an obscure project for public sessions)
create policy "feedback_select" on public.feedback_messages for select using (true);
create policy "feedback_insert" on public.feedback_messages for insert with check (true);
create policy "feedback_delete" on public.feedback_messages for delete using (true);

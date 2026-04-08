import { supabase } from './supabase'

export type FeedbackRow = {
  id: string
  body: string
  created_at: string
}

export function rowToDisplay(row: FeedbackRow) {
  const d = new Date(row.created_at)
  const h = d.getHours().toString().padStart(2, '0')
  const m = d.getMinutes().toString().padStart(2, '0')
  return {
    id: row.id,
    text: row.body,
    timestamp: `${h}:${m}`,
  }
}

export async function fetchFeedbackMessages(): Promise<FeedbackRow[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('feedback_messages')
    .select('id, body, created_at')
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data ?? []) as FeedbackRow[]
}

export async function insertFeedbackMessage(body: string) {
  if (!supabase) throw new Error('Supabase not configured')
  const { data, error } = await supabase
    .from('feedback_messages')
    .insert({ body })
    .select('id, body, created_at')
    .single()
  if (error) throw error
  return data as FeedbackRow
}

export async function deleteAllFeedbackMessages() {
  if (!supabase) throw new Error('Supabase not configured')
  const { error } = await supabase
    .from('feedback_messages')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000')
  if (error) throw error
}

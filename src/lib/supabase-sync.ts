import { supabase } from '@/integrations/supabase/client'

export async function loadProjectsFromSupabase(): Promise<Record<string, unknown>[]> {
  const { data, error } = await supabase
    .from('cms_content')
    .select('section_key, content')
    .order('sort_order', { ascending: true })
  if (error) return []
  return (data || []).map((row) => ({ id: row.section_key, ...row.content }))
}

export async function saveProjectToSupabase(id: string, config: unknown): Promise<void> {
  await supabase.from('cms_content').upsert(
    { section_key: `openpage_project_${id}`, section_label: `OpenPage Project ${id}`, content: { config } },
    { onConflict: 'section_key' }
  )
}

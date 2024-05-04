import type { Tables } from "$lib/database-types";
import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("fridge").select('*').returns<Array<Tables<'fridge'>>>();
  console.log(data);
  return {
    fridge: data ?? [],
  };
}
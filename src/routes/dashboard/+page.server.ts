import type { Tables } from "$lib/database-types";
import { supabase } from "$lib/supabaseClient";
import type { SupabaseClient } from "@supabase/supabase-js";

async function getAllPhotos(supabase: SupabaseClient) {
  const { data, error } = await supabase
    .storage
    .from('fridge-photos')
    .list(undefined, {
      limit: 100,
      offset: 0,
      // sortBy: { column: 'id', order: 'asc' },
    });
  return { data, error };
}

export async function load() {
  const { data } = await supabase.from("fridge").select('*').returns<Array<Tables<'fridge'>>>();
  const x = await getAllPhotos(supabase);
  const xdata = x.data?.map(a => {
    return {
      url: supabase.storage.from('fridge-photos').getPublicUrl(a.name).data.publicUrl,
      id: Number.parseInt(a.name.split('.')[0])
    };
  });
  // console.log(x);
  interface PhotoData {
    url: string,
    id: number
  }
  return {
    fridge: data ?? [],
    photos: xdata as PhotoData[]
  };
}
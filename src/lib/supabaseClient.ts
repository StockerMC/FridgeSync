import { createClient } from '@supabase/supabase-js';
import { SECRET_SUPABASE_PROJECT_URL, SECRET_SUPABASE_ANON_KEY } from '$env/static/private';
import type { Database } from './database-types';

export const supabase = createClient<Database>(SECRET_SUPABASE_PROJECT_URL, SECRET_SUPABASE_ANON_KEY);

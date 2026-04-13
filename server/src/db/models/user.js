import supabase from '../../../supabase.js';

// Create user OR update user if email already exists in DB
export async function upsertUser({
  firstname,
  lastname,
  email,
  role,
  instagram,
  linkedin,
  website,
}) {
  const { data, error } = await supabase
    .from('users')
    .insert({ firstname, lastname, email, role, instagram, linkedin, website })
    .select()
    .single();
  return { data, error };
}

export async function getUserById(id) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function getUserByEmail(email) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();
  return { data, error };
}

export async function getUsersByRole(role) {
    const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('role', role)
    return { data, error };
}

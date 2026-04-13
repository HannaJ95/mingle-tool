import supabase from "../../../supabase.js";

export async function getAvailableCards() {
  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("is_available", true);
  if (error || !data || data.length === 0) return { data: null, error };
  return { data, error: null };
}

export async function markCardUnavailable(cardId) {
  const { data, error } = await supabase
    .from("cards")
    .update({ is_available: false })
    .eq("id", cardId);
  return { data, error };
}

export async function markCardAvailable(cardId) {
  const { data, error } = await supabase
    .from("cards")
    .update({ is_available: true })
    .eq("id", cardId);
  return { data, error };
}

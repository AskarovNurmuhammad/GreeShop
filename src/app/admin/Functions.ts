import { Order, Product, User } from "../lib/definitions";
import { supabase } from "../supabaseClient";

export async function getProducts() {
  const { data } = await supabase.from("product").select("*");
  return data;
}

export async function getUsers() {
  const { data } = await supabase.from("user").select("*");
  return data;
}

export async function getCotegories() {
  const { data } = await supabase.from("cotegory").select("*");
  return data;
}

export async function getOrders() {
  const { data } = await supabase.from("orders").select("*");
  return data;
}

export async function deleteCotegory(id: number) {
  supabase
    .from("cotegory")
    .delete()
    .eq("id", id)
    .then(() => {
      console.log("o'chirildi");
    });
}

export async function editCotegories(data: {
  id: number;
  name: string;
  status: string;
}) {
  supabase
    .from("cotegory")
    .update([data])
    .eq("id", data.id)
    .then(() => {
      console.log("yangilandi");
    });
}

export async function postProduct(data: Product) {
  return supabase.from("product").insert([data]);
}

export async function deleteProduct(id: number) {
  supabase
    .from("product")
    .delete()
    .eq("id", id)
    .then(() => {
      console.log("o'chirildi");
    });
}

export async function editProduct(data: Product) {
  return supabase.from("product").update([data]).eq("id", data.id);
}

export function addUserToSupabase(data: User) {
  return supabase.from("user").insert([data]);
}

export async function createOrder(data: Order) {
  return supabase.from("orders").insert([data]);
}

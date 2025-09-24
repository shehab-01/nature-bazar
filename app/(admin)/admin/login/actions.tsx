"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabaseServer";
import { createSession, deleteSession } from "@/lib/sessions";

export async function login(formData: FormData) {
  // console.log("From login", formData);
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data_ = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data } = await supabase.auth.signInWithPassword(data_);

  console.log(data.user);
  const userId = data.user?.id;

  if (!userId) {
    // return { error: "No user found" };
    console.log("User not found");
  }

  // fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role, approve_yn")
    .eq("id", userId)
    .single();

  if (profileError) {
    console.error("Profile fetch error:", profileError.message);
    // return { error: profileError.message };
  }

  // creating cookie
  console.log("User Profile:", profile);
  const id = data.user?.id;
  const userRole = profile?.role;
  const approve_yn = profile?.approve_yn;
  // create session and cookie
  await createSession(id, userRole, approve_yn);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/admin/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  await deleteSession();
  redirect("/admin/login");
}

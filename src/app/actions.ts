"use server";

import { getSession } from "@/lib/auth";
import { deleteUser } from "@/services/users";
import { redirect } from "next/navigation";

export async function deleteAccountAction() {
  const session = await getSession();
  if (!session) {
    throw new Error("Not logged in"); // or redirect to login page
  }

  await deleteUser(session.user.id);

  redirect("/dashboard");
}

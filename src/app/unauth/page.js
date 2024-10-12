import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function unAuth() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <h1 className="text-center text-3xl font-bold p-10">
      You are not logged in
    </h1>
  );
}

export default unAuth;

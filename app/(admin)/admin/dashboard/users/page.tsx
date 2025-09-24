// import MyAgGrid from "@/components/MyGrid";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/sessions";
import UserGrid from "./UserGrid";

export default async function Home() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  return (
    <div className="min-w-screen">
      <div className="p-10">
        <UserGrid isAdmin={session?.userRole === "admin"} />
      </div>
    </div>
  );
}

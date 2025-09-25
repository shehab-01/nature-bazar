// import MyAgGrid from "@/components/MyGrid";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/sessions";
import ProductGrid from "./ProductGrid";
export default async function Home() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  console.log(session);

  return (
    <div className="min-w-screen">
      <div className="p-10">
        <ProductGrid isAdmin={session?.userRole === "admin"} />
      </div>
    </div>
  );
}

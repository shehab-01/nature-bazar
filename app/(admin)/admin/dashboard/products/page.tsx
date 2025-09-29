// import MyAgGrid from "@/components/MyGrid";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/sessions";
import ProductGrid from "./ProductGrid";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  console.log(session);

  return (
    <div className="min-w-screen">
      <div className="w-[85%] pl-5">
        <div className="flex justify-end py-5">
          <a href="/admin/dashboard/products/add-new-product">
            <Button>Add new Product</Button>
          </a>
        </div>
        <div>
          <ProductGrid isAdmin={session?.userRole === "admin"} />
        </div>
      </div>
    </div>
  );
}

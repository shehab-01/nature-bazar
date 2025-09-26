import { useState } from "react";
import { ICellRendererParams } from "ag-grid-community";
import { Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface userData {
  id: string;
  product_name: string;
  product_name_bn: string;
  price: string;
  discount_price: string;
  discount_rate: string;
  created_by_nm: string;
  created_at: string;
  catagory: string;
  active_yn: string;
}
const ProductModal = (params: ICellRendererParams) => {
  const [openModal, setOpenModal] = useState(false);

  const [productData, setProductData] = useState<userData>({
    id: "",
    product_name: "",
    product_name_bn: "",
    price: "",
    discount_price: "",
    discount_rate: "",
    created_by_nm: "",
    created_at: "",
    catagory: "",
    active_yn: "",
  });

  const handleClick = () => {
    console.log("Full row data:", params.data);

    // setUserData(()=> {...params.data})
    setProductData({
      ...params.data,
    });

    setOpenModal(true);
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <Settings
        className="h-5 w-5 text-center cursor-pointer"
        onClick={handleClick}
      />

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="min-w-3xl">
          <DialogHeader>
            <DialogTitle>Modify User </DialogTitle>
            <DialogDescription>
              Change user role, Approve or Reject user new user.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* Row 1: Name */}
            <div className="flex items-center gap-4">
              <Label htmlFor="name-1" className="w-24 text-right">
                Name
              </Label>
              <Input
                id="name-1"
                name="name"
                // defaultValue={productData?.name ?? ""}
                className="flex-1"
              />
            </div>

            {/* Row 2: phonr */}
            <div className="flex items-center gap-4">
              <Label htmlFor="role-1" className="w-24 text-right">
                Phone
              </Label>
              <Input
                id="phone-1"
                name="phone"
                // defaultValue={productData?.phone ?? ""}
                className="flex-1"
              />
              {/* or use a <Select> if roles are predefined */}
            </div>
            {/* Row 3: Role */}
            <div className="flex items-center gap-4">
              <Label htmlFor="role-1" className="w-24 text-right">
                Role
              </Label>
              {/* defaultValue={productData?.active_yn ?? ""} */}
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Assign role " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Row 4: Approve */}
            <div className="flex items-center gap-4">
              <Label htmlFor="role-1" className="w-24 text-right">
                Approve
              </Label>
              {/* defaultValue={productData?.active_yn ? "true" : "false"} */}
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="true">Approved</SelectItem>
                    <SelectItem value="false">Rejected</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="destructive">Delete User</Button>
            <Button onClick={() => setOpenModal(false)} className="bg-blue-500">
              Update User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModal;

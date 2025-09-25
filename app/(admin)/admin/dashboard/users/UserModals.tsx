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
  name: string;
  phone: string;
  role: string;
  approve_yn: string;
}
const UserModals = (params: ICellRendererParams & { isAdmin: boolean }) => {
  const [notAdminOpen, setNotAdminOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const [userData, setUserData] = useState<userData>({
    name: "",
    phone: "",
    role: "",
    approve_yn: "",
  });

  const handleClick = () => {
    console.log("Full row data:", params.data);
    console.log("isAdmin:", params.isAdmin);

    // setUserData(()=> {...params.data})
    setUserData({
      ...params.data,
    });

    const isAdmin = params.isAdmin;
    if (isAdmin) {
      setAdminOpen(true);
    } else {
      setNotAdminOpen(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-full">
      <Settings
        className="h-5 w-5 text-center cursor-pointer"
        onClick={handleClick}
      />

      <Dialog open={notAdminOpen} onOpenChange={setNotAdminOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Only Admin can modify users </DialogTitle>
            <DialogDescription>Please login as a Admin</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={() => setNotAdminOpen(false)}>Ok</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={adminOpen} onOpenChange={setAdminOpen}>
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
                defaultValue={userData?.name ?? ""}
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
                defaultValue={userData?.phone ?? ""}
                className="flex-1"
              />
              {/* or use a <Select> if roles are predefined */}
            </div>
            {/* Row 3: Role */}
            <div className="flex items-center gap-4">
              <Label htmlFor="role-1" className="w-24 text-right">
                Role
              </Label>
              <Select defaultValue={userData?.role ?? ""}>
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
              <Select defaultValue={userData?.approve_yn ? "true" : "false"}>
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
            <Button onClick={() => setAdminOpen(false)} className="bg-blue-500">
              Update User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserModals;

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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modify User </DialogTitle>
            <DialogDescription>Users</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setAdminOpen(false)}>Ok</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserModals;

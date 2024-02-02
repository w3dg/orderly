"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const DeleteButton = ({ id }: { id: number }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const deleteProduct = async (id: number) => {
    console.log("id of the item ", id);
    try {
      const { data } = await axios.delete(`/api/products?pid=${id}`);
      console.log("delete", data);
      // TODO: Refresh page after delete

      // router.replace("/dashboard/products");
      location.reload();
    } catch (error) {
      console.log(error);
      toast("failed to delete");
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="p-2 text-red-600 ">
        <Button className="text-red-600 bg-transparent hover:bg-red-200/60">
          <Trash2 size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure to delete?</DialogTitle>
          <DialogDescription>This will delete the item from the store.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"destructive"} onClick={() => deleteProduct(id)}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteButton;

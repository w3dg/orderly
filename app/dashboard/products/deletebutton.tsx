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
import { Trash2 } from "lucide-react";

const DeleteButton = ({ id }: { id: number }) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="p-2 text-red-600 bg-transparent hover:bg-red-200">
        <Button className="text-red-600 hover:bg-red-200">
          <Trash2 size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure to delete?</DialogTitle>
          <DialogDescription>This will delete the item from the store.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {/* form */}
          <Button variant={"destructive"}>Delete {id}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteButton;

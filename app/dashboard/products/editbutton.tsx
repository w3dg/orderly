"use client";

import { ProductSchema } from "@/app/validators/validator";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit2 } from "lucide-react";

const DeleteButton = ({ id, product }: { id: number; product: ProductSchema }) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="p-2 text-blue-600 bg-transparent hover:bg-blue-200">
        <Button className="text-blue-600 hover:bg-blue-00">
          <Edit2 size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editing Product</DialogTitle>
          <DialogDescription>Make changes and then submit to reflect your changes</DialogDescription>
        </DialogHeader>
        <form action="">
          <div>
            <Label>Product Name</Label>
            <Input defaultValue={product.name} />
          </div>
          <div>
            <Label>Description</Label>
            <Input defaultValue={product.desc} />
          </div>
          <div>
            <Label>Product Summary</Label>
            <Input defaultValue={product.summary} />
          </div>
          <div>
            <Label>Cost Price</Label>
            <Input defaultValue={product.costPrice} />
          </div>
          <div>
            <Label>Selling Price</Label>
            <Input defaultValue={product.sellingPrice} />
          </div>
          <div>
            <Label>Featured</Label>
            <Input defaultValue={product.isFeatured.toString()} />
          </div>
          <DialogFooter>
            <Button className="bg-blue-600 hover:bg-blue-400">Save Edit {id}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteButton;

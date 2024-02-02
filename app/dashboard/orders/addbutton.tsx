"use client";

import { PlusCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import axios from "axios";

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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddButton = () => {
  const [productId, setProductid] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();

    const formData = {
      quantity,
    };

    try {
      const { data } = await axios.post(`http://localhost:3000/api/orders?productid=${productId}`, formData);
      console.log("Form data posted", formData);
      console.log(data);
      location.reload();
    } catch (error) {
      console.log(error);
      toast("Failed to add order. Supply valid details");
    }
    setOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="p-2 my-2 bg-orange-700 bg hover:bg-orange-500">
        <Button className="text-white gap-2">
          <PlusCircle size={24} />
          Add Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new order</DialogTitle>
          <DialogDescription>Enter details for the order</DialogDescription>
        </DialogHeader>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div>
            <Label>Product Id for the product to order</Label>
            <Input
              name="order"
              defaultValue={productId}
              placeholder="00"
              type="number"
              required
              onChange={(e) => setProductid(isNaN(Number(e.target.value)) ? 0 : Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Product Id for the product to order</Label>
            <Input
              name="order"
              defaultValue={productId}
              placeholder="00"
              type="number"
              required
              onChange={(e) => setQuantity(isNaN(Number(e.target.value)) ? 0 : Number(e.target.value))}
            />
          </div>
          <DialogFooter>
            {/* add backend logic to stop invalid product ids - currently not present */}
            <Button type="submit" className="bg-blue-600 hover:bg-blue-400 text-white">
              Add Order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddButton;

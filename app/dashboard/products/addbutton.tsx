"use client";

import { PlusCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import axios from "axios";

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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddButton = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSummary, setProductSummary] = useState("");
  const [costPrice, setCostPrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [featured, setFeatured] = useState(false);

  const [open, setOpen] = useState(false);

  // TODO: category id
  const categoryid = 2;

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();

    const formData = {
      name: productName,
      desc: productDescription,
      summary: productSummary,
      url: imageUrl,
      sellingPrice,
      costPrice,
      isFeatured: featured,
    };

    try {
      const { data } = await axios.post(`http://localhost:3000/api/products?categoryid=${categoryid}`, formData);
      console.log("Form data posted", formData);
      console.log(data);
      location.reload();
    } catch (error) {
      console.log(error);
      toast("Failed to add product. Supply valid details");
    }
    setOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="p-2 my-2 bg-amber-600 bg hover:bg-amber-400">
        <Button className="text-white gap-2">
          <PlusCircle size={24} />
          Add Item
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new Product</DialogTitle>
          <DialogDescription>Enter details for the new product</DialogDescription>
        </DialogHeader>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div>
            <Label>Product Name</Label>
            <Input
              name="name"
              defaultValue={productName}
              placeholder="Product name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <Label>Product Description</Label>
            <Input
              name="desc"
              defaultValue={productDescription}
              placeholder="Product Description"
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div>
            <Label>Product Summary</Label>
            <Input
              name="summary"
              placeholder="Product summary"
              defaultValue={productSummary}
              onChange={(e) => setProductSummary(e.target.value)}
            />
          </div>
          <div>
            <Label>Product Image URL</Label>
            <Input
              name="url"
              placeholder="https://unsplash.it/500/500"
              defaultValue={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <Label>Cost Price</Label>
            <Input name="costPrice" defaultValue={costPrice} onChange={(e) => setCostPrice(Number(e.target.value))} />
          </div>
          <div>
            <Label>Selling Price</Label>
            <Input
              name="sellingPrice"
              defaultValue={sellingPrice}
              onChange={(e) => setSellingPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Featured</Label>
            <Input
              name="isFeatured"
              defaultValue={featured ? "true" : "false"}
              onChange={(e) => setFeatured(e.target.value === "true" ? true : false)}
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-400 text-white">
              Add Item
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddButton;

"use client";

import { Edit2 } from "lucide-react";
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

const EditButton = ({ id, product }: { id: number; product: ProductSchema }) => {
  const [productName, setProductName] = useState(product.name);
  const [productDescription, setProductDescription] = useState(product.desc);
  const [productSummary, setProductSummary] = useState(product.summary);
  const [costPrice, setCostPrice] = useState(product.costPrice);
  const [sellingPrice, setSellingPrice] = useState(product.sellingPrice);
  const [imageUrl, setImageUrl] = useState(product.url);
  const [featured, setFeatured] = useState(product.isFeatured);

  const [open, setOpen] = useState(false);
  // The next line pulls pid id from the given product
  // todo: expand the product schema for category as well
  // @ts-ignore
  const pid = product.pid;

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
      await axios.put(`http://localhost:3000/api/products?pid=${pid}`, formData);
      setOpen(false);
      // router.refresh();
      location.reload();
    } catch (error) {
      console.log(error);
      toast("Invalid data supplied for edit");
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="p-2">
        <Button className="text-blue-600 bg-transparent hover:bg-blue-200/60">
          <Edit2 size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editing Product</DialogTitle>
          <DialogDescription>Make changes and then submit to reflect your changes</DialogDescription>
        </DialogHeader>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div>
            <Label>Product Name</Label>
            <Input
              name="name"
              placeholder="Product name"
              defaultValue={product.name}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              name="desc"
              placeholder="Product Description"
              defaultValue={product.desc}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div>
            <Label>Product Summary</Label>
            <Input
              name="summary"
              placeholder="Product summary"
              defaultValue={product.summary}
              onChange={(e) => setProductSummary(e.target.value)}
            />
          </div>
          <div>
            <Label>Product Image URL</Label>
            <Input
              name="url"
              defaultValue={product.url}
              placeholder="https://unsplash.it/500/500"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <Label>Cost Price</Label>
            <Input
              name="costPrice"
              defaultValue={product.costPrice}
              onChange={(e) => setCostPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Selling Price</Label>
            <Input
              name="sellingPrice"
              defaultValue={product.sellingPrice}
              onChange={(e) => setSellingPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <Label>Featured</Label>
            <Input
              name="isFeatured"
              defaultValue={product.isFeatured.toString()}
              onChange={(e) => setFeatured(e.target.value === "true" ? true : false)}
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-400 text-white">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default EditButton;

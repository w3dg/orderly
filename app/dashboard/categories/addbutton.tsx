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
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categorySlug, setCategorySlug] = useState("");

  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();

    const formData = {
      name: categoryName,
      desc: categoryDescription,
      slug: categorySlug,
    };

    try {
      const { data } = await axios.post(`http://localhost:3000/api/categories`, formData);
      console.log("Form data posted", formData);
      console.log(data);
      location.reload();
    } catch (error) {
      console.log(error);
      toast("Failed to add category. Supply valid details");
    }
    setOpen(false);
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="p-2 my-2 bg-amber-600 bg hover:bg-amber-400">
        <Button className="text-white gap-2">
          <PlusCircle size={24} />
          Add category
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new Category</DialogTitle>
          <DialogDescription>Enter details for the new category</DialogDescription>
        </DialogHeader>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div>
            <Label>Category Name</Label>
            <Input
              name="name"
              defaultValue={categoryName}
              placeholder="Category name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div>
            <Label>Category Description</Label>
            <Input
              name="desc"
              defaultValue={categoryDescription}
              placeholder="Category Description"
              onChange={(e) => setCategoryDescription(e.target.value)}
            />
          </div>
          <div>
            <Label>Category Slug</Label>
            <Input
              name="slug"
              placeholder="Category slug"
              defaultValue={categorySlug}
              onChange={(e) => setCategorySlug(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-400 text-white">
              Add Category
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddButton;

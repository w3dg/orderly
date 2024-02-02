"use client";

import { Edit2 } from "lucide-react";
import { FormEvent, useState } from "react";
import axios from "axios";

import { CategorySchema } from "@/app/validators/validator";
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
import { Category } from "@/app/interfaces/category";

const EditButton = ({ id, category }: { id: number; category: Category }) => {
  const [name, setName] = useState(category.name);
  const [slug, setSlug] = useState(category.slug);
  const [desc, setDesc] = useState(category.desc);

  const [open, setOpen] = useState(false);
  // The next line pulls pid id from the given cid
  const cid = category.cid;

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();

    const formData = {
      name,
      desc,
      slug,
    };

    try {
      await axios.put(`http://localhost:3000/api/categories?cid=${cid}`, formData);
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
          <DialogTitle>Editing Category</DialogTitle>
          <DialogDescription>Make changes and then submit to reflect your changes</DialogDescription>
        </DialogHeader>
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div>
            <Label>Category Name</Label>
            <Input
              name="name"
              placeholder="Category name"
              defaultValue={category.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              name="desc"
              placeholder="Category Description"
              defaultValue={category.desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div>
            <Label>Slug</Label>
            <Input
              name="slug"
              placeholder="Category Slug"
              defaultValue={category.slug}
              onChange={(e) => setSlug(e.target.value)}
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

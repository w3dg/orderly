"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import EditButton from "./editbutton";
import DeleteButton from "./deletebutton";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import CategorySkeleton from "./skeleton";
import { Category } from "@/app/interfaces/category";
import AddButton from "./addbutton";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get("/api/categories");
      console.log(data);
      setCategories(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col gap-2">
      <section className="pt-4 w-full max-w-4xl mx-auto px-5">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-4xl">Categories</h2>
          <p>Categories of products in inventory</p>
          <AddButton></AddButton>
        </div>
        {loading && !error ? (
          <CategorySkeleton />
        ) : !error && categories.length != 0 ? (
          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[160px]">Category name</TableHead>
                  <TableHead className="hidden lg:table-cell">Description</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Edit</TableHead>
                  <TableHead>Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category, idx) => {
                  return (
                    <TableRow key={idx}>
                      <TableHead className="w-[160px]">{category.name}</TableHead>
                      <TableHead className="hidden lg:table-cell">{category.desc}</TableHead>
                      <TableHead>{category.slug}</TableHead>
                      <TableCell className="text-center">
                        <EditButton id={idx} category={category} />
                      </TableCell>
                      <TableCell className="text-center">
                        <DeleteButton id={category.cid} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : !error && categories.length == 0 ? (
          <div className="my-10 flex flex-col items-center justify-center gap-4">
            <p>No categories to show from the store</p>
            <p className="text-muted-foreground">Add categories to see them here</p>
          </div>
        ) : (
          <Card className="my-10 flex flex-col items-center justify-center gap-4">
            <CardHeader>
              <CardTitle>Cannot load categories</CardTitle>
              <CardDescription>Failed to fetch categories at this time.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={"/dashboard"}>Go to dashboard</Link>
            </CardContent>
          </Card>
        )}
      </section>
    </main>
  );
};
export default Categories;

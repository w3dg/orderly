"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import EditButton from "./editbutton";
import DeleteButton from "./deletebutton";
import { ProductSchema } from "@/app/validators/validator";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingProductsSkeleton from "./skeleton";
import { Product } from "@/app/interfaces/product";
import AddButton from "./addbutton";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
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
          <h2 className="text-4xl font-bold">Products</h2>
          <p>All products in the inventory</p>
          <AddButton></AddButton>
        </div>
        {loading && !error ? (
          <LoadingProductsSkeleton />
        ) : !error && products.length != 0 ? (
          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[160px]">Item name</TableHead>
                  <TableHead>Summary</TableHead>
                  <TableHead className="hidden lg:table-cell">Description</TableHead>
                  <TableHead className="text-right">CP</TableHead>
                  <TableHead className="text-right">SP</TableHead>
                  <TableHead className="text-right">Edit</TableHead>
                  <TableHead className="text-right">Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((item, idx) => {
                  return (
                    <TableRow key={idx}>
                      <TableCell className="w-[160px]">{item.name}</TableCell>
                      <TableCell>{item.summary}</TableCell>
                      <TableCell className="hidden lg:table-cell">{item.desc}</TableCell>
                      <TableCell className="text-right">{item.costPrice}</TableCell>
                      <TableCell className="text-right">{item.sellingPrice}</TableCell>
                      <TableCell className="text-right">
                        <EditButton id={idx} product={item} />
                      </TableCell>
                      <TableCell className="text-right">
                        <DeleteButton id={item.pid} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : !error && products.length == 0 ? (
          <div className="my-10 flex flex-col items-center justify-center gap-4">
            <p>No products to show from the store</p>
            <p className="text-muted-foreground">Add items to see them here</p>
          </div>
        ) : (
          <Card className="my-10 flex flex-col items-center justify-center gap-4">
            <CardHeader>
              <CardTitle>Cannot load roducts</CardTitle>
              <CardDescription>Failed to fetch products at this time.</CardDescription>
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
export default Products;

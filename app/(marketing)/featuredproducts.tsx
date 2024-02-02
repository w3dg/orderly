"use client";

import axios from "axios";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Product } from "@/app/interfaces/product";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const { data } = await axios.get("/api/products");
    const featuredProducts = data.filter((item: Product) => item.isFeatured);
    setLoading(false);
    console.log(products);
    setProducts(featuredProducts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && (
        <>
          <h2 className="text-2xl text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {loading && Array.from({ length: 3 }).map(() => <Skeleton className="h-[15rem] w-full p-4" />)}
          </div>
        </>
      )}

      {!loading && products.length !== 0 && (
        <>
          <h2 className="text-2xl text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {products.map((item, idx) => {
              return (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-right p-2">Price: {item.sellingPrice}</p>
                  </CardContent>
                  <CardFooter>
                    {item.isFeatured ? (
                      <p className="ml-auto rounded-full bg-white px-3 py-1 text-blue-700 font-bold">Featured</p>
                    ) : (
                      <></>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {!loading && products.length === 0 && (
            <>
              <h2 className="text-lg text-center">No Featured Products to show</h2>
            </>
          )}
        </>
      )}
    </>
  );
};
export default FeaturedProducts;

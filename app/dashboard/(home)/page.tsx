"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const productCountPr = await axios("/api/products");
    setProductCount(productCountPr.data.length);
    const orderCount = await axios("/api/orders");
    setOrderCount(orderCount.data.length);
    const catCount = await axios("/api/categories");
    setCategoryCount(catCount.data.length);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="flex h-full flex-col items-center justify-between">
        <section className="flex gap-4 lg:gap-6 flex-col pt-4 items-center w-full mx-auto px-5">
          <h2 className="text-4xl font-bold">Dashboard</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-10/12">
            {loading &&
              [1, 2, 3].map((_, index) => {
                return (
                  <div className="h-40 grid border bg-neutral-900 p-3" key={index}>
                    <div className="flex flex-col gap-3">
                      <Skeleton className="h-8 rounded-md" />
                      <Skeleton className="h-4 rounded-md" />
                    </div>
                    <Skeleton className="h-20" />
                  </div>
                );
              })}

            {!loading && (
              <>
                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle>Product Count</CardTitle>
                    <CardDescription>No of products</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg text-muted-foreground font-bold">{productCount}</h3>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle>Order Count</CardTitle>
                    <CardDescription>No of orders from suppliers made</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg text-muted-foreground font-bold">{orderCount}</h3>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle>Category Count</CardTitle>
                    <CardDescription>No of categories in store</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg text-muted-foreground font-bold">{categoryCount}</h3>
                  </CardContent>
                </Card>
              </>
            )}
          </section>
        </section>
      </main>
    </>
  );
};
export default Dashboard;

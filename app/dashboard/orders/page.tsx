"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteButton from "./deletebutton";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import OrderSkeleton from "./skeleton";
import { Order } from "@/app/interfaces/order";
import AddButton from "./addbutton";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get("/api/orders");
      console.log(data);
      setOrders(data);
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
          <h2 className="text-4xl font-bold">Orders</h2>
          <p>Orders in your inventory</p>
          <AddButton></AddButton>
        </div>
        {loading && !error ? (
          <OrderSkeleton />
        ) : !error && orders.length != 0 ? (
          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-center">Product Id</TableHead>
                  <TableHead className="text-center">Delete Order</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order, idx) => {
                  return (
                    <TableRow key={idx}>
                      <TableCell className="text-center">{order.quantity}</TableCell>
                      <TableCell className="text-center">{order.productId}</TableCell>
                      <TableCell className="text-center">
                        <DeleteButton id={order.oid} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : !error && orders.length == 0 ? (
          <div className="my-10 flex flex-col items-center justify-center gap-4">
            <p>No orders to show from the store</p>
            <p className="text-muted-foreground">Add orders to see them here</p>
          </div>
        ) : (
          <Card className="my-10 flex flex-col items-center justify-center gap-4">
            <CardHeader>
              <CardTitle>Cannot load orders</CardTitle>
              <CardDescription>Failed to fetch orders at this time.</CardDescription>
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

"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-between">
        <section className="flex gap-4 lg:gap-6 flex-col pt-4 items-center w-full mx-auto px-5">
          <h2 className="text-4xl font-bold">Dashboard</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-10/12">
            {[1, 2, 3, 4].map(() => {
              return (
                <Card className="bg-neutral-900">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};
export default Dashboard;

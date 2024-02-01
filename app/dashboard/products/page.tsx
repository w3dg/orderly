import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EditButton from "./editbutton";
import DeleteButton from "./deletebutton";
import { ProductSchema } from "@/app/validators/validator";
import axios from "axios";
import prisma from "@/app/db/db";

const data: ProductSchema[] = [
  {
    name: "Iphone 15",
    summary: "Brand new iphone for the cool people",
    sellingPrice: 123,
    costPrice: 90,
    desc: "This is a very long description of the same thing i dont even know",
    isFeatured: true,
  },
  {
    name: "Iphone 15",
    summary: "Brand new iphone for the cool people",
    sellingPrice: 123,
    costPrice: 90,
    desc: "This is a very long description of the same thing i dont even know",
    isFeatured: false,
  },
  {
    name: "Iphone 15",
    summary: "Brand new iphone for the cool people",
    sellingPrice: 123,
    costPrice: 90,
    desc: "This is a very long description of the same thing i dont even know",
    isFeatured: false,
  },
  {
    name: "Iphone 15",
    summary: "Brand new iphone for the cool people",
    sellingPrice: 123,
    costPrice: 90,
    desc: "This is a very long description of the same thing i dont even know",

    isFeatured: false,
  },
  {
    name: "Iphone 15",
    summary: "Brand new iphone for the cool people",
    sellingPrice: 123,
    costPrice: 90,
    desc: "This is a very long description of the same thing i dont even know",
    isFeatured: false,
  },
  {
    name: "Iphone 15",
    summary: "Brand new iphone for the cool people",
    sellingPrice: 123,
    costPrice: 90,
    desc: "This is a very long description of the same thing i dont even know",
    isFeatured: false,
  },
];

const Products = async () => {
  const products = await prisma.product.findMany();
  // console.log(products);
  return (
    <main className="flex min-h-screen flex-col gap-2">
      <section className="pt-4 w-full max-w-4xl mx-auto px-5">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-4xl">Products</h2>
          <p>All products in the inventory</p>
        </div>
        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[160px]">Item name</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead className="hidden lg:block">Description</TableHead>
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
                    <TableCell className="hidden lg:block">{item.desc}</TableCell>
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
      </section>
    </main>
  );
};
export default Products;

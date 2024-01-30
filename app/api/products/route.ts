import prisma from "@/app/db/db";
import { ProductSchema } from "@/app/validators/validator";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const products = await prisma.product.findMany();
  
  return Response.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const { name, desc, summary, sellingPrice, costPrice, isFeatured } =
      ProductSchema.parse(body);
    const pdata = {
      name,
      desc,
      summary,
      sellingPrice,
      costPrice,
      isFeatured,
    };    
    // console.log(pdata);
    const createdProduct =await prisma.product.create({data:pdata});
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200}; 
    return Response.json(createdProduct, options);
  } catch (error) {
    return new NextResponse('Unprocessable entity',{status:422});
  }
}

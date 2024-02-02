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
  const { searchParams } = new URL(request.url);
  const query = Number(searchParams.get("categoryid"));
  try {
    const { name, desc, summary, url, sellingPrice, costPrice, isFeatured } = ProductSchema.parse(body);
    const pdata = {
      name,
      desc,
      summary,
      url,
      sellingPrice,
      costPrice,
      isFeatured,
    };
    // console.log(pdata);
    const createdProduct = await prisma.product.create({ data: { ...pdata, categoryid: query } });
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200 };
    return Response.json(createdProduct, options);
  } catch (error) {
    console.log(error);

    return new NextResponse("Unprocessable entity", { status: 422 });
  }
}
//Update Products
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const query1 = searchParams.get("pid");
  const body = await request.json();
  const query2 = searchParams.get("cid");
  try {
    const { name, desc, summary, sellingPrice, costPrice, isFeatured, url } = ProductSchema.parse(body);
    const pdata = {
      name,
      desc,
      summary,
      sellingPrice,
      url,
      costPrice,
      isFeatured,
    };
    // console.log(pdata);

    const updatedProduct = await prisma.product.update({ where: { pid: Number(query1) }, data: pdata });
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200 };
    return Response.json(updatedProduct, options);
  } catch (error) {
    return new NextResponse("Unprocessable entity", { status: 422 });
  }
}
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("pid");
  try {
    // console.log(pdata);

    const deleteProduct = await prisma.product.delete({ where: { pid: Number(query) } });
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200 };
    return Response.json(deleteProduct, options);
  } catch (error) {
    return new NextResponse("Unprocessable entity", { status: 422 });
  }
}

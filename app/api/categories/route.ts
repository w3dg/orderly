import prisma from "@/app/db/db";
import { CategorySchema } from "@/app/validators/validator";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const categories = await prisma.category.findMany();

  return Response.json(categories);
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const { name, desc, slug } = CategorySchema.parse(body);
    const cdata = {
      name,
      desc,
      slug,
    };
    // console.log(pdata);
    const createdCategory = await prisma.category.create({ data: cdata });
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200 };
    return Response.json(createdCategory, options);
  } catch (error) {
    console.log(error);
    return new NextResponse("Unprocessable entity", { status: 422 });
  }
}
//Update Products
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("cid");
  const body = await request.json();
  try {
    const { name, desc, slug } = CategorySchema.parse(body);
    const cdata = {
      name,
      desc,
      slug,
    };
    // console.log(pdata);

    const updatedCategory = await prisma.category.update({ where: { cid: Number(query) }, data: cdata });
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200 };
    return Response.json(updatedCategory, options);
  } catch (error) {
    return new NextResponse("Unprocessable entity", { status: 422 });
  }
}
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("cid");
  const body = await request.json();
  try {
    // console.log(pdata);

    const deleteCategory = await prisma.category.delete({ where: { cid: Number(query) } });
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200 };
    return Response.json(deleteCategory, options);
  } catch (error) {
    return new NextResponse("Unprocessable entity", { status: 422 });
  }
}

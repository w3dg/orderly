import prisma from "@/app/db/db";
import { OrderSchema } from "@/app/validators/validator";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const orders = await prisma.order.findMany();
  
  return Response.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json();
  
  const {searchParams}=new URL(request.url);
  const query = Number(searchParams.get('productid'))
  try {
    const { quantity } =
      OrderSchema.parse(body);
    const odata = {
      
      quantity
    };    
    // console.log(pdata);
    const createdOrder =await prisma.order.create({data:{...odata,productId:query}});
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200}; 
    return Response.json(createdOrder, options);
  } catch (error) {
    return new NextResponse('Unprocessable entity',{status:422});
  }
}

//Delete Orders
export async function DELETE(request: Request) {
  const {searchParams}=new URL(request.url);
  const query = searchParams.get('oid')
  
  try {
    
    
    // console.log(pdata);

    const deleteOrder =await prisma.order.delete({where:{oid:Number(query)}});
    // console.log(createdProduct);
    // not correct returning
    const options = { status: 200}; 
    return Response.json(deleteOrder, options);
  } catch (error) {
    return new NextResponse('Unprocessable entity',{status:422});
  }
}


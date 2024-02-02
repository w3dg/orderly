import { z } from "zod";
export const ProductSchema = z.object({
  name: z.string(),
  desc: z.string(),
  summary: z.string(),
  url : z.string(),
  sellingPrice: z.number(),
  costPrice: z.number(),
  isFeatured: z.boolean(),
});
export const CategorySchema = z.object({
  name: z.string(),
  desc: z.string(),
  slug: z.string(),
});
export const OrderSchema = z.object({
  quantity : z.number(),
  
});

export type ProductSchema = z.infer<typeof ProductSchema>;

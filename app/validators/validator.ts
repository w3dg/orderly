import { z } from "zod";
export const ProductSchema = z.object({
  name: z.string(),
  desc: z.string(),
  summary: z.string(),
  sellingPrice: z.number(),
  costPrice: z.number(),
  isFeatured: z.boolean(),
});
export const CategorySchema = z.object({
  name : z.string(),
  desc : z.string(),
  slug : z.string(),
});


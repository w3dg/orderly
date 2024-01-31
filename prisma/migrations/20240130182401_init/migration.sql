-- CreateTable
CREATE TABLE "product" (
    "pid" SERIAL NOT NULL,
    "categoryid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "sellingPrice" DOUBLE PRECISION NOT NULL,
    "costPrice" DOUBLE PRECISION NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "category" (
    "cid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("cid")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "category"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

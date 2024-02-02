-- CreateTable
CREATE TABLE "order" (
    "oid" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "orderDate" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("oid")
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "product" (
    "pid" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING NOT NULL,
    "desc" STRING NOT NULL,
    "summary" STRING NOT NULL,
    "sellingPrice" FLOAT8 NOT NULL,
    "costPrice" FLOAT8 NOT NULL,
    "isFeatured" BOOL NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "cod_product" VARCHAR(255) NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price_in_cents" INTEGER NOT NULL,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_cod_product_key" ON "products"("cod_product");

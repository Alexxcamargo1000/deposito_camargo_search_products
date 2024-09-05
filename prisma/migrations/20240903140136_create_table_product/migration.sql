-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cod_product" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "price_in_cents" INTEGER NOT NULL,
    "undate_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "products_cod_product_key" ON "products"("cod_product");

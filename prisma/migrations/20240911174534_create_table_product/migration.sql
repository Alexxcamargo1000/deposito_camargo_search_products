-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "codProduct" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_codProduct_key" ON "Product"("codProduct");

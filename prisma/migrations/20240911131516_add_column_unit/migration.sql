/*
  Warnings:

  - Added the required column `unit` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cod_product" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price_in_cents" INTEGER NOT NULL,
    "undate_at" DATETIME NOT NULL
);
INSERT INTO "new_products" ("cod_product", "id", "name", "price", "price_in_cents", "undate_at") SELECT "cod_product", "id", "name", "price", "price_in_cents", "undate_at" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_cod_product_key" ON "products"("cod_product");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

import * as XLSX from "xlsx";

import  prisma  from "@/lib/prisma";

interface data {
  cod_barra: string,
  produto: string,
  un: string,
  price: string,
  estoque: string
}

// Carrega o arquivo Excel
const productList = XLSX.readFile('./listaProdutos.xlsx');

// Seleciona a primeira planilha
const sheetName = productList.SheetNames[0];
const sheet = productList.Sheets[sheetName];

// Converte os dados da planilha para JSON
const data: data[] = XLSX.utils.sheet_to_json(sheet);


data.forEach(async (value) => {
  try {
    await prisma.product.create({
        data: {
          name: value.produto,
          codProduct: value.cod_barra,
          price: value.price,
          priceInCents: Number(value.price)*100,
          updateAt: new Date()

        },
    });
} catch (err) {
    console.error(`Erro ao inserir dados do cliente ${value.produto}:`, err);
}
})



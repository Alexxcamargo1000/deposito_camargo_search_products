import * as xlsx from 'xlsx'
import Excel from "exceljs";
import fs from 'fs'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server';
import path from 'path';
import { cwd } from 'process';

interface data {
  cod_barra: string,
  produto: string,
  un: string,
  price: string,
  estoque: string
}


// Carrega o arquivo Excel

export async function GET(request: Request) {


  const directoryPath = path.join(cwd(), 'listaProdutos.xlsx' )

  // const productList = xlsx.(directoryPath);
  // console.log(productList);
  // // Seleciona a primeira planilha
  // const sheetName = productList.SheetNames[0];

  // const sheet = productList.Sheets[sheetName];

  // // Converte os dados da planilha para JSON
  // const data: data[] = xlsx.utils.sheet_to_json(sheet);


  const workbook = new Excel.Workbook();

  workbook.xlsx.readFile(directoryPath).then(data => data.eachSheet( (sheet) => {
    sheet.eachRow(async (row, rowIndex)=> {
      if(rowIndex > 1 ) {
        const line = row.values as Array<any>;

        const name = String(line[2]).trim()
        const codProduct = String(line[1]).trim()
        const price = String(line[4]).trim()
        try {
          await prisma.product.create({
            data: {
              name: name,
              codProduct: codProduct,
              price: price,
              priceInCents: Number(price) * 100,
              updateAt: new Date()
    
            },
          });
        } catch (err) {
          console.error(`Erro ao inserir dados do cliente ${line[2]}:`, err);
        }

      }
    })
  })) 


  return NextResponse.json({message: 'ok'})
}

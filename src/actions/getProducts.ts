'use client'

export async function getProduct() {

   let data = await fetch('http://localhost:3000/api/product')

   return data
}
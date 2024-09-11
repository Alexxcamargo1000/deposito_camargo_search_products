'use client'

export function getProducts() {
  const url = process.env.SITE_URL || 'http://localhost:3000/'
 fetch(`${url}/api/get`).then()
}
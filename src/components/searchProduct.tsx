'use client'
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function SearchProduct() {
  const [search, setSearch] = useState('')
  console.log(search === '');
  const router = useRouter()
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
   router.push(`/busca/${search}`)
  }
  
  return (
    <form className="mt-16 w-6/12 flex " onSubmit={handleSubmit}>
      <Input id="input" className="rounded-none rounded-l" value={search} onChange={(e) => setSearch(e.target.value) } />
      <Button 
        className={ search === '' 
          ? 'pointer-events-none cursor-not-allowed bg-primary/50 rounded-none rounded-r'
          : 'rounded-none rounded-r' } 
      >
        <Search />
      </Button>
    </form>
  )
}
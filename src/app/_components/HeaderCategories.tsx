'use client'
import React, { useState } from 'react'
import { Category } from '../interfaces/categories.interfaces'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import MealsCategory from './MealsCategory';

export default function HeaderCategories({categories}:{categories:Category[]}) {
    const [activeCategory, setActiveCategory] = useState<string>(
        categories[0]?.strCategory || ""
      );
  return (
    <>
    <section className='my-6 '>
    <h1 className="font-bold mb-6 text-4xl bg-gradient-to-r from-[#f29625] to-[#e17965] via-[#e47139] bg-clip-text text-transparent">Learn, Cook, Eat Your Food </h1>
    <div className="hidden md:flex flex-wrap gap-y-4 gap-x-9 border-gray-200 border-b-1 p-5">
      {categories.map((cat) => (
        <button onClick={()=>setActiveCategory(cat.strCategory)} key={cat.idCategory}>

<div
        className={`font-cursive text-center break-words px-4 py-2 rounded-2xl shadow-lg transition-all duration-300
          ${
            activeCategory === cat.strCategory
              ? "bg-gradient-to-r from-[#f29625] to-[#e17965] text-white shadow-xl"
              : "hover:bg-white hover:shadow-xl"
          }`}
      >          {cat.strCategory}
              </div>
        </button>
      ))}
    </div>
    
    {/**************mobile*************************** */}
    <div className='mt-4 md:hidden font-cursive w-full'>
    <Select onValueChange={(val) => setActiveCategory(val)}>
<SelectTrigger className="w-full">
  <SelectValue placeholder="All Category" />
</SelectTrigger>
<SelectContent>
  
  {categories.map((cat) => (
      <SelectItem key={cat.idCategory} value={cat.strCategory} className='font-cursive '>{cat.strCategory}</SelectItem>
  ))}
</SelectContent>
</Select>
    </div>
  </section>
  <MealsCategory category={activeCategory}/>
    </>

  )
}

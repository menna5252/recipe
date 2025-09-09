import React from 'react'
import { getCategories } from "@/services/categories.service";
import { Category } from "../interfaces/categories.interfaces";

import HeaderCategories from './HeaderCategories';


export default async function Categories() {
    const {categories}:{categories:Category[]} = await getCategories()

  return (
   <>
   {categories?.length > 0 && (
  <HeaderCategories categories={categories} />
)}

   </>
  )
}

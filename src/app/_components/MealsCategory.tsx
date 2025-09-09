"use client";
import React, { useEffect, useState } from "react";
import { getMealsByCategory } from "@/services/meals.service";
import { Meal } from "../interfaces/meals.interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { SkeletonCard } from "../shared/Skelton";
import { Globe } from "lucide-react";

export default function MealsCategory({ category }: { category: string }) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchMeals() {
        setLoading(true);
      try {
        const data = await getMealsByCategory(category!);
        setMeals(data);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, [category]);
console.log(meals);
if (loading) {
    // Skeleton loading state
    return (
     <SkeletonCard />
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-stretch gap-4 gap-y-18 mt-18 font-cursive">
     {meals?.length > 0 && meals.map((meal) => (
          <Card  key={meal.idMeal} className="group relative flex flex-col items-center  rounded-3xl shadow-md hover:shadow-lg transition">
      <div className="absolute -top-12 mb-4 group-hover:rotate-360 transition duration-500">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={140}
          height={140}
          className="rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      <CardContent className="mt-25 text-center">
        <h2 className="text-lg font-bold line-clamp-1">{meal.strMeal}</h2>

       

        <Link href={`/meal/${meal.idMeal}`}>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full transition">
            View Recipe
          </button>
        </Link>
      </CardContent>
    </Card>
      ))}
    </div>
  );
}

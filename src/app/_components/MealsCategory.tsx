"use client";
import React, { useEffect, useState } from "react";
import { getMealsByCategory } from "@/services/meals.service";
import { Meal } from "../interfaces/meals.interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { SkeletonCard } from "../shared/Skelton";

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 font-cursive">
     {meals?.length > 0 && meals.map((meal) => (
        <Link key={meal.idMeal} href={`/meal/${meal.idMeal}`}>
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-sm">{meal.strMeal}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={400}
                height={300}
                className="rounded-md w-full h-auto"
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

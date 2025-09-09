import { Button } from "@/components/ui/button";
import { getMealDetails } from "@/services/mealDetails.service";
import Image from "next/image";

export default async function MealPage({ params }: { params: { mealId: string } }) {
  const meal = await getMealDetails(params.mealId);
console.log(meal)
  const ingredients: { name: string; amount: string }[] = [];
  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const amount = meal[`strMeasure${i}`];
    if (name && name.trim()) {
      ingredients.push({ name, amount });
    }
  }

  return (
    <div className="p-6 md:flex md:items-start md:gap-6 bg-[#f7f6f2] min-h-screen">
      <div className="md:w-1/3">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={400}
          height={400}
          className="rounded-lg w-full h-auto"
        />
      </div>

      <div className="md:w-1/3 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
        <p className="text-sm leading-6 font-cursive">{meal.strInstructions}</p>
        <div className="flex gap-4 mt-4 font-cursive">
          {meal.strYoutube && (
            <Button variant="destructive" asChild>
              <a href={meal.strYoutube} target="_blank">YouTube</a>
            </Button>
          )}
          {meal.strSource && (
            <Button variant="default" asChild>
              <a href={meal.strSource} target="_blank">Source</a>
            </Button>
          )}
        </div>
      </div>

      {/* المكونات */}
      <div className="md:w-1/3 mt-4 md:mt-0 bg-white p-4 rounded-lg shadow font-cursive">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="divide-y divide-gray-200">
          {ingredients.map((ing, i) => (
            <li key={i} className="flex justify-between py-1">
              <span>{ing.name}:</span>
              <span>{ing.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

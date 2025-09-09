export interface MealsByCategoryResponse {
    meals: Meal[]
  }
  
  export interface Meal {
    strMeal: string
    strMealThumb: string
    idMeal: string
  }
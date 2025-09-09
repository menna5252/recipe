export async function getMealDetails(id: string) {
    try{
        const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const data = await res.json();
          return data.meals[0]; // بيرجع وجبة واحدة
    }
    catch (error){
        console.log(error)
        return {error: error as string}
    }
  }
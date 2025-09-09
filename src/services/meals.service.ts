export async function getMealsByCategory(category?: string) {
  try{

    let url = "";

    if (category) {
      // لو في category محددة
      url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/filter.php?c=${category}`;
    } else {
      // لو مافيش category، تجيب كل الكاتيجوريز
      url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/list.php?c=list`;
    }
    const res = await fetch( url);
      if (!res.ok) throw new Error("Failed to fetch meals");
      const data = await res.json();
      return data.meals;
  }

    catch (error){
        console.log(error)
        return {error: error as string}
    }
  }
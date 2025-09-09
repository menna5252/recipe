export async function getCategories (){
    try{
        const res =  await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories.php`)
    
    if(!res.ok)
        throw new Error( 'failed to fetch categories')
    const data =await res.json()
    return data;
}
catch (error){
    console.log(error)
    return {error: error as string}
}
}
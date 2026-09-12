  const API_URL = "https://dummyjson.com/products";


export async function getProducts() {
  const response = await axios.get(API_URL);

  return response.data.products;
}



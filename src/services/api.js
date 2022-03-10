export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(url);
  const categories = data.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const data = await fetch(url);
  const resultado = data.json();
  return resultado;
}

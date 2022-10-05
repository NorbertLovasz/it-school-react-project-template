const API_KEY = "9c055af8-2e91-4a16-8be6-0b91fa2b0505";

export function getNewsCategoryEndpoint(category, page = 1, pageSize = 20) {
  const querryParams = `?api-key=${API_KEY}&section=${category}&page-size=${pageSize}&page=${page}&show-fields=all`;
  return `https://content.guardianapis.com/search${querryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const querryParams = `?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${newsId}${querryParams}`;
}

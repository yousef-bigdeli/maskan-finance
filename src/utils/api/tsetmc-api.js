const baseUrl = "http://cdn.tsetmc.com/api/Index";

/**
 * get All indexes
 * @param
 * @returns {Promise<Object[]>} Response array of all indexes
 */

export const getAllIndex = async () => {
  const url = `${baseUrl}/GetIndexB1LastAll/All/1`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

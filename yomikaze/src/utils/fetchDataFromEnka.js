export const fetchDataFromEnka = async (uid) => {
  const url = `http://localhost:8080/https://enka.network/api/uid/${uid}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data from Enka API:", error);
    return null;
  }
};

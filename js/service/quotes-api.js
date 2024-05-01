//Service for fetching quotes from an external API.
const quotesApi = {
  /**
   * Retrieves a random quote from the quotable API.
   * @param {string} tag - Optional tag to filter quotes by.
   * @returns {Promise<object>} A promise resolving to the fetched quote data.
   * @throws {Error} If an error occurs during the fetch operation.
   */
  async getQuote(tag = null) {
    // Construct the URL for fetching a random quote
    let url = "https://api.quotable.io/quotes/random";
    if (tag && typeof tag === "string" && tag !== "random") {
      url += `?tags=${tag}`;
    }

    try {
      // Fetch the quote data from the API
      const response = await fetch(url);

      // Check if the response is successful(200)
      if (!response.ok) {
        throw new Error("An error occurred while fetching the data.");
      }

      // Parse the JSON response and return the quote data
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

// Module for handling quotes, including fetching from an external API and local quotes.
const quotes = {
  /**
   * Retrieves a new quote, either from the API or local storage, and updates the UI accordingly.
   * @param {string} tag - Optional tag to filter quotes by.
   */
  new: async (tag = null) => {
    // Show loader and hide quote and no quote containers
    displayUtils.showLoader();
    displayUtils.hideNoQuoteContainer();
    displayUtils.hideQuoteContainer();

    let quote;
    try {
      // Fetch a new quote from the API
      quote = (await quotesApi.getQuote(tag))[0];
      console.log("Using API quotes");
    } catch (error) {
      // If fetching fails, get a local quote instead
      quote = quotes.getLocalQuote(tag);
    } finally {
      // Set the content of the quote
      quotes.setContent(quote);
    }
  },
  /**
   * Sets the content of the quote on the UI.
   * @param {object} quote - The quote object containing author, content, and tags.
   */
  setContent: (quote) => {
    // Get DOM elements for the quote, author and tags
    const quoteText = document.querySelector("#quote");
    const authorText = document.querySelector("#author");
    const tagsContainer = document.querySelector("#tags");

    // Check if there's no quote
    if (!quote) {
      // Show the "No Quote" container since no quote was found
      displayUtils.showNoQuoteContainer();
    } else {
      tagsContainer.innerHTML = "";

      // Populate tags container if tags exist
      if (quote.tags.length > 0) {
        quote.tags.forEach((tag) => {
          const tagBadge = document.createElement("span");
          tagBadge.classList.add("tag-badge");
          tagBadge.textContent = tag;
          tagsContainer.appendChild(tagBadge);
        });
      }

      // Set author and quote text content
      authorText.textContent = quote.author || "Unknown";
      quoteText.textContent = quote.content;
      quoteText.classList.toggle("long-quote", quote.content.length > 120);

      // Show quote container
      displayUtils.showQuoteContainer();
    }

    // Hide loader
    displayUtils.hideLoader();
  },
  /**
   * Retrieves a random quote from local quotes based on the provided tag.
   * @param {string} tagClicked - The tag to filter quotes by.
   * @returns {object|null} A random quote object or null if no quotes match the criteria.
   */
  getLocalQuote: (tagClicked) => {
    // Initialize filtered quotes array with local quotes
    let filteredQuotes = localQuotes.quotes;

    // Filter quotes based on tag if provided
    if (
      tagClicked &&
      typeof tagClicked === "string" &&
      tagClicked !== "random"
    ) {
      filteredQuotes = filteredQuotes.filter((quote) =>
        quote.tags.map((tag) => tag.toLowerCase()).includes(tagClicked)
      );
    }

    // Return a random quote from the filtered list or null if none match
    return filteredQuotes.length === 0
      ? null
      : filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  },
};

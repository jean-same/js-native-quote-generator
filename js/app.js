/**
 * The `app` object encapsulates functionality related to the application.
 * It follows the module pattern to organize code into logical units.
 */
const app = {
  //Initializes the application by calling the necessary functions and setting up event listeners.
  init: function () {
    // Load a quote when the application initializes.
    quotes.new();

    // Attach the click event listeners to all buttons with the "new-quote" class.
    document.querySelectorAll(".new-quote").forEach((btn) => {
      btn.addEventListener("click", () => quotes.new());
    });

    // Attach click event listener to all the tags to handle tag clicks.
    document
      .querySelector("#tags")
      .addEventListener("click", app.handleTagClick);

    document
      .querySelector("#x-twitter")
      .addEventListener("click", app.handleTweetClick);
  },

  /**
   * Handles tag clicks by extracting the clicked tag and requesting a new quote based on the tag.
   * @param {Event} event - The click event object.
   */
  handleTagClick: function (event) {
    // Check if the clicked element has the "tag-badge" class.
    if (event.target.classList.contains("tag-badge")) {
      // Get the lowercase text content of the clicked element (tag).
      const clickedTag = event.target.textContent.toLowerCase();

      // Get a new quote based on the clicked tag.
      quotes.new(clickedTag);
    }
  },
  /**
   * Handles tweet click to tweet the quote.
   */
  handleTweetClick: function () {
    // Get the quote and author text elements
    const quoteText = document.querySelector("#quote");
    const authorText = document.querySelector("#author");

    // Post the quote to Twitter
    tweet.post(quoteText, authorText);
  },
};

// Initialize the application when the DOM content is fully loaded.
document.addEventListener("DOMContentLoaded", app.init);

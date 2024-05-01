// Module for handling tweets
const tweet = {
  /**
   * Post a quote on twitter.
   * @param {string} quoteText - The quote text to tweet.
   * @param {string} authorText - The author text to tweet.
   * @returns {void}
   */
  post: function (quoteText, authorText) {
    // Construct the twitter URL with the quote and author text
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    // Open the twitter URL in a new tab
    window.open(twitterUrl, "_blank");
  },
};

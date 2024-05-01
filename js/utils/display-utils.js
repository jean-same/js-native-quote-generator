const quoteContainer = document.querySelector("#quote-container");
const loader = document.querySelector("#loader");
const noQuoteContainer = document.querySelector("#no-quote-container");

// Utility functions related to displaying elements on the page.
const displayUtils = {
  //Shows the loader element.
  showLoader: () => {
    loader.hidden = false;
  },
  // Hides the loader element.
  hideLoader: () => {
    loader.hidden = true;
  },
  //Shows the quote container element.
  showQuoteContainer: () => {
    quoteContainer.hidden = false;
  },
  //Hides the quote container element.
  hideQuoteContainer: () => {
    quoteContainer.hidden = true;
  },
  //Shows the "No Quote" container element.
  showNoQuoteContainer: () => {
    noQuoteContainer.hidden = false;
  },
  //Hides the "No Quote" container element.
  hideNoQuoteContainer: () => {
    noQuoteContainer.hidden = true;
  },
};

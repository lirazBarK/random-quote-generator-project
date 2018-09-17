// FSJS - Random Quote Generator

var quotes = [
    {
        quote: "It always seems impossible until it's done.",
        source: "Nelson Mandela",
        citation: "",
        year: "",
        tags: "Motivational"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "Confucius",
        citation: "",
        year: "",
        tags: "Motivational"
    },
    {
        quote: "Keep your eyes on the stars, and your feet on the ground.",
        source: "Theodore Roosevelt",
        citation: "",
        year: "",
        tags: "Motivational"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin",
        citation: "Twitter",
        year: "1991",
        tags: "Learning"
    },
    {
        quote: "Success consists of going from failure to failure without loss of enthusiasm.",
        source: "Winston Churchill",
        citation: "",
        year: "",
        tags: "Success"
    },

]


//getRandomQuote function returns a random quote object from the quotes array
var lastQuoteIndex;

function getRandomQuote(array) {

    while (true) {
        var newQuoteIndex = Math.floor(Math.random() * quotes.length);

        if (lastQuoteIndex !== newQuoteIndex) {
            lastQuoteIndex = newQuoteIndex;
            return quotes[lastQuoteIndex];

        }
    }


    };
//printQuote function prints the object proprties that getRandomQuote function generated
    function printQuote() {
        var quote = getRandomQuote();
        var printedQuote = '';
        if (quote.citation === "" && quote.year === "") {
            printedQuote += '<p class="quote">' + quote.quote + '</p>'
            printedQuote += '<p class="source">' + quote.source + '</p>'
            printedQuote += '<span class="tags">' + 'Tags: ' + quote.tags + '</span>'
        } else {
            printedQuote += '<p class="quote">' + quote.quote + '</p>'
            printedQuote += '<p class="source">' + quote.source +
                '<span class="citation">' + quote.citation + '</span>' +
                '<span class="year">' + quote.year + '</span>' +
                '</p>'
            printedQuote += '<span class="tags">' + 'Tags: ' + quote.tags + '</span>'
        }
        document.getElementById('quote-box').innerHTML = printedQuote;

    };
//this function creates a random background color for the page
  function random_bg_color() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      document.body.style.background = bgColor;
      }

//this function calls the "printQuote" and "random_bg_color" functions every 20 seconds
  function autoChange() {
   window.setInterval(printQuote, 20000);
   window.setInterval(random_bg_color, 20000);
  }

    printQuote();
    autoChange();
    // This event listener will respond to "Show another quote" button clicks
    // when user clicks anywhere on the button, the "printQuote" function and the "random_bg_color" function are called

    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);

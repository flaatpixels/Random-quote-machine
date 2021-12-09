/**
 * Array that list all possible quotes
 * To display on the UI
 */
let quotes = [
    {
      quote: "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon"
    },
  
    {
      quote: "’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan"
    },
  
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
  
    {
      quote: "The most difficult thing is the decision to act, the rest is merely tenacity",
      author: "Amelia Earhart"
    },
    
    {
      quote: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach"
    }
  ];
  
  /**
   * All possible colors
   * To display on the UI
   */
  let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  
  /**
   * All HTML Elements
   * To deal with
   */
  let quoteText = $('#quote-box #text');
  let quoteAuthor = $('#quote-box #author');
  let newQuoteBtn = $('#quote-box #new-quote');
  let tweetBtn = $('#tweet-quote');
  let tumblrBtn = $('#thumblr-quote');
  
  
  let prevRandomQuoteIndex = 0;
  let currentRandomQuoteIndex = 0;
  
  /**
   * This function just generate a ranom number Integer
   * Between 0 And max
   * 
   * @param {Integer} index 
   * @returns 
   */
  const pickRandomIndex = (max) => Math.floor(Math.random() * max);
  
  /**
   * This function pick a random quote
   * From the array quotes
   * And render the UI
   * 
   * @returns
   */
  const showQuote = () => {
    
    // These lines prevent the algorithm
    // Picking the same quote that is actually shown
    while (prevRandomQuoteIndex == currentRandomQuoteIndex) {
      currentRandomQuoteIndex = pickRandomIndex(quotes.length);
    }
    prevRandomQuoteIndex = currentRandomQuoteIndex;
    
    let randomQuote = quotes[currentRandomQuoteIndex];
    let randomColor = colors[pickRandomIndex(colors.length)];
    
    // Update the UI
    $('html body').animate({'background-color' : randomColor}, 1000);
    
    $('#quote-text').animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 1000)
      $(this).css({color: randomColor});
      quoteText.text(randomQuote.quote);
    });
    
    quoteAuthor.animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 1000)
      $(this).css({'color': randomColor});
      quoteAuthor.text(`- ${randomQuote.author}`);
    });
    
    $('.btn-share-quote').animate({'background-color': randomColor}, 500);
    newQuoteBtn.animate({'background-color': randomColor}, 500);
    
    // Update the share buttons
    tweetBtn.attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURI(randomQuote.quote));
    tumblrBtn.attr('href', 'http://tumblr.com/widgets/share/tool?canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&posttype=quote&tags=quotes,randomquotes&content=' + encodeURI(randomQuote.quote + ' - ' + randomQuote.author) + "&show-via=" + encodeURI("Random Quote Machine"))
  }
  
  // This renders the UI
  // The first time the page is loaded
  showQuote();
  
  // This renders the UI
  // Each time we click on new quote button
  newQuoteBtn.click(function(e) {
    e.preventDefault();
    showQuote();
  });
  
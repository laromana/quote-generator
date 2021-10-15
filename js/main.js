let quotes = {
  quote1: {
      author: "Mother Teresa",
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
  },
  quote2: {
    author: "Nelson Mandela",
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
},
quote3: {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing."
},
quote4: {
    author: "Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
},
quote5: {
    author: "Eleanor Roosevelt",
    quote: "If life were predictable it would cease to be life, and be without flavor."
},
quote6: {
    author: "Oprah Winfrey",
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
},
quote7: {
    author: "James Cameron",
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
},
quote8: {
    author: "John Lennon",
    quote: "Life is what happens when you're busy making other plans."
},
quote9: {
    author: "Mother Teresa",
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
},
quote10: {
    author: "Franklin D. Roosevelt",
    quote: "When you reach the end of your rope, tie a knot in it and hang on."
},
quote11: {
    author: "Margaret Mead",
    quote: "Always remember that you are absolutely unique. Just like everyone else."
},
quote12: {
    author: "Robert Louis Stevenson",
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant."
},
quote13: {
    author: "Eleanor Roosevelt",
    quote: "The future belongs to those who believe in the beauty of their dreams."
},
quote14: {
    author: "Benjamin Franklin",
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
},
quote15: {
    author: "Helen Keller",
    quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."
},
quote16: {
    author: "Aristotle",
    quote: "It is during our darkest moments that we must focus to see the light."
},
quote17: {
    author: "Anne Frank",
    quote: "Whoever is happy will make others happy too."
},
quote18: {
    author: "Ralph Waldo Emerson",
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
},
quote19: {
    author: "Mother Teresa",
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier."
},
quote20: {
    author: "Franklin D. Roosevelt",
    quote: "When you reach the end of your rope, tie a knot in it and hang on."
},
quote21: {
    author: "Margaret Mead",
    quote: "Always remember that you are absolutely unique. Just like everyone else."
},
quote22: {
    author: "Robert Louis Stevenson",
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant."
},
quote23: {
    author: "Eleanor Roosevelt",
    quote: "The future belongs to those who believe in the beauty of their dreams."
},
quote24: {
    author: "Benjamin Franklin",
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
},
quote25: {
    author: "Aristotle",
    quote: "It is during our darkest moments that we must focus to see the light."
}
}

let quotesLength = Object.keys(quotes).length;
let quoteCounter;
let = getQuote = () => {    
    if (quoteCounter <= quotesLength){
        let = quoteName = `quote${quoteCounter}`;
        let quoteAuthor = quotes[quoteName].author;
        let quote = quotes[quoteName].quote;
        console.log(quoteAuthor);
        authorBox.innerHTML = `-${quoteAuthor}`;
        console.log(quoteCounter);
        quoteBox.innerHTML = `"${quote}"`;
        console.log(quote);
        quoteCounter++;
        
    } else {
        quoteCounter = 1;
    }    
} 

newQuote.addEventListener("click", getQuote);
getQuote();


/* for (quoteCounter = 1; quoteCounter <= quotesLength; quoteCounter++) {}; */




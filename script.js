let quotesList;
const colors = [
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
  '#73A857',
  '#FFFA5C'
];

const getQuotes=async()=> {
  try {
  const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
  const data = await response.json();
  quotesList = data;
   }
  catch (err) {
    alert(err)
  }
  getQuote();
    }
  

const getRandomQuote=()=> {
  return quotesList.quotes[
    Math.floor(Math.random() * quotesList.quotes.length)
  ];
}

function getQuote() {
  let {quote,author} = getRandomQuote();

  document.querySelector("#text").innerText=quote;
  document.querySelector("#author").innerText=author;

  document.querySelector('#tweet-quote').setAttribute(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote + '" ' + author)
  );

  document.querySelector('#tumblr-quote').setAttribute(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(author) +
      '&content=' +
      encodeURIComponent(quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );


  let color = Math.floor(Math.random() * colors.length);

    document.body.style.transition="all ease 2s";
    document.body.style.backgroundColor=`${colors[color]}`; 
    document.body.style.color=`${colors[color]}`;

    Array.from(document.getElementsByClassName("button")).forEach(button => {
      button.style.backgroundColor=`${colors[color]}`;
      button.style.transition="background-color ease 2s";
    });
}

getQuotes();
document.querySelector("#new-quote").addEventListener("click", getQuote) ;

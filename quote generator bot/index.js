const quotes = []

function changeQuote() {
    var item =  quotes[Math.floor(Math.random()*quotes.length)];

    document.getElementById("quote").innerHTML = item;
}
const quotes = [
    "Believe you can and you're halfway there.",
    "Your only limit is your mind.",
    "Dream big and dare to fail.",
    "Push yourself, because no one else will do it for you.",
    "Don't stop when you're tired. Stop when you're done.",
    "Difficulties in life are intended to make us better, not bitter.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Act as if what you do makes a difference. It does."
];

document.getElementById("newQuote").addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = `"${randomQuote}"`;
});

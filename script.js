const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.",
    "Bananas are berries, but strawberries are not.",
    "A group of flamingos is called a 'flamboyance.'",
    "Octopuses have three hearts and blue blood.",
    "Wombat poop is cube-shaped.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "A day on Venus is longer than a year on Venus.",
    "Cows have best friends and can become stressed when they are separated.",
    "The shortest war in history lasted only 38 to 45 minutes between Britain and Zanzibar on August 27, 1896.",
    "A jiffy is an actual unit of time: 1/100th of a second."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById('fact').innerText = funFacts[randomIndex];
}

// Display a fact when the page loads
window.onload = generateFact;

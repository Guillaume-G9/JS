const messages = ["Quand la pauvreté entre par la porte, l'amour s'en va par la fenêtre", "Il est facile de nager quand on vous tient le menton", "Le fou semble sage quand il se tait", "Le bonheur n'est d'avoir tout ce que l'on désire, mais d'apprécier que l'on a.", "L'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l'équation", "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre"];

let interval = setInterval(changeColor, 3000);
let colors = ['red', 'pink', 'coral', 'orange', 'yellow', 'green'];
let index = 0;

function changeColor() {
    titleText.style.setProperty('color', colors[index++]);
    index %= colors.length;
}

function randomQuotes() {
    const randomIndex = Math.floor(Math.random() * messages.length - 1) + 1;
    document.getElementById("titleText").innerHTML = messages[randomIndex];
}
setInterval(randomQuotes, 3000);
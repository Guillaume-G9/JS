const d = new Date();

const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };

document.getElementById("date").innerHTML = ("Date Js : " + event.toLocaleDateString(undefined, options));
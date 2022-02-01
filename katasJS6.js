const d = new Date();

const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };

document.getElementById("date").innerHTML = ("Date Js : " + date.toLocaleDateString(undefined, options));
const fusion = document.getElementById('fusion');

fusion.addEventListener('click', function(fusion) {
    fusion.target.classList.toggle('fusionOff');
})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
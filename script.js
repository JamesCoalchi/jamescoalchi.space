console.log("Opened website")
function openAboutMe() {
    document.getElementById('aboutMeModal').style.display = 'block';
}

function closeAboutMe() {
    document.getElementById('aboutMeModal').style.display = 'none';
}

function openGame() {
    document.getElementById('gameModal').style.display = 'block';
}

function closeGame() {
    document.getElementById('gameModal').style.display = 'none';
}

window.onclick = function(event) {
    const aboutMeModal = document.getElementById('aboutMeModal');
    const gameModal = document.getElementById('gameModal');

    if (event.target === aboutMeModal) {
        closeAboutMe();
    } else if (event.target === gameModal) {
        closeGame();
    }
}
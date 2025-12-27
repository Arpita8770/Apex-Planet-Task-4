/* Image Carousel */
let images = [
    "https://picsum.photos/600/300?random=1",
    "https://picsum.photos/600/300?random=2",
    "https://picsum.photos/600/300?random=3"
];

let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

/* Fetch Data from API */
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("jokeText").innerText =
                data.setup + " 😂 " + data.punchline;
        })
        .catch(error => {
            document.getElementById("jokeText").innerText =
                "Error fetching joke!";
        });
}

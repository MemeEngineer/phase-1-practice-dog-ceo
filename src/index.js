console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(result => displayPic(result.message));


})

function displayPic(dogPics) {
    const main = document.getElementById('dog-image-container');
    dogPics.forEach(dogPic => {
        const img = document.createElement('img');
        img.src = dogPic
        main.appendChild(img);
    });
}
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${breedUrl}`)
        .then(response => response.json())
        .then(result => displayBreed(result.message));
})

function displayBreed(dogBreeds) {
    const main = document.getElementById('dog-breeds');
    const dogkeys = Object.keys(dogBreeds)
    dogkeys.forEach(dogBreed => {
        const dogvalue = dogBreeds[dogBreed];
        const ul = document.createElement('li');
        ul.addEventListener('click', e => {
            e.target.style.color = "green"
            e.preventDefault();
        })
        ul.innerHTML = dogBreed;
        if (dogvalue.length > 0) {
            dogvalue.forEach(dog => {
                const sub = document.createElement('ul');
                sub.addEventListener('click', e => {
                    e.target.style.color = "blue";
                    e.preventDefault();
                    e.stopPropagation();
                })
                sub.innerHTML = dog;
                ul.appendChild(sub);
            })
        }
        main.appendChild(ul);
    })

    document.getElementById('breed-dropdown').addEventListener('change', e => {
        console.log(e.target.options[e.target.options.selectedIndex].value)
    })
}

function 



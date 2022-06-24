console.log('hello')

let imageLoad = imgPath => {
    var parent  = document.getElementById('images'),
    imagePath = imgPath,
    img;
    document.getElementById('images').innerHTML = "";

    for (var i = 0; i <= 5; i++) {
    img = new Image();
    img.classList.add("item");
    img.src = imagePath;
    parent.appendChild(img);
    }
    }  

document.querySelector('#meal1').addEventListener('click', async () => imageLoad('/images/breakfast-sandwich.jpg') )
document.querySelector('#meal2').addEventListener('click', async () => imageLoad('/images/lunch-burger.jpg') )
document.querySelector('#meal3').addEventListener('click', async () => imageLoad('/images/burger-dinner.jpg') )



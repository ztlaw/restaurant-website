console.log('hello')

let imageLoad = imgPath => {
    var parent  = document.getElementById('images'),
    imagePath = imgPath,
    img;

    for (var i = 0; i <= 5; i++) {
    img = new Image();
    img.classList.add("item");
    img.src = imagePath;
    parent.appendChild(img);
    }
    }  

document.querySelector('#meal1').addEventListener('click', imageLoad('/images/breakfast-sandwich.jpg') )
document.querySelector('#meal2').addEventListener('click', imageLoad('/images/lunch-burger.jpg') )



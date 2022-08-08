 let images = [{
    img: "./images/rostov.png",
    city: "Rostov-on-Don<br/>LCD admiral",
    area: "82 m2",
    time: "3 months"
  }, 
  {
    img: "./images/sochi.png",
    city: "Sochi<br/>Thieves",
    area: "105 m2",
    time: "4 months"
  }, {
    img: "./images/rostov_p.png",
    city: "Rostov-on-Don<br/>Patriotic",
    area: "93 m2",
    time: "3 months"
  }
];

function initSlider() {
  if (!images || !images.length) return;

  let imageDesktop = document.querySelector(".image-desktop");
  let imageMobile = document.querySelector(".image-mobile");

  initImages();
  // initCities();
  // initDots();

  function initImages() {
    images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index}${index === 0 ? " active" : ""}" style="background-image:url(${image.img});"></div>`;
    console.log(imageDiv);
    imageDesktop.innerHTML += imageDiv;
    imageMobile.innerHTML += imageDiv;
      // imageDesktop.src = image.img;
      // imageMobile = imageDesktop;
    console.log(imageDesktop);
    console.log(imageMobile);
    });
  }
}


document.addEventListener("DOMContentLoaded", function() {
  initSlider();
});
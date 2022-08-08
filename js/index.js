 let images = [{
    img: "./images/rostov.png",
    h_city: "Rostov-on-Don, admiral",
    city: "Rostov-on-Don<br/>LCD admiral",
    area: "82 m2",
    time: "3 months"
  }, 
  {
    img: "./images/sochi.png",
    h_city: "Sochi Thieves",
    city: "Sochi<br/>Thieves",
    area: "105 m2",
    time: "4 months"
  }, {
    img: "./images/rostov_p.png",
    h_city: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br/>Patriotic",
    area: "93 m2",
    time: "3 months"
  }
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".image");
  let sliderArrows = document.querySelector(".detail-navigation-con");
  let sliderDots = document.querySelector(".dots");
  let sliderCities = document.querySelector(".menu-projects");
  let sliderProjectData = document.querySelector(".detail-projects");

  initImages();
  initArrows();
  initDots();
  initCities();
  projectData(0);

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index}${index === 0 ? " active" : ""}" style="background-image:url(${image.img});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        console.log(sliderImages.querySelector(".active").dataset.index);
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if(arrow.classList.contains("detail-nav-arrow-left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1
        }
        moveSlider(nextNumber);
      })
    })
  }

  function moveSlider(num) {
    // slide to needed image
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    // activate the needed dot
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    // highlighting of cities
    sliderCities.querySelector(".active").classList.remove("active");
    sliderCities.querySelector(".n" + num).classList.add("active");

    projectData(num);
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="detail-nav-item n${index}${index === 0 ? " active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".detail-nav-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initCities() {
    images.forEach((image, index) => {
      let city = `<li><button class="projects-item n${index}${index === 0 ? " active": ""}" data-index="${index}">${image.h_city}</button></li>`;
      sliderCities.innerHTML += city;
    });
    sliderCities.querySelectorAll(".projects-item").forEach(city => {
      city.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
    });
  }

  function projectData(num) {
    sliderProjectData.querySelector(".city-value").innerHTML = images[num].city; //init city name
    sliderProjectData.querySelector(".area-value").innerHTML = images[num].area; //init area 
    sliderProjectData.querySelector(".time-value").innerHTML = images[num].time; //init time period
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initSlider();
});
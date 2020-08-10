

//Next Prev Buttons
function plusSlides(evt){
  dots.forEach(dot => dot.classList.remove("active"));
  if (evt.target.name === 'next'){
    showSlides(slideIndex += 1);
  } else if (evt.target.name === 'prev'){
    showSlides(slideIndex += -1);
  } else {
    showSlides(slideIndex = parseInt(evt.target.attributes.name.value));
  }

}



function showSlides(n){

  let i;
  let slides = document.querySelectorAll(".mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

  document.querySelector(`span[name="${slideIndex}"]`).classList.add("active");
}

let slideIndex = 1;
showSlides(slideIndex);

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener('click', plusSlides);

const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener('click', plusSlides);

let dots = document.querySelectorAll(".dot");
dots.forEach(dot => {
  dot.addEventListener('click', plusSlides);
})

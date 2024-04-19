

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// product-overview section
 // Function to check if element is in viewport
 function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', function() {
    var productOverview = document.querySelector('.product-overview');
    var productImage = document.getElementById('productImage');

    // Add margin-top when scrolling from the top
    if (window.pageYOffset > 100) {
      productOverview.classList.add('margin-top-scroll');
    } else {
      productOverview.classList.remove('margin-top-scroll');
    }

    // Add margin-bottom when scrolling from the bottom
    var bottomScrollPosition = window.innerHeight + window.pageYOffset;
    if (bottomScrollPosition >= document.body.clientHeight - 100) {
      productOverview.classList.add('margin-bottom-scroll');
    } else {
      productOverview.classList.remove('margin-bottom-scroll');
    }

   // Change the image source based on the scroll position
if (isInViewport(productOverview)) {
    if (window.pageYOffset > 300) {
      productImage.src = 'https://via.placeholder.com/400x400'; // New image source for scroll position > 300
    } else {
      productImage.src = 'https://via.placeholder.com/400x350'; // New image source for scroll position <= 300
    }
  } else {
    productImage.src = 'https://via.placeholder.com/424x352'; // Default image source when product overview is not in viewport
  }
  
  });


  //pricing section start 
  let toggleBtn = document.querySelector(".toggle__btn");
let proPrice = document.querySelector("#pro");
let premiumPrice = document.querySelector("#premium");

toggleBtn.addEventListener("click", () => {
  const newPro = proPrice.innerHTML === "3.69" ? "39" : "3.69";
  proPrice.innerHTML = newPro;

  const newPremium = premiumPrice.innerHTML === "8.99" ? "99" : "8.99";
  premiumPrice.innerHTML = newPremium;
});


// faq section start

const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// testinomial start 


// testinomial End 
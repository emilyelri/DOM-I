const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
let navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];
      // make it green
        navItem.forEach(function(link) {
          return link.style.color = "green";
        });      

      // prepend and append two new navi items
        let nav = document.querySelector('nav');
        
        let homeLink = document.createElement('a');
        homeLink.href = "index.html";
        homeLink.textContent = "Home";
        homeLink.style.color = "green";
        nav.prepend(homeLink);

        let faqLink = document.createElement('a');
        faqLink.href = "";
        faqLink.textContent = "FAQ";
        faqLink.style.color = "green";
        nav.appendChild(faqLink);
        
// cta
let header = document.querySelector('.cta h1');
header.textContent = siteContent["cta"]["h1"];
let btn = document.querySelector('.cta button');
btn.textContent = siteContent['cta']['button'];
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// main-content
let contentTitles = document.querySelectorAll('.main-content h4');
let contentBlurbs = document.querySelectorAll('.main-content p');
contentTitles[0].textContent = siteContent['main-content']['features-h4'];
contentBlurbs[0].textContent = siteContent['main-content']['features-content'];
contentTitles[1].textContent = siteContent['main-content']['about-h4'];
contentBlurbs[1].textContent = siteContent['main-content']['about-content']

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

contentTitles[2].textContent = siteContent['main-content']['services-h4'];
contentBlurbs[2].textContent = siteContent['main-content']['services-content'];
contentTitles[3].textContent = siteContent['main-content']['product-h4'];
contentBlurbs[3].textContent = siteContent['main-content']['product-content'];
contentTitles[4].textContent = siteContent['main-content']['vision-h4'];
contentBlurbs[4].textContent = siteContent['main-content']['vision-content'];

// contact
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];
let contactContents = document.querySelectorAll('.contact p');
contactContents[0].textContent = siteContent['contact']['address'];
contactContents[1].textContent = siteContent['contact']['phone'];
contactContents[2].textContent = siteContent['contact']['email'];


// footer
let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
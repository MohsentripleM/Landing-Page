/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const allSections = [...document.querySelectorAll('section')];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav when the page loaded
document.addEventListener(
  'DOMContentLoaded',
  //create building navigation function
  function buildNavigationBar() {
    const uList = document.getElementById('navbar__list');
    /*adding fragment before intering the loop to
     improve performance and prevent latency in the page loading*/
    const docFragment = document.createDocumentFragment();

    //creating list items using for loop
    for (let section of allSections) {
      // list items and links creation
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');

      //locating list items
      // listItem appended in fragment for performance
      docFragment.appendChild(listItem);
      listItem.appendChild(anchor);

      //adding class menu__link to the links
      anchor.classList.add('menu__link');

      // getting the section name and adding it to the tab text
      anchor.textContent = section.getAttribute('data-nav');

      //adding the section id to the anchor
      anchor.setAttribute('href', '#' + section.id);

      // create smooth scrolling to each link in the navigation bar
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
    // adding the fragmented list items to the unordered tag
    uList.appendChild(docFragment);
  }
);
console.log('Navigation bar has been created dynamically');

//Add class 'active class' to section when appear in the viewport

window.addEventListener(
  'scroll',

  function sectionActiveClass() {
    // using the intersection class to observe the section appearing
    const observer = new IntersectionObserver(screenData, values);
    allSections.forEach((section) => {
      observer.observe(section);
    });
  }
);
// applying the active class to the section when appears in the viewport
const screenData = (entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('active-section');
  }
  // removing the active class when the section disapears
  else {
    entries[0].target.classList.remove('active-section');
  }
};

// declaring the intersection class options
const values = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6,
};

// Adding itemActive class to the link in the navigation bar
window.addEventListener(
  'scroll',

  function LinkActiveState() {
    allSections.forEach((section) => {
      //getting the anchor elements
      const activeLink = document.querySelector(`a[href='#${section.id}']`);
      //getting the of the section data
      const sectionStart = section.getBoundingClientRect().top;

      // applying the link active class when the to of the section appear in the viewport
      if (sectionStart >= -300 && sectionStart <= 300) {
        activeLink.classList.add('itemActive');
        // send the section id to the consol
        console.log(section.id);
      } else {
        // removing the active class when the section disapears
        activeLink.classList.remove('itemActive');
      }
    });
  }
);

//End of code
//Goodluck

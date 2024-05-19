
window.onload = function() {
//icon navbar
let menuIcon = document.querySelector('.menu-icon')
let navigationbar = document.querySelector('.navigationbar')
 menuIcon.onclick= () => {
  menuIcon.classList.toggle('bx-x');
  navigationbar.classList.toggle('active')
 }

// scrolling navlink and navs are connected
let sections = document.querySelectorAll('section');
let navigationLink = document.querySelectorAll('header navigation a');

window.onscroll =() => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
      
    if (top >= offset && top < offset + height)
      {
        // to activate navlinks
        navigationLinks.forEach(links =>
          {
            links.classList.remove('active');
            document.querySelector('header navigation a[href*=' + id + ']').classList.add('active');
          }
        );
      }

  });
  //sticky header
  let header =document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toggle icon and navigationbar when click navicationbar links(scroll)
}menuIcon.classList.remove('bx-x');
navigationbar.classList.remove('active')
}

// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const branches = document.querySelectorAll('.branch');

  branches.forEach((branch, index) => {
    branch.style.width = '0';
    setTimeout(() => {
      branch.style.width = `${branch.dataset.width}px`;
    }, index * 500);
  });
});
// responsive nav
const btnMenu=document.getElementById('menu');
const sideBar=document.getElementById('sideBar');

btnMenu.addEventListener('click',function(){
 sideBar.classList.toggle('active');
});


// class active nav
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

// class active pembelajaran
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.btn');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

// fiilter pembelajaran
function filterContent(category) {
    const contents = document.querySelectorAll('.card');

    contents.forEach(content => {
        const contentCategory = content.getAttribute('data-category');

        if (category === 'all' || contentCategory === category) {
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
}
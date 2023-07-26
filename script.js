document.addEventListener('DOMContentLoaded', function() {
  function smoothScrollTo(element) {
    const scrollOptions = {
      top: element.offsetTop,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      smoothScrollTo(targetElement);
    });
  });
});

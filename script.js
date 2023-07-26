document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('scrollButton');

  // Add click event listener to the button
  scrollButton.addEventListener('click', function() {
    const content = document.getElementById('content');
    const scrollOptions = {
      top: content.offsetTop, // Get the top position of the content
      behavior: 'smooth'      // Enable smooth scrolling
    };

    // Perform the smooth scrolling
    window.scrollTo(scrollOptions);
  });
});

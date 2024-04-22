
    function redirectToB2B() {
      // Add the URL of your B2B Marketplace
      window.location.href = "https://www.yourb2bmarketplace.com";
    }

    // You can show/hide sections based on user interaction or any other event
    // For example, show "SELL OLD MOBILES" section
    document.getElementById("sellMobiles").style.display = "block";

   
    
    document.addEventListener('DOMContentLoaded', function () {
        let slides = document.querySelectorAll('.slider .slide');
        let index = 0;
      
        function showSlide(n) {
          slides[index].classList.remove('active');
          index = (n + slides.length) % slides.length;
          slides[index].classList.add('active');
        }
      
        function next() {
          showSlide(index + 1);
        }
      
        function prev() {
          showSlide(index - 1);
        }
      
        setInterval(next, 5000); // Change 5000 to your desired interval in milliseconds
      });
      
      document.querySelectorAll('.slider .slide').forEach((slide, index) => {
        slide.addEventListener('mouseenter', () => {
          document.querySelectorAll('.slider .slide').forEach(s => s.classList.remove('active'));
          slide.classList.add('active');
        });
      });
      

    // Add this script to your existing JavaScript or create a new one
    // Your existing JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const dropdownContainer = document.getElementById('sellDropdown');
  const sheet = document.querySelector('.sheet');

  dropdownContainer.addEventListener('click', function () {
    sheet.classList.toggle('active');
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (event) {
    if (!dropdownContainer.contains(event.target) && !sheet.contains(event.target)) {
      sheet.classList.remove('active');
    }
  });
});
// Your existing JavaScript

     
    
    // Add an event listener to the search input field
document.getElementById('searchInput').addEventListener('keyup', function(event) {
  // Check if the user pressed the enter key (key code 13) or another action to indicate they've finished typing
  if (event.key === 'Enter') {
      // Get the search term entered by the user
      const searchTerm = this.value.trim().toLowerCase();
      
      // Load the corresponding inner page based on the search term
      loadInnerPage(searchTerm);
  }
});

// Function to load inner page content dynamically based on the search term
function loadInnerPage(searchTerm) {
  // Construct the inner page URL based on the search term
  const innerPageURL = searchTerm + ".html";
  
  // Fetch the inner page content
  fetch(innerPageURL)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          // Display the inner page content in a modal or a specific section of the page
          // For example, you can display it in a modal
          displayInnerPage(data);
      })
      .catch(error => {
          console.error('There was a problem fetching the inner page:', error);
      });
}

// Function to display inner page content
function displayInnerPage(content) {
  // Assuming you have a modal with ID 'innerPageModal' to display the content
  const modal = document.getElementById('innerPageModal');
  const modalContent = modal.querySelector('.modal-content');
  
  // Set the content of the modal
  modalContent.innerHTML = content;
  
  // Open the modal
  modal.style.display = 'block';
}


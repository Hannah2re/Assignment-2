document.addEventListener('DOMContentLoaded', function() {
    const overlayCheckbox = document.getElementById('overlayCheckbox');
    const cursorCheckbox = document.getElementById('cursorCheckbox');
    const overlay = document.querySelector('.overlay');
    const helloText = document.getElementById('helloText'); // element showing text
  
    overlayCheckbox.addEventListener('change', function() {
      if (overlayCheckbox.checked) {
        overlay.style.display = 'block'; // overay
      } else {
        overlay.style.display = 'none'; // hide overay
      }
      checkAllCheckboxes(); // check all
    });
  
    cursorCheckbox.addEventListener('change', function() {
      if (cursorCheckbox.checked) {
        document.body.classList.add('hide-cursor'); // add  hide-cursor
      } else {
        document.body.classList.remove('hide-cursor'); //remove hide-cursor 
      }
      checkAllCheckboxes(); // checkbox
    });
  
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        checkAllCheckboxes(); // checkbox
      });
    });
  
    function checkAllCheckboxes() {
      let allChecked = true;
      checkboxes.forEach(function(checkbox) {
        if (!checkbox.checked) {
          allChecked = false;
        }
      });
      if (allChecked) {
        helloText.textContent = "You did it!!!!!!!!"; // show text
      } else {
        helloText.textContent = ""; // hide text // in case else
      }
    }
  });

  const filterButton = document.getElementById('filter_button');
  const filterDropdown = document.getElementById('filter_dropdown');
  const filterOptions = document.querySelectorAll('.filter-option');

  const buttonImage = document.createElement('img');
    buttonImage.src = '/src/media/icons/filter.png';
    buttonImage.alt = 'filter icon';
    buttonImage.classList.add('size-6', 'inline');
    filterButton.appendChild(buttonImage);

  // Toggle dropdown visibility
  filterButton.addEventListener('click', () => {
    filterDropdown.classList.toggle('hidden');
  });

  // Handle option click and update button text
  filterOptions.forEach(option => {
    option.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      const selectedValue = option.getAttribute('data-value'); // Get the option's data-value
      filterButton.textContent = selectedValue; // Set the button text to the selected value
      filterButton.appendChild(buttonImage); // Re-add the filter icon
      filterDropdown.classList.add('hidden'); // Hide the dropdown after selecting
    });
  });

  // Optional: Close dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!filterButton.contains(event.target) && !filterDropdown.contains(event.target)) {
      filterDropdown.classList.add('hidden');
    }
  });


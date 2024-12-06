// Select the button and facts list
const toggleButton = document.getElementById('toggle-facts');
const factsList = document.getElementById('facts-list');

// Add event listener for button click
toggleButton.addEventListener('click', () => {
    // Toggle the hidden class on the facts list
    factsList.classList.toggle('hidden');

    // Update button text
    toggleButton.textContent = 
        factsList.classList.contains('hidden') 
        ? 'Show Fun Facts' 
        : 'Hide Fun Facts';
});

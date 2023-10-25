// Variables

const modalBtnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");
const modalContainer = document.getElementById("modal-container");

// Event listener for modal

modalBtnOpen.addEventListener('click', () => {
    modalContainer.style.display = 'block'; // Show the Modal Container when button is clicked
    modalBtnOpen.style.display = 'none';  //Hide the show text button
});

btnClose.addEventListener('click', () => {
    modalContainer.style.display = "none";  // Hide the Modal Container when close button is clicked
    modalBtnOpen.style.display = "block";  // Show the initial button
});

window.addEventListener('click', function (e) {

    if (e.target === modalContainer) {
        modalContainer.style.display = "none";  // Hide the Modal Container when other parts of the screen is clicked
    }
});
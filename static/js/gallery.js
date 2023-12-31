// gallery.js

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Log a message to indicate that the gallery script has loaded
    console.log("Gallery script loaded");

    // Function to open the modal
    function openModal(src, alt) {
        // Log a message with the source and alt text of the clicked image
        console.log("Opening modal with src:", src, "and alt:", alt);
        // Set the source and alt attributes of the modal image
        document.getElementById("modal-img").src = src;
        document.getElementById("modal-img").alt = alt;
        // Display the modal
        document.getElementById("modal").style.display = "block";
        // Center the modal within the user's view
        centerModal();
    }

    // Function to close the modal
    function closeModal() {
        // Log a message to indicate that the modal is closing
        console.log("Closing modal");
        // Hide the modal
        document.getElementById("modal").style.display = "none";
    }

    // Add click event listener to each gallery image
    document.querySelectorAll(".gallery > img").forEach((img) => {
        img.addEventListener("click", function () {
            // Log a message with the source of the clicked image
            console.log("Image clicked:", this.src);
            // Open the modal with the clicked image
            openModal(this.src, this.alt);
        });
    });

    // Add click event listener to close the modal when clicking outside the modal content
    document.getElementById("modal").addEventListener("click", function (event) {
        if (event.target === this) {
            closeModal();
        }
    });

    // Add click event listener to close button
    document.getElementById("close-btn").addEventListener("click", function () {
        // Close the modal when the close button is clicked
        closeModal();
    });

    // Add a resize event listener to re-center the modal when the window is resized
    window.addEventListener("resize", function () {
        centerModal();
    });

    // Function to center the modal within the user's view
    function centerModal() {
        var modal = document.getElementById("modal");
        // Set the top position dynamically based on the user's current scroll position and window height
        modal.style.top = `${window.scrollY + window.innerHeight / 2}px`;
    }
});
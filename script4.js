document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('scholarshipForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Collect form data
        const formData = new FormData(form);

        // Simulate form submission (you would typically send this data to a server)
        // Here, we'll just show a success message
        setTimeout(() => {
            form.reset(); // Reset form fields
            successMessage.classList.remove('hidden'); // Show success message
            setTimeout(() => {
                successMessage.classList.add('hidden'); // Hide success message after delay
                window.location.href = 'newproject.html'; // Redirect to index.html after submission

            }, 3000); // Hide success message after 3 seconds
        }, 1000); // Simulate processing delay (1 second)
    });
});

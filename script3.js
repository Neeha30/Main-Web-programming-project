document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(form);

        // Get selected interests
        const interestsSelect = document.getElementById('interests');
        const selectedInterests = [];
        for (let i = 0; i < interestsSelect.options.length; i++) {
            if (interestsSelect.options[i].selected) {
                selectedInterests.push(interestsSelect.options[i].value);
            }
        }
        formData.append('selectedInterests', selectedInterests.join(', '));

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            form.reset(); // Reset the form after submission
            successMessage.classList.remove('hidden');
            setTimeout(() => {
                successMessage.classList.add('hidden');
                window.location.href = 'newproject.html'; // Redirect to index.html after submission
            }, 3000); // Hide success message after 3 seconds
        }, 1000); // Simulate server response delay
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const amountStep = document.getElementById('amountStep');
    const detailsStep = document.getElementById('detailsStep');
    const paymentStep = document.getElementById('paymentStep');
    const nextToDetailsBtn = document.getElementById('nextToDetailsBtn');
    const prevToAmountBtn = document.getElementById('prevToAmountBtn');
    const nextToPaymentBtn = document.getElementById('nextToPaymentBtn');
    const prevToDetailsBtn = document.getElementById('prevToDetailsBtn');
    const submitBtn = document.getElementById('submitBtn');
    const customAmountRadio = document.getElementById('customAmount');
    const customInput = document.getElementById('customInput');
    const selectedAmountDisplay = document.getElementById('selectedAmountDisplay');
    const errorMessage = document.querySelector('.error-message');

    // Initialize selected amount display
    selectedAmountDisplay.textContent = '';

    // Move to Details Step
    nextToDetailsBtn.addEventListener('click', function() {
        if (validateAmountSelection()) {
            amountStep.classList.add('hidden');
            detailsStep.classList.remove('hidden');
        }
    });

    // Move to Payment Step
    nextToPaymentBtn.addEventListener('click', function() {
        if (validateUserDetails()) {
            detailsStep.classList.add('hidden');
            paymentStep.classList.remove('hidden');
        }
    });

    // Move to Amount Step
    prevToAmountBtn.addEventListener('click', function() {
        detailsStep.classList.add('hidden');
        amountStep.classList.remove('hidden');
    });

    // Move to Details Step
    prevToDetailsBtn.addEventListener('click', function() {
        paymentStep.classList.add('hidden');
        detailsStep.classList.remove('hidden');
    });

    // Validate Amount Selection
    function validateAmountSelection() {
        const selectedAmount = document.querySelector('input[name="donationAmount"]:checked');
        if (!selectedAmount) {
            errorMessage.textContent = 'Please select a donation amount.';
            return false;
        }

        if (selectedAmount.value === 'custom') {
            const customAmount = customInput.value.trim();
            if (customAmount === '') {
                errorMessage.textContent = 'Please enter a custom donation amount.';
                return false;
            }
            selectedAmountDisplay.textContent = `Selected Amount: Rs.${customAmount}`;
        } else {
            selectedAmountDisplay.textContent = `Selected Amount: Rs.${selectedAmount.value}`;
        }
        
        errorMessage.textContent = '';
        return true;
    }

    // Validate User Details
    function validateUserDetails() {
        const userDetailsInputs = document.querySelectorAll('#detailsStep input');
        for (const input of userDetailsInputs) {
            if (!input.value.trim()) {
                errorMessage.textContent = 'Please fill in all required fields.';
                return false;
            }
        }
        errorMessage.textContent = '';
        return true;
    }

    // Handle custom amount input
    customAmountRadio.addEventListener('change', function() {
        if (this.checked) {
            customInput.removeAttribute('disabled');
            customInput.focus();
            selectedAmountDisplay.textContent = ''; // Clear display for custom amount
        } else {
            customInput.setAttribute('disabled', 'true');
            customInput.value = ''; // Clear custom amount input if disabled
        }
    });

    // Handle custom amount input change
    customInput.addEventListener('input', function() {
        const customAmount = customInput.value.trim();
        if (customAmount !== '') {
            selectedAmountDisplay.textContent = `Selected Amount: Rs.${customAmount}`;
        } else {
            selectedAmountDisplay.textContent = ''; // Clear display if custom amount is empty
        }
    });

    // Validate Payment Details
    function validatePaymentDetails() {
        const paymentDetailsInputs = document.querySelectorAll('#paymentStep input');
        for (const input of paymentDetailsInputs) {
            if (!input.value.trim()) {
                errorMessage.textContent = 'Please fill in all required fields.';
                return false;
            }
        }
        errorMessage.textContent = '';
        return true;
    }

    // Submit Donation
    submitBtn.addEventListener('click', function() {
        if (validatePaymentDetails()) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your donation!');
            window.location.href = 'newproject.html'; // Redirect to home page
        }
    });
});

document.getElementById('sendOtpBtn').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phone').value;
    
    // Here you would typically send a request to your backend to send an OTP
    // For demonstration, we'll just show the OTP section
    if (phoneNumber) {
        alert(`OTP sent to ${phoneNumber}`); // Simulate sending OTP
        document.getElementById('otpSection').style.display = 'block';
        document.getElementById('verifyOtpBtn').style.display = 'block';
    } else {
        alert('Please enter a valid phone number');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const otp = document.getElementById('otp').value;
    
    // Here you would typically verify the OTP with your backend
    // For demonstration, we’ll just check if it’s not empty
    if (otp) {
        alert('OTP verified! You are signed up.'); // Simulate successful signup
    } else {
        alert('Please enter the OTP sent to your phone');
    }
});

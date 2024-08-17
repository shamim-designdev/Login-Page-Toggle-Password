function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/invisible.png'; 
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/visible.png'; 
    }
}

function validateForm(){
    //clear  previous error message
    document.querySelectorAll('.error').forEach(error => error.textContent='');
    let isValid = true;

    //validate personal infomation
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const gender = document.getElementById('gender').value;
    const race = document.getElementById('race').value;
    const dbirth = document.getElementById('dbirth').value;
    const pbirth = document.getElementById('pbirth').value.trim();

    //Account details validation
    const  email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirmEmail').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    //validate functions
    function isValidEmail(email){
        return email === ''||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPassword(password){
        return password === ''||(
            password.length >= 8 &&
            /[A-Z]/.test(password)&&
            /[0-9]/.test(password)&&
            /[^A-Za-z0-9]/.test(password)
        );
    }

    function isValidDate(dateString){
        if(dateString === '') return true;
        const date = new Date(dateString);
        return date instanceof Date && !isNaN(date) && date < new Date();
    }
}
const nameEle = document.getElementById('name');
const emailEle = document.getElementById('email');
const passwordEle = document.getElementById('password');
const phoneNumberEle = document.getElementById('phoneNumber')
const isAdminEle = document.getElementById('isAdmin');

    
async function signupform() {
       
        const name = nameEle.value;
        const email = emailEle.value;
        const password = passwordEle.value;
        const phoneNumber = phoneNumberEle.value;
        const isAdmin     = isAdminEle.value;
const response = await fetch("/signup", {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify ({
            name : name,
            email : email,
            password : password,
            phoneNumber : phoneNumber,
            isAdmin : isAdmin
        })
})
    if(response) {
        window.location.assign("login.html");
    }
}

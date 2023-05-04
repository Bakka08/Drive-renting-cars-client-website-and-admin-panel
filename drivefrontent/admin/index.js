let conn_user
document.getElementById('login-btn').addEventListener('click', async () => {
 
 const email = document.getElementById("email1").value;
 const password = document.getElementById("password1").value;

 if (email === '' || password === '') {
	alert('Email and password are required.')
	return
 }

 const response = await fetch(`http://localhost:8000/login/?email=${email}&password=${password}`);

 
 const userData = await response.json();

 if (response.status === 404) {
   console.log('User not found.');
   return;
 }


 if (userData.is_admin) {
   conn_user = userData;   
   document.getElementById("login-section").style.display="none";
   document.getElementById("main").style.display="block";
   document.getElementById("dashboard").style.display="block";
   document.getElementById("cars-page").style.display="none";
   document.getElementById("users-page").style.display="none";
   document.getElementById("order-page").style.display="none";
   document.getElementById("profile-page").style.display="none";
   document.getElementById("settings-page").style.display="none";
   document.getElementById("nav-home").className="nav-link active";
   document.getElementById("nav-cars").className="nav-link ";
   document.getElementById("nav-users").className="nav-link ";
   document.getElementById("nav-orders").className="nav-link ";
   
 }
});

document.getElementById("nav-home").addEventListener('click', async () => {
    document.getElementById("login-section").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("dashboard").style.display="block";
    document.getElementById("cars-page").style.display="none";
    document.getElementById("users-page").style.display="none";
    document.getElementById("order-page").style.display="none";
    document.getElementById("profile-page").style.display="none";
    document.getElementById("settings-page").style.display="none";
    document.getElementById("nav-home").className="nav-link active";
    document.getElementById("nav-cars").className="nav-link ";
    document.getElementById("nav-users").className="nav-link ";
    document.getElementById("nav-orders").className="nav-link ";


});

document.getElementById("nav-cars").addEventListener('click', async () => {
    document.getElementById("login-section").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("cars-page").style.display="block";
    document.getElementById("users-page").style.display="none";
    document.getElementById("order-page").style.display="none";
    document.getElementById("profile-page").style.display="none";
    document.getElementById("settings-page").style.display="none";
    document.getElementById("nav-home").className="nav-link ";
    document.getElementById("nav-cars").className="nav-link active";
    document.getElementById("nav-users").className="nav-link ";
    document.getElementById("nav-orders").className="nav-link ";

});

document.getElementById("nav-users").addEventListener('click', async () => {
    document.getElementById("login-section").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("cars-page").style.display="none";
    document.getElementById("users-page").style.display="block";
    document.getElementById("order-page").style.display="none";
    document.getElementById("profile-page").style.display="none";
    document.getElementById("settings-page").style.display="none";
    document.getElementById("nav-home").className="nav-link ";
    document.getElementById("nav-cars").className="nav-link ";
    document.getElementById("nav-users").className="nav-link active";
    document.getElementById("nav-orders").className="nav-link ";

});

document.getElementById("nav-orders").addEventListener('click', async () => {
    document.getElementById("login-section").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("cars-page").style.display="none";
    document.getElementById("users-page").style.display="none";
    document.getElementById("order-page").style.display="block";
    document.getElementById("profile-page").style.display="none";
    document.getElementById("settings-page").style.display="none";
    document.getElementById("nav-home").className="nav-link ";
    document.getElementById("nav-cars").className="nav-link ";
    document.getElementById("nav-users").className="nav-link ";
    document.getElementById("nav-orders").className="nav-link active";

});

document.getElementById("nav-settings").addEventListener('click', async () => {
    document.getElementById("login-section").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("cars-page").style.display="none";
    document.getElementById("users-page").style.display="none";
    document.getElementById("order-page").style.display="none";
    document.getElementById("profile-page").style.display="none";
    document.getElementById("settings-page").style.display="block";
    document.getElementById("nav-home").className="nav-link ";
    document.getElementById("nav-cars").className="nav-link ";
    document.getElementById("nav-users").className="nav-link ";
    document.getElementById("nav-orders").className="nav-link ";

});


document.getElementById("nav-profile").addEventListener('click', async () => {
    document.getElementById("login-section").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("cars-page").style.display="none";
    document.getElementById("users-page").style.display="none";
    document.getElementById("order-page").style.display="none";
    document.getElementById("profile-page").style.display="block";
    document.getElementById("settings-page").style.display="none";
    document.getElementById("nav-home").className="nav-link ";
    document.getElementById("nav-cars").className="nav-link ";
    document.getElementById("nav-users").className="nav-link ";
    document.getElementById("nav-orders").className="nav-link ";

});

document.getElementById("nav-logout").addEventListener('click', async () => {
    conn_user=null;
    document.getElementById("login-section").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("cars-page").style.display="none";
    document.getElementById("users-page").style.display="none";
    document.getElementById("order-page").style.display="none";
    document.getElementById("profile-page").style.display="none";
    document.getElementById("settings-page").style.display="none";
    document.getElementById("nav-home").className="nav-link ";
    document.getElementById("nav-cars").className="nav-link ";
    document.getElementById("nav-users").className="nav-link ";
    document.getElementById("nav-orders").className="nav-link ";

});

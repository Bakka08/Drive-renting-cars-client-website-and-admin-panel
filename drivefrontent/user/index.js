
let searchData;
 let apiData;
 let conn_user;

const loginLink = document.getElementById('login-link');
const loginLink2 = document.getElementById('login-link2');
const tosignup = document.getElementById('tosignup');
const tologin = document.getElementById('tologin');
const herowrap= document.querySelector('.hero-wrap');
const navbar= document.querySelector('.navbar ');
const section= document.querySelector('.ftco-section ');
const counter= document.querySelector('.ftco-counter ');
const fotter= document.querySelector('.ftco-footer ');
const about = document.getElementById('about');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const selection = document.getElementById('selection');
const list = document.getElementById("list");
const settings = document.getElementById("settings-link");
const section3 = document.getElementById("section3");
const back = document.getElementById("back-link");
loginLink.addEventListener('click', (event) => {
 event.preventDefault();
 herowrap.style.display = 'none';
 section.style.display = 'none';
 counter.style.display = 'none';
 fotter.style.display = 'none';
 about.style.display ='none';
 login.style.display = 'block';
 signup.style.display = 'none';
 section1.style.display = 'none';
 section2.style.display = 'none';
 list.style.display = 'none';
});

loginLink2.addEventListener('click', (event) => {
 event.preventDefault();
 herowrap.style.display = 'none';
 section.style.display = 'none';
 counter.style.display = 'none';
 fotter.style.display = 'none';
 about.style.display ='none';
 login.style.display = 'block';
 signup.style.display = 'none';
 section1.style.display = 'none';
 section2.style.display = 'none';
 selection.style.display = 'none';
 list.style.display = 'none';
});

tosignup.addEventListener('click', (event) => {
 event.preventDefault();
 herowrap.style.display = 'none';
 section.style.display = 'none';
 counter.style.display = 'none';
 fotter.style.display = 'none';
 login.style.display = 'none';
 signup.style.display = 'block';
 section2.style.display = 'none';
 list.style.display = 'none';
});


tologin.addEventListener('click', (event) => {
 event.preventDefault();
 herowrap.style.display = 'none';
 section.style.display = 'none';
 counter.style.display = 'none';
 fotter.style.display = 'none';
 login.style.display = 'block';
 signup.style.display = 'none';
 section2.style.display = 'none'
 list.style.display = 'none';
});
const profile = document.getElementById("profile")
settings.addEventListener('click', (event) => {
 event.preventDefault();
 herowrap.style.display = 'none';
 section.style.display = 'none';
 counter.style.display = 'none';
 fotter.style.display = 'block';
 about.style.display ='none';
 login.style.display = 'none';
 signup.style.display = 'none';
 section1.style.display = 'none';
 section2.style.display = 'none';
 selection.style.display = 'none';
 list.style.display = 'none';
 section3.style.display = "block"
 profile.style.display="block"
 
});

back.addEventListener('click', (event) => {
herowrap.style.display = 'block';
section.style.display = 'none';
counter.style.display = 'block';
fotter.style.display = 'block';
about.style.display ='block';
login.style.display = 'none';
signup.style.display = 'none';
section1.style.display = 'none';
section2.style.display = 'block';
selection.style.display = 'block';
list.style.display = 'none';
section3.style.display = "none"
profile.style.display="none"
document.getElementById("updatelist").style.display = "none";
document.getElementById("m_btn").style.display = "block";

});



const emailInput = document.getElementById('email1');
const passwordInput = document.getElementById('password1');


const loginButton = document.getElementById('login-btn');


loginButton.addEventListener('click', async () => {

const email = emailInput.value;
const password = passwordInput.value;

if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
alert('Email and password are required.');
return;
}

const response = await fetch(`http://localhost:8000/login/?email=${email}&password=${password}`);


const userData = await response.json();

if (response.status === 404) {
console.log('User not found.');
return;
}


if (userData.is_admin) {
console.log('User is an admin!');

} else {
conn_user = userData;


document.getElementById("password1").value = "";
document.getElementById("email1").value = "";
herowrap.style.display = 'block';
section.style.display = 'none';
counter.style.display = 'block';
fotter.style.display = 'block';
about.style.display ='block';
login.style.display = 'none';
signup.style.display = 'none';
section1.style.display = 'none';
section2.style.display = 'block';
selection.style.display = 'block';
list.style.display = 'none';
document.getElementById('fname3').textContent = conn_user.fname + ' ' + conn_user.lname;
document.getElementById('email3').textContent = conn_user.email;
document.getElementById('phone3').textContent = conn_user.telephone;
}
});


function createUser() {
   // retrieve input values
   const fname = document.getElementById('fnamee').value;
   const lname = document.getElementById('lnamee').value;
   const email = document.getElementById('emaile').value;
   const telephone = document.getElementById('telephonee').value;
   const password1 = document.getElementById('password1e').value;
   const password2 = document.getElementById('password2e').value;

   // validate input values
   if (!fname || !lname || !email || !telephone || !password1|| !password2) {
     alert('Please fill in all fields.');
     return;
   }
   if (password1 !== password2) {
       alert('Passwords do not match.');
       return;
}

   // send data to API
   fetch('http://localhost:8000/signup/', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       fname: fname,
       lname: lname,
       email: email,
       telephone: telephone,
       password: password1,
       is_admin: false
     })
   })
   .then(response => {
     if (response.ok) {
       herowrap.style.display = 'none';
           section.style.display = 'none';
           counter.style.display = 'none';
           fotter.style.display = 'none';
           login.style.display = 'block';
           signup.style.display = 'none';
           section2.style.display = 'none'
           list.style.display = 'none';
     } else {
       alert('Failed to create user.');
     }
   })
   .catch(error => {
     console.error(error);
     alert('An error occurred while creating the user.');
   });
 }




function search() {
// Read input values
const city1 = document.getElementById("city1").value;
const city2 = document.getElementById("city2").value;
const date1 = formatDate(document.getElementById("book_pick_date").value);
const date2 = formatDate(document.getElementById("book_off_date").value);
const time = document.getElementById("time_pick").value;

// Check that all input values are not empty
if (!city1 || !city2 || !date1 || !date2 || !time) {
alert("Please fill in all required fields.");
return;
}

// Check that date1 is not later than date2
if (new Date(date1) > new Date(date2)) {
alert("Pick-up date must be before drop-off date.");
return;
}

// Construct API endpoint URL
const url = `http://localhost:8000/search/?date1=${date1}&date2=${date2}`;

// Send GET request to API endpoint
fetch(url)
.then(response => response.json())
.then(data => {
 
 searchData = {
   city1: city1,
   city2: city2,
   date1: date1,
   date2: date2,
   time: time,
 };
 apiData = data.cars.map(car => Object.values(car)); // transform cars objects to an array with each car as a line



herowrap.style.display = 'block';
section.style.display = 'none';
counter.style.display = 'none';
fotter.style.display = 'block';
about.style.display ='none';
login.style.display = 'none';
signup.style.display = 'none';
section1.style.display = 'none';
section2.style.display = 'none';
section3.style.display = 'block';
selection.style.display = 'none';
list.style.display = 'block';
displayCars(apiData);
})
.catch(error => {
 // Handle error
 console.error(error);
});

}


function formatDate(dateString) {
// Parse input date string to Date object
const date = new Date(dateString);

// Format date in yyyy-mm-dd format
const year = date.getFullYear();
const month = padZeroes(date.getMonth() + 1, 2);
const day = padZeroes(date.getDate(), 2);
return `${year}-${month}-${day}`;
}

function padZeroes(number, length) {
// Helper function to pad zeroes to a number
return number.toString().padStart(length, "0");
}

function generateCarHTML(car) {
return `
<div style="width: 33.33%; float: left; padding: 10px;">
 <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 3px 20px rgba(0,0,0,0.2);">
   <div style="height: 200px; background-size: cover; background-position: center; border-radius: 10px ; background-image: url(${car[3]});">
   </div>
   <div style="padding: 20px;">
     <h2 style="margin: 0; font-size: 24px;">${car[2]}</h2>
     <span style="color: black;">${car[1]}</span>
     <div style="margin: 10px 0;">
       <p class="price" style="margin: 0; color: #188cfc;">${car[9]}Dh <span style="color: black;">/day</span></p>
       <p class="price" style="margin: 0; color: #188cfc;">${car[9]*10}Dh <span style="color: black;">/Your trip </span></p>
     </div>
     <p style="margin: 0;">
   <button onclick="createReservation('${car[0]}','${conn_user.id}' ,'${searchData.city1}','${searchData.city2}','${searchData.date1}','${searchData.date2}','${searchData.time}')" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; border-radius: 5px; text-decoration: none; transition: background-color 0.3s ease;" class="btn btn-primary py-2 mr-1">Book now</button>
   <button onclick="details('${car[0]}' , '${car[1]}', '${car[2]}', '${car[3]}', '${car[4]}', '${car[5]}', '${car[6]}', '${car[7]}', '${car[8]}', '${car[9]}')" style="display: inline-block; padding: 10px 20px; background-color: #fff; color: #007bff; border-radius: 5px; border: 1px solid #007bff; text-decoration: none; transition: background-color 0.3s ease;" class="btn btn-secondary py-2 ml-1">Details</button>
</p>        </div>
 </div>
</div>
`;
}


function displayCars(data) {
if (!data) {
return;
}
const carContainer = document.getElementById("list");
let carHTML = '<div class="container" >';
carHTML += '<div class="row">';
for (let i = 0; i < data.length; i++) {
carHTML += generateCarHTML(data[i]);
}
carHTML += '</div>';
carHTML += '</div>';

carContainer.innerHTML = carHTML;
}



function details(id, mark, type, image, mileage, transmission, seats, luggage, fuel, price) {

var popup = document.getElementById("popup");
popup.style.display = "block";
var img = popup.querySelector(".img");
var subheading = popup.querySelector(".subheading");
var h2 = popup.querySelector("h2");
var mileageSpan = popup.querySelector(".mileage span");
var transmissionSpan = popup.querySelector(".transmission span");
var seatsSpan = popup.querySelector(".seats span");
var luggageSpan = popup.querySelector(".luggage span");
var fuelSpan = popup.querySelector(".fuel span");
// Update the content of the popup with the passed data
img.style.backgroundImage = "url(" + image + ")";
subheading.textContent = mark;
h2.textContent = type;
mileageSpan.textContent = mileage;
transmissionSpan.textContent = transmission;
seatsSpan.textContent = seats;
luggageSpan.textContent = luggage;
fuelSpan.textContent = fuel;

}


function closepop() {
var popup = document.getElementById("popup");
popup.style.display = "none";
}



function displayProfile() {
let fname = document.getElementById("input_fname").value=conn_user.fname;
let lname = document.getElementById("input_lname").value=conn_user.lname;
let email = document.getElementById("input_email").value=conn_user.email;
let telephone = document.getElementById("input_telephone").value=conn_user.telephone;
document.getElementById("updatelist").style.display = "block";
document.getElementById("m_btn").style.display = "none";
}

function updateUser() {
       // Get the user ID from the URL
       var user_id = conn_user.id;

       // Get the updated user data from the input fields
       var updated_data = {
           'fname': document.getElementById('input_fname').value,
           'lname': document.getElementById('input_lname').value,
           'email': document.getElementById('input_email').value,
           'telephone': document.getElementById('input_telephone').value,
           'password': document.getElementById('input_newpass').value,
           
       };
       if (document.getElementById('input_oldpass').value !== conn_user.password) {
              alert('Please enter your current password correctly.');
              return;
           }
       if (document.getElementById('input_newpass').value !== document.getElementById('input_confnewpass').value) {
           alert('New password and confirm password do not match.');
           return;
           }

           if (document.getElementById('input_newpass').value === '') {
               alert('New password cannot be empty.');
               return;
               }

           if (document.getElementById('input_newpass').value !== document.getElementById('input_confnewpass').value) {
               alert('New password and confirm password do not match.');
               return;
               }


       fetch('http://localhost:8000/update/' + user_id + '/', {
   method: 'POST',
   headers: {
       'Content-Type': 'application/json',
   },
   body: JSON.stringify(updated_data),
})

       .then(function(response) {
           if (response.ok) {
               alert('updated successfully!');
               conn_user.fname=document.getElementById('input_fname').value;
               conn_user.lname=document.getElementById('input_lname').value;
               conn_user.email=document.getElementById('input_email').value;
               conn_user.telephone=document.getElementById('input_telephone').value;
               conn_user.password=document.getElementById('input_newpass').value;
               herowrap.style.display = 'block';
               section.style.display = 'none';
               counter.style.display = 'block';
               fotter.style.display = 'block';
               about.style.display ='block';
               login.style.display = 'none';
               signup.style.display = 'none';
               section1.style.display = 'none';
               section2.style.display = 'block';
               selection.style.display = 'block';
               list.style.display = 'none';
               section3.style.display = "none"
               profile.style.display="none"
               document.getElementById("updatelist").style.display = "none";
               document.getElementById("m_btn").style.display = "block";
               document.getElementById('fname3').textContent = conn_user.fname + ' ' + conn_user.lname;
               document.getElementById('email3').textContent = conn_user.email;
               document.getElementById('phone3').textContent = conn_user.telephone;

           } else {
               alert('Failed to update .');
           }
       });
   }

   function createReservation(voitureId,utilisateurId ,locationDebut,locationFin,dateDebut,dateFin,pikeup_date) {
    const status = "pending"
  
    const data = {
      voiture_id: voitureId,
      utilisateur_id: utilisateurId,
      location_debut: locationDebut,
      location_fin: locationFin,
      date_debut: dateDebut,
      date_fin: dateFin,
      pikeup_date: pikeup_date,
      status: status
    };
    
  
    fetch('http://localhost:8000/create_reservation/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      alert('Reservation created successfully:', data);
      
    })
    .catch(error => {
      alert('Error creating reservation:', error);
      
    });
  }
  
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
   document.getElementById("list").style.display="none";
   
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
    document.getElementById("list").style.display="none";


});

document.getElementById("nav-cars").addEventListener('click', async () => {
    document.getElementById("login-section").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("list").style.display="block";
    document.getElementById("cars-page").style.display="block";
    document.getElementById("users-page").style.display="none";
    document.getElementById("order-page").style.display="none";
    document.getElementById("profile-page").style.display="none";
    document.getElementById("settings-page").style.display="none";
    document.getElementById("nav-home").className="nav-link ";
    document.getElementById("nav-cars").className="nav-link active";
    document.getElementById("nav-users").className="nav-link ";
    document.getElementById("nav-orders").className="nav-link ";
    getCars();


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
    document.getElementById("list").style.display="none";
    getUsers();
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
    document.getElementById("list").style.display="none";
    fetchReservations();
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
    document.getElementById("list").style.display="none";

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
    document.getElementById("list").style.display="none";

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
    document.getElementById("list").style.display="none";

});



function getCars() {
    fetch('http://localhost:8000/cars/')
      .then(response => response.json())
      .then(data => {
          displayCars(data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
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
    
    carContainer.innerHTML = carHTML;}  
    function generateCarHTML(car) {
        return `
          <div style="width: 33.33%; float: left; padding: 10px;">
            <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 3px 20px rgba(0,0,0,0.2);">
              <div style="height: 200px; background-size: cover; background-position: center; border-radius: 10px ; background-image: url(${car.image});">
              </div>
              <div style="padding: 20px;">
                <h2 style="margin: 0; font-size: 24px;">${car.type}</h2>
                <span style="color: black;">${car.mark}</span>
                <div style="margin: 10px 0;">
                  
                  <p class="price" style="margin: 0; color: #188cfc;"><span style="color: black;">Mileage : </span>${car.Mileage} </p>
                  <p class="price" style="margin: 0; color: #188cfc;"><span style="color: black;">Transmission : </span>${car.Transmission} </p>
                  <p class="price" style="margin: 0; color: #188cfc;"><span style="color: black;">Seats : </span>${car.Seats} </p>
                  <p class="price" style="margin: 0; color: #188cfc;"><span style="color: black;">Luggage : </span>${car.Luggage} </p>
                  <p class="price" style="margin: 0; color: #188cfc;"><span style="color: black;">Fuel : </span>${car.Fuel} </p>
                  <p class="price" style="margin: 0; color: #188cfc;"><span style="color: black;">Price : </span>${car.price} </p>
               
                </div>
                <p style="margin: 0;">
              <button onclick="deleteCar(${car.id})" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; border-radius: 5px; text-decoration: none; transition: background-color 0.3s ease;" class="btn btn-primary py-2 mr-1">Delete</button>
              <button  style="display: inline-block; padding: 10px 20px; background-color: #fff; color: #007bff; border-radius: 5px; border: 1px solid #007bff; text-decoration: none; transition: background-color 0.3s ease;" class="btn btn-secondary py-2 ml-1">update</button>
          </p>        </div>
            </div>
          </div>
        `;
      }


      function updateCar(carId) {
        const mark = document.getElementById('mark-input').value;
        const type = document.getElementById('type-input').value;
        const image = document.getElementById('image-input').value;
        const mileage = document.getElementById('mileage-input').value;
        const transmission = document.getElementById('transmission-input').value;
        const seats = document.getElementById('seats-input').value;
        const luggage = document.getElementById('luggage-input').value;
        const fuel = document.getElementById('fuel-input').value;
        const price = document.getElementById('price-input').value;
      
        const data = {
          mark: mark,
          type: type,
          image: image,
          Mileage: mileage,
          Transmission: transmission,
          Seats: seats,
          Luggage: luggage,
          Fuel: fuel,
          price: price
        };
      
        fetch(`http://localhost:8000/cars/${carId}/update/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
          console.error('Error updating car:', error);
        });
      }
      
      function deleteCar(Id) {
        console.log(Id)
        fetch(`http://localhost:8000/deletecar/${Id}/`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => { 
        })
        .catch(error => {
          console.error('Error deleting car:', error);
        });
      }
      

      function getUsers() {
        fetch('http://localhost:8000/users/')
          .then(response => response.json())
          .then(data => {
            const tableBody = document.getElementById('tr-list');
            tableBody.innerHTML = '';
            
      
            data.users.forEach(user => {
              if(user.is_admin == 0 ){
              const row = document.createElement('tr');
              
      
              const idCol = document.createElement('td');
              idCol.textContent = user.id;
              row.appendChild(idCol);
      
              const nameCol = document.createElement('td');
              nameCol.textContent = `${user.fname} ${user.lname}`;
              row.appendChild(nameCol);
      
              const emailCol = document.createElement('td');
              emailCol.textContent = user.email;
              row.appendChild(emailCol);
      
              const telephoneCol = document.createElement('td');
              telephoneCol.textContent = user.telephone;
              row.appendChild(telephoneCol);
              
              const passwordCol = document.createElement('td');
              passwordCol.textContent = "*********"
              row.appendChild(passwordCol);    
              tableBody.appendChild(row);}
            });
          })
          .catch(error => console.error(error));
      }
      


      function fetchReservations() {
        
        fetch('http://localhost:8000/reservations/')
          .then(response => response.json())
          .then(data => {
            const tableBody = document.getElementById('all');
            const tableBody1 = document.getElementById('paid');
            const tableBody2 = document.getElementById('pending');
            const tableBody3 = document.getElementById('cancelled');
            const tableBody4 = document.getElementById('ongoing');
            tableBody.innerHTML = '';
            tableBody1.innerHTML = '';
            tableBody2.innerHTML = '';
            tableBody3.innerHTML = '';
            tableBody4.innerHTML = '';
            let classe;
            data.reservations.forEach(reservation => {
              if(reservation.status === "paid"){
                classe="badge bg-success";
                const row = document.createElement('tr');
                console.log( reservation.voiture.price * calculateDaysBetweenDates(reservation.date_debut, reservation.date_fin));
                row.innerHTML = `
                  <td class="cell">#${reservation.id}</td>
                  <td class="cell"><span class="truncate">${reservation.voiture.mark} - ${reservation.voiture.type}</span></td>
                  <td class="cell">${reservation.utilisateur.fname} - ${reservation.utilisateur.lname}</td>
                  <td class="cell"><span>${reservation.date_debut}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span>${reservation.date_fin}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span class="${classe}">${reservation.status}</span></td>
                  <td class="cell">${reservation.voiture.price * calculateDaysBetweenDates(reservation.date_debut, reservation.date_fin)}Dh</td>
                  <td class="cell"><button class="badge bg-success" >Paid</button></td>
                  <td class="cell"><button class="badge bg-warning" >Pending</button></td>
                  <td class="cell"><button class="badge bg-danger" >Cancelled</button></td>
                  <td class="cell"><button class="badge bg-secondary" >ongoing</button></td>
                `;
                tableBody1.appendChild(row);
                
              }else if(reservation.status === "pending"){
                classe="badge bg-warning" ;
                const row = document.createElement('tr');
                row.innerHTML = `
                  <td class="cell">#${reservation.id}</td>
                  <td class="cell"><span class="truncate">${reservation.voiture.mark} - ${reservation.voiture.type}</span></td>
                  <td class="cell">${reservation.utilisateur.fname} - ${reservation.utilisateur.lname}</td>
                  <td class="cell"><span>${reservation.date_debut}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span>${reservation.date_fin}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span class="${classe}">${reservation.status}</span></td>
                  <td class="cell">${reservation.voiture.price * calculateDaysBetweenDates(reservation.date_debut, reservation.date_fin)}Dh</td>
                  <td class="cell"><button class="badge bg-success" >Paid</button></td>
                  <td class="cell"><button class="badge bg-warning" >Pending</button></td>
                  <td class="cell"><button class="badge bg-danger" >Cancelled</button></td>
                  <td class="cell"><button class="badge bg-secondary" >ongoing</button></td>
                `;
                tableBody2.appendChild(row);
                
              }else if(reservation.status === "cancelled"){
                classe="badge bg-danger";
                const row = document.createElement('tr');
                row.innerHTML = `
                  <td class="cell">#${reservation.id}</td>
                  <td class="cell"><span class="truncate">${reservation.voiture.mark} - ${reservation.voiture.type}</span></td>
                  <td class="cell">${reservation.utilisateur.fname} - ${reservation.utilisateur.lname}</td>
                  <td class="cell"><span>${reservation.date_debut}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span>${reservation.date_fin}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span class="${classe}">${reservation.status}</span></td>
                  <td class="cell">${reservation.voiture.price * calculateDaysBetweenDates(reservation.date_debut, reservation.date_fin)}Dh</td>
                  <td class="cell"><button class="badge bg-success" >Paid</button></td>
                  <td class="cell"><button class="badge bg-warning" >Pending</button></td>
                  <td class="cell"><button class="badge bg-danger" >Cancelled</button></td>
                  <td class="cell"><button class="badge bg-secondary" >ongoing</button></td>
                `;
                tableBody3.appendChild(row);
                
              }else{
                classe="badge bg-secondary";
                const row = document.createElement('tr');
                row.innerHTML = `
                  <td class="cell">#${reservation.id}</td>
                  <td class="cell"><span class="truncate">${reservation.voiture.mark} - ${reservation.voiture.type}</span></td>
                  <td class="cell">${reservation.utilisateur.fname} - ${reservation.utilisateur.lname}</td>
                  <td class="cell"><span>${reservation.date_debut}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span>${reservation.date_fin}</span><span class="note">${reservation.pikeup_date}</span></td>
                  <td class="cell"><span class="${classe}">${reservation.status}</span></td>
                  <td class="cell">${reservation.voiture.price * calculateDaysBetweenDates(reservation.date_debut, reservation.date_fin)}Dh</td>
                  <td class="cell"><button class="badge bg-success" >Paid</button></td>
                  <td class="cell"><button class="badge bg-warning" >Pending</button></td>
                  <td class="cell"><button class="badge bg-danger" >Cancelled</button></td>
                  <td class="cell"><button class="badge bg-secondary" >ongoing</button></td>
                `;
                tableBody4.appendChild(row);
                
              }
              const row = document.createElement('tr');
              row.innerHTML = `
                <td class="cell">#${reservation.id}</td>
                <td class="cell"><span class="truncate">${reservation.voiture.mark} - ${reservation.voiture.type}</span></td>
                <td class="cell">${reservation.utilisateur.fname} - ${reservation.utilisateur.lname}</td>
                <td class="cell"><span>${reservation.date_debut}</span><span class="note">${reservation.pikeup_date}</span></td>
                <td class="cell"><span>${reservation.date_fin}</span><span class="note">${reservation.pikeup_date}</span></td>
                <td class="cell"><span class="${classe}">${reservation.status}</span></td>
                <td class="cell">${reservation.voiture.price * calculateDaysBetweenDates(reservation.date_debut, reservation.date_fin)}Dh</td>
                <td class="cell"><button class="badge bg-success" >Paid</button></td>
                <td class="cell"><button class="badge bg-warning" >Pending</button></td>
                <td class="cell"><button class="badge bg-danger" >Cancelled</button></td>
                <td class="cell"><button class="badge bg-secondary" >ongoing</button></td>
              `;
              tableBody.appendChild(row);
            });
          })
          .catch(error => console.error(error));
      }
      

      function calculateDaysBetweenDates(date1, date2) {
        // Convert the date strings into Date objects
        const date1Obj = new Date(date1);
        const date2Obj = new Date(date2);
      
        // Calculate the difference between the two dates in milliseconds
        const timeDiff = date2Obj.getTime() - date1Obj.getTime();
      
        // Convert the time difference from milliseconds to days
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
        return daysDiff;
      }
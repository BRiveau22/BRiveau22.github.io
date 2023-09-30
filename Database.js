import {
    getDatabase,
    get,
    ref,
    child
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

import { app } from "./firebaseSetup.js";

const db = getDatabase(app);
const dbRef = ref(db);

function displayData() {
    const userTable = document.querySelector("#databaseResults");

    get(child(dbRef, `users/`)).then((snapshot) => {
        for (const user in snapshot.val()) {
            const userRow = document.createElement("div");
            userRow.classList.add("tr");
            const userID = document.createElement("div");
            userID.classList.add("td");
            const userName = document.createElement("div");
            userName.classList.add("td");
            const userLocation = document.createElement("div");
            userLocation.classList.add("td");
            const userDescription = document.createElement("div");
            userDescription.classList.add("td");
            const userFood = document.createElement("div");
            userFood.classList.add("td");
            const userImgUrl = document.createElement("div");
            userImgUrl.classList.add("td");

            userID.innerText = user;
            userName.innerText = snapshot.val()[user].name;
            userLocation.innerText = snapshot.val()[user].location;
            userDescription.innerText = snapshot.val()[user].description;
            userFood.innerText = snapshot.val()[user].food;

            if (snapshot.val()[user].image == null) {
                userImgUrl.innerText = "No Image";
            }
            else {
                userImgUrl.innerText = snapshot.val()[user].image;
            }

            userRow.appendChild(userID);
            userRow.appendChild(userName);
            userRow.appendChild(userImgUrl);
            userRow.appendChild(userLocation);
            userRow.appendChild(userDescription);
            userRow.appendChild(userFood);

            userTable.appendChild(userRow);
        }
    }).catch((error) => {
        console.error(error);
    });
}

export function displayProfileData(displayUser) {
    const content = document.querySelector("#profileData");

    get(child(dbRef, `users/`)).then((snapshot) => {
        let index = -1;

        for (const user in snapshot.val()) {
            if (user == displayUser.uid) {
                index = user;
            }
        }

        if (index == -1) {
            return;
        }

        const userName = document.querySelector("#userName");
        const userImg = document.querySelector("#userImg");
        const userLocation = document.querySelector("#userLocation");
        const userDescription = document.querySelector("#userDescription");
        const userFood = document.querySelector("#userFood");

        userName.innerText = 'Name: ' + snapshot.val()[index].name;
        if (snapshot.val()[index].image != null) {
            userImg.style.display = 'block';
            userImg.src = snapshot.val()[index].image;
            content.appendChild(userImg);
        }
        else {
            userImg.style.display = 'none';
        }
        userLocation.innerText = 'Location: ' + snapshot.val()[index].location;
        userDescription.innerText = 'Description: ' + snapshot.val()[index].description;
        userFood.innerText = 'Favorite Food: ' + snapshot.val()[index].food;
    }).catch((error) => {
        console.error(error);
    });
}

displayData();
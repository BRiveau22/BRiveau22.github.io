import {
    getDatabase,
    set,
    get,
    update,
    remove,
    ref,
    child
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

import { app } from "./firebaseSetup.js";

const db = getDatabase(app);

function DisplayUserData() {

}
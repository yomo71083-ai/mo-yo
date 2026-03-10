<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2Goh5PEdW5WK3FkosvBMY6S5FZpTuayY",
  authDomain: "code-master-eea4a.firebaseapp.com",
  projectId: "code-master-eea4a",
  storageBucket: "code-master-eea4a.firebasestorage.app",
  messagingSenderId: "1095909704694",
  appId: "1:1095909704694:web:3473e2a4c1eb5261f63dd7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase connected successfully");

</script>
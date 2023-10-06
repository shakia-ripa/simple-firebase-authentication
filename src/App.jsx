import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log('Signed Out');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>

      <h1>Firebase + React</h1>
      {
        user ?
          <button onClick={handleSignOut}>Sign Out</button>
          :
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }




      {
        user && <div>
          <h3>User: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
        </div>
      }

    </>
  )
}

export default App

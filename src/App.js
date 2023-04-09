import "./config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { authObject, provider } from "./config/firebase-config";
import { useState } from "react";
function App() {
  const [auth, setAuth] = useState(false);
  const loginWithGoogle = () => {
    signInWithPopup(authObject, provider).then((data) => {
      if (data) {
        setAuth(true);
      }
    });
  };
  return (
    <div className="App">
      {auth ? (
        <h1> Successfully logged In</h1>
      ) : (
        <button onClick={loginWithGoogle}>Login via Google</button>
      )}
    </div>
  );
}

export default App;

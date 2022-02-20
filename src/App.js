import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout,  selectUser } from './features/userSlice';
import Login from "./Login";
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  // Dispatch allows us to send into the data layer.
  const dispatch = useDispatch();

  // Occurs whenever the program is first ran.
  useEffect(() => {
    auth.onAuthStateChanged( (authUser) => {
      console.log("user is ", authUser);
      // If a user is found.
      if (authUser) {
        // The user is logged in.
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })
        );
      }
      else {
        // The user is logged out.
      }
    });
  }, []);

  return (
    // BEM naming convention.
    <div className="app">
      {/* If there is a user then render the Sidebar and Chat. */}
      {user ? (
        <div>
          <Sidebar />
          <Chat />
        </div>
      ): (
        /* Otherwise prompt the user to login. */
        <Login />
      )}
    </div>
  );
}

export default App;

import { onAuthStateChanged } from '@firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loginUser, logoutUser, selectUser } from './features/userSlice';
import { firebaseAuth } from './firebase';
import Body from './partials/Body';
import Header from './partials/Header';
import Login from './partials/Login';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(loginUser({
          id: user.uid,
          username: user.displayName,
          profilePic: user.photoURL,
          email: user.email
        }))
      } else {
        dispatch(logoutUser())
      }
    })
  }, [dispatch])

  const infoUser = useSelector(selectUser)

  return (
    <>

      {
        !infoUser
          ? (<Login />)
          : (
            <>
              <Header />

              <Body />
            </>

          )
      }
    </>
  );
}

export default App;

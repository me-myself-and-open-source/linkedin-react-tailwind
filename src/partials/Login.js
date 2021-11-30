import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@firebase/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../features/userSlice'
import { firebaseAuth } from '../firebase'
import logo from '../imgs/Linkedin-Logo.png'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const login = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                dispatch(loginUser({
                    id: userCredential.user.uid,
                    username: userCredential.user.displayName,
                    profilePic: userCredential.user.photoURL,
                    email: userCredential.user.email
                }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('AUTH_ERR', errorCode, errorMessage);
            });
    }

    const register = (event) => {
        event.preventDefault();

        if (!name) {
            alert('Name required to register')
            return;
        }

        createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                const picture = profilePic !== '' ? profilePic : "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
                
                updateProfile(userCredential.user, { displayName: name, photoURL: picture })
                    .then(() => {
                        dispatch(loginUser({
                            id: userCredential.user.uid,
                            username: name,
                            profilePic: picture,
                            email: email
                        }))
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('AUTH_ERR', errorCode, errorMessage);
            });
    }

    return (
        <div style={{ background: "#FAFAF9" }} className="h-screen flex items-center">
            <div className="mx-auto w-96">
                <img src={logo} alt="Logo" />
                <form action="" className="w-full flex flex-col gap-2">
                    <input
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        type="text" required className="login-input" placeholder="Full name" />

                    <input
                        value={profilePic}
                        onChange={(e) => { setProfilePic(e.target.value) }}
                        type="text" required className="login-input" placeholder="Profile pic" />

                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email" required className="login-input" placeholder="Email" />

                    <input
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password" required className="login-input" placeholder="Password" />

                    <div className="self-end">
                        <button
                            onClick={register}
                            className="w-32 py-2 rounded-lg bg-gray-100 border mr-2">Register</button>
                        <button
                            onClick={login}
                            className="w-32 py-2 rounded-lg bg-blue-600 text-white">Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login

import React from 'react'
import logo from '../imgs/linkedin.png'
import { SearchIcon, HomeIcon, BriefcaseIcon, ChatAlt2Icon, UserGroupIcon, BellIcon, LogoutIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../features/userSlice'
import { signOut } from '@firebase/auth'
import { firebaseAuth } from '../firebase'

function Header() {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUser)
        signOut(firebaseAuth)
    }

    return (
        <div className="bg-white h-12 flex px-16 py-2 justify-between sticky top-0 z-50">

            <div className="flex">
                <img src={logo} alt="Logo" />

                <div className="ml-2 relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <SearchIcon className="text-gray-400 w-4 h-4" />
                    </span>
                    <input type="search" name="q"
                        className="w-11/12 h-8 py-2 text-sm text-gray-500 bg-gray-50 
                            rounded-md pl-10 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                        placeholder="Search..." autoComplete="off" />
                </div>

            </div>

            <div className="flex">
                <div className="flex border-r-2 px-4">
                    <div className="header-item">
                        <HomeIcon className="header-icon" />
                        <span className="text-xs">Home</span>
                    </div>

                    <div className="header-item">
                        <UserGroupIcon className="header-icon" />
                        <span className="text-xs">My Network</span>
                    </div>

                    <div className="header-item">
                        <BriefcaseIcon className="header-icon" />
                        <span className="text-xs">Jobs</span>
                    </div>

                    <div className="header-item">
                        <ChatAlt2Icon className="header-icon" />
                        <span className="text-xs">Messaging</span>
                    </div>

                    <div className="header-item">
                        <BellIcon className="header-icon" />
                        <span className="text-xs">Notifications</span>
                    </div>

                </div>
                <div className="flex">
                    
                    <div className="header-item" onClick={logout}>
                        <LogoutIcon className="header-icon" />
                        <span className="text-xs">Logout</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header

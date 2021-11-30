import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Sidebar({ className }) {

    const userInfo = useSelector(selectUser)

    return (
        <div className={className}>

            <div className="flex flex-col gap-2 sticky -top-52">
                <div className="sidebar-card">
                    <div className="rounded-t-lg bg-gradient-to-tr h-16 from-blue-400 to-red-400"></div>

                    <div className="px-3">
                        <img
                            className="rounded-full mx-auto -mt-10 border-blue-400 border-2 w-20"
                            src={ userInfo.profilePic } 
                            alt="profile_pic" />

                        <h1 className="text-center text-lg font-semibold mt-5">{userInfo.username}</h1>
                        <div className="text-center text-xs text-gray-400 mb-3">
                            TODO: ADD POSITION (this is diplayed on purpose)
                        </div>
                    </div>

                    <hr />

                    <div className="my-2 space-y-2">
                        <div className="sidebar-profile-item">
                            Who visited your profile
                            <span className="sidebar-profile-item-count">
                                1000+
                            </span>
                        </div>
                        <div className="sidebar-profile-item">
                            Views of your post
                            <span className="sidebar-profile-item-count">
                                10k
                            </span>
                        </div>
                    </div>
                </div>

                <div className="sidebar-card py-2 sticky">
                    <h1 className="px-3 text-xs">
                        Recent
                    </h1>

                    <div className="sidebar-recent-item">
                        #certificate
                    </div>

                    <div className="sidebar-recent-item">
                        #certificate
                    </div>
                    
                    <div className="sidebar-recent-item">
                        #certificate
                    </div>

                    <div className="sidebar-recent-item">
                        #certificate
                    </div>
                    
                    <div className="sidebar-recent-item">
                        #certificate
                    </div>

                    <div className="sidebar-recent-item">
                        #certificate
                    </div>
                    
                    <div className="sidebar-recent-item">
                        #certificate
                    </div>

                    <div className="sidebar-recent-item">
                        #certificate
                    </div>
                    
                    <div className="sidebar-recent-item">
                        #certificate
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Sidebar

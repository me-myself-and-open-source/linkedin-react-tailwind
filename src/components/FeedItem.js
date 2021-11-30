import React from 'react'
import { ThumbUpIcon, ChatIcon, ShareIcon } from '@heroicons/react/outline'
import { PaperAirplaneIcon } from '@heroicons/react/solid'
import moment from 'moment'

function FeedItem({ username, createdAt, image, message, userImage }) {
    return (
        <div className="feed-card pb-1 animate-vote">
            <div className="flex"> {/* header */}
                <img
                    className="rounded-full h-12 w-12"
                    src={userImage}
                    alt="profile_pic" />

                <div className="px-5 flex flex-col"> {/* Name and profession */}
                    <h1 className="text-sm font-semibold">{ username }</h1>
                    <p className="text-xs text-gray-400 sm:w-36 md:w-48 lg:w-60 xl:w-80 overflow-hidden truncate">
                        { moment(createdAt).fromNow() }
                    </p>
                </div>
            </div>

            <div className="py-2 text-sm text-gray-800"> {/* Card body */}
                <p>
                    { message }
                </p>
                { image && <img src={image} alt="post_image"/> }
            </div>

            <div className="flex border-t pt-1"> {/* Card footer  buttons */}
                <div className="feed-item-button">
                    <ThumbUpIcon className="w-4 text-gray-500"/>
                    <span className="text-gray-500 text-sm">Like</span>
                </div>
                <div className="feed-item-button">
                    <ChatIcon className="w-4 text-gray-500"/>
                    <span className="text-gray-500 text-sm">Comment</span>
                </div>
                <div className="feed-item-button">
                    <ShareIcon className="w-4 text-gray-500"/>
                    <span className="text-gray-500 text-sm">Share</span>
                </div>
                <div className="feed-item-button">
                    <PaperAirplaneIcon className="w-4 text-gray-500"/>
                    <span className="text-gray-500 text-sm">Send</span>
                </div>
            </div>
        </div>
    )
}

export default FeedItem

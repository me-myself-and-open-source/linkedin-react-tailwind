import React, { useEffect, useState } from 'react'
import FeedItem from '../components/FeedItem'
import { PhotographIcon, FilmIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/react/solid'
import { firebaseDb } from '../firebase';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Feed({ className }) {

    const [txtMessage, setTxtMessage] = useState('')

    const [posts, setPosts] = useState([]);

    const userInfo = useSelector(selectUser)

    useEffect(() => {

        getPosts(firebaseDb)

    }, [])

    const createPost = (event) => {
        event.preventDefault();

        const newPost = {
            userImage: userInfo.profilePic,
            username: userInfo.username,
            createdAt: Date.now(),
            image: userInfo.profilePic,
            message: txtMessage
        }

        addPost(firebaseDb, newPost)

        setTxtMessage('')

    }

    const getPosts = async (database) => {

        const postsCollection = query(collection(database, "posts"), orderBy("createdAt", "desc"))

        onSnapshot(postsCollection, (postsSnapshot) => {

            const postsList = []
            
            postsSnapshot
                .forEach(
                    (doc) => {

                        postsList.push({
                            id: doc.id,
                            data: doc.data()
                        })
                    }
                )

            setPosts(postsList)

        })

    }

    const addPost = async (database, {username, createdAt, image, message, userImage}) => {
        await addDoc(
            collection(database, "posts"),
            {
                username: username,
                createdAt: createdAt,
                image: image,
                message: message,
                userImage: userImage
            }
        );

    }

    return (
        <div className={className}>
            <div className="feed-card flex-row">

                <div className="flex gap-2">
                    <img
                        className="rounded-full w-8"
                        src={userInfo.profilePic}
                        alt="profile_pic" />

                    <form className="w-full" onSubmit={createPost} >
                        <input 
                            value={txtMessage}
                            onChange={ event => setTxtMessage(event.target.value) }
                            className="w-full border rounded-full px-5"
                            placeholder="Start a post"
                            type="text" />
                    </form>

                </div>

                <div className="flex justify-evenly pt-2">
                    <div className="write-post-button">
                        <PhotographIcon className="w-5 text-blue-400" />
                        <span>Photo</span>
                    </div>
                    <div className="write-post-button">
                        <FilmIcon className="w-4 text-yellow-600" />
                        <span>Video</span>
                    </div>
                    <div className="write-post-button">
                        <CalendarIcon className="w-4 text-gray-400" />
                        <span>Event</span>
                    </div>
                    <div className="write-post-button">
                        <DocumentTextIcon className="w-4 text-green-700" />
                        <span>Photo</span>
                    </div>
                </div>

            </div>
            <h1>Feed</h1>
            <div className="flex flex-col gap-2">
                { posts &&
                    posts.map(
                        ({ id, data: { username, createdAt, image, message, userImage } }) => (
                            <FeedItem key={id} username={username} createdAt={createdAt} image={image} message={message} userImage={userImage} />
                        )
                    )
                }
                {/* <FeedItem
                    username="Islem Khemissi"
                    createdAt="Web Team Lead | Laravel DevOPS Developer at 360Medlink Inc"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Inventore, exercitationem animi? Sed eaque natus facilis quas minus alias maxime a? 
                    Adipisci animi debitis deleniti iste similique cumque dicta excepturi voluptatum."
                    image="https://www.wallpapertip.com/wmimgs/87-870521_flat-simple-wallpaper-flat-wallpaper-mac.jpg" />
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem /> */}
            </div>

        </div>
    )
}

export default Feed

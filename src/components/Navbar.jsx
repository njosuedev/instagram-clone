import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showCreate, setShowCreate] = useState(false);

    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
        setShowCreate(false); // Hide create post panel if it's open
    };
    const handleCreateClick = () => {
        setShowCreate(!showCreate);
        setShowNotifications(false); // Hide notification panel if it's open
    };

    // close create post panel

    const handleCloseCreatePost = () => {
        setShowCreate(false);
    };

    const handleCloseNotification = () => {
        setShowNotifications(false);
    };


    return (
        <nav className="navbar">
             <div className="logoInst"><Link to="/" className="navLink">
                <img src="insta-logo.png" alt="" />
               </Link>
             </div>
            <ul className="navList">
                <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
                <li className="navItem"><Link to="/explore" className="navLink">Explore</Link></li>
                <li className="navItem"><Link to="/messages" className="navLink">Messages</Link></li>
                <li className="navItem"><Link to="/profile" className="navLink">Profile</Link></li>
                <li className="navItem"><Link to="/profile" className="navLink">Profile</Link></li>

                {/* notification */}

                <li className="navItem navIcon">
                    <button onClick={handleNotificationClick} className="navLink">
                        <i className="fa fa-bell"></i>Notifications
                    </button>
                </li>

                {/* create */}

                <li className="navItem navIcon">
                    <button onClick={handleCreateClick} className="navLink">
                        <i className="fa fa-bell"></i>Create
                    </button>
                </li>

                <li className="navItem  more">
                    <button onClick={handleCreateClick} className="navLink">
                        <i className="fa fa-bell"></i>More
                    </button>
                </li>
                    
            </ul>

            {showNotifications && (
               <>
                <div className="overlay" onClick={handleCloseNotification}></div>
                <div className="notificationsPanel">
                    <h3>All Notifications</h3>
                    <ul>
                        <li>Notification 1</li>
                        <li>Notification 2</li>
                        <li>Notification 3</li>
                        {/* Add more notifications as needed */}
                    </ul>
                </div>
               </>
            )}

            {showCreate && (
               <>
                <div className="overlay" onClick={handleCloseCreatePost}></div>
                <div className="createPostPanel">
                    <h3>Create Post</h3>
                    <form>
                        <textarea placeholder="What's on your mind?" className="createPostTextarea"></textarea>
                        <button type="submit" className="createPostButton">Post</button>
                    </form>
                </div>
                </>
            )}

        </nav>
    );
}

export default Navbar;

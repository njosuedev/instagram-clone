import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className='Container'>
            <div className='postContainer'>
                <div className='profileStoryContainer'>
                <div className="profileStory">
                    <img className='imgStory' src="https://avatars.githubusercontent.com/u/149709646?v=4" />
                </div>
                <div className="profileStory">
                 <img className='imgStory' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQU0j7Z-uWL6IHAhcpsUXcCZVkbxXnYTQbw&s" alt="Description" />
                </div>
                <div className="profileStory"></div>
                <div className="profileStory"></div>
                <div className="profileStory"></div>
                <div className="profileStory"></div>
                <div className="profileStory"></div>
                <div className="profileStory"></div>
                </div>
                <div className="profilePostContainer">
                    <div className="postOne"></div>
                    <div className="postOne"></div>
                    <div className="postOne"></div>
                </div>
            </div>
            <div className='rightAsideContainer'>
                <div className='asideTop'>
                    <div className="profileTopContainer">
                        <div className="imageContainer"></div>
                        <div className="profileName">njosuedev</div>
                        <div className="switchBtn">
                            <a href="">Switch</a>
                        </div>
                    </div>
                    <div className='FollowersTitle'>
                        <div className='left'>
                            Suggested fo you
                        </div>
                        <div className="right">
                            See All
                        </div>
                    </div>
                    <div className="profileTopContainer">
                        <div className="imageContainer"></div>
                        <div className="profileName">allancorp</div>
                        <div className="switchBtn followBtn">
                            <a href="">Follow</a>
                        </div>
                    </div>
                    <div className="profileTopContainer">
                        <div className="imageContainer"></div>
                        <div className="profileName">m.fabrice</div>
                        <div className="switchBtn followBtn">
                            <a href="">Follow</a>
                        </div>
                    </div>
                    <div className="profileTopContainer">
                        <div className="imageContainer"></div>
                        <div className="profileName">Johnsmith</div>
                        <div className="switchBtn followBtn">
                            <a href="">Follow</a>
                        </div>
                    </div>
                    <div className="profileTopContainer">
                        <div className="imageContainer"></div>
                        <div className="profileName">measure</div>
                        <div className="switchBtn followBtn">
                            <a href="">Follow</a>
                        </div>
                    </div>
                    <div className="profileTopContainer">
                        <div className="imageContainer"></div>
                        <div className="profileName">Johndany</div>
                        <div className="switchBtn followBtn">
                            <a href="">Follow</a>
                        </div>
                    </div>
                </div>
                <div className="asideBottom">
                    <div className="footerOthers">
                    <small>About</small>.
                    <small>Help</small>.
                    <small>Press</small>.
                    <small>Api</small>.
                    <small>Jobs</small>.
                    <small>Privacy</small>.
                    <small>Terms</small>.
                    <small>Locations</small>.
                    <small>Languae</small>.
                    <small>Meta Verified</small>.
                    <small>Terms</small>
                    </div>
                    <div className="footerCopyRight">
                        <small>
                            &copy; INSTAGRAM-CLONE BY N JOSUE
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

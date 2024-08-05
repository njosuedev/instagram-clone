import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className='Container'>
            <div className='postContainer'>
                <div className='profileStoryContainer'>
                <div className="profileStory"></div>
                <div className="profileStory"></div>
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
                            suggested fo you
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
                        <div className="profileName">peter</div>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique explicabo dolor minima laboriosam laborum fuga accusantium, fugit eum beatae totam. Provident amet fugit modi beatae ducimus vitae, porro ratione.
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import react from './assets/react.jpg';
import ui from './assets/ui.jpg';
import faceBookChallenge from './assets/faceBookChallenge.png';
import payPalSssHtml from './assets/payPalSssHtml.png';
import TenorApiChallenge from './assets/TenorApiChallenge.png';
import countDownTimer from './assets/countDownTimer.png';
import ToDoTaskWithReact from './assets/ToDoTaskWithReact.png';
import AccessingGitHubAccount from './assets/AccessingGitHubAccount.png';
import './styles/Works.css';

const Works = () => {
    return (

        <div className='works'>
            <div>
                <h1 className='heading'>Some of My works During the Course Full Stack Developer</h1>
            </div>
            <div>
                <div className="work__section">
                    
                    <div className="cards">
                        <img src={faceBookChallenge} alt="" />
                        <span>Work of HTML and CSS.</span>
                    </div>
                    <div className="cards">
                        <img src={payPalSssHtml} alt="" />
                        <span>Work of HTML and CSS.</span>
                    </div>
                    <div className="cards">
                        <img src={TenorApiChallenge} alt="" />
                        <span>Tenor API with JQUERY</span>
                    </div>
                    <div className="cards">
                        <img src={countDownTimer} alt="" />
                        <span>Countdown Timer with JQUERY</span>
                    </div>
                    <div className="cards">
                        <img src={ToDoTaskWithReact} alt="" />
                        <span>To Do List by React App</span>
                    </div>
                    <div className="cards">
                        <img src={AccessingGitHubAccount} alt="" />
                        <span>Accessing Github Account App by React App</span>
                    </div>
                    <div className="cards">
                        <img src={react} alt="" />
                        <span>React Logo</span>
                    </div>

                    <div className="cards">
                        <img src={ui} alt="" />
                        <span>Planning</span>
                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default Works

import React from 'react';
import '../component/ActiveMenu.css';
import userImage from '../utils/images/syed siddique.jpeg'

const ActiveMenu = () => {

    let body = document.querySelector('body');
    let dark = document.querySelector('#dark');
    console.log("dark ", dark)

    const darkHandler = (e) => {
        console.log("e ", e.target.checked);
        if(e.target.checked == true){
            document.body.classList.add('darkMode')
        }
        else{
            document.body.classList.remove('darkMode')
        }
    }




    return (
        <div className='box'>
            <div className="profile">
                <div className="imgBx">
                    <img src={userImage} alt="" />
                </div>
                <h4 className='text'>Sayyed Siddique<br /> <span>Creative Designer</span></h4>

            </div>
            <ul className="menu">
                <li>
                    <label htmlFor="">
                        <span><ion-icon name="wifi" class="icons"></ion-icon> Wi-fi</span>
                        <span className="action">
                            <input type="checkbox" />
                            <i></i>
                        </span>
                    </label>
                </li>
                <li>
                    <label htmlFor="">
                        <span><ion-icon name="bluetooth" class="icons"></ion-icon> Bluetooth</span>
                        <span className="action">
                            <input type="checkbox" />
                            <i></i>
                        </span>
                    </label>
                </li>
                <li>
                    <label htmlFor="">
                        <span><ion-icon name="airplane" class="icons"></ion-icon> Airplane Mode</span>
                        <span className="action">
                            <input type="checkbox" />
                            <i></i>
                        </span>
                    </label>
                </li>
                <li>
                    <label htmlFor="">
                        <span><ion-icon name="location" class="icons"></ion-icon> Location</span>
                        <span className="action">
                            <input type="checkbox" />
                            <i></i>
                        </span>
                    </label>
                </li>
                <li>
                    <label htmlFor="">
                        <span><ion-icon name="moon" class="icons"></ion-icon> Dark Mode</span>
                        <span className="action">
                            <input type="checkbox" id='dark' onClick={darkHandler}/>
                            <i></i>
                        </span>
                    </label>
                </li>
            </ul>

        </div>
    );
};

export default ActiveMenu;
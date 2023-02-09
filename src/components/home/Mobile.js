import React from "react";
import '../../App.css';
function Mobile() {
    return (
        <>
            <div id="firstDiv">
                <div id="mainDiv">
                    <div id="div1">
                        <div id="headDiv">CONVENIENCE ON-THE-GO.</div>

                        <div id="pDiv">
                            <p>Enjoy the following exclusive features on the redBus app</p>
                            <p>Last Minute Booking - In a hurry to book a bus at the last minute? Choose the bus passing from your nearest boarding point and book in a few easy steps.</p>
                            <p>Boarding Point Navigation - Never lose your way while travelling to your boarding point!</p>
                            <p>Comprehensive Ticket Details- Everything that you need to make the travel hassle free - rest stop details, boarding point images, chat with co-passengers, wake-up alarm and much more!</p>
                            <p>Enter your mobile number below to download the redBus mobile app</p>
                        </div>
                        <select id="select">
                            <option>91</option>
                            <option>112</option>
                            <option>131</option>
                        </select>
                        <input type="text" id="input" placeholder="Enter your mobile number"></input>
                        <div id="sms">SMS ME THE LINK</div>
                        <div  className="fontawesomeParent">

                            <div className="fontawesome"> <i class="fa-brands fa-apple apple"></i></div>
                            <div className="fontawesome"><i class="fa-brands fa-google-play apple"></i></div>
                        </div>
                    </div>
                    <div id="imgDiv"><img id="mobImg" src="//s1.rdbuz.com/web/images/home/IOS_Android_device.png"></img></div>

                </div>
                <div id="bkImg"><img src="//s2.rdbuz.com/web/images/home/city_scape_app_download.png" id="sceneImg"></img></div>
            </div>
        </>
    )
}
export default Mobile;
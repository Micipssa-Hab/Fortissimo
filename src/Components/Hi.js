import React, { useState } from "react";
import pic from "../Assets/tof.png";

function PhoneNumberInput() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (e) => {
        setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''));
    };

    return (
        <div className="input-box">
            <span className="details">Phone Number</span>
            <input
                type="text"
                placeholder="Your Phone Number"
                value={phoneNumber}
                onChange={handleInputChange}
                required
            />
        </div>
    );
}

const Talk = () => {
    return (
        <main>
            <div className="profile-container">
                <div className="profile-header">
                    <img src={pic} alt="Profile Picture" className="profile-pic" />

                    <div className="profile-info">
                        <h2>Alexa Rawles</h2>
                        <p>alexarawles@gmail.com</p>
                    </div>
                    <button type="button" className="edit-profile-btn">
                        <p>Edit Profile</p>
                    </button>
                </div>
                <div className="container">
                    <div className="content">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Your First Name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Role</span>
                                    <input type="text" placeholder="Your Role" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Your Gender</span>
                                    <select required>
                                        <option value="">Your Gender</option>
                                        <option value="male">Homme</option>
                                        <option value="female">Femme</option>
                                    </select>
                                </div>

                                <div className="input-box">
                                    <span className="details">Stripe Code</span>
                                    <input type="text" placeholder="Your Stripe Code" required />
                                </div>

                                <PhoneNumberInput />
                            </div>
                        </form>
                    </div>
                </div>
                <h2 className="email-my">My Email Address</h2>
                <div className="profile-header">
                    <div className="email-co">
                        <div className="icon"></div>
                    </div>

                    <div className="profile-infos">
                        <p className="p-p">alexarawles@gmail.com</p>
                        <p>1 month ago</p>
                    </div>
                </div>
                <button type="button" className="switch-admin-btn">
                    <p>Switch to admin</p>
                </button>
            </div>
        </main>
    );
};

export default Talk;

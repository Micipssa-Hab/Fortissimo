import React from "react";
import figure from "../Assets/figure.png";
import Right from "../Assets/right.png";


const Talk = () => {
    return (
        <div class="hi-container">
            <div class="hi-container-label">
                <h1>Say Hi!</h1>
                <p>We'd like to talk with you.</p>
                <label for="name" class="label-hi">My name is:</label>
                <input type="text" id="name" name="name" required class="input-hi"></input>

                <label for="lookingfor" class="label-hi">I'm looking for:</label>
                <input type="text" id="lookingfor" name="lookingfor" class="input-hi"></input>

                <label for="message" class="label-hi">Your message:</label>
                <textarea id="message" name="message" rows="4" class="textarea-hi"></textarea>

                <button type="submit" class="button-hi">Send Message</button>
            </div>
            <div class="hi-container-align">
                <div class="hi-icon-wrapper">
                    <img src={Right} alt="Right" class="hi-icon-one"></img>
                    <img src={figure} alt="figure" class="hi-icon-two"></img>
                </div>
            </div>
        </div>

    )
}
export default Talk;
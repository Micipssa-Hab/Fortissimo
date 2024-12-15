import React from "react";
import CardOr from "../Assets/cardor.png";
import CardVisa from "../Assets/cardvisa.png";

const Card = () => {
    return (

        <div class="card-container">
            <div>
                <img src={CardOr} alt="" className="card-oro"></img>
            </div>
            <p>Paiements en ligne<span className="line-break"></span>acceptés</p>
            <div class="card-container-other">
                <div class="button-container">
                    <p class="button-container-lineone">
                        <button>Visa & Mastercard</button>
                        <button>Editable components</button>
                    </p>
                    <p class="button-container-linetwo">
                        <button>Glassmorfism effect</button>
                        <button>Mesh gradients</button>
                    </p>
                    <p class="button-container-linethree">
                        <button>Isometric design</button>
                    </p>
                </div>
                
            </div>
            <div class="cardvisa-image">
                    <img src={CardVisa} alt=""></img>
                </div>
        </div>


    )
}
export default Card;

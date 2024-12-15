import React from "react";
import Pers from "../Assets/personne.png";

const About = () => {
  return (

    <div class="about-general">
      <div class="container">
        <h1>Bienvenue dans l'équipe qui a construit ce miracle</h1>
        <p>Et si vous savez, ils ne sont que des étudiants, alors montrez-leur du respect, M. Azouio</p>
        <div class="team">
          <div class="team-member">
            <img src={Pers} alt="Bouabca Chamseddine"></img>
            <h3>Bouabca Chamseddine</h3>
            <p>Designer et UX/UI, avec de grandes connaissances en DevOps et backend.</p>
          </div>
          <div class="team-member">
            <img src={Pers} alt="Bouabca Chamseddine"></img>
            <h3>Bouabca Chamseddine</h3>
            <p>Designer et UX/UI, avec de grandes connaissances en DevOps et backend.</p>
          </div>
          <div class="team-member">
            <img src={Pers} alt="Bouabca Chamseddine"></img>
            <h3>Bouabca Chamseddine</h3>
            <p>Designer et UX/UI, avec de grandes connaissances en DevOps et backend.</p>
          </div>
          <div class="team-member">
            <img src={Pers} alt="Bouabca Chamseddine"></img>
            <h3>Bouabca Chamseddine</h3>
            <p>Designer et UX/UI, avec de grandes connaissances en DevOps et backend.</p>
          </div>
        </div>
      </div>
    </div>



  );
};

export default About;
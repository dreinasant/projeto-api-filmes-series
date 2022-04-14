import React, { Component } from "react";
import MoviesSlides from "../slides/SlidesMovies";
import Carousel from "react-elastic-carousel";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsapp.png"
import Facebook from "../assets/facebook.png";
import Twiter from "../assets/twiter.png";
import ImgHomeHeader from "../assets/black-crab.jpg";


export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="home-header-h2">Filmes e Séries á vontade</h2>
      <div className="box-home">
        <img className="img-home" src={ImgHomeHeader} alt="Black crad"/>
        <MoviesSlides/>
      </div>
      <div className="box-redes">
        <div className="box-intro">
              <h2>Redes sociais</h2>
              <img src={Instagram} alt="Instagram"/>
              <img src={Linkedin} alt="Linkedin"/>
              <img src={Whatsapp} alt="Whatsapp"/>
              <img src={Facebook} alt="Facebook"/>
              <img src={Twiter} alt="Twiter"/>
              </div>
              <div className="box-title-footer">
              <div className="box-title">
              <h2>Politicas de Privacidade</h2>
              </div>
              <div className="box-title-two">
              <h2>Perguntas frequentes</h2>
              </div>
              <div className="box-title-three">
              <h2>Contato</h2>
              </div>
              </div>
            </div>
      </div>
    );
  }
}
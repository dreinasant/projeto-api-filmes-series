import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lupa from "../assets/lupa.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsapp.png"
import Facebook from "../assets/facebook.png";
import Twiter from "../assets/twiter.png";
import Logo from "../assets/logo.jpg";

const apiSeries = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=bf998da7333199c258f7f90921d6e7fb&language=en-US&page=1"
});


export default class Shows extends React.Component{

  state = {
    listSeries: [],
    filterListSeries: []
  }

componentDidMount(){
    this.getSeries();
}

getSeries = async () => {
const responseTv = await apiSeries.get();

const series = responseTv.data.results.map((item) => {
  return{
    ...item,
    poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
  };
});

  this.setState({
    listSeries: series,
    filterListSeries: series
  });
};

buscarSeries = (event) =>{
  let {listSeries} = this.state;

  const seriesFiltrados = listSeries .filter((item) => {
    if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
      return true;
    }
  })
  this.setState({
    filterListSeries: seriesFiltrados
  })
}

  render(){
    return(
      <div>
      <div className="contain">
      <img className="icon-lupa" src={Lupa} alt="lupa"/>
        <input className="intro-input" type="text" placeholder="     Buscar série..." onChange={this.buscarSeries}/>
        </div>
      <div>
      <h1 className="box-h1">Séries</h1>
        {this.state.filterListSeries.map((item) => (
          <div className="box-series">
            <p className="box-p">{item.name}</p>
            <img className="box-img" src={item.poster_path} alt= {item.name} />
            <a href="#" className="box intro-botao intro-animate">Assistir</a>
          </div>
        ))}
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
            <div className="logo-footer">
            <a href="http://localhost:3000/"><img className="logo-img-footer" src={Logo} alt="logo"/></a>
              </div>
      </div>
    );
  }
}
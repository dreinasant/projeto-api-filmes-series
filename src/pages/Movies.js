import React from "react";
import axios from "axios" ;
import Lupa from "../assets/lupa.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsapp.png"
import Facebook from "../assets/facebook.png";
import Twiter from "../assets/twiter.png";
import Logo from "../assets/logo.jpg";

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=bf998da7333199c258f7f90921d6e7fb&language=en-US&page=1"
});


export default class Filmes extends React.Component{

  state = {
    listFilmes: [],
    filterList: [],
  }

componentDidMount(){
    this.getFilmes();

  }
  getFilmes = async () =>{
  const response = await apiFilmes.get();
  
  const filmes = response.data.results.map((item) => {
    return{
      ...item,
      poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    };
  })

  this.setState({
    listFilmes: filmes,
    filterList: filmes,
  });
};

buscarFilmes = (event) => {
    let {listFilmes} = this.state;

    const filmesFiltradosConvertido = listFilmes.filter((item) => {
        if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
            return true;
        }
    });

    this.setState({
        filterList: filmesFiltradosConvertido,
    });
  }

  render(){
    return(
      <div>
          <div className="contain">
        <img className="icon-lupa" src={Lupa} alt="lupa"/>
        <input className="intro-input" type="text" placeholder="     Buscar filme..." onChange={this.buscarFilmes}/>
        </div>
        <div>

        <h1 className="box-h1">Filmes</h1>
        {this.state.filterList.map((item) => (
          <div className="intro-series">
            <p className="intro-p">{item.title}</p>
            <img className="intro-img" src={item.poster_path} alt={item.title} />
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
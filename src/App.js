import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "../src/assets/logo.jpg";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Shows";
import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar";
import IconEntrar from "../src/assets/icon-entrar.png";
import "./App.css";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  list-style: none;
  
}
`
const StyledLinkHome = styled(Link)`
color: white;
font-family: 'Fugaz One', cursive;
font-size: 1em;
font-weight: bold;
position: relative;
bottom: 8px;
`
const StyledLink = styled(Link)`
color: white;
font-family: Vaud,Helvetica Neue;
font-size: 1em;
font-weight: bold;
`
const StyledLinkCadastro = styled(Link)`
color: white;
font-family: Vaud,Helvetica Neue;
font-size: 1em;
font-weight: bold;
width: 13vh;
height: 2vw;
display: flex;
justify-content: center;
align-items: center;

border-top-width: 1px;
border-bottom-width: 1px;
border-top-style: solid;
border-bottom-style: solid;
border-top-color: white;
border-bottom-color: white;
border-left-color: white;
border-left-style: solid;
border-left-width: 1px;
border-right-color: white;
border-right-style: solid;
border-right-width: 1px;

&:hover{
  opacity: 0.6;
}
`

export default class App extends React.Component{


  render(){
    return(
      <Router>
      <GlobalStyle/>
      <nav id="nav-header">
        <ul className="box-list">
        <li className="intro-li-home">
        <a href="http://localhost:3000/"><img className="logo-home" src={Logo} alt="logo"/></a>
            <StyledLinkHome to="/">CineVideos</StyledLinkHome>
          </li>
          <li className="intro-li">
            <StyledLink to="/movies">Filmes</StyledLink>
          </li>
          <li className="intro-li">
            <StyledLink to="/series">Séries</StyledLink>
          </li>
          <li className="intro-li">
          <img className="box-img-entrar" src={IconEntrar} alt="entrar" />
            <StyledLink to="/entrar">Entrar</StyledLink>
          </li>
          <li className="intro-li">
            <StyledLinkCadastro to="/cadastrar">Cadastrar</StyledLinkCadastro>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>

    );
  }
}
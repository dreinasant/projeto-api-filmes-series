import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../assets/logo.jpg";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsapp.png"
import Facebook from "../assets/facebook.png";
import Twiter from "../assets/twiter.png";


const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 digitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(watch("name")); 

  function onSubmit(userData) {
    console.log(userData);
  }

  return (
      <div className="container-form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <a href="http://localhost:3000/"><img className="img-logo-cadastro" src={Logo} alt="imagem-logo"/></a>

      <label>
        Nome
        <input type="text" {...register("name", { required: true })} />
        <span>{errors.name?.message}</span>
      </label>

      <label>
        Email
        <input type="text" {...register("email")} />
        <span>{errors.email?.message}</span>
      </label>

      <label>
        Senha
        <input type="password" {...register("password")} />
        <span>{errors.password?.message}</span>
      </label>

      <label>
        Confirmar Senha
        <input type="password" {...register("confirmPassword")} />
        <span>{errors.confirmPassword?.message}</span>
      </label>

      <button type="submit">Cadastre-se</button>
    </form>

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

export default App;
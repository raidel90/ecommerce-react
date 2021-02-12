import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignUpStart } from "../../redux/user/user.actions";
import "./sign-up.styles.scss";

const SignUp = ({SignUpStart}) => {
    
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {  
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no son iguales");
      return;
    }

    SignUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> No tengo un Usuario</h2>
      <span> Crear usuario con correo y contraseña</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Nombre"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Correo"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Contraseña"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Comfirmar Contraseña"
          required
        />

        <CustomButton type="submit"> Registrarse</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  SignUpStart: (userCredentials) => dispatch(SignUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);

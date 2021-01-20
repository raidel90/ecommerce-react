import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInwithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  
    constructor(props)
        {
            super(props);

            this.state = {
                email:'',
                password:''
            };
        }

    handleSubmit = async event => {
       
        event.preventDefault();

        const {email, password} = this.state;

        try{
            
            await auth.signInWithEmailAndPassword(email,password);
            
            this.setState({email:'', password:''});  

        }catch(error){

            console.log(error);

        }
    
        };

    handleChange = event =>{

        const{value, name} =event.target;

        this.setState({ [name]: value});

    };

    render(){
        return (
            <div className='sign-in'>
    
                <h2>Ya tengo Usuario</h2>

                <span>Entre con su usuario y contraseña</span>

                <form onSubmit={this.handleSubmit}>

                   <FormInput name="email" type="email" value={this.state.email} label='email' handleChange={this.handleChange} required/>
                   <FormInput name="password" type="password" value={this.state.password} label='password' handleChange={this.handleChange} required />
                   
                    <div className='buttons'>
                        <CustomButton type="submit"> sign in </CustomButton>
                        <CustomButton onClick={signInwithGoogle} isGoogleSignIn> {' '} sign in with Google {' '} </CustomButton>        
                    </div>


                </form>
            </div>
        );
    }
}

export default SignIn;
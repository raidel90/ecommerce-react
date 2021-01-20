import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { auth , createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
 
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSuscribeFromAuth = null;

  componentDidMount(){
    
    this.unSuscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
         
          userRef.onSnapshot(snapShot => {
            
            //setState es asincrona, 
            //por lo que habria que pasar una 2da funcion si se quieren los datos completos,
            // este es un ejemplo con console.log
            this.setState({currentUser: { id: snapShot.id,...snapShot.data() } }, () =>  { console.log(this.state); });

          });
         
      }else
        this.setState({currentUser: userAuth});

     });

  }

  componentWillUnmount(){

    this.unSuscribeFromAuth();

  }

  render(){

    
    return (

      <div >
      
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>

      </div>
    );
  }
}

export default App;

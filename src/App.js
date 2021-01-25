import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect'

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { auth , createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  unSuscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unSuscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
         
          userRef.onSnapshot(snapShot => {
            
            setCurrentUser({
               id: snapShot.id, 
               ...snapShot.data()
              });

          });
         
      }else
           setCurrentUser( userAuth);

     });

  }

  componentWillUnmount(){

    this.unSuscribeFromAuth();

  }

  render(){

    
    return (

      <div >
      
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />):(<SignInAndSignUpPage />)}/>
        </Switch>

      </div>
    );
  }
}
//redireccionar para evitar entrar al sign mientras esta logueado
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

 //conectar el user-reducer
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

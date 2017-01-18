import React from 'react';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class FbLogin extends React.Component { 
  constructor() {
    super();
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1736938369968580',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.1'
      });
    }.bind(this);

    (function(d, s, id) {
      if (d.getElementById(id)) return;
      var js = d.createElement(s); 
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      var body = d.getElementsByTagName('body');
      body[0].append(js);
    }(document, 'script', 'facebook-jssdk'));
  }

  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log(response);
      console.log('Successful login for: ' + response.name);
    });
  }

  statusChangeCallback(response) {

    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.testAPI();
      this.props.handleSignIn();
      //browserHistory.push('/properties');
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    }
  }

  checkLoginState() {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }

  handleClick() {
    FB.login((res) => {this.checkLoginState(res)});
  }

  render() {
    return (
      <RaisedButton
        label='Login with Facebook'
        backgroundColor='#3B5998'
        fullWidth={true}
        onTouchTap={() => this.handleClick()} />
    )
  }
}

export default FbLogin;
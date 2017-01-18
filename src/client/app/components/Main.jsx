import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import io from 'socket.io-client';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {Card, CardHeader} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import HomeIcon from 'material-ui/svg-icons/action/home';
import GraphIcon from 'material-ui/svg-icons/action/assessment';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

import LoginContainer from './loginContainer.jsx';
import Logout from './logout/logout.jsx';

const socket = io();

const muiTheme = getMuiTheme({
  palette: { accent1Color: deepOrange500 }
});

const homeIcon = <HomeIcon />;
const graphIcon = <GraphIcon />;
const settingsIcon = <SettingsIcon />;

const style = {
  margin: 12,
};

const appStyle = {
  backgroundColor: 'white',
  height: '10%',
}

const titleStyle ={
  color: '#757575',
  fontFamily: 'Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
  fontSize: '25px',
  textTransform: 'lowercase'
}

const mapStateToProps = function(store) {
  return {
    loggedIn: store.userState.loggedIn
  };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    socket.emit('hostLogin', {hostId: 1});
    socket.on('user checked in', () => this.handleGuestCheckIn());
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleGuestCheckIn() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="guestbook"
            titleStyle={titleStyle}
            style={appStyle}
            showMenuIconButton={false}
            iconElementRight={<Logout />}/>
          <Tabs>
            <Tab
            label='MY PROPERTIES' value={0} icon={homeIcon}
            containerElement={<Link to='/properties'></Link>}/>
            <Tab
            label='MY ANALYTICS' value={1} icon={graphIcon}
            containerElement={<Link to='/analytics'></Link>}/>
            <Tab
            label='SETTINGS' value={2} icon={settingsIcon}
            containerElement={<Link to='/settings'></Link>}/>
          </Tabs>
          <div className='container'>
            {this.props.children}
            <Link to='/map'>Map</Link>
            <Link to='/camera'>Camera</Link>
          </div>
          <Snackbar
            open={this.state.open}
            message="A guest has checked into your property!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose.bind(this)}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(Main);
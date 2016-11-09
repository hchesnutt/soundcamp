import React from 'react';
import { RaisedButton } from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { hashHistory } from 'react-router';

class EditUserButton extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let url = hashHistory.getCurrentLocation().pathname.split("/");
    let pageId = url[url.length - 1];
    if (this.props.session.currentUser.id == pageId) {
      return (
        <section className="session">
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton label="Edit User"
              onTouchTap={this.props.openEditUserModal}>
            </RaisedButton>
          </MuiThemeProvider>
        </section>
      );
    } else {
      return (
        <section className='session'>
        </section>
      )
    };
  }
};

export default EditUserButton;

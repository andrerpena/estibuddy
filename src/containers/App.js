import React, {Component} from 'react';
import DevTools from '../components/DevTools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui';
import MyAwesomeReactComponent from './MyAwesomeComponent';

class Layout extends Component {
    render() {
        let {children} = this.props;

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar/>
                        <MyAwesomeReactComponent/>
                    </div>
                </MuiThemeProvider>

                <DevTools />
            </div>
        );
    }
}

export default Layout;
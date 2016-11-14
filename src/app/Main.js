/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import TextField from 'material-ui/TextField';

import {Tabs, Tab} from 'material-ui/Tabs';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  margentop:{
    margentop:20
  },
  margenbottom:{
    marginBottom:20
  }
};

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      series:[
      "54-41690450",
      "54-41690703",
      "54-41690704",
      "54-41690708",
      "54-41690709",
      "54-41690711",
      "54-41690712",
      "54-41690713",
      "54-41690714",
      "54-41690715",
      "54-41690717",
      "54-41690718",
      "54-41772950",
      "54-41772954",
      "54-41772957",
      "54-41772958",
      "54-41772962",
      "54-41772963",
      "54-41772964",
      "54-41772965",
      "54-41690721",
      "54-41690722",
      "54-41690727",
      "54-41690730",
      "54-41697713",
      "54-41697714",
      "54-41697715",
      "54-41697716",
      "54-41697721",
      "54-41697726",
      "54-41697727",
      "54-41697728",
      "54-41697731",
      "54-41697732"
    ]
    };
  }

  render() {
    return (
        <MuiThemeProvider>
          <Tabs>
            <Tab label="Equipo" style={styles.margenbottom}>
              <div>
                <AutoComplete
                    hintText="Numero de Serie"
                    dataSource={this.state.series}
                />
                <FloatingActionButton mini={true} secondary={true} >
                  <ContentAdd />
                </FloatingActionButton>
              </div>
              <div>
                <TextField
                    hintText="ID2"
                    floatingLabelText="ID2"
                    multiLine={true}
                />
              </div>
              <div>
                <TextField
                    hintText="ID3"
                    floatingLabelText="ID3"
                    multiLine={true}
                    rows={1}
                />
              </div>
              <div>
                <TextField
                    hintText="Address"
                    floatingLabelText="Address"
                    multiLine={true}
                />
              </div>
              <div>
                <TextField
                    hintText="Address2"
                    floatingLabelText="Address2"
                    multiLine={true}
                />
              </div>
            </Tab>
            <Tab label="Item Two" >
              <div>
              </div>
            </Tab>
            <Tab
                label="onActive"
                data-route="/home"
            >
              <div>

              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
    );
  }
}

export default Main;

/*
* <div>
 <MuiThemeProvider muiTheme={muiTheme}>
 <div>
 <AutoComplete
 hintText="Numero de Serie"
 dataSource={this.state.dataSource}
 />
 <FloatingActionButton mini={true} secondary={true} >
 <ContentAdd />
 </FloatingActionButton>
 </div>
 </MuiThemeProvider>
 <MuiThemeProvider muiTheme={muiTheme}>
 <div>
 <TextField
 disabled={false}
 hintText="Disabled Hint Text"
 />
 </div>
 </MuiThemeProvider>
 </div>
* */
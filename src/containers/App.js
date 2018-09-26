import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc//WithClass';

export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      {id: 'asdsa1', name: 'Ringo', age: 28},
      {id: 'asdsa2', name: 'Paul', age: 31},
      {id: 'asdsa3', name: 'John', age: 27},
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  };

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
    }

    return (
      <React.Fragment>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>        
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);

import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';

const person = (props) => {
    return (
        <React.Fragment>
            <AuthContext.Consumer>
                {(value) => value ? <p>I'm authenticated</p> : null}
            </AuthContext.Consumer>
            
            <p onClick={props.click}>I'm {props.name}! And I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.name} />
        </React.Fragment>
    );
};


person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(person, classes.Person);
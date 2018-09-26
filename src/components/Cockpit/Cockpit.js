import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    
    const assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    if(props.persons.length <= 2){
      assignedClasses.push( classes.red );
    }

    if(props.persons.length <= 1){
      assignedClasses.push( classes.bold );
    }

    return(
        <React.Fragment>
            <h1>Hello</h1>
            <p className={assignedClasses.join(' ')}>It's working</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Click here</button>
            <button onClick={props.login}>Login In</button>
        </React.Fragment>
    );
};

export default cockpit;
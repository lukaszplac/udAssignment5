import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from 'react-redux';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDelHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  persons: state.persons
})

const mapDispatchToProps = (dispatch) => ({
  personAddHandler: (name, age) => dispatch({type: 'ADD', name: name, age: age}),
  personDelHandler: (id) => dispatch({type: 'DELETE', id: id})
})


export default connect(mapStateToProps, mapDispatchToProps)(Persons);

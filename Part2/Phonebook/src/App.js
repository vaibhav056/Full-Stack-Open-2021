import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0401231244' },
    { name: 'Ada Lovelace', number: '39445323523' },
    { name: 'Dan Abramov', number: '1243234345' },
    { name: 'Mary Poppendieck', number: '39236423122' }
  ]) 

  const [ newName, NewName ] = useState("");
  const [ newNumber, NewNumber ] = useState("");
  const [ searchName, SearchName ] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook!`)
      NewName('')
    }
    else if(persons.some(person => person.number === newNumber))
    {
      alert(`Phone number ${newNumber} is already in use!`)
      NewNumber('')
    }
    else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      NewName('')
      NewNumber('')
    }
  }

  const handleNameChange = (event) => {
    NewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    NewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    SearchName(event.target.value)
  } 

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={searchName} handleFilterChange={handleFilterChange} />

      <h2> Add a new person </h2>
      <PersonForm addPerson={addPerson} 
                  newName={newName} 
                  setNewName={NewName} 
                  handleNameChange={handleNameChange}
                  newNumber={newNumber} 
                  setNewNumber={NewNumber}
                   handleNumberChange={handleNumberChange} />
         
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={searchName} />
    </div>
  )
}

export default App
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3},
        {name: 'Bob M.', salary: 15000, increase: false, rise: false, id: 4}
      ]
    };
    this.maxId = 5;
  };

  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++,
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        console.log(newArr);
        return {
            data: newArr
        }
    });
}

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id),
      }
    })
  }

  onToggleIncrease = (id) => {
   
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item,increase: !item.increase}
        }
        return item;
      })
    }))
  }

  onToggleRise = (id) => {
    console.log(`Rise ${id}`)
  }

 
  render(){
    return (
      <div className="app">
          <AppInfo />

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            onDelete = {this.deleteItem}
            onToggleIncrease = {this.onToggleIncrease}
            onToggleRise = {this.onToggleRise}
            />
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }

  
}

export default App;

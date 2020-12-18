import React, { Component } from 'react';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';
import './App.css';


class Home extends Component {
  
  id = 5;
  state = {
    toDoList: [
      {
        id: 1,
        text: '여수',
      },
      {
        id: 2,
        text: '제주',
      },
      {
        id: 3,
        text: '부산',
      },
      {
        id: 4,
        text: '독도'
      },
      {
        id: 5,
        text: '울릉도'
      }
    ],
    search: '',
  };

  handleCreate = (data) => {
    const {toDoList} = this.state;
    
    this.setState({
      toDoList: toDoList.concat({
        id: this.id++,
        ...data,
      }),
    });
  };

  handleUpdate = (id, data) => {
    const {toDoList} = this.state;

    this.setState({
      toDoList: toDoList.map((toDoList) => {
        console.log(toDoList);
        if(toDoList.id === id) {
          console.log(toDoList.id + ' / ' + id );
          return {
            id,
            ...data,
          };
        }
        return toDoList;
      }),
    });
  };

  handleRemove = (id) => {
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.filter((data) => data.id !== id),
    });
  };

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { toDoList, search } = this.state;
    return (
      <div className="todo-list-tampleate">
        <h1 className="todo-list-title">TODO LIST</h1>
        <ToDoForm onCreate={this.handleCreate} />
        <div className="form">
          
        <input value={search} name="search" onChange={this.handleSearch} placeholder="..검색" />
        </div>
        <ToDoList data={toDoList.filter((data)=> data.text.indexOf(search) !== -1)} onUpdate={this.handleUpdate} onRemove={this.handleRemove} />
      </div>
      
    );
  }
}

export default Home;
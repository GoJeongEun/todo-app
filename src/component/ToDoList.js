import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ToDoInfo from './ToDoInfo';
import ToDoView  from './ToDoView';
import './toDoList.css';
import Home from '../home';


class ToDoList extends Component {

  handleCreate = (data) => {
      const { toDoList } = this.state;
     
        this.setState({
            toDoList: toDoList.concat({
                id: this. id++,
                ...data,
            }),
        });    
  };
    
  render() {
    const { data, onUpdate, onRemove } = this.props;
    return (
      <BrowserRouter>
      <div>
        <ul className="todos-wrapper">
          {data.map((data) => (
            <li className="todo-item">
                <Link to="/ToDoView">
                <Route exact path="/ToDoView" component={ToDoView}/>
                <ToDoInfo data={data} onUpdate={onUpdate} onRemove={onRemove} />
                </Link>
                
            </li>
          ))}
          <nav aria-label="Page navigation example" className="pagination_Box">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
        </ul>
      </div>
      </BrowserRouter>
    );
  }
}

export default ToDoList;
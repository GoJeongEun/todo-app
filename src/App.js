
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './home';
import ToDoView from './component/ToDoView';


// class App extends Component {
  
//   render() {
//     return (
//       <div>
//         <h2>ㅗ</h2>
//           <Route exact path="/Home" Component={Home} />
//           <Route path="/ToDoView" Component={ToDoView} />
//       </div>
      
//     );
//   }
// }
function App() {
  return(
    
    <div>
      <BrowserRouter>
      <Route exact path="/" component={Home} /> 
      <Route path="/ToDoView/" component={ToDoView} ></Route>
      </BrowserRouter>
    </div>
  )
}

export default App;


import React from "react";
import logo from "./images.png";
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello hitesh its react crash corurse</h1>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    newItem:"",
    list:[],
  }
}


addItem(todoValue){
  if (todoValue !=="") {
    const newItem = {
      id:Date.now(),
      value: todoValue,
      isDone: false,
    }

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
    
  }
}

deleteItem(id){
  const list = [...this.state.list];
  const updateList = list.filter(item => item.id !== id);
  this.setState({
    list:updateList
  })
}

updateInput(input){
  this.setState({newItem:input});
}

  render(){
    return (
      <div className="row">
         {/* <div className="container-fluid">
         <img src={logo} className="logo" alt="logo" width="100" height="100" />
         </div> */}
         <br />
         <h1 className="app-title">CURD OPERATION WITH DJANGO AND REACTJS</h1>
         <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <h3>Add an Item</h3>
                    <div className="form-group">
                      <div className="col-md-12">
                    <input type="text"
                        className="input-text" 
                        placeholder="Please enter Note"
                        required
                        value={this.state.newItem}
                        onChange={e => this.updateInput(e.target.value)}>
                      </input>
                    
                      <input type="date" name="" id="" />
                        <button 
                      className="add-btn" 
                      onClick={() => this.addItem(this.state.newItem)}
                      disabled={!this.state.newItem.length}
                      >submit</button>
                      </div>

                    </div>
                 <div className="list">
                          {this.state.list.map(item => {
                return(
                    <li key={item.id}>
                      <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => {}}
                      />
                      {item.value}
                      <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                      >
                        delete
                      </button>
                    </li>
                );
              })}
       
          </div>
         </div>
      </div>
      </div>
    )
  }
}

export default App;

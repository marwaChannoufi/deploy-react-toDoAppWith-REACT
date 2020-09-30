import React,{Component} from 'react';
import './App.css';
import TodoItem from './to-do-item';
import AddItmes from './addItems'

class App extends Component {
  state ={
    items:[
      // {item:'to-do-app', id:'1'},
      // {item:'credit-card', id:'2'},
      // {item:'formulaire', id:'3'}
    ]
  }

  delateItem =(id) =>{
    console.log(id)
    const items = this.state.items;
    const index =items.findIndex(item => item.id===id)
    items.splice(index,1)
    this.setState({items})
  }
  addItem =(item)=>{
    item.id=Math.random()
    const items=this.state.items;
    items.push(item)
    this.setState({items})
  }
    render(){
      return(
        <div className="App">
          <h1>to do App</h1>
          <AddItmes  addItem={this.addItem}/>
          <TodoItem  listes={this.state.items}  deleteItem={this.delateItem}/>
        </div>
      )
    }
}

export default App;

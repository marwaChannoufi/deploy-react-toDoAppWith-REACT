import React,{Component} from 'react';

class AddItmes extends Component {
  
  state={
    item:''
  }

  handelChange = (e)=>{
  console.log(e.target.value)
  this.setState({
    item:e.target.value
  })
    
  }
  handelSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state)
    this.props.addItem(this.state)
    this.setState({
      item:''
    })

  }

    render(){
      return(
        <div >
          AddItems
          <form  onSubmit={this.handelSubmit}>
          <input type='text' placeholder='entrer item' onChange={this.handelChange} value={this.state.item}/>
          <input type='submit' value='add'  />
          </form>
        </div>
      )
    }
}

export default AddItmes;

import React from 'react'


function TodoItem(props){
    const {listes}=props;
    const {deleteItem} =props;


    const listeItems=listes.map(item=>{
        return (
            <div key={item.id}>
                <input type='submit' value='complete' />
                 <input type='submit' value='delete' onClick={()=>{deleteItem(item.id)}} />   
                <span>{item.item}</span>

            </div> 
        )
    })
    return(
        <div>
            list items :{listeItems}
        </div>
    );
}
export default TodoItem;
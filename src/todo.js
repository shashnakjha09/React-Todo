import React , {useState} from 'react'
import "./todo.css"
function Todo() {

    const[input , setInput] = useState('');
    const[output , setOutput] = useState([]);
    
    const clickHandler = () =>{
             if(!input){
               window.alert("Can't Add Empty Data")
             }
             else{
                setOutput([...output , input]);
                setInput('')
             }
        
    }

    const deleteItems = (id) =>{
        
       const upDateditems = output.filter((elem , ind) =>{
           return ind !== id;
       })

       setOutput(upDateditems);
             
    }

    return (
        <>
            <header>
               <div className="heading">
                    <h2 className="head"> React To-Do List </h2>
                </div>

               <hr className="style-eight"></hr>

                    <div className="field">
                        <div>
                        <input type="textbox" value={input} onChange={(event) => {setInput(event.target.value)}} className="input-filed" />
                        <button type="button" className="button" onClick={clickHandler}>Add</button>
                        </div>
                    </div>
           </header>

           {/* list of items */}

           <div className="list-items">
              {
                output.map((elem , ind) =>{
                  return(
                     <div key={ind}>
                        <div className="flex" key={ind}>

                        <div>
                           <h3 className="items" key={ind}>{elem}</h3>
                        </div>
          
                        <div>
                           <button type="button" className="btn btn-primary" id="button1" onClick={ () => deleteItems(ind)}>Delete</button>
                        </div>
          
                        </div>
                         <div>
                            <h1></h1>
                         </div>
                     </div>
                      )
                })
             }
           </div>
        </>
    )
}

export default Todo

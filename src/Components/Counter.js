import React , {useState} from 'react'
function Counter (){
    const [count, setCount ]= useState(0)

    return (
        <div>  <p> count {count}</p>
        
        </div>
    )

}
export default Counter
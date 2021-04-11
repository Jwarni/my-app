import React from 'react'

function Rs(props){
    return <p> 
        var splitString = props.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join();
        return joinArray;
</p>


}
export default Rs;

import { useState } from "react";

const  AddItem = ()=>{
    const [num, setNum] = useState(1)
    return<>
        <div className="addItem">
        <button onClick={()=>(num > 1? setNum(num - 1): setNum(1))}>-</button>
        <p>{num}</p>
        <button onClick={()=>(num >= 1? setNum(num + 1): setNum(1))}>+</button></div>
    </>
}
export default AddItem;
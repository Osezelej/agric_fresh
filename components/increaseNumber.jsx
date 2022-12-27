import { useEffect, useState } from "react";

const styles = {
    addItemContainer:{
        display:'flex',
        flexDirection: 'row',
        gap:'20px',
        alignItems: 'center', 
        padding:'5px',
        backgroundColor:'lightGray',
        width:'max-content', 
        borderRadius:'4px'
    },
    button:{
        borderStyle:'none', 
        backgroundColor:'lightGray',
        width:'30px'
    },
    numberStyle:{
        margin:'0'
    }
}

const  AddItem = (props)=>{

    const [num, setNum] = useState(1)
    useEffect(()=>{
        props.changePrice(`N${parseInt(props.price.slice(1, props.price.length)) * num}`)
    },[num])

    return<>
        <div className="addItem" style={styles.addItemContainer}>
        <button onClick={()=>{
           
            num > 1? setNum(num - 1): setNum(1)
            
        
        }} style={styles.button}>-</button>
        <p style={styles.numberStyle}>{num}</p>
        <button onClick={()=>{
            num >= 1? setNum(num + 1): setNum(1)
            
        }}  style={styles.button}>+</button></div>
    </>
}

export default AddItem;



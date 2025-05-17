import React from "react";


const Child = ({list,func})=>{

    return (
        <>
        <h2>Child component</h2>
        <ul>
            {list.map((v)=>{
                return <li key={v.id}  >{v.task}
                {!v.completed && (
                    <button onClick={()=>{func(v.id)}} >Complete</button>
                )}
             </li>
            })}
        </ul>
        </>
    )
}

export default Child
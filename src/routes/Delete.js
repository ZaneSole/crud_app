import React, {useState, useEffect} from 'react'
import '../App.css';

const Delete = () => {

    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    const [ids, setIds] = useState('')

    const deleteUser = async() => {

        let id = ids;

        console.log(id)

        const request = await fetch(`http://localhost:3000/api/${id}`, {
            method: 'DELETE',
        })

        request();

    }

    useEffect(() => {
        
    })
    
    return (

        <div className='delete'>
            <h1>Delete Method</h1>
            {/* <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type='text' value={age} onChange={(e) => setAge(e.target.value)}></input> */}
            <input type='number' value={ids} onChange={(e) => setIds(e.target.value)}></input>
            <button className='btn' onClick={() => deleteUser()}>Delete</button>
        </div>
     
       )
    
}

export default Delete;
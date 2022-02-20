import React, {useState, useEffect} from 'react'
import '../App.css';

const Post = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const postUser = async() => {

        let items = {name, email}

        console.log(items)

        const request = await fetch(`http://localhost:3000/api`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })

        request();

    }

    useEffect(() => {
        
    })
    
    return (

        <div className='post'>
            <h1>Post Method</h1>
            <div>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
            <label>Email:</label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <button className='btn' onClick={() => postUser()}>Post</button>
        </div>
     
       )
    
}

export default Post
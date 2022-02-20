import React, {useState, useEffect} from 'react'
import '../App.css';

const Put = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')

  const postUser = async() => {

      let items = {name, email, id}

      console.log(items)

      const request = await fetch(`http://localhost:3000/api/${id}`, {
          method: 'PUT',
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

    <div className='put'>
    <h1>Put Method</h1>
    <div>
    <label>UserID:</label>
    <input type='text' value={id} onChange={(e) => setId(e.target.value)}></input>
    </div>
    <div>
    <label>Name:</label>
    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
    <div>
    <label>Email:</label>
    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}></input>
    </div>
    <button className='btn' onClick={() => postUser()}>Put</button>
</div>

  )

}

export default Put
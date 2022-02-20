import React, {useState, useEffect} from 'react'
import '../App.css';

const Get = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        let fetching = async() => {

            let request = await fetch('http://localhost:3000/api');
            let response = await request.json();

            setData(response);

        } 

        setInterval(() => {

            fetching();

        }, 2000)

    }, [])

    return (
        <div className='get'>
            <h1>Get Method</h1>
            {data.map((a, i) => {
                return (
                    <div key={i}>
                        <h5>ID: {a.id}</h5>
                        <h5>Name: {a.name}</h5>
                        <h5>Email: {a.email}</h5>
                    </div>
                )
            })}
        </div>
     
       )
     
     }

export default Get
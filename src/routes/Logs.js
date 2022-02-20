import React, {useState, useEffect} from 'react'
import '../App.css';

const Logs = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        let fetching = async() => {

            let request = await fetch('http://localhost:3000/api/logs');
            let response = await request.json();

            setData(response);

        } 

        setInterval(() => {

            fetching();

        }, 2000)

    }, [])

    return (

        <div className='logs'>
            <h1>Server Logs</h1>
            {data.map((a, i) => {
                return (
                    <div key={i}>
                        <h5>[ ID: {a.id}</h5>
                        <h5>Name: {a.name}</h5>
                        <h5>Age: {a.age}</h5>
                        <h5>Method: {a.method}</h5>
                        <h5>Message: {a.msg} ]</h5>
                    </div>
                )
            })}
        </div>
     
       )
     
     }

export default Logs
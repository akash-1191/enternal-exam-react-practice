import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Loogin = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios("http://127.0.0.1:5500/mytest/src/Component/Data.json")
            .then(response => {
                setdata(response.data);
            })
    }, []);
    console.log(data);


    return (
        <div>
            <h1>Json data </h1>
            <table border='1'>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Status</th>
                </tr>
                {data.map((item, index) => (
                    <tr kye={item}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.age}
                        </td>
                        <td>
                            {item.status ? 'yes' : 'no'}
                        </td>
                    </tr>
                ))}
            </table>



        </div>

    )
}

export default Loogin

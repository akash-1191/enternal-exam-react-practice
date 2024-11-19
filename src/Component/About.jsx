import React, { useState } from 'react'

const About = () => {

    const state = ['up', 'delhi', 'gujrat'];
    const city = {
        "up": ['a', 'b', 'c'],
        "delhi": ['d', 'e', 'f'],
        "gujrat": ['g', 'h', 'i']
    }

    const [selectedstate, setselectedstate] = useState('')
    console.log(selectedstate);
    return (
        <div>

            <h1>casecading Style </h1>
            <select onChange={(e)=>{setselectedstate(e.target.value)}}>
                {
                    state.map(state =>{
                        return <option >{state}</option>
                    })
                }
            </select>

            <select>
                {selectedstate &&
                    city[selectedstate].map(city=>{
                        return <option >{city}</option>
                    })
                }
            </select>
        </div>
    )
}


export default About

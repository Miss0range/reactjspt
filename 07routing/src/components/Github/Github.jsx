import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    // const [data,setData ] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/miss0range")
    //     .then((response)=>response.json())
    //     .then((resData)=>setData(resData))
    // },[])
    // console.log(data);

    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <p>Github User: {data.login}</p>
            <img src={data.avatar_url} width="300px" alt="" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/miss0range");
    return response.json();
}
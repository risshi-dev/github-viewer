import React, { useState } from 'react'
import '../CSS/searchuser.css'
import UserDetails from './UserDetails'

function SearchUser() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState('')
    const [data, setData] = useState({})
    

    const errorHandle = (data)=>
    {
             if(data.message)
                setError(true)
             else
                return setData(data)
    }
    
    const findId = () =>
    {
        setError(false)
        fetch(`https://api.github.com/users/${id}`)
        .then(data => data.json())
        .then(data => errorHandle(data))

        setId('')
        setLoading(false)
        
   }
    
    return (
        <div>
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder='Enter Id to search' value={id} onChange={(e)=> setId(e.target.value)} className='search'></input>
                <button onClick={findId} className='fill searchbtn'>Find</button>
                </form>
                
            </div>
            {loading ? '' : error ? <div style={{margin:'2vh auto', fontWeight:'500'}}>Not Found</div> :<UserDetails data={data}/>}
        </div>
    )
}

export default SearchUser

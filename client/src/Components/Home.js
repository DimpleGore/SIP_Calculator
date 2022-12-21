import axios from 'axios'
import React ,{ useState } from 'react'
 
function Home(){

    const [data, setData] = useState("");

    const buttonHandler = async() => {
        const result = await axios.get("/home")
        console.log(result)
        setData(result.data)
    }
    return (
        <div>
            {data.length>0 && <h2>{data}</h2>}
            <button onClick={buttonHandler}>Click me</button>
        </div>
        

    )
}

export default Home
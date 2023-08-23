import { useState } from 'react'
import './MediaInfoStyles.css'
import axios from 'axios'
const MediaInfo = (props) => {
    let [data, setData] = useState()
    const {id,type} = props
    

    async function getData() {
        const info = await axios.post('http://localhost:8000/query', { id,type })
        setData(info.data)
        console.log(data);
    }
    getData()
    return (
        <div>
            <p>
                123
            </p>
        </div>
    )
}
export default MediaInfo
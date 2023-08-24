import { useState } from 'react'
import './MediaInfoStyles.css'
import axios from 'axios'
const MediaInfo = (props) => {
    let [data, setData] = useState()
    const {id,type} = props
    let backend_link;
    if (import.meta.env.MODE === 'production') {
        backend_link = import.meta.env.VITE_SERVER_LINK
    }
    else if (import.meta.env.MODE === 'development') {
        backend_link = import.meta.env.VITE_LOCAL_LINK
    }

    async function getData() {
        const info = await axios.post(backend_link+'/query', { id,type })
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
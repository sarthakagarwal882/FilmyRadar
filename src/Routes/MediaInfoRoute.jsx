/* eslint-disable react/prop-types */
import {useParams} from "react-router-dom"
import MediaInfo from "../Components/MediaInfo"
import Navbar from "../Components/Navbar"
const MediaInfoRoute = (props) => {
    const category=props.category
    const {id} = useParams()
    return (
        <div>
            <Navbar/>
            <MediaInfo id={id} type={category}/>
        </div>
    )
}
export default MediaInfoRoute
import {useSearchParams} from "react-router-dom"
import MediaInfo from "../Components/MediaInfo"
import Navbar from "../Components/Navbar"
const MediaInfoRoute = (props) => {
    const category=props.category
    const [searchParam, setSearchParam] = useSearchParams()
    let query = searchParam.get('id') 
    return (
        <div>
            <Navbar/>
            <MediaInfo id={query} type={category}/>
        </div>
    )
}
export default MediaInfoRoute
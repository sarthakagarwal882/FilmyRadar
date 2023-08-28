import {useSearchParams} from "react-router-dom"
import MediaInfo from "../Components/MediaInfo"
const MediaInfoRoute = (props) => {
    const category=props.category
    const [searchParam, setSearchParam] = useSearchParams()
    let query = searchParam.get('id') 
    return (
        <div>
            <MediaInfo id={query} type={category}/>
        </div>
    )
}
export default MediaInfoRoute
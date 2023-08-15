import { useLocation, useSearchParams } from "react-router-dom"
import MediaInfo from "../Components/MediaInfo"
const MediaInfoRoute = () => {
    const location=useLocation()
    const [searchParam, setSearchParam] = useSearchParams()
    let query = searchParam.get('q')
    // console.log(location.state);
    return (
        <div>
            <MediaInfo id={query} type={location.state}/>
        </div>
    )
}
export default MediaInfoRoute
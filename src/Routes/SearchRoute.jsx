import SearchResults from '../Components/searchResults/searchResults'
import Navbar from '../Components/navbar/Navbar'
import { useSearchParams } from "react-router-dom"

const SearchRoute=()=>{
    // eslint-disable-next-line no-unused-vars
    const [searchParam, setSearchParam] = useSearchParams()
    let query = searchParam.get('query')

    return(
        <div>
        <Navbar/>
        <SearchResults query={query}/>
        </div>
    )
}
export default SearchRoute
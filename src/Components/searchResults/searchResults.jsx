/* eslint-disable react/prop-types */
import { useState } from "react";
import backend_ref from "../BackendRef";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import MediaCard from "../mediaCard/MediaCard";
import './SearchResultsStyles.css'


const SearchResults = (props) => {
    const [data, setData] = useState(null)
    const searchText = props.query
    async function getData() {
        const queryResult = await (axios.post(backend_ref + "/search", { searchText }))
        setData(queryResult.data)
    }
    getData()
    return (
        (data !== null) ?

            < div className="s-wrapper">
                <div className="s-data-wrapper">
                    <h2>Movies</h2>
                    <hr />
                    <div className="s-data">
                        {
                            data[0].map((item) => { return (<MediaCard key={item.id} data={item} />) })
                        }
                    </div>
                </div>
                <div className="s-data-wrapper">
                    <h2>TV</h2>
                    <hr />
                    <div className="s-data">
                        {
                            data[1].map((item) => { return (<MediaCard key={item.id} data={item} />) })
                        }
                    </div>
                </div>
            </div >
            :
            <div className="s-spinner">
                <Spinner />
            </div>
    )
}
export default SearchResults
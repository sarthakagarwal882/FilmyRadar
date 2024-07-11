/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import backend_ref from "../BackendRef";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import MediaCard from "../MediaCard/MediaCard";
import './searchResultsStyles.css'


const SearchResults = (props) => {
    useEffect(()=>{console.log('load');},[])
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
                            (data[0].length > 0) ? (data[0].map((item) => { return (<MediaCard key={item.id} data={item} />) })) : <p className="sorry-msg">Sorry! no data availible.</p>
                        }
                    </div>
                </div>
                <div className="s-data-wrapper">
                    <h2>TV Shows</h2>
                    <hr />
                    <div className="s-data">
                        {
                            (data[1].length > 0) ? (data[1].map((item) => { return (<MediaCard key={item.id} data={item} />) })) : <p className="sorry-msg">Sorry! no data availible.</p>}
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
/* eslint-disable react/prop-types */
import { useState } from "react";
import backend_ref from "../BackendRef";
import axios from "axios";


const SearchResults = (props) => {
    const [data,setData]=useState()
    const searchText=props.query
    async function getData(){
        const queryResult = await(axios.post(backend_ref + "/search", { searchText }))
        setData(queryResult.data)
    }
    getData()
    return (
        <div>
            <div className="search-movie">

            </div>
            <div className="search-tv"></div>
        </div>
    )
}
export default SearchResults
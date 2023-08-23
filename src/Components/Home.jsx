
import MediaCard from './MediaCard';
import { useState, useEffect, } from 'react';
import './HomeStyles.css'
import axios from 'axios'


const Home = (props) => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const server = import.meta.env.VITE_SERVER_LINK
    useEffect(() => {
        const fetch = async () => {

            if (count === 0) {
                let info = (await axios.get(server+'/movie/top_rated')).data

                setData([info])
                // console.log(info);
                let a = count + 1
                setCount(a)

            }
            if (count === 1) {
                let info = (await axios.get('http://localhost:8000/movie/now_playing')).data
                setData((prevValue) =>
                    [
                        ...prevValue,
                        info
                    ]

                )
                let a = count + 1
                setCount(a)
            }
            if (count === 2) {
                let info = (await axios.get('http://localhost:8000/movie/popular')).data

                setData((prevValue) =>
                    [
                        ...prevValue,
                        info
                    ]

                )
                let a = count + 1
                setCount(a)
            }
            if (count === 3) {
                let info = (await axios.get('http://localhost:8000/tv/popular')).data

                setData((prevValue) =>
                    [
                        ...prevValue,
                        info
                    ]

                )
                let a = count + 1
                setCount(a)
            }
            if (count === 4) {
                let info = (await axios.get('http://localhost:8000/tv/top_rated')).data

                setData((prevValue) =>
                    [
                        ...prevValue,
                        info
                    ]

                )
                let a = count + 1
                setCount(a)
            }
        }
        fetch()
    }, [count])


    return (
        <div className='home'>
            <div className='home-movies'>
                <h2>Movies</h2>
                <hr />
                <h3>Top rated</h3>

                <div className='media-all'>
                    {data.length > 0 && data[0].map((item) => {
                        return (
                            <MediaCard key={item.id} data={item} />)
                    })}
                </div>
                <h3>Now playing</h3>
                <div className='media-all' key={2}>
                    {data.length > 1 && data[1].map((item) => {
                        return (
                            <MediaCard key={item.id} data={item} />)
                    })}
                </div>
                <h3>Popular</h3>
                <div className='media-all' key={3}>
                    {data.length > 2 && data[2].map((item) => {
                        return (
                            <MediaCard key={item.id} data={item} />)
                    })}
                </div>
            </div>
            <div className='home-tv'>
                <h2>TV</h2>
                <hr />
                <h3>Popular</h3>
                <div className='media-all' key={4}>
                    {data.length > 3 && data[3].map((item) => {
                        return (
                            <MediaCard key={item.id} data={item} />)
                    })}
                </div>
                <h3>Top rated</h3>
                <div className='media-all' key={5}>
                    {data.length > 4 && data[4].map((item) => {
                        return (
                            <MediaCard key={item.id} data={item} />)
                    })}
                </div>
            </div>

        </div>
    )
};
export default Home 
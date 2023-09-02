
import MediaCard from './MediaCard';
import { useState, useEffect, } from 'react';
import './HomeStyles.css'
import axios from 'axios'


const Home = (props) => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [state, setState] = useState('')
    let backend_link;
    if (import.meta.env.MODE === 'production') {
        backend_link = import.meta.env.VITE_SERVER_LINK
    }
    else if (import.meta.env.MODE === 'development') {
        backend_link = import.meta.env.VITE_LOCAL_LINK
    }
    useEffect(() => {
        setState(props.state)
        const fetch = async () => {

            if (count === 0) {
                try {
                    let info = (await axios.get(backend_link + '/movie/top_rated')).data
                    setData([info])
                    let a = count + 1
                    setCount(a)
                }
                catch (err) {
                    console.log(err);
                }

            }
            if (count === 1) {
                try {
                    let info = (await axios.get(backend_link + '/movie/now_playing')).data
                    setData((prevValue) =>
                        [
                            ...prevValue,
                            info
                        ]

                    )
                    let a = count + 1
                    setCount(a)
                }
                catch (err) {
                    console.log(err);
                }

            }
            if (count === 2) {
                try {
                    let info = (await axios.get(backend_link + '/movie/popular')).data
                    setData((prevValue) =>
                        [
                            ...prevValue,
                            info
                        ]

                    )
                    let a = count + 1
                    setCount(a)
                }
                catch (err) {
                    console.log(err);
                }

            }
            if (count === 3) {
                try {
                    let info = (await axios.get(backend_link + '/tv/popular')).data
                    setData((prevValue) =>
                        [
                            ...prevValue,
                            info
                        ]

                    )
                    let a = count + 1
                    setCount(a)
                }
                catch (err) {
                    console.log(err);
                }

            }
            if (count === 4) {
                try {
                    let info = (await axios.get(backend_link + '/tv/top_rated')).data
                    setData((prevValue) =>
                        [
                            ...prevValue,
                            info
                        ]

                    )
                    let a = count + 1
                    setCount(a)
                }
                catch (err) {
                    console.log(err);
                }

            }
        }

        fetch()
    }, [count])



        return (
            <div className='home-wrapper'>
                {(data.length == 0) ?
                    <div>
                        <img className='home-spinner' src="../assets/spinner.svg" alt="" />
                    </div>
                    :
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
                }

            </div>

        )
};
export default Home
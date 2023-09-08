
import MediaCard from '../mediaCard/MediaCard';
import { useState, useEffect, } from 'react';
import './HomeStyles.css'
import axios from 'axios'
import Spinner from '../Spinner/Spinner';
import { MdKeyboardArrowRight } from 'react-icons/md'



const Home = () => {

    const [dataLength, setDataLength] = useState({})
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    let backend_link;
    if (import.meta.env.MODE === 'production') {
        backend_link = import.meta.env.VITE_SERVER_LINK
    }
    else if (import.meta.env.MODE === 'development') {
        backend_link = import.meta.env.VITE_LOCAL_LINK
    }
    useEffect(() => {
        const fetch = async () => {

            if (count === 0) {
                try {
                    let info = (await axios.get(backend_link + '/movie/top_rated')).data
                    setData([info])
                    if ((info.length) % 8 === 0)
                        setDataLength(
                            {
                                ...dataLength,
                                'm-top': Math.floor((info.length) / 8)
                            }
                        )
                    else
                        setDataLength(
                            {
                                ...dataLength,
                                'm-top': (Math.floor(((info.length) / 8) + 1))
                            }
                        )
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
                    if ((info.length) % 8 === 0)
                        setDataLength(
                            {
                                ...dataLength,
                                'm-now': Math.floor((info.length) / 8)
                            }
                        )
                    else
                        setDataLength(
                            {
                                ...dataLength,
                                'm-now': Math.floor(((info.length) / 8) + 1)
                            }
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
                    if ((info.length) % 8 === 0)
                        setDataLength(
                            {
                                ...dataLength,
                                'm-pop': Math.floor((info.length) / 8)
                            }
                        )
                    else
                        setDataLength(
                            {
                                ...dataLength,
                                'm-pop': Math.floor(((info.length) / 8) + 1)
                            }
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
                    if ((info.length) % 8 === 0)
                        setDataLength(
                            {
                                ...dataLength,
                                'tv-pop': Math.floor((info.length) / 8)
                            }
                        )
                    else
                        setDataLength(
                            {
                                ...dataLength,
                                'tv-pop': Math.floor(((info.length) / 8) + 1)
                            }
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
                    if ((info.length) % 8 === 0)
                        setDataLength(
                            {
                                ...dataLength,
                                'tv-top': Math.floor((info.length) / 8)
                            }
                        )
                    else
                        setDataLength(
                            {
                                ...dataLength,
                                'tv-top': Math.floor(((info.length) / 8) + 1)
                            }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backend_link, count])

    function handleShowMore() {
        // console.log(e.target.className);
    }

    return (
        <div className='h-wrapper'>
            {(data.length == 0) ?
                <div className='h-spinner-wrapper'>
                    <Spinner></Spinner>
                </div>
                :
                <div className='home'>
                    <div className='h-media=wrapper'>
                        <h2>Movies</h2>
                        <hr />
                        <h3><span className='h-playlist-span'></span>Top rated<MdKeyboardArrowRight className='h-playlist-icon' /></h3>

                        <div className='h-media'>
                            {data.length > 0 && data[0].map((item) => {
                                return (
                                    <MediaCard key={item.id} data={item} />)
                            })}
                            <span className='h-show-more' key='movie-top' onClick={handleShowMore}>Show more</span>
                        </div>
                        <h3><span className='h-playlist-span'></span>Now playing<MdKeyboardArrowRight className='h-playlist-icon' /></h3>
                        <div className='h-media' key={2}>
                            {data.length > 1 && data[1].map((item) => {
                                return (
                                    <MediaCard key={item.id} data={item} />)
                            })}
                        </div>
                        <h3><span className='h-playlist-span'></span>Popular<MdKeyboardArrowRight className='h-playlist-icon' /></h3>
                        <div className='h-media' key={3}>
                            {data.length > 2 && data[2].map((item) => {
                                return (
                                    <MediaCard key={item.id} data={item} />)
                            })}
                        </div>
                    </div>
                    <div className='h-media-wrapper'>
                        <h2>TV</h2>
                        <hr />
                        <h3><span className='h-playlist-span'></span>Popular<MdKeyboardArrowRight className='h-playlist-icon' /></h3>
                        <div className='h-media' key={4}>
                            {data.length > 3 && data[3].map((item) => {
                                return (
                                    <MediaCard key={item.id} data={item} />)
                            })}
                        </div>
                        <h3><span className='h-playlist-span'></span>Top rated<MdKeyboardArrowRight className='h-playlist-icon' /></h3>
                        <div className='h-media' key={5}>
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
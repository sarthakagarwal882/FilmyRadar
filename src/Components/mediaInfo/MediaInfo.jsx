import { useEffect, useState } from 'react'
import { BiLogoImdb } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { SiRottentomatoes } from 'react-icons/si'
import { BsImages } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './MediaInfoStyles.css'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import { useSelector } from 'react-redux'
import backend_ref from '../BackendRef'
const MediaInfo = (props) => {
    const stateInfo = useSelector((info) => { return (info.user.data) })
    const [data, setData] = useState('')
    let count = 0
    // eslint-disable-next-line react/prop-types
    const { id, type } = props


    function getData() {
        const info = axios.post(backend_ref + '/searchInfo', { id, type })
        info.then((res) => { setData(res.data); })
    }
    useEffect(getData, [])

    async function handleWishlist() {
        if ('username' in stateInfo)
            console.log('ready');
        else
            console.log('not ready');

    }
    if (data == '')
        return (
            <div className='media-info-spinner'>
                <Spinner></Spinner>
            </div>
        )
    if (data !== '') {
        if ('backdrops' in data.images)
            count = ((data.images.backdrops).length)
        if ('logos' in data.images)
            count += ((data.images.logos).length)
        if ('posters' in data.images) {
            count += ((data.images.posters).length)
        }
        return (
            <div className='media-info'>
                <div className='media-info-intro'>
                    <div className='media-info-title'>
                        <p>{data.title}</p>
                    </div>

                    <div className='media-info-ratings'>
                        {(data === '') ? null :
                            <ul>
                                {(data.ratings).map((item) => {

                                    if ('Internet Movie Database' in item) {
                                        return (
                                            <li key='1'>
                                                <BiLogoImdb className='imdb-svg' />
                                                <p>{item["Internet Movie Database"]}</p>
                                            </li>
                                        )
                                    }
                                    if ('Rotten Tomatoes' in item) {
                                        return (
                                            <li key='2'>

                                                <SiRottentomatoes className='rTomato-svg' />
                                                <p>{item["Rotten Tomatoes"]}</p>
                                            </li>
                                        )
                                    }
                                    if ('Metacritic' in item) {
                                        return (
                                            <li key='3'>
                                                <div className='metacritic-logo-svg metacritic-logo'></div>
                                                <p>{item["Metacritic"]}</p>
                                            </li>
                                        )
                                    }
                                }
                                )}
                            </ul>
                        }
                    </div>
                </div>

                <div className='media-info-details'>
                    <div className='media-info-img'>
                        <img src={data.poster_path} alt="poster-image" />
                    </div>
                    <div className='media-info-media'>
                        <div className='media-info-trailer'>
                            {(data === '') ? null :
                                <iframe src={(data.videos)[0].link}></iframe>
                            }
                        </div>
                        <Link className='media-info-images' to={'/images'} state={data.images} >
                            <div>
                                <BsImages />
                                <p>{(count >= 99) ? '99+' : count} Images</p>
                            </div>
                        </Link>
                    </div>
                    <div className='media-info-data'>
                        <div className='data-wrapper'>
                            <div>
                                <p className='data-info'> <span className='data-title'>Overview: </span>
                                    {data.overview}</p>
                            </div>
                            <div>
                                <p className='data-info'> <span className='data-title'>Genre: </span>
                                    {(data.genre).map((item) => { if (item === data.genre[0]) { return (item) } else { return (', ' + item) } })}</p>
                            </div>
                            <div>
                                <p className='data-info'> <span className='data-title'>Release date: </span>
                                    {data.release_date}</p>
                            </div>
                            <div>
                                <p className='data-info'> <span className='data-title'>Adult: </span>
                                    {String(data.adult)}</p>
                            </div>
                            <div>
                                <p className='data-info'> <span className='data-title'>Original language: </span>
                                    {data.original_language}</p>
                            </div>
                        </div>
                        <div>
                            <div onClick={handleWishlist} className='add-to-wish'><span><AiOutlinePlus />Add to Watchlist</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default MediaInfo
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BiLogoImdb } from 'react-icons/bi'
import { SiRottentomatoes } from 'react-icons/si'
import { AiOutlinePlus, AiFillCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './MediaCardStyles.css'
import AddToList from './AddToList'
const MediaCard = (props) => {
    const [display, setDisplay] = useState(false)
    const data = props.data
    let count = 0
    function handleInfo() {
        setDisplay(!display)
    }
    return (
        <>
            < div className="mediaCard" >
                <img src={(props.type === 'person') ? (data.profile_path) : (data.poster_path)} alt="" />

                {
                    ('ratings' in data) ?
                        ((data.ratings) === null || undefined) ? null :
                            <>
                                <ul className='mediacard-ul'>
                                    {(data.ratings).map((item) => {

                                        if ('Internet Movie Database' in item) {
                                            return (
                                                <li key={count++}>
                                                    <BiLogoImdb className='imdb-svg' />
                                                    <p>{item["Internet Movie Database"]}</p>
                                                </li>
                                            )
                                        }
                                        if ('Rotten Tomatoes' in item) {
                                            return (
                                                <li key={count++}>

                                                    <SiRottentomatoes className='rTomato-svg' />
                                                    <p>{item["Rotten Tomatoes"]}</p>
                                                </li>
                                            )
                                        }
                                        if ('Metacritic' in item) {
                                            return (
                                                <li key={count++}>
                                                    <div className='metacritic-logo'></div>
                                                    <p>{item["Metacritic"]}</p>
                                                </li>
                                            )
                                        }
                                    }
                                    )}
                                </ul>
                                {/* <p>{data.genres}</p> */}
                            </>
                        : null
                }

                <p className='media-title'>{data.title}</p>

                <Link to={'/'+data.type+'/?id=' + data.id}>
                    <button onClick={handleInfo} className='get-info'>
                        <div className='get-info-div'>
                            <div>
                                <p>Get full info</p>
                            </div>
                        </div>
                    </button>
                </Link>


            </div >

        </>

    )
}
export default MediaCard
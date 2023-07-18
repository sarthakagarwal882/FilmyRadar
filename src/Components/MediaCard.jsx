/* eslint-disable react/prop-types */
import { BiLogoImdb } from 'react-icons/bi'
import { SiRottentomatoes } from 'react-icons/si'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './MediaCardStyles.css'
const MediaCard = (props) => {
    const data = props.data
    let count = 0
    return (
        <div className="mediaCard">
            <img src={(props.type === 'person') ? (data.profile_path) : (data.poster_path)} alt="" />


            {
                ('ratings' in data) ?
                    ((data.ratings) === null || undefined) ? null :
                        <ul>
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
                    : null
            }

            <p className='media-title'>{data.title}</p>
            {(props.type==='person')?null:
                <Link to='/login'>
                    <button className='add-watchlist'>
                        <div>
                        <AiOutlinePlus className='watchlist-plus'/>
                        <p>Watchlist</p>
                        </div>
                    </button>
                </Link>
            }
        </div>
    )
}
export default MediaCard
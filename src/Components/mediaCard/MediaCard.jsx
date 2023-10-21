/* eslint-disable react/prop-types */
import { BiLogoImdb } from 'react-icons/bi'
import { SiRottentomatoes } from 'react-icons/si'
import { Link } from 'react-router-dom'
import './MediaCardStyles.css'
const MediaCard = (props) => {

    const data = props.data
    let count = 0

    return (
        < div className="mediacard" >
            <Link className='mediacard-link' to={'/' + data.type + '?id=' + data.id}>
                <img src={data.poster_path} alt="" />

                {
                    ('ratings' in data) ?
                        ((data.ratings) === null || undefined) ? 
                        <ul className='mediacard-ul'></ul>
                        :
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
                            </>
                        : null
                }
                <p className='media-title'>{data.title}</p>

            </Link>
        </div >
    )
}
export default MediaCard
import { AiOutlinePlus } from 'react-icons/ai'
// import './AddToListStyles.css'
import { useState } from 'react';

const AddToList = (props) => {
    const [clickedList, setClickedList] = useState(0)
    function handleListClick(e) {
        setClickedList(e.target.value)
    }
    return (
        <div className='watchlist'>
            <div>
                <ul>
                    <li value='1' onClick={handleListClick}>Watching</li>
                    <li value='2' onClick={handleListClick}>Completed</li>
                    <li value='3' onClick={handleListClick}>On hold</li>
                    <li value='4' onClick={handleListClick}>Dropped</li>
                    <li value='5' onClick={handleListClick}>Plan to watch</li>
                </ul>
            </div>
        </div>
    )
}
export default AddToList
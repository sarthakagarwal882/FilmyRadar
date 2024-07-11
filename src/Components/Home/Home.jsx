import MediaCard from "../MediaCard/MediaCard";
import { useState, useEffect } from "react";
import "./HomeStyles.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../store/slice/homeData";
import { addData } from "../../store/slice/searchResults";
import backend_ref from "../BackendRef";

const Home = () => {
  let homeData = useSelector((store) => store.home);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(addData(""));
    const fetch = async () => {
      if (count === 0) {
        try {
          if (homeData.length >= 1) {
            setData([homeData[0]]);
          } else {
            let info = (await axios.get(backend_ref + "/movie/now_playing"))
              .data;
            setData([info]);
            dispatch(loadData(info));
          }

          let a = count + 1;
          setCount(a);
        } catch (err) {
          console.log(err);
        }
      } else if (count === 1) {
        try {
          if (homeData.length >= 2) {
            setData([...data, homeData[1]]);
          } else {
            let info = (await axios.get(backend_ref + "/movie/top_rated")).data;
            setData((prevValue) => [...prevValue, info]);
            dispatch(loadData(info));
          }
          let a = count + 1;
          setCount(a);
        } catch (err) {
          console.log(err);
        }
      } else if (count === 2) {
        try {
          if (homeData.length >= 3) {
            setData([...data, homeData[2]]);
          } else {
            let info = (await axios.get(backend_ref + "/movie/popular")).data;
            setData((prevValue) => [...prevValue, info]);
            dispatch(loadData(info));
          }

          let a = count + 1;
          setCount(a);
        } catch (err) {
          console.log(err);
        }
      } else if (count === 3) {
        try {
          if (homeData.length >= 4) {
            setData([...data, homeData[3]]);
          } else {
            let info = (await axios.get(backend_ref + "/tv/popular")).data;
            setData((prevValue) => [...prevValue, info]);
            dispatch(loadData(info));
          }

          let a = count + 1;
          setCount(a);
        } catch (err) {
          console.log(err);
        }
      } else if (count === 4) {
        try {
          if (homeData.length >= 5) {
            setData([...data, homeData[4]]);
          } else {
            let info = (await axios.get(backend_ref + "/tv/top_rated")).data;
            setData((prevValue) => [...prevValue, info]);
            dispatch(loadData(info));
          }

          let a = count + 1;
          setCount(a);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetch();
  }, [backend_ref, count]);

  return (
    <div className="h-wrapper">
      {data.length == 0 ? (
        <div className="h-spinner-wrapper">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="home">
          {/* ---------------------------------------------------Movies------------------------------------------------- */}

          <div className="h-media-wrapper">
            <h2>Movies</h2>
            <hr />
            {/* ---------------------------------------------------Now Playing------------------------------------------------- */}
            <div>
              <h3>
                <span className="h-playlist-span"></span>Now playing
                <MdKeyboardArrowRight className="h-playlist-icon" />
              </h3>
              <div className="h-media" key={2}>
                {data.length > 0 &&
                  data[0].map((item) => {
                    return <MediaCard key={item.id} data={item} />;
                  })}
              </div>
            </div>
            {/* ---------------------------------------------------Top Rated------------------------------------------------- */}
            <div>
              <h3>
                <span className="h-playlist-span"></span>Top rated
                <MdKeyboardArrowRight className="h-playlist-icon" />
              </h3>

              <div className="h-media">
                {data.length > 1 &&
                  data[1].map((item) => {
                    return <MediaCard key={item.id} data={item} />;
                  })}
                {/* <span className='h-show-more' key='movie-top'>Show more</span> */}
              </div>
            </div>
            {/* ---------------------------------------------------Popular------------------------------------------------- */}
            <div>
              <h3>
                <span className="h-playlist-span"></span>Popular
                <MdKeyboardArrowRight className="h-playlist-icon" />
              </h3>
              <div className="h-media" key={3}>
                {data.length > 2 &&
                  data[2].map((item) => {
                    return <MediaCard key={item.id} data={item} />;
                  })}
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------TV Shows------------------------------------------------- */}

          <div className="h-media-wrapper">
            <h2>TV</h2>
            <hr />
            {/* ---------------------------------------------------Popular------------------------------------------------- */}
            <div>
              <h3>
                <span className="h-playlist-span"></span>Popular
                <MdKeyboardArrowRight className="h-playlist-icon" />
              </h3>

              <div className="h-media" key={4}>
                {data.length > 3 &&
                  data[3].map((item) => {
                    return <MediaCard key={item.id} data={item} />;
                  })}
              </div>
            </div>
            {/* ---------------------------------------------------Top Rated------------------------------------------------- */}
            <div>
              <h3>
                <span className="h-playlist-span"></span>Top rated
                <MdKeyboardArrowRight className="h-playlist-icon" />
              </h3>
              <div className="h-media" key={5}>
                {data.length > 4 &&
                  data[4].map((item) => {
                    return <MediaCard key={item.id} data={item} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;

import { useSelector } from "react-redux";
import classes from "./MediaImagesStyles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

const MediaImages = () => {
  let data = useSelector((store) => store.searchData.data);
  let location = useLocation();
  let prevPath = location.state.prevPath;
  let navigateTo = useNavigate();
  const initialState = 6;

  function reducer(state, action) {
    switch (action.type) {
      case "LOAD_MORE":
        return state + 10;
      default:
        throw new Error();
    }
  }
  let [backdropsCount, setBackdropsCount] = useReducer(reducer, initialState);
  let [postersCount, setPostersCount] = useReducer(reducer, initialState);
  let [logosCount, setLogosCount] = useReducer(reducer, initialState);

  useEffect(() => {
    if (data === "") navigateTo(prevPath);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      {data.images?.backdrops && (
        <div className={classes.wrapper}>
          <h2>Backdrops</h2>
          <hr />
          <div className={classes["image-grid"]}>
            {data.images?.backdrops
              ?.slice(0, backdropsCount)
              ?.map((item, idx) => (
                <img key={idx} src={item.file_path} loading="lazy" />
              ))}
          </div>
          <button onClick={() => setBackdropsCount({ type: "LOAD_MORE" })}>
            Load More Backdrops
          </button>
        </div>
      )}
      {data.images?.posters && (
        <div className={classes.wrapper}>
          <h2>Posters</h2>
          <hr />
          <div className={classes["image-grid"]}>
            {data.images?.posters?.slice(0, postersCount)?.map((item, idx) => (
              <img key={idx} src={item.file_path} loading="lazy" />
            ))}
          </div>
          <button onClick={() => setPostersCount({ type: "LOAD_MORE" })}>
            Load More Posters
          </button>
        </div>
      )}
      {data.images?.logos && (
        <div className={classes.wrapper}>
          <h2>Logos</h2>
          <hr />
          <div className={classes["image-grid"]}>
            {data.images?.logos?.slice(0, logosCount)?.map((item, idx) => (
              <img key={idx} src={item.file_path} loading="lazy" />
            ))}
          </div>
          <button onClick={() => setLogosCount({ type: "LOAD_MORE" })}>
            Load More Logos
          </button>
        </div>
      )}
    </div>
  );
};
export default MediaImages;

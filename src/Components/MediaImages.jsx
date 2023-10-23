/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import classes from  "./MediaImagesStyles.module.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const MediaImages = () => {
  let data = useSelector((store) => store.searchData.data);
  let location = useLocation();
  let prevpath = location.state.prevPath;
  let navigateTo = useNavigate();
  useEffect(() => {
    if (data==='') navigateTo(prevpath);
  }, []);

  return (
    <div className={classes["img-wrapper"]}>
        <div className={classes.nav}>Under Development</div>
    </div>
  );
};
export default MediaImages;

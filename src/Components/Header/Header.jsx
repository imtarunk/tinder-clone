import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import style from "./Header.module.css"
import myImage from './Tinder-logo.png'
import IconButton from '@mui/material/IconButton';


function Header() {
  return (
    <div className={style.container}>

      <div className={`${style.icon} col`}>

        <IconButton>
          <PersonIcon className={style.PersonIcon}></PersonIcon>
        </IconButton>

      </div>
      <div className="col">
        <img src={myImage} alt="Description" />
      </div>
      <div className={`${style.icon} col`}>
        <IconButton >
          <ForumIcon></ForumIcon>
        </IconButton>
      </div>

    </div>
  )
};

export default Header;

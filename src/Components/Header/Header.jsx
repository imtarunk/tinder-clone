import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import css from "./Header.module.css"
import myImage from './Tinder-logo.png'
import IconButton from '@mui/material/IconButton';


function Header() {
  return (
    <div className={css.container}>

      <div className={`${css.icon} col`}>

        <IconButton>
          <PersonIcon className={css.PersonIcon} fontSize="large" />
        </IconButton>

      </div>
      <div className="col">
        <img src={myImage} alt="Description" style={{ width: '68px', height: 'auto' }} />
      </div>
      <div className={`${css.icon} col`}>
        <IconButton >
          <ForumIcon fontSize="large" />
        </IconButton>
      </div>

    </div>
  )
};

export default Header;

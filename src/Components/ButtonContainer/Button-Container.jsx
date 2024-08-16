import css from "./Button-Container.module.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const ButtonContainer = () => {
  return (
    <div className={`${css.BelowButtonContainer} row`}>
      {/* <h1>im button Container</h1> */}
      <div className="col">
        <button className={css.btn} style={{ borderColor: '#fbc249' }}>
          <ReplayIcon className={css.icon} fontSize="large" style={{ color: 'fbc249' }} />
        </button>
      </div>
      <div className="col">
        <button className={css.btn} style={{ borderColor: '#e82782' }}>
          <CloseIcon className={css.icon} fontSize="large" style={{ color: 'e82782' }} />
        </button>
      </div>
      <div className="col">
        <button className={css.btn} style={{ borderColor: '#3bb5fa' }}>
          <StarRateIcon className={css.icon} fontSize="large" style={{ color: '3bb5fa' }} />
        </button>
      </div>
      <div className="col">
        <button className={css.btn} style={{ borderColor: '#48f6af' }}>
          <FavoriteIcon className={css.icon} fontSize="large" style={{ color: '48f6af', }} />
        </button>
      </div>
      <div className="col">
        <button className={css.btn} style={{ borderColor: '#c513d9' }}>
          <FlashOnIcon className={css.icon} fontSize="large" style={{ color: 'c513d9' }} />
        </button>
      </div>
    </div>
  );
};
export default ButtonContainer;

import css from './Button-Container.module.css'


const ButtonContainer = () => {
  return (
    <div className={`${css.BelowButtonContainer} row`}>
      {/* <h1>im button Container</h1> */}
      <div className="col">

        <button className={css.btn}>

        </button>
      </div>
      <div className="col">
        <button className={css.btn}>

        </button>
      </div>
      <div className="col">
        <button className={css.btn}>

        </button>
      </div>
      <div className="col">
        <button className={css.btn}>

        </button>
      </div>
      <div className="col">
        <button className={css.btn}>

        </button>
      </div>
    </div>
  )
}
export default ButtonContainer;
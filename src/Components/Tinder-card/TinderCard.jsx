import { useState } from 'react';
import style from './TinderCard.module.css';
import TinderCard from 'react-tinder-card';




const TinderCardContainer = () => {
  const [people, setpeople] = useState([
    { name: 'Tarun kumar saini', url: 'https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg' },
    { name: 'Harsh Rai', url: 'https://i.pinimg.com/736x/75/55/b4/7555b43d1e6095351ed66cd46a5a5a3d.jpg' },
    { name: 'Amarjeet maurya', url: 'https://i.pinimg.com/originals/c1/35/a8/c135a83c3ce234e87d2699416e48a6b0.jpg' },
    { name: 'Himanshu ch', url: 'https://m.media-amazon.com/images/M/MV5BMTk1MzY4MzgxM15BMl5BanBnXkFtZTgwMTgyMjkyODE@._V1_.jpg' },
    { name: 'dishu singh rajput', url: 'https://w0.peakpx.com/wallpaper/834/373/HD-wallpaper-salman-khan-khan-salman-thumbnail.jpg' },
  ]);

  // setpeople([...people, "Rahul", 'Himanshu ch'])

  return (
    <div className={style.card_container}>

      {people.map((person) => (
        <TinderCard
          key={person.name}
          className={style.swipe}
          preventSwipe={['up', 'down']}
        >

          <div
            className={style.card}
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>

          </div>
        </TinderCard>
      ))}
    </div>
  );
}
export default TinderCardContainer;
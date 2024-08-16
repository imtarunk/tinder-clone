import { useEffect, useState } from 'react';
import style from './TinderCard.module.css';
import TinderCard from 'react-tinder-card';
import database from '../../../firebase';
// import { snapshot } from 'node:test';
import { collection, onSnapshot } from 'firebase/firestore';


const TinderCardContainer = () => {
  const [people, setpeople] = useState([]);
  const controller = new AbortController();
  const signal = controller.signal;


  useEffect(() => {

    const peopleCollection = collection(database, 'people');
    onSnapshot(peopleCollection, snapshot => {
      setpeople(snapshot.docs.map(doc => doc.data()));
    }, error => {
      console.error('Error fetching people:', error);
    });

    return () => {
      console.log("clean up")
      controller.abort();
    };
  }, []);


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
            <div className={style.nameheading}>
              <h3>{person.name} </h3><h3 className={style.age}>{person.age}</h3>
            </div>

          </div>
        </TinderCard>
      ))}
    </div>
  );
}
export default TinderCardContainer;



// { name: 'Tarun kumar saini', age: "21", url: 'https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg' },
// { name: 'Harsh Rai', age: "19", url: 'https://i.pinimg.com/736x/75/55/b4/7555b43d1e6095351ed66cd46a5a5a3d.jpg' },
// { name: 'Amarjeet maurya', age: "26", url: 'https://i.pinimg.com/originals/c1/35/a8/c135a83c3ce234e87d2699416e48a6b0.jpg' },
// { name: 'Himanshu ch', age: "24", url: 'https://m.media-amazon.com/images/M/MV5BMTk1MzY4MzgxM15BMl5BanBnXkFtZTgwMTgyMjkyODE@._V1_.jpg' },
// { name: 'dishu singh rajput', age: "26", url: 'https://w0.peakpx.com/wallpaper/834/373/HD-wallpaper-salman-khan-khan-salman-thumbnail.jpg' },
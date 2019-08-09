import React from 'react';
import { Link } from 'react-router-dom';
import pets from '../../server/pets';
import styles from './PetsPage.module.css';

const Pets = () => (
  <div>
    <h2 className={styles.petsTitle}>Available pets</h2>
    <div className={styles.imgConteiner}>
      <ul className={styles.petsList}>
        {pets.map(pet => (
          <li key={pet.id} className={styles.petsItem}>
            <Link to={`/pets/${pet.id}`} className={styles.petLink}>
              <img src={pet.image} alt="" className={styles.petsImg} />
              <p className={styles.petName}>{pet.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default Pets;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './PetCard.module.css';

const PetCard = ({
  name,
  image,
  age,
  gender,
  color,
  breed,
  description,
  goBack,
}) => {
  return (
    <div className={styles.cardConteiner}>
      <button type="button" onClick={goBack} className={styles.goBackButton}>
        Return
      </button>
      <p className={styles.namePet}> All about {name}</p>
      <div className={styles.petAllInformation}>
        <img src={image} alt="" className={styles.petImg} />
        <div className={styles.petInformation}>
          <p>
            <b>Age: </b>
            {age}
          </p>
          <p>
            <b>Gender: </b>
            {gender}
          </p>
          <p>
            <b>Color: </b>
            {color}
          </p>
          <p>
            <b>Breed: </b>
            {breed}
          </p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};
export default PetCard;

PetCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

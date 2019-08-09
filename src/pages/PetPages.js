import React from 'react';
import PropTypes from 'prop-types';
import PetCard from '../components/PetCards/PetCard';
import pets from '../server/pets';
import styles from '../components/PetCards/PetCard.module.css';

const idProps = props => props.match.params.id;

class PetsPage extends React.Component {
  static propTypes = { history: PropTypes.shape(PropTypes.object).isRequired };

  state = { pet: null };

  componentDidMount() {
    const id = idProps(this.props);
    // eslint-disable-next-line array-callback-return
    pets.filter(pet => {
      if (pet.id === id) {
        this.setState({ pet });
      }
    });
  }

  handleClickBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <div className={styles.petCardConteiner}>
        <PetCard {...pet} goBack={this.handleClickBack} />
      </div>
    );
  }
}

export default PetsPage;

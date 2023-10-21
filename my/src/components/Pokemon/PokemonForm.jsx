import { ImSearch } from 'react-icons/im';
import { useState} from "react";

export const PokemonForm = ({ onSubmit })=>{
  const [value, setValue] = useState('');

 const handleNameChange = (event) => {
    setValue(event.currentTarget.value.toLowerCase() );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (this.state.pokemonName.trim() === '') {
    //   toast.error("Введіть ім'я покемона");
    //   return;
    // }

    onSubmit(value);
    setValue('');
  };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={value}
          onChange={handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Знайти
        </button>
      </form>
    );
  }
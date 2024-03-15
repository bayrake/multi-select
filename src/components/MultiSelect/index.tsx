import { useState, useEffect } from 'react'

import FormTags from '../FormTags'
import ItemList from '../CharacterList'
// import { Characters } from "../../services/types"

import { getCharacters } from '../../services/rick-and-morty-api';


export default function MultiSelect() {
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
		getCharacters().then((response ) => {
      console.log("MultiSelect characters", response);
      setCharacters(response)
    }).catch((error) => {
      console.error(error);
    });
	}, [])

  
  const selectSize = 7;
  return (
    <>
    <div className='multi-select'>
      <FormTags />
      <ItemList selectSize={selectSize} data={ characters?.results?? []}/>
    </div>
  </>
  )
}
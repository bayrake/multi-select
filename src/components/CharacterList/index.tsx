import {useRef, ChangeEvent } from 'react'
import CharacterListItem from '../CharacterListItem'
import './index.css'
import { Character } from "../../services/types"

interface ItemProps {
  data: Character[];
  selectSize: number,
  seperatorHeight?: number;
}

function handleSelect (event: ChangeEvent<HTMLInputElement>): void {
  console.log('handleSelect:', event.target.checked);
  // throw new Error('Function not implemented.')
}

export default function CharacterList({ data, selectSize = 7, seperatorHeight = 12 }: ItemProps ) {
  const itemList = useRef(null);

  function calcListHeight(): string {
    const itemSize: number = itemList?.current?? 36;
    const seperatorSize: number = seperatorHeight * ( selectSize -1 );

    return `${(itemSize * selectSize) + seperatorSize }px`;
  }
  data.map((item) => {
    console.log(item.name);
  })
  return (
    <div data-testid='' className="item-list"
    style={{ height: calcListHeight()}}
    >
      {
        data.map((character) => {
          return (
            <>
              <CharacterListItem key={character.id} data={character} isSelected={false} onSelect={ handleSelect }></CharacterListItem>          
              <div style={{ borderTop: '1px solid #ccc', margin: '0.3rem 0'}}></div>
            </>
          )
        })
      }
      
      {/* <Item name={''} isSelected={false} onSelect={ handleSelect }></Item>
      <Item name={''} isSelected={false} onSelect={ handleSelect }></Item>
      <div style={{ borderTop: '1px solid #ccc', margin: '0.3rem 0'}}></div>
      <Item name={''} isSelected={false} onSelect={ handleSelect }></Item>
      <div style={{ borderTop: '1px solid #ccc', margin: '0.3rem 0'}}></div>
      <Item name={''} isSelected={false} onSelect={ handleSelect }></Item>
      <div style={{ borderTop: '1px solid #ccc', margin: '0.3rem 0'}}></div>
      <Item name={''} isSelected={false} onSelect={ handleSelect }></Item>
      <div style={{ borderTop: '1px solid #ccc', margin: '0.3rem 0'}}></div>
      <Item name={''} isSelected={false} onSelect={ handleSelect }></Item> */}
    </div>
  )
}
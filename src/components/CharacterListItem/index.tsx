import { ChangeEvent, ReactElement } from "react";
import './index.css';
import Avatar from "../Avatar";
import { Character } from "../../services/types"
import StrongText from "../StrongText";

interface ItemProps {
  data: Character,
  isSelected: boolean,
  searchText?: string | undefined,
  onSelect?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Item({ data, isSelected, searchText = "mit", onSelect }: ItemProps): ReactElement {
  
  // const [isChecked, setIsChecked] = useRef(true)

  const handleCheck = () => (event: ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation();
    console.log(event);
    // setIsChecked(false);
  }

  return (
    <div data-testid='Item' className="item ">
      <div className="item-content ">
        <div className="item-checkbox "style={{ display: 'flex', alignItems: 'center', gap: "0.5rem" }}>
          <input type="checkbox" checked={ isSelected } onChange={ handleCheck } />
          <Avatar src={data.image} alt={data.name}></Avatar>
          <div style={{ flexGrow: 1 }}>
            <StrongText text={data.name} strongText= {searchText} />
            <p style={{margin: 0, color: '#1b1b1b', fontSize: '11px'}}>
              <span>{data.episode.length || 0 }</span>
              <span>{data.episode.length > 1 ? ' Episodes' : ' Episode' }</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
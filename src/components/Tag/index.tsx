import { ReactElement } from 'react';
import { IoClose } from "react-icons/io5";
import './index.css'

interface TagProps {
  name: string
}

export default function Tag({ name }: TagProps): ReactElement {
  return (
    <div data-testid='Tag' className="tag ">
      <span>{ name }</span>
      {/* <button className='tag-button'>X</button> */}
      <button className='tag-button'>
          <IoClose style={{ color: 'white', 
          backgroundColor: '#94A3B8',
          fontSize: '20px',
          borderRadius: '25%',
          }}/>
      </button>
    </div>
  )
}
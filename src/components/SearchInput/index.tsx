import  './index.css'
import { FaCaretDown, HTMLInputElement } from "react-icons/fa";


function onkeydown(event: React.KeyboardEvent<HTMLInputElement>) {
  console.log('HTMLInputElement:', event.currentTarget)
}
export default function SearchInput() {
  return (
    <div className='search-input-container' style={{ display: 'flex', alignItems: 'center' }}>
      <input type='text'
      // list="dataList"
      role='comboBox'
        className="search-input" placeholder='Search...'
        onKeyDown={onkeydown}></input>
      <FaCaretDown />
      {/* <datalist id="dataList">
        <option value="Chrome"></option>
        <option value="Firefox"></option>
        <option value="Opera"></option>
        <option value="Safari"></option>
        <option value="Microsoft Edge"></option>
      </datalist> */}
    </div>
  )
}
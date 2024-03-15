import SearchInput from '../SearchInput'
import Tag from '../Tag'
import './index.css'

export default function FormTags() {
  return (
    <div data-testid='FormTags' className="form-tags ">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
        <Tag name='Morty Smith'></Tag>
        <Tag name='Cool Rick'></Tag>
      </div>
      <div style={{ alignSelf: "center", marginRight: "0.25rem"}}>
        <SearchInput></SearchInput>
      </div>
    </div>
  )
}
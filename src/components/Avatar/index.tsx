import  { ReactElement } from 'react'
import './index.css'

interface ItemProps {
  src: string, 
  alt?: string
}

export default function Avatar({ src, alt }:ItemProps ): ReactElement {
  return (
    <>
      <img data-testid='Avatar' className="avatar"
        src={src}
        alt={alt} />
    </>
  )
}

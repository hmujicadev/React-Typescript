import { useRef } from "react"

type Props = {image:string}

//Explicit mode to create a component in typescript (Recomended Method)
export const RandomFox = ({image}:Props):JSX.Element => {
  const node = useRef<HTMLImageElement>(null)

  return <img ref={node} src={image} width={320} height='auto' className={'rounded'}/>
}

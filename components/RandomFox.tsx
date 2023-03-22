type Props = {image:string}

//Explicit mode to create a component in typescript (Recomended Method)
export const RandomFox = ({image}:Props):JSX.Element => {
  return <img src={image} width={320} height='auto' className={'rounded'}/>
}

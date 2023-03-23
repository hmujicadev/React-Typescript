import { useRef, useEffect, useState } from "react"

type Props = {image:string}

//Explicit mode to create a component in typescript (Recomended Method)
export const RandomFox = ({image}:Props):JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [src, setsrc] = useState(
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  )

  useEffect(() => {
    //nuevo observador
    //onIntersection - > console.log()
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach( entry => {
        if(entry.isIntersecting){
           setsrc(image);
        } 
      })
    })
 
    // observe node
    if(node.current){
      observer.observe(node.current)
    }
    
    // Desconectar
    return () =>{
      observer.disconnect()
    }
  }, [image])

  return <img ref={node} src={src} width={320} height='auto' className='rounded bg-gray-300' />
            
}

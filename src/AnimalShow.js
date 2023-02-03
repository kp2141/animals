import { Button } from "react-bootstrap";
import React,{useState} from "react";
import './AnimalShow.css'
import bird from './images/bird.svg'
import cow from './images/cow.svg'
import cat from './images/cat.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import heart from './images/heart.svg'
import horse from './images/horse.svg'
const setSvg = {
    bird,
    cow,
    cat,
    dog,
    gator,
    horse,
};
function AnimalShow({type}){
    const [clicks,setClicks] = useState(0);
    const handleClick = () =>{
        setClicks(clicks+1);
    }
    console.log(type)
    return(
        
        
             <div className ="animal-show" onClick={handleClick}>
                <img className = "animal" src={setSvg[type]} alt="animal" />

                <img
                 className="heart"
                 src={heart} 
                 alt="heart" 
                 style = {{width:10+10*clicks+'px'}}
                 />
             </div>
            
      
       
    )
}

export default AnimalShow;
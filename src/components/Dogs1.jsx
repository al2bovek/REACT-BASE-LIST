import {dogs} from "../componentsdata/dogs1";
import  '../componentscss/dogs1.css';
export default function Dogs1(){
    return(
        <>
        <h3 class='nr'>I</h3>
        {dogs.map((dog, i) => <ul className="dogs1" key={i}>{dog}</ul>)}
        </>
        
    );
}
import {dogs} from "../componentsdata/dogs5";
import  '../componentscss/dogs5.css';
export default function Dogs5(){
    
    return(
        <>
        <h3 class='nr'>V</h3>
        {dogs.map((dog, i) => <ul className="dogs5" key={i} style={{color: dog.length > 6 ? 'green' :'red' }}>{dog.length}</ul>)}
        </>
        
    );
}
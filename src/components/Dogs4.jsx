import {dogs} from "../componentsdata/dogs4";
import  '../componentscss/dogs4.css';
export default function Dogs4(){
    // delete dogs[2];
    // delete dogs[4];
    return(
        <>
        <h3 class='nr'>IV</h3>
        {dogs.map((dog, i) => <ul className="dogs4" key={i}>{dog.toLowerCase()}</ul>)}
        </>
        
    );
}
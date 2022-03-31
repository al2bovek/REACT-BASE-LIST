import {dogs} from "../componentsdata/dogs2";
import  '../componentscss/dogs2.css';
export default function Dogs2(){
dogs.sort((a, b) => b.length - a.length)
    return(
        <>
        <h3 class='nr'>II</h3>
        {dogs.map((dog, i) => <ol className="dogs2" key={i}>{i+1}{'.'}{dog}</ol>)}
        </>
        
    );
}
import {dogs} from "../componentsdata/dogs3";
import  '../componentscss/dogs3.css';
export default function Dogs3(){
    const oddDogs = dogs.filter((o, i) => i % 2 ===1);
    const evenDogs = dogs.filter((e, i) => i % 2 ===0);

    return(
        <>
        <h3 class='nr'>III</h3>
        {oddDogs.map((oddDog, i) => <ul className="odddogs3" key={i}>{oddDog}</ul>)}
        {evenDogs.map((evenDog, i) => <ul className="evendogs3" key={i}>{evenDog}</ul>)}
        </>
        
    );
}
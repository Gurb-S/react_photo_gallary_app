import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { DisplayImgs } from "./DisplayImgs";
import { NoResults } from "./NoResults";
import { Photo } from "./Photo";
import { LoadingCircle } from "./LoadingCircle";

export function PhotoList(props) {

    const { search } = useParams();  //gets the params in the url and saves it as search

    /**
     * this useEffect() hook runs everytime the value of search changes 
     * when it runs it passes the value of search into the onSearch prop
     */
    useEffect(() => {
        props.onSearch(search)
    }, [search])

    /**
     * fixes an issue in which typing in the url results in the 
     * pics array being returned as undefined
     */

    if(props.pics[0] === undefined){
        return;
    }

    /**
     * maps around the pics[0] array which holds all the images returned 
     * from the api request
     */
    let key = 0;
    const photos = props.pics[0].map((pic) => {
        key++;
        return <Photo url={ pic } key={key}/>
    });

    return(
        //if the loading prop is set to true it displays the loading circle, else it displays imgs on the screen if the length of pics[0] is not 0
        (props.loading ? <LoadingCircle /> : (props.pics[0].length === 0) ? <NoResults /> : <DisplayImgs photos={photos} search={search}/>)
    )
}
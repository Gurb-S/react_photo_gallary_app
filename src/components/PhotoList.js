import { useEffect } from "react";
import {  useParams} from "react-router-dom";
import { DisplayImgs } from "./DisplayImgs";
import { NoResults } from "./NoResults";
import { Photo } from "./Photo";
import { LoadingCircle } from "./LoadingCircle";

export function PhotoList(props) {

    const { search } = useParams();  
    //const navigate = useNavigate();

    console.log(search)  
    useEffect(() => {
        console.log('TESTINGGGG!!!!!!!!!!!!!')
        props.onSearch(search)
    }, [search])
    
    console.log(props.pics)
    if(props.pics[0] === undefined){
        // console.log("THERE'S AN ISSUEEEEEE")
        // // props.onSearch(search)
        // console.log(search);
        // console.log('TASK HAS BEEN EXECUTUED')
        return;
        //props.onUrlChange(search)
    }
    let key = 0;
    const photos = props.pics[0].map((pic) => {
        key++;
        return <Photo url={ pic } key={key}/>
    });
//     console.log(props.pics[0].length);


    return(
        (props.loading ? <LoadingCircle /> : (props.pics[0].length === 0) ? <NoResults /> : <DisplayImgs photos={photos} search={search}/>)
    )
}
//import { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { DisplayImgs } from "./DisplayImgs";
import { NoResults } from "./NoResults";
import { Photo } from "./Photo";

export function PhotoList(props) {

    const { search } = useParams();  
    const navigate = useNavigate();

    console.log(search)  
    
    //console.log(props.loading)
    // if(props.loading){
    //     console.log('REDIRECTING NOW.....')
    //     navigate('/')
    // }
    //props.onUrlChange(search);
    if(search === undefined){
        console.log('BASIC UNDEFINED')
    }
    else if(search === 'undefined'){
        console.log('STRING UNDEFINED')
    }
    else{
        console.log("SEARCH DON'T MATTER BRUH")
    }
//jdhfdgfjhdsg
    console.log(props.pics)
    if(props.pics[0] === undefined){
        console.log("THERE'S AN ISSUEEEEEE")
        props.onSearch(search)
        console.log(search);
        console.log('TASK HAS BEEN EXECUTUED')
        return;
        //props.onUrlChange(search)
        
    }
    // useEffect(() =>{
    //     if(props.pics === undefined){
    //         navigate('/')
    //         console.log('I DID IT!!!!!!!!!!!!!!!!!!!!!!!')
    //     }
        
    // }, [])
    let key = 0;
    const photos = props.pics[0].map((pic) => {
        key++;
        return <Photo url={ pic } key={key}/>
    });
    console.log(props.pics[0].length);

    return(
        (props.pics[0].length === 0)
        ? <NoResults />
        : <DisplayImgs photos={photos} search={search}/>
        
    )
}
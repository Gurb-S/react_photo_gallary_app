import { useParams } from "react-router-dom";
import { DisplayImgs } from "./DisplayImgs";
import { NoResults } from "./NoResults";
import { Photo } from "./Photo";

export function PhotoList(props) {
    
    const { search } = useParams();    
    let key = 0;
    const photos = props.pics[0].map((pic) => {
        key++;
        return <Photo url={ pic } key={key}/>
    });

    return(
        (props.pics[0].length === 0)
        ? <NoResults />
        :
        <DisplayImgs photos={photos} search={search}/>
    )
}
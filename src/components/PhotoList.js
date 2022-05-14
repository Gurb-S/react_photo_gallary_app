import { useParams } from "react-router-dom";
import { Photo } from "./Photo";

export function PhotoList(props) {

    const { search } = useParams();    

    const photos = props.pics[0].map((pic) => {
        return <Photo url={ pic } />
    });

    return(
        <div className="photo-container">
            <h2>{search}</h2>
            <ul>
                { photos }
            </ul>
        </div>
    )
}
import { useParams } from "react-router-dom";
import { Photo } from "./Photo";

export function PhotoList(props) {
    // console.log(props.pics);
    // console.log(props.pics[0])
    const params = useParams();
    console.log(params)
    const photos = props.pics[0].map((pic) => {
        return <Photo url={ pic } />
    });
    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                { photos }
            </ul>
        </div>
    )
}
import { Photo } from "./Photo";

export function PhotoList(props) {
    console.log(props.pics);
    const photos = props.pics.map((pic) => {
        return <Photo url={pic} />
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
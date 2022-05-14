export function DisplayImgs(props) {
    return(
        <div className="photo-container">
            <h2>Results for: <strong>{props.search}</strong></h2>
            <ul>
                { props.photos }
            </ul>
        </div>
    )
}
import { LoadingCircle } from './LoadingCircle'
export function Home(props) {
    return(
        <div className="not-found">
            {props.loading ? <LoadingCircle /> : <h2>Home</h2> }
        </div>
    )
}
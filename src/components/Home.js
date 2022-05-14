import { LoadingCircle } from './LoadingCircle'
export function Home(props) {

    // const { search } = useParams();

    // const handleUrlSearch = () => {
        
    //     <h2>Loading...</h2>
    // }
    // const { search } = useParams();

    // useEffect(() =>{
    //     console.log(search);
    //     handleUrlSearch();
    // },[])


    return(
        <div className="not-found">
            {props.loading ? <LoadingCircle /> : <h2>Home</h2> }
            {/* <p>This is the home page.</p> */}
        </div>
    )
}
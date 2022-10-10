import {React} from "react"

function MyPage(props){
    let page = "img/" + props.address;

    return(
        <>  
            <div>
                <img src={page} />
            </div>
        </>
    )
}

export default MyPage;
import {React} from "react"

function MyPage(props){
    let page = "img/" + props.address;

    return(
        <>  
            <div>
                <img src={page} alt="desc"/>
            </div>
        </>
    )
}

export default MyPage;
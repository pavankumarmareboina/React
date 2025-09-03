import React from "react";


const Home = ({props})=>{
    return(
        <div>
            <h1>name :{props.name}</h1>
            <h3>Age :{props.age}</h3>
        </div>
    )
}
export default Home;
import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [trainData,setData]=useState([]);
    const searchTrain=async(evt)=>{
        if(evt.key==="Enter")
        {
            const response = await axios.get(
                `http://104.211.219.98/train/trains/${evt}`,
                {
                    headers :{
                        Authorization : `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODg1NDIxOTksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiODZiZDAzNWUtZGU2NS00OTNhLWEwNjgtYzA1N2JiZTc2YWMwIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQkFEMDI2In0.EtX5VpvNFprAjSVBgQjsLKXagnT_3Va5UNwpsz-W1g4"}`
                    }
                }
            );
            if(!response.ok){
                throw new Error('Request failed');
            }
            const data = await response.data;
            console.log(data);
            setData(data);
        }
    };
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Trains<br/>Faster and cheaper mobility</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Trains</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Train number"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchTrain}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.jpg" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card train={trainData}/>
              }  
            </div>
        </>
    )
}
export default Main;
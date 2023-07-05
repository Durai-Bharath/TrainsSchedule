import react from "react";
import { useState } from "react/cjs/react.development";
import Modal from "./Modal";
const Card = ({ train }) => {

    const [show,setShow]=useState(false);
    const [trainItem,setItem]=useState();
    console.log(train)
    return (
        <>
            {
                train.map((item) => {
                    let trainName=item.trainName;
                    let S_amount=item.price.sleeper;
                    let A_amount = item.price.AC;
                    let sleeper_seats = item.seatsAvailable.sleeper;
                    let AC_seats = item.seatsAvailable.AC;
                    
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                {/* <img src={} alt="" /> */}
                                { <div className="bottom">
                                    <h3 className="title">{trainName}</h3>
                                    <p className="amount">&#8377;{S_amount}</p>
                                </div>}
                            </div>
                              <Modal show={show} item={trainItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    
                    
                })
            }

        </>
    )
}
export default Card;
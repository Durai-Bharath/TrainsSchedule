import react from 'react';
const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let trainName=item.trainName;
    let S_amount=item.price.sleeper;
    let A_amount = item.price.AC;
    let sleeper_seats = item.seatsAvailable.sleeper;
    let AC_seats = item.seatsAvailable.AC;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <div className="info">
                            <h1>{trainName}</h1>
                            <h3>{S_amount}</h3>
                            <h4>{A_amount}<span>{A_amount}</span></h4><br/>
                            <button>More</button>
                        </div>
                    </div>
                    <h4 className="seats">{AC_seats}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;
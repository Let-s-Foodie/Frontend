import React from 'react';
import ReactDom from 'react-dom';
import "./RestaurantModal.css";
import Hoc from '../hoc/hoc';
import DetailPage from '../DetailPage/DetailPage';
const Backdrop = ({onCancle}) => {
    return  <div className="backdrop" onClick={onCancle} />;
}
const ModalOverlay = ({lat,lng,details}) => {
    return (

        <div className="modal">
        <div className="content">
            {details.map((detail) => (
                <DetailPage 
                    name={detail.name}
                    image={detail.image_url}
                    key={detail.id}
                    lat={lat}
                    lng={lng}
                />
            ))}
        </div>
  
    </div>
    )
}
const RestaurantModal = ({lat,lng,details, onCancle}) => {
    return (
        <Hoc>
           
            
            {ReactDom.createPortal(
                <Backdrop onCancle={onCancle}/>,
                 document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(
                <ModalOverlay lat ={lat} lng={lng} details={details}/>,
                document.getElementById('overlay-root')
            )}
        </Hoc>
    );
}

export default RestaurantModal;
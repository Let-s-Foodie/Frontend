import React from 'react';
import Aux from '../hoc/hoc';
import classes "./DetailPage.module.css";

const DetailPage = ({name,image,link}) => {
   

    return (
        <Aux>
            <img 
                alt="" 
                src={image}
                className="image"    
            />
            <div>{name}</div>
            <div>homepage:{link.homepage}</div>
            <div>Instagram:{link.instagram}</div>
            <div>Facebook:{link.facebook}</div>
        </Aux>
    );
}
export default DetailPage;
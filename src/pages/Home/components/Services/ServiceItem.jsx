import React from 'react';

import useServicesStyles from './Services.style';

const ServiceItem = ({title, img, handleClick, description}) => {

    const classes = useServicesStyles();

    return (
        <div onClick={handleClick}>
            <div className={classes.serviceItem}>
                <div className={classes.icon}>
                    <img src={img} alt={title}/>
                </div>
                <h3 className={classes.title}>{title}</h3>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    )
}

export default ServiceItem;
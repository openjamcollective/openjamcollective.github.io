import React from 'react';
import { PersonProps} from '../../lib/interfaces'
import iglogo from '../../lib/images/ig-white.png'
import fblogo from '../../lib/images/facebook.png'
import * as UtilConst from '../../lib/util';

const PersonCard:React.FC<{ obj: PersonProps }> = (props) => {
    return (
        <div className="info-people person">
            <div className="info-div">
                <div className="text-white">
                    <h4>{props.obj.name}</h4>
                </div>
                <p>{props.obj.about}</p>
                {contact(props.obj)}   
            </div>
            {props.obj.media &&
            <div className="grid-child-media">
                <img className={props.obj.photo_style} src={props.obj.media}/>
            </div>}
        </div>
  );
}

export const contact = (props: PersonProps) =>{
    return <div className='contact-grid'>
    {props.social && <a href={UtilConst.instagram +props.social}>
        <img className="logo-image" src={iglogo}/>
    </a>}
    {props.fb && <a href={UtilConst.facebook +props.fb}>
        <img className={props.social && "logo-fb"} src={fblogo}/>
    </a>}
    </div>
}

export default PersonCard;

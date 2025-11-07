import React from 'react';
import { InfoProps} from '../../lib/interfaces'
import './Info.css';
const OrganizationCard:React.FC<{ obj: InfoProps }> = (props) => {
    var listSyle = props.obj.info.length <= 1 ? 'info-no-bullets' : 'info'
    return (
        <div className='font-stylin'>
            <div className="info-title">
                <h4><i>{props.obj.title}</i></h4>
            </div>
            <ul className={listSyle}>
                {props.obj.info.map((info,index)=>{
                    return <li key={index} dangerouslySetInnerHTML={{ __html: info }}/>
                })}
            </ul>
        </div>
  );
}

export default OrganizationCard;

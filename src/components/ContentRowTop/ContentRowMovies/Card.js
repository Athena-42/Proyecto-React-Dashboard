import React from 'react';
import '../../../assets/css/app.css';

function Card(props){
    return(
    <div className="col-md-4 mb-4">
    <div className={props.colorDeBorde}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={props.colorTitulo}>{props.titulo}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                </div>
                <div className="col-auto">
                    <i className={props.icono}></i>
                </div>
            </div>
        </div>
    </div>
    </div>)}
    
export default Card;
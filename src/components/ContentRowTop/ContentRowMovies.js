import React from 'react';
import '../../assets/css/app.css';
import Card from './ContentRowMovies/Card';

function ContentRowMovies(props){
    return(
        <div className="row">

						<Card
                        titulo="Movies in Data Base" 
                        cifra="21" 
                        colorDeBorde="card border-left-primary shadow h-100 py-2"
                        colorTitulo= "text-xs font-weight-bold text-primary text-uppercase mb-1"
                        icono="fas fa-film fa-2x text-gray-300"
                        />
                        <Card
                        titulo="Total awards" 
                        cifra="79" 
                        colorDeBorde="card border-left-success shadow h-100 py-2"
                        colorTitulo="text-xs font-weight-bold text-success text-uppercase mb-1"
                        icono="fas fa-award fa-2x text-gray-300"
                        />
                        <Card
                        titulo="Total awards" 
                        cifra="79" 
                        colorDeBorde="card border-left-success shadow h-100 py-2"
                        colorTitulo="text-xs font-weight-bold text-success text-uppercase mb-1"
                        icono="fas fa-award fa-2x text-gray-300"
                        />
                        
                        <Card/>
                        <Card/>


						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
    )}
export default ContentRowMovies;
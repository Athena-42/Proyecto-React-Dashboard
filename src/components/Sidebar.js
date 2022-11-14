import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo-DH.png';
import jordan from '../assets/images/jordan-walke.png'
function Sidebar(){
    return(
    <div>
    <head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>Dashboard DH-Movies - Admin</title>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
	<link href="assets/css/app.css" rel="stylesheet"/>
    </head>
    <body>
	<div id="wrapper"/>

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={logo} alt="Digital House"/>
				</div>
			</a>

			
			<hr className="sidebar-divider my-0"/>

			
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></a>
			</li>

			
			<hr className="sidebar-divider"/>

			
			<div className="sidebar-heading">Actions</div>

			
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

			
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>

			
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

			
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
		

		
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">

				
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					
					<ul className="navbar-nav ml-auto">

						
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
								<img className="img-profile rounded-circle" src={jordan} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
                </div>
            </div>
    </body>

    </div>
    )
        
    }
export default Sidebar;
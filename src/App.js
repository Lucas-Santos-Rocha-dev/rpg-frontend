import React from "react";
import { Rotas } from "./rotas";
// import {useHistory} from 'react-router-dom';
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
// import 'primereact/resources/primereact.min.css'
// import 'primeicons/primeicons.css'
import './assets/css/styles.css'

// import bootstrap from 'bootstrap'
// import {ToastContainer} from "react-toastify";

export const App = () => {
	// const pathName = useHistory().location.pathname;

	return (
		// <ToastContainer/>
		<section role="main" id="main" className="container-fluid">
			<Rotas/>
		</section>
	)
};

export default App;

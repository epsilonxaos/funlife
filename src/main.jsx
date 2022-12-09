import React from 'react'
import {
	BrowserRouter
} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import './assets/scss/app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// <React.StrictMode>
	// </React.StrictMode>
)
 
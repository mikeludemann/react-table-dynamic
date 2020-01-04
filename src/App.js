import React from 'react';
import logo from './logo.svg';
import './App.css';

import DynamicTable from './components/tableDynamic';

let data = [
	{ id: 1, name: 'John Doe', age: 21, email: 'john.doe@email.com' },
	{ id: 2, name: 'Mary Doe', age: 19, email: 'mary.doe@email.com' },
	{ id: 3, name: 'Jim Doe', age: 16, email: 'jim.doe@email.com' },
	{ id: 4, name: 'Martha Doe', age: 25, email: 'martha.doe@email.com' }
]

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<DynamicTable datas={data}></DynamicTable>
		</section>
		<footer className="App-footer">
			(c) Copyright - Mike Ludemann
		</footer>
		</div>
	);
}

export default App;

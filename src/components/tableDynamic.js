import React, { Component } from 'react';

import './tableDynamic.css';

export default class DynamicTable extends Component{ 
	renderTableHeader() {
		let header = Object.keys(this.props.datas[0]);
		return header.map((key, index) => {
			return <th key={index}>{key}</th>
		})
	}

	renderTableData() {
		return this.props.datas.map((dataType, index) => {
			const { id, name, age, email } = dataType;
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{name}</td>
					<td>{age}</td>
					<td>{email}</td>
				</tr>
			)
		})
	}

	render() {
		return (
			<div>
				<table id='contact'>
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
		)
	}
}

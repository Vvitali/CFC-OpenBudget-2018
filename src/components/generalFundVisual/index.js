import React, { Component } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import axios from "axios"; 
import csvParser from "../../util/csvParser.js"; 

class WorldMap extends Component {
	parsedData;
	render() {
		const that = this;
		axios.get('/data/FY2016_Budget_General_Fund.csv')
		.then(function (response) {
			that.parsedData = csvParser(response.data);
			setTimeout(()=>{
				console.log(that.parsedData);
			},1000);
		})
		.catch(function (error) {
			console.log(error);
		});

		return <svg width={500} height={500}>
		</svg>
	}
}

export default WorldMap;
import React, { Component } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import Axios from "axios";
import GeneralData from "../../data/FY2016_Budget_General_Fund.csv";

class WorldMap extends Component {
	render() {
		console.log(GeneralData);
		return <svg width={500} height={500}>
		</svg>
	}
}

export default WorldMap;
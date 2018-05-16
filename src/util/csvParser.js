const DEBUG = false;
//this method accepts a string (a long long string) of data from csv file, 
//and parse it into one array of js-objects with 5 fields
//returns Object
const csvParser = (initialString)=>{
	if(typeof(initialString)!="string"){
		return "Not a string!"; 
	}
	const parsedObject = [];
	const splittedString = initialString.split("\n");
	DEBUG && console.log(splittedString[0]);
	splittedString.forEach( function(row, index) {
		DEBUG && console.log(row);
		let temp = {
			account: null
			, description:null
			, type: null
			, ORIGINAL_APPROP: null
			, FID: null
		}
		temp = {...row.split(",")};
		DEBUG && console.log(temp);
		parsedObject.push(temp);

	});
	//ACCOUNT,ACCOUNT_DESCRIPTION,TYPE,ORIGINAL_APPROP,FID <- ROWS titles

	return parsedObject
}
export default csvParser;
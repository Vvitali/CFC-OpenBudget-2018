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
		const parsedRow = row.split(",");
		let temp = {
			account:parsedRow[0]
			, description : parsedRow[1]
			, type :parsedRow[2]
			, ORIGINAL_APPROP : parsedRow[3]
			, FID :parsedRow[4]
		};
		DEBUG && console.log(temp);
		
		parsedObject.push(temp);


	});
	//ACCOUNT,ACCOUNT_DESCRIPTION,TYPE,ORIGINAL_APPROP,FID <- ROWS titles

	return parsedObject
}
export default csvParser;
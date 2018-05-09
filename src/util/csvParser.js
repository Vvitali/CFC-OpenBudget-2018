const csvParser = (initialString)=>{
	if(typeof(initialString)!="string"){
		return "Not a string!"; 
	}
	const parserObject = [];
	const splittedString = initialString.split("\n");
	console.log(splittedString[0]);
	splittedString.forEach( function(row, index) {
		console.log(row);
		let temp = {
			account: null
			, description:null
			, type: null
			, ORIGINAL_APPROP: null
			, FID: null
		}
		temp = {...row.split(",")};
		console.log(temp);

	});
	//ACCOUNT,ACCOUNT_DESCRIPTION,TYPE,ORIGINAL_APPROP,FID <- ROWS titles


	return parserObject
}
export default csvParser;
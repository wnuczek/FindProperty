var id;
var companyType;
var transactionType;
var objectType;
var objectLocation;
var objectArea;
var objectPrice;
var created_at;

var objectData;

//var objectsOffered;

companyType=[
	'Salon fryzjerski', 
	'Kancelaria prawnicza', 
	'Sklep specjalistyczny', 
	'Programista', 
	'Salon kosmetyczny', 
	'Firma handlowa'];

transactionType=[
	'sprzedaz',
	'wynajem'];

objectType=[
	'biuro',
	'lokal uslugowy',
	'magazyn',];

objectLocation=[
	'Srodmiescie',
	'Mokotow',
	'Wola',
	'Ochota',
	'Powisle'];

objectData=[
	companyType,
	transactionType,
	objectType,
	objectLocation];

console.log(objectData);

var objectsOffered=prepareForSQL(generateObjectsOffered(1000, objectData));
var objectsSearched=prepareForSQL(generateObjectsSearched(50, objectData));




document.write(objectsOffered);

function prepareForSQL(objectsObject){
	var output = '';
	console.log(objectsObject);
	var objectLenght=Object.keys(objectsObject).length;
	for(var i=0; i<objectLenght; i++){
		output += '('
		var singleObject = objectsObject[i];
		var singleObjectLength = Object.keys(singleObject).length;
		var j=0
		Object.keys(singleObject).forEach(function (item) {
			console.log('L: ' + singleObjectLength + ' j: ' + j);
			//console.log(singleObject[item]); // value
			output += '"';
			output += singleObject[item];
			//output += '", ';
			if(j==(singleObjectLength-1)){
				output += '" '
			} else {
				output += '", '
			}
			j++;
		});
		if(i==(objectLenght-1)){
			output += ') '
		} else {
			output += '), '
		}
	}
	output+=';';
	return output;
}


function generateObjectsOffered(howMuch, objectData){
	var objectsOffered={};
	for (var i=0; i<howMuch; i++){
		//console.log(i);
		//var currentObject=objectsOffered[i];
		
		objectsOffered[i]={id: i+1};
		objectsOffered[i].name='Ogloszenie '+(i+1);
		objectsOffered[i].owner='Uzytkownik '+(i+1);
		objectsOffered[i].companyType=getRandomObjectItem(objectData[0]);
		objectsOffered[i].transactionType=getRandomObjectItem(objectData[1]);
		objectsOffered[i].objectType=getRandomObjectItem(objectData[2]);
		objectsOffered[i].objectLocation=getRandomObjectItem(objectData[3]);
		objectsOffered[i].objectArea=getRandomNumber(80, 750);
		if (objectsOffered[i].transactionType=='sprzedaz'){
			objectsOffered[i].objectPrice=getRandomNumber(320, 10000)*1000;
		} else {
			objectsOffered[i].objectPrice=getRandomNumber(28, 180)*100;
		}
		objectsOffered[i].created_at= getRandomDate();
	};
	//objectsOffered='test'
	return objectsOffered;
};

function generateObjectsSearched(howMuch, objectData){
	var objectsOffered={};
	for (var i=0; i<howMuch; i++){
		//console.log(i);
		//var currentObject=objectsOffered[i];
		
		objectsOffered[i]={id: i+1};
		objectsOffered[i].name='Ogloszenie '+(i+1);
		objectsOffered[i].owner='Uzytkownik '+(i+1);
		objectsOffered[i].companyType=getRandomObjectItem(objectData[0]);
		objectsOffered[i].transactionType=getRandomObjectItem(objectData[1]);
		objectsOffered[i].objectType=getRandomObjectItem(objectData[2]);
		objectsOffered[i].objectLocation=getRandomObjectItem(objectData[3]);
		objectsOffered[i].objectAreaMin=getRandomNumber(0.8, 8)*100;
		objectsOffered[i].objectAreaMax=getRandomNumber(objectsOffered[i].objectAreaMin/100, 8)*100;
		if (objectsOffered[i].transactionType=='sprzedaz'){
			objectsOffered[i].objectPriceMin=getRandomNumber(320, 1000)*1000;
			objectsOffered[i].objectPriceMax=getRandomNumber(objectsOffered[i].objectPriceMin/1000, 1000)*1000;
		} else {
			objectsOffered[i].objectPriceMin=getRandomNumber(28, 180)*100;
			objectsOffered[i].objectPriceMax=getRandomNumber(objectsOffered[i].objectPriceMin/100, 180)*100;
		}
		objectsOffered[i].created_at= getRandomDate();
	};
	//objectsOffered='test'
	return objectsOffered;
};

function getRandomObjectItem(object){
	var objectLength=object.length;
	var randomIndex=Math.floor(Math.random() * (objectLength));
	return object[randomIndex]; 
};

function getRandomDate(){
	var randomDate = new Date(2018, 11, 24, 10, 33);
	//var randomDate = new Date;
	return toMysqlFormat(randomDate);
}

function getRandomNumber(min, max){
	if(max<min){ max=min+10 }; 
	var randomNumber = Math.floor(Math.random() * max) + min;
	return randomNumber;
}

/**
 * You first need to create a formatting function to pad numbers to two digits…
 **/
function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

/**
 * …and then create the method to output the date string as desired.
 * Some people hate using prototypes this way, but if you are going
 * to apply this to more than one Date object, having it as a prototype
 * makes sense.
 **/
function toMysqlFormat(dateToConvert) {
    return dateToConvert.getUTCFullYear() + "-" + twoDigits(1 + dateToConvert.getUTCMonth()) + "-" + twoDigits(dateToConvert.getUTCDate()) + " " + twoDigits(dateToConvert.getUTCHours()) + ":" + twoDigits(dateToConvert.getUTCMinutes()) + ":" + twoDigits(dateToConvert.getUTCSeconds());
};
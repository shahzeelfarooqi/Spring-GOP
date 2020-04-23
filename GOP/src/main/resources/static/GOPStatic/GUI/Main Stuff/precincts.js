//Data tab labels:
var precinctName = document.getElementById("precinctName");
var districtName = document.getElementById("districtName");
var stateName = document.getElementById("stateName");

var p2016DBar = document.getElementById("2016PDem");
var p2016DNum = document.getElementById("2016PDemNum")
var p2016RBar = document.getElementById("2016PRep");
var p2016RNum = document.getElementById("2016PRepNum");
var c2016DBar = document.getElementById("2016CDem");
var c2016DNum = document.getElementById("2016CDemNum")
var c2016RBar = document.getElementById("2016CRep");
var c2016RNum = document.getElementById("2016CRepNum");
var c2018DBar = document.getElementById("2018CDem");
var c2018DNum = document.getElementById("2018CDemNum")
var c2018RBar = document.getElementById("2018CRep");
var c2018RNum = document.getElementById("2018CRepNum")

var totalPopulation = document.getElementById("totalPopulation");
var malePopulation = document.getElementById("malePopulation");
var femalePopulation = document.getElementById("femalePopulation");
var whitePopulation = document.getElementById("whitePopulation");
var blackPopulation = document.getElementById("blackPopulation");
var hispanicPopulation = document.getElementById("hispanicPopulation");
var nativePopulation = document.getElementById("nativePopulation");
var asianPopulation = document.getElementById("asianPopulation");
var islandPopulation = document.getElementById("islandPopulation");
var otherRacePopulation = document.getElementById("otherRacePopulation");

function State(){
	this.precincts;
}

//Precinct constructor with empty data
function Precinct(){
	this.boundary;
	this.name;
	this.district;
	this.state;
	this.electionResults = {p2016D:0, p2016R:0, c2016D:0, c2016R:0, c2018D:0, c2018R:0};
	this.demographics = {population:0, male:0, female:0, white:0, black:0, hispanic:0, native:0, asian:0, island:0, other:0};
	this.errors;
}

Precinct.prototype.selectPrecinct = function(){
	//precinctName.innerHTML = this.name;
	//districtName.innerHTML = this.district;
	//stateName.innerHTML = this.state;
	
	//Dem
	p2016DBar.style.width = "" + this.electionResults.p2016D + "%";
	p2016DNum.innerHTML = this.electionResults.p2016D;
	c2016DBar.style.width = "" + this.electionResults.c2016D + "%";
	c2016DNum.innerHTML = this.electionResults.c2016D;
	c2018DBar.style.width = "" + this.electionResults.c2018D + "%";
	c2018DNum.innerHTML = this.electionResults.c2018D;
	//Rep
	p2016RBar.style.width = "" + this.electionResults.p2016R + "%";
	p2016RNum.innerHTML = this.electionResults.p2016R;
	c2016RBar.style.width = "" + this.electionResults.c2016R + "%";
	c2016RNum.innerHTML = this.electionResults.c2016R;
	c2018RBar.style.width = "" + this.electionResults.c2018R + "%";
	c2018RNum.innerHTML = this.electionResults.c2018R;
	
	//totalPopulation.innerHTML = this.demographics.population;
	//malePopulation.innerHTML = this.demographics.male;
	//femalePopulation.innerHTML = this.demographics.female;
	//whitePopulation.innerHTML = this.demographics.white;
	//blackPopulation.innerHTML = this.demographics.black;
	//hispanicPopulation.innerHTML = this.demographics.hispanic;
	//nativePopulation.innerHTML = this.demographics.native;
	//asianPopulation.innerHTML = this.demographics.asian;
	//islandPopulation.innerHTML = this.demographics.island;
	//otherRacePopulation.innerHTML = this.demographics.other;
}

var dumby = new Precinct();
//dumby.name = "no mans land";
//dumby.district = "bad district";
//dumby.state = "the greatest state";
dumby.electionResults = {p2016D:55, p2016R:45, c2016D:20, c2016R:80, c2018D:70, c2018R:30};

var pennsylvania = new Precinct;
pennsylvania.state = "Pennsylvania";

function loadDumby(){
	dumby.selectPrecinct();
}
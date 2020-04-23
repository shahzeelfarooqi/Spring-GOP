/*1 = PA 2 = VA 3 = WI*/
var populationData = {1: 12801989, 2: 8535519, 3: 5822434};

var malePopulationData = {1: 6272974, 2: 4199475, 3: 2899572};

var femalePopulationData = {1: 6529014, 2: 4336043, 3: 2922861};

var whitePopulationData = {1: 10474027, 2: 5932185, 3: 5071340};

var blackPopulationData = {1: 1536238, 2: 1698568, 3: 390103};

var americanIndianAndAlaskaNativePopulationData = {1: 51207, 2: 42677, 3: 69869};

var asianPopulationData = {1: 473673, 2: 588950, 3: 174673};

var nativeHawaiianAndOtherPacificIslanderPopulationData = {1: 12801, 2: 8535, 3: 5822};

var hispanicOrLatinoPopulationData = {1: 972951, 2: 819409, 3: 401747};

var otherPopulationData = {1: 258981, 2: 213929, 3: 117620};

var pennsylvaniaElectionResults = {p2016D:47.5, p2016R:48.2, c2016D:45.70, c2016R:53.91, c2018D:55.03, c2018R:44.75};

var virginiaElectionResults = {p2016D:49.8, p2016R:44.4, c2016D:49.17, c2016R:48.74, c2018D:56.36, c2018R:42.52};

var wisconsisElectionResults = {p2016D:46.5, p2016R:47.2, c2016D:49.76, c2016R:45.81, c2018D:53.18, c2018R:45.61};

function setGeneral(precinct, district, state) {
    
    document.getElementById("precinctName").innerHTML = precinct;
    document.getElementById("districtName").innerHTML = district;
    document.getElementById("stateName").innerHTML = state;
}

function setGenerally(num) {
    document.getElementById("precinctName").innerHTML = 0;
    
    if(num == 1) {
        document.getElementById("districtName").innerHTML = "[1-11]";
        document.getElementById("stateName").innerHTML = "Pennsylvania";
    }
    if(num == 2) {
        document.getElementById("districtName").innerHTML = "[1-18]";
        document.getElementById("stateName").innerHTML = "Virginia";
    }
    if(num == 3) {
        document.getElementById("districtName").innerHTML = "[1-]";
        document.getElementById("stateName").innerHTML = "Wisconsin";
    }

}


function setElectionResults(num) {

    if(num == 1) {
        p2016DBar.style.width = "" + pennsylvaniaElectionResults.p2016D + "%";
        p2016DNum.innerHTML = pennsylvaniaElectionResults.p2016D;
        c2016DBar.style.width = "" + pennsylvaniaElectionResults.c2016D + "%";
        c2016DNum.innerHTML = pennsylvaniaElectionResults.c2016D;
        c2018DBar.style.width = "" + pennsylvaniaElectionResults.c2018D + "%";
        c2018DNum.innerHTML = pennsylvaniaElectionResults.c2018D;
        //Rep
        p2016RBar.style.width = "" + pennsylvaniaElectionResults.p2016R + "%";
        p2016RNum.innerHTML = pennsylvaniaElectionResults.p2016R;
        c2016RBar.style.width = "" + pennsylvaniaElectionResults.c2016R + "%";
        c2016RNum.innerHTML = pennsylvaniaElectionResults.c2016R;
        c2018RBar.style.width = "" + pennsylvaniaElectionResults.c2018R + "%";
        c2018RNum.innerHTML = pennsylvaniaElectionResults.c2018R;
    }
    
    if(num == 2) {
        p2016DBar.style.width = "" + virginiaElectionResults.p2016D + "%";
        p2016DNum.innerHTML = virginiaElectionResults.p2016D;
        c2016DBar.style.width = "" + virginiaElectionResults.c2016D + "%";
        c2016DNum.innerHTML = virginiaElectionResults.c2016D;
        c2018DBar.style.width = "" + virginiaElectionResults.c2018D + "%";
        c2018DNum.innerHTML = virginiaElectionResults.c2018D;
        //Rep
        p2016RBar.style.width = "" + virginiaElectionResults.p2016R + "%";
        p2016RNum.innerHTML = virginiaElectionResults.p2016R;
        c2016RBar.style.width = "" + virginiaElectionResults.c2016R + "%";
        c2016RNum.innerHTML = virginiaElectionResults.c2016R;
        c2018RBar.style.width = "" + virginiaElectionResults.c2018R + "%";
        c2018RNum.innerHTML = virginiaElectionResults.c2018R;
    }
    
    if(num == 3) {
        p2016DBar.style.width = "" + wisconsisElectionResults.p2016D + "%";
        p2016DNum.innerHTML = wisconsisElectionResults.p2016D;
        c2016DBar.style.width = "" + wisconsisElectionResults.c2016D + "%";
        c2016DNum.innerHTML = wisconsisElectionResults.c2016D;
        c2018DBar.style.width = "" + wisconsisElectionResults.c2018D + "%";
        c2018DNum.innerHTML = wisconsisElectionResults.c2018D;
        //Rep
        p2016RBar.style.width = "" + wisconsisElectionResults.p2016R + "%";
        p2016RNum.innerHTML = wisconsisElectionResults.p2016R;
        c2016RBar.style.width = "" + wisconsisElectionResults.c2016R + "%";
        c2016RNum.innerHTML = wisconsisElectionResults.c2016R;
        c2018RBar.style.width = "" + wisconsisElectionResults.c2018R + "%";
        c2018RNum.innerHTML = wisconsisElectionResults.c2018R;
    }



}

function setDemographicData(num){
    var population = document.getElementById("totalPopulation").innerHTML = populationData[num];
    
    var malePopulation = document.getElementById("malePopulation").innerHTML = malePopulationData[num];
        
    var femalePopulation = document.getElementById("femalePopulation").innerHTML = femalePopulationData[num];
        
    var whitePopulation = document.getElementById("whitePopulation").innerHTML = whitePopulationData[num];
        
    var blackPopulation = document.getElementById("blackPopulation").innerHTML = blackPopulationData[num];
        
    var nativePopulation = document.getElementById("nativePopulation").innerHTML = americanIndianAndAlaskaNativePopulationData[num];
        
    var asianPopulation = document.getElementById("asianPopulation").innerHTML = asianPopulationData[num];
    
    var nativeHawaiian = document.getElementById("islandPopulation").innerHTML = nativeHawaiianAndOtherPacificIslanderPopulationData[num];
    
    var hispanicOrLatino = document.getElementById("hispanicPopulation").innerHTML = hispanicOrLatinoPopulationData[num];
        
    var otherRacePopulation = document.getElementById("otherRacePopulation").innerHTML = otherPopulationData[num];
}


/** A general purpose button for any testing/debugging purposes.
 *  Rewrite this function however you see fit.
 *  Current functionality:
 *      
 */
function test(){
    
}

function stateSelectDropdown(stateId){
    master.selectState(stateId);
    document.getElementById("selectedState").innerHTML = master.getArea(master.currentState).name;
}

function toolsUpdate(){
    master.controllers.controlPanel.tabs.tools.update();
}

function selectSecondPrecinctButton(){
    
}

function mergePrecinctsButton(){
    
}

function toggleNeighborsButton(){
    
}
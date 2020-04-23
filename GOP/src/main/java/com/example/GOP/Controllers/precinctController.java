package com.example.GOP.Controllers;

import com.example.GOP.Entities.Precinct;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class precinctController {

    //case 26
    @RequestMapping(value = "/changeBoundary", method = RequestMethod.POST)
    public @ResponseBody String changeBoundary(@RequestBody Precinct polygon) {
        //System.out.println(polygon);
        return "We have received the json string and have modified the boundary";
    }

    //case 25
    @RequestMapping("/mergePrecincts")
    public String mergePrecincts(
            @RequestParam(value = "id1") Integer id1,
            @RequestParam(value = "id2") Integer id2) {
        return "The two precincts have been merged";
        //what is being returned is actually a merged precinct
        //being returned as a JSON
    }

    //case 2
    @RequestMapping("/replacePrecincts")
    public String replacePrecincts() {
        return "";
    }

    //case 2
    @RequestMapping("/getStateData")
    public String getStateData() {
        return "";
    }

    //case 31
    @RequestMapping("/toggleNeighbors")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public @ResponseBody String toggleNeighbors(
            @RequestParam(value = "id1") Integer id1,
            @RequestParam(value = "id2") Integer id2) {
        //get tje first precinct from id1
        //toggleNeighbor(5);
        return "We are toggling the neighbors of the precincts via a GEt Request\n Id1 was" + id1 + "\nId2 was" + id2;
        //return "<h1>hello</h1>";
        //response will be a string with res.OK
        //HTTP status set to let it know it was fine
    }

    //case 28
    @RequestMapping("/initializeGhost")
    public @ResponseBody String initGhost(
            @RequestParam(value = "id") Integer id) {
        return "We will initialize Precinct #" + id +" as a ghost precinct";
        //response will be the initializedPrecinct as a JSON
    }
}
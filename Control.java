package com.springoot.CabMed.Twous;

import com.springoot.CabMed.Class.Consultation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000/"})
@RestController
@RequestMapping("/medecin")
public class TwousControl {
    @Autowired
private TwousService resultservice1 ;

 @PostMapping(value ={"/creerconsultation"})
    public Consultation creerconsultation(@RequestBody Consultation c){
     resultservice1.ajouterconsultation(c) ;
     return c ;
 }
}

package com.springoot.CabMed.Twous;

import com.springoot.CabMed.Class.Consultation;
import com.springoot.CabMed.Class.Patient;
import com.springoot.CabMed.Connection.Consultationdb;
import com.springoot.CabMed.Connection.Patientdb;
import com.springoot.CabMed.Firstus.FirstusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TwousService {
    @Autowired
    private Consultationdb consultationdb;
  public List<Consultation> findall(){
      return consultationdb.findAll();
  }

    public Consultation ajouterconsultation(Consultation con ){
        return consultationdb.insert(con) ;
    }
}

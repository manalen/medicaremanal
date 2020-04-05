package com.springoot.CabMed.Class;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;
import java.time.LocalDate;

@Document(collection="Consultationdb")
public class Consultation {
    @Id
    
    private int id_consultation ;

    private int id_patient ;
    private int id_medecin;
    private LocalDate date;
    private String observation ;
    //private Analyse analyse;

    public int getId_consultation() {
        return id_consultation;
    }
    public void setId_consultation(int id_consultation) {
        this.id_consultation = id_consultation;
    }

    public int getId_patient() {
        return id_patient;
    }
    public void setId_patient(int id_patient) {
        this.id_patient = id_patient;
    }

    public int getId_medecin() {
        return id_medecin;
    }
    public void setId_medecin(int id_medecin) {
        this.id_medecin = id_medecin;
    }

    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }

    //public Analyse getAnalyse() { return analyse; }
    //public void setAnalyse(Analyse analyse) { this.analyse = analyse; }


    public String getObservation() { return observation;}
    public void setObservation(String observation) { this.observation = observation;}

    public Consultation(int id_consultation, int id_patient, int id_medecinn, LocalDate date, String observation/*,Analyse a*/) {
        this.id_consultation = id_consultation;
        this.id_patient = id_patient;
        this.id_medecin = id_medecinn;
        this.date = LocalDate.now();
        this.observation = observation;
        //this.analyse= a ;
    }
}

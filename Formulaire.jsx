
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultation: '',
            nommed: '',
            nomp: '',
            dateconsult: ''
        }
    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    onSubmit = (e) => {
        e.preventDefault();

        const {consultation,nommed,nomp,dateconsult} = this.state;

        axios.post('/medecin/creerconsultation', {consultation,nommed,nomp,dateconsult})
            .then((result) => {
                this.props.history.push("/")
            });
    }


    render() {
        const { service, nommed, nomp, dateconsult} = this.state;
        return (
            <div className="container">
                <div class="container-fluid cadre">
                    <form onSubmit={this.onSubmit}>
                        <div class="row">
                            <div class="form-group">
                                <label htmlFor="lbl_service" id="lidc">Consultation</label>
                                <input type="text" class="form-control" id="consultation" name="consult"  required="required" value={consultation} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="lbl_nommed">Medecin</label>
                            <input type="text" class="form-control" id="nommed" name="medecin" required="required" value={nommed} onChange={this.onChange}/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="lbl_nomp">Patient</label>
                            <input type="text" class="form-control" id="nomp" name="patient" required="required" value={nomp} onChange={this.onChange} />
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label htmlFor="lbl_dateconsultation" id="dateconsult">Date de consultation</label>
                                <input type="date" class="form-control" id="dateconsultation" name="date" required="required" value={dateconsult} onChange={this.onChange} />
                            </div>
                        </div>
                    </form>
                </div>
                <br />
                <button type="submit" class="btn btn-secondary" id="btn_suivant">Suivant</button>
            </div>
        );
    }
}
export default Formulaire;


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: '',
            nommed: '',
            nomp: '',
            dateconsult: ''
            //consultation: {},
            //message: null
        }
        //this.refreshConsult=this.refreshConsult.bind(this)
    }

    /*componentDidMount() {
        this.refreshConsult();
    }*/

    /*refreshConsult() {
        fetch( 'http://localhost:8087/medecin/creerconsultation'), {
            method: 'POST',
    }*/
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    onSubmit = (e) => {
        e.preventDefault();

        const {service,nommed,nomp,dateconsult} = this.state;

        axios.post('/medecin/creerconsultation', {service,nommed,nomp,dateconsult})
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
                                <input type="text" class="form-control" id="service" required="required" onChange={this.onChange}/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="lbl_nommed">Medecin</label>
                            <input type="text" class="form-control" id="nommed" required="required" onChange={this.onChange}/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="lbl_nomp">Patient</label>
                            <input type="text" class="form-control" id="nomp" required="required" onChange={this.onChange} />
                        </div>
                        <div class="row">
                            <div class="form-group">
                                <label htmlFor="lbl_dateconsultation" id="dateconsult">Date de consultation</label>
                                <input type="date" class="form-control" id="dateconsultation" required="required" onChange={this.onChange} />
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

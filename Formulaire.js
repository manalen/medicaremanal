import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consultation: '',
            nommed: '',
            nomp: '',
            dateconsultation: '',
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { consultation, nommed, nomp, dateconsult } = this.state;

        axios.post('/medecin/creerconsultation', { consultation, nommed, nomp, dateconsult })
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { consultation, nommed, nomp, dateconsultation } = this.state;
        return (
            <div className="container">
                <div className="container-fluid cadre">
                    <form id="form1" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="lbl_service" id="lidc">Consultation</label>
                                <input type="text" className="form-control" id="service" name="consultation" value={consultation} required="required" onChange={this.onChange} placeholder="Num de consultation" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lbl_nommed">Medecin</label>
                            <input type="text" className="form-control" id="nommed" name="nommed" value={nommed} onChange={this.onChange} placeholder="id medecin" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lbl_nomp">Patient</label>
                            <input type="text" className="form-control" id="nomp" name="nomp" value={nomp} onChange={this.onChange} placeholder="id patient" />
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="lbl_dateconsultation" id="dateconsult">Date de consultation</label>
                                <input type="date" className="form-control" id="dateconsultation" name="dateconsultation" value={dateconsultation} onChange={this.onChange} placeholder="date de consultation" />
                            </div>
                        </div>
                    </form>
                </div>
                <br />
                <button type="submit" className="btn btn-secondary" id="btn_suivant">Suivant</button>
            </div>
        );
    }
}
export default Form;

import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default navbar-fixed-top top">

                    <a className="navbar-brand" href="index.html"><span className="texte">MEDICARE</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                    <a className="navbar-brand" href="index.html"><span className="texte">Informations generales </span>&emsp;&emsp;</a>
                    <a className="navbar-brand" href="page2.html "><span className="texte">Dernieres analyses</span>&emsp;&emsp;&emsp;</a>
                    <a className="navbar-brand" href="page3.html"><span className="texte">Prescriptions medicales</span></a>
                </nav>
            </div>
        );
    }
}
export default Navigation;

import React, {Component} from 'react';
import Job from "./Job";

class Jobs extends Component {

    render() {
        return (
            <div className="all-jobs">
                <div className="container">
                    <h2>NOS <strong>METIERS</strong></h2>
                    <p className="subtitle">Notre agence rassemble l’ensemble des méters qui nous<br/>permettent de
                        gérer nos projets de A à Z !</p>
                    <div className="container-fluid">
                        <div className="row">
                            <Job></Job>
                            <Job></Job>
                            <Job></Job>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs;
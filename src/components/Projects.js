import React, {Component} from 'react';
import Project from "./Project";

class Projects extends Component {

    state = {
        projects: [
            { title: 'Nom du Projet 1', date:'23/02/2020', image:'https://picsum.photos/id/237/1200/700'},
            { title: 'Nom du Projet 2', date:'22/02/2020', image:'https://picsum.photos/seed/picsum/1200/700'},
            { title: 'Nom du Projet 3', date:'25/02/2020', image:'https://picsum.photos/seed/picsum/1200/700'},
            { title: 'Nom du Projet 4', date:'23/02/2020', image:'https://picsum.photos/seed/picsum/1200/700'}
        ],
        imgUrl: null,
        sectionStyle: null
    }
		
	effetHover = (e) => {
		this.imgUrl = 'https://picsum.photos/seed/picsum/1200/700'
		this.sectionStyle = {
			backgroundImage: 'url(' + this.imgUrl + ')'
		};
		console.log('whaouh')
    }
    	
    render() {
		this.imgUrl = this.state.projects[0].image
		this.sectionStyle = {
			backgroundImage: 'url(' + this.imgUrl + ')'
		};
		
        return (
            <div className="all-projects" style={this.sectionStyle}>
                <div className="container">
                    <h2>SÉLÉCTION DE <strong>PROJETS</strong></h2>
                    <p className="subtitle">Sous titre ici</p>
                    
                    {
                    	this.state.projects.map((project, index) => {
                    		return(
                    			<Project imgUrl={this.imgUrl} image={project.image} title={project.title} key={index} date={project.date}/>
                    		)
                    	})
                    }
                </div>
            </div>
        )
    }
}

export default Projects;
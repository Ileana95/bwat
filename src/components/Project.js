import React from 'react';

const Project = ({children, title, date, image, imgUrl}) => {

    const effetHover = (e) => {
       e.target.classList.add('active');
        console.log('whaouh 2');
        imgUrl = 'https://picsum.photos/seed/picsum/1200/700'
    }
	
		
    return (
        <div className="project" onMouseOver={effetHover}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 date">
                        {date}<br/>
                        Aujourd'hui
                    </div>
                    <div className="col-9 title">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
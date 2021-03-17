import React from 'react';
import Menu from './Menu';

import Slide from './Slide'

 const Base = ({
    title = "My title",
    description = "my description",
    className = "bg-light text-dark p-4",
    children, 
}) => {
     
    return (
        <div>
       <Slide/>
        <Menu/>
        <div className="container-fluid">
        <div  className="jumbotron bg-light text-dark text-center">
        
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-dark text-white py-3">
        <div className="row">
             
          <div className="col-md-4 pb-4">
                <h4>About Site</h4>
          <p>This is a ecommerse website we provide 0-glitch servieces to our user for shopping their favourite cloths. checkout the latest collections we have.feel free to contact me with any one of the following link</p>
          
          </div>
              <div className="col-md-4 pb-4">
                <h4>Address</h4>
                <p>Shivamogga, karnataka ,577-205<br></br>
                Contact us : 9380429105<br></br>
                Email : shashank.sky.8@gmail.com</p>


              </div>
              <div className="col-md-4  justify-content-center">
                <h4>Links</h4>
                <div className="container-flex row  justify-content-center">
                  <div className="col-md-12">
                    <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>&nbsp; &nbsp;


                    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>&nbsp; &nbsp;


                    <a href="https://github.com/shashank-k-y/ecomerce-website-django-react-"><i class="fa fa-github-square fa-2x " aria-hidden="true"></i></a>
                  </div>


                </div>
              </div>
          
        </div>
        </div>
      </footer>
        </div>
    );
};
export default Base;
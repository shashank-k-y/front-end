import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signin } from '../auth/helper';
import Base from '../core/Base';


const Signin = () => {

    const [values, setValues] = useState({
        name:"",
        email:"eight@gmail.com",
        password:"12345",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    })
    const { name, email, password, error, success, loading, didRedirect } = values;

    const handleChange = (name) =>
      (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };

      const onSubmit = (event) =>{
          event.preventDefault();
          setValues({...values, error: false, loading:true});

          signin({email, password})
          .then((data)=>{
              console.log("DATA",data);
              if (data.token){
                  // let sessionToken = data.token;
                  authenticate(data,()=>{
                      console.log("Token Added")
                      setValues({
                          ...values,
                          didRedirect: true,
                      })
                  })
              } else {
                  setValues({
                      ...values,
                      loading : false,
                  })
              }
          })
          .catch((e)=> console.log(e));
      };

      const performRedirect = () => {
          if (isAuthenticated()){
              return <Redirect to="/" />
          }
      }

      const loadingMessage = () => {
          return (
              loading && (
                  <div className="alert alert-info">
                    <h2>loading...</h2>
                  </div>
              )
          )
      }
    const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                Login successfull Please <Link
                  to="/signin"
                >
                  login now.
                </Link>
              </div>
            </div>
          </div>
        );
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                Check all fields again
              </div>
            </div>
          </div>
        );
      };
    
      const signinForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
               
                <div className="form-group">
                  <label className="text-dark">Email</label>
                  <input
                    className="form-control"
                    value={email}
                    onChange={handleChange("email")}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="text-dark">password</label>
                  <input
                    className="form-control"
                    value={password}
                    onChange={handleChange("password")}
                    type="password"
                  />
                </div>
                <button
                  onClick={onSubmit}
                  className="btn btn-success btn-block"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        );
      };




    return (
        <Base title="Wellcome to Signin page" description="A tshirt Store">
            {loadingMessage()}
            {signinForm()}
            <p className="text-center">{JSON.stringify(values)}</p>
            {performRedirect()}
        </Base>
    )
}
export default Signin;

import { useHistory } from 'react-router-dom';
import { useFormik, validateYupSchema } from "formik";
import { Formik } from "formik";




function Adminlogin(){

  const {
    values
    // touched,
    // errors,
    // handleChange,
    // handleBlur,
    // handleSubmit,
  } = props;


  let hist = useHistory();

  const loginSubmit = (event) => {
    
    event.preventDefault();
    var adlogin = document.getElementById('ad_loginform'); 
    var fd = new FormData(adlogin);
    
    
    fetch('http://localhost/match/admin/admin-api.php?action=adminLogin', {
            mode:'cors',
            method: "POST",
            referrerPolicy: 'no-referrer',
            body:fd
            })
            .then((response) => {
           
              
              if (response.status === 400) {
                alert("Invalid admin information");
                window.location.reload();
      
              } else if (response.status === 200) {
                console.log("successful");
                hist.push("/dashboard");
              }
            });
  }


//  ************ Form validation ********************



//  ************ Form validation ********************
  return (
              <form id="ad_loginform" onSubmit={loginSubmit}>
                <h3>Login for admin Match</h3>
                <label htmlFor="name">Admin user</label>
                  <input id="name" type="text" name="name" value={values.name} onChange={this.handleChange}/>
                 <label htmlFor="pass">Password</label>
                 <input id="pass" type="password" name="pass" value={this.props.pass} onChange={this.handleChange}/>
                 <input id="ad_loginButton" type="submit" value="Submit" />
              </form>
      );
};
 
export default Adminlogin

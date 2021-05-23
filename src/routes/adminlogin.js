

import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";


//  ************ Form validation start ********************
const validate = values => {

  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 4) {
    errors.name = 'Must be 4 characters or more';
  }
  if (!values.pass) {
    errors.pass = 'Required';
  } else if (values.pass.length < 5) {
    errors.pass = 'Must be 5 characters or more';
  }
  
  if(values.name.length >=4 && values.pass.length >= 5 ){
    document.getElementById("ad_loginButton").removeAttribute("disabled");
  }

  return errors;
};

//  ************ Form validation end ********************


function Adminlogin(){

 //  ************ Form validation start ********************
  const formik = useFormik({
    initialValues: {
      name: '',
      pass: '',
    },
    validate,
  });
//  ************ Form validation end ********************

  let hist = useHistory();
  const loginSubmit = (event) => {
    event.preventDefault()

    const username = document.querySelector('#name');
    const password = document.querySelector('#pass');

    var fd = new FormData();
    fd.append('name', JSON.stringify(username.value));
    fd.append('pass', JSON.stringify(password.value));
    
    fetch('https://lit-sea-18183.herokuapp.com/admin/admin-api.php?action=adminLogin', {
            method: "POST",
            body:fd
            })
            .then((response) => {
           
              
              if (response.status === 400) {
                alert("Invalid admin information");
                 return
      
              } else if (response.status === 200) {
                console.log("successful");
                hist.push("/dashboard");
              }
            });
  }

  return (
              <form id="ad_loginform" onSubmit={loginSubmit}>
                <h3>Login for admin Match</h3>

                <label htmlFor="name">Admin user</label>
                {formik.errors.name ? <div class = "errormessage">{formik.errors.name}</div> : null}
                    <input id="name" type="text" name="name" onChange={formik.handleChange}
                    value={formik.values.name} />
                   

                    <label htmlFor="pass">Password</label>
                    <input id="pass" type="password" name="pass" onChange={formik.handleChange}
                    value={formik.values.pass} />
                    {formik.errors.pass ? <div class = "errormessage">{formik.errors.pass}</div> : null}

                 <input id="ad_loginButton" type="submit" value="Submit" disabled/>
              </form>
      );
};
 
export default Adminlogin

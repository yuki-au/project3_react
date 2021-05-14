
import { useHistory } from 'react-router-dom';



function Adminlogin(){
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
                alert("error");
                hist.push("/adminlogin");
      
              } else if (response.status === 200) {
                console.log("successful");
                hist.push("/dashboard");
              }
            });
  }

  return (
              <form id="ad_loginform" onSubmit={loginSubmit}>
                <h3>Login for admin Match</h3>
                <label htmlFor="ad_user">Admin user</label>
                  <input id="ad_user" type="text" name="name" />
                 <label htmlFor="ad_pass">Password</label>
                 <input id="ad_pass" type="password" name="pass" />
                 <input id="ad_loginButton" type="submit" value="Submit" />
              </form>

            );
}
 
export default Adminlogin

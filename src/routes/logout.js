import { useHistory } from 'react-router-dom';


function Logout() {

    let hist = useHistory();

    fetch('http://localhost/match/admin/admin-api.php?action=adminlogout', {
        mode:'cors',
        method: "GET",
        referrerPolicy: 'no-referrer',
        })
        .then((response) => {
            if(response.status === 200) {
                console.log('successful');
                window.location.reload(hist.push("/"));
                
            }
        });
    
}

export default Logout;


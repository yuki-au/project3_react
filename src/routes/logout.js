import { useHistory } from 'react-router-dom';


function Logout() {

    let hist = useHistory();

    fetch('https://lit-sea-18183.herokuapp.com/admin/admin-api.php?action=adminlogout', {
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


import { useState, useEffect } from 'react';

function Memberships() {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    // Fetch all the memberships and set the state
    const membershipAPI = process.env.REACT_APP_API_URL +"/getMembershipData";
    // console.log("MEMBERSHIP API:" + membershipAPI);
    fetch(membershipAPI)
      .then(response => response.json())
      .then(payload=>{setResp(payload)})
      .catch(error => console.error(error));
  },[]);


  return (
    <>
    <div class="container">
          <div className="bg-dark p-3 text-center mb-3 text-white">
                <h4 className="m-0">Memberships</h4>
          </div>
          <ul className='list-unstyled'>
            {resp.map(child => (
              <li key={child.membershipType}>
                <div className="card membership-block">      
                  <div className="card-body">
                    <h3 className="card-title">{child.membershipType.toUpperCase()}</h3>
                    <ul className="list-unstyled">
                      <li>{child.membershipDesc}</li>
                      <li>$ {child.membershipFees}</li>
                    </ul>
                  </div>
                </div>
              </li>
              ))}
         
          </ul>
        </div> 
    </>
  );
}

export default Memberships;

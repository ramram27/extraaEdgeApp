import React,{useState,useEffect} from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';


 const User = (props) => {
    const [pic,setPic] = useState("");
    const username = props.username;

    useEffect(()=>{

        try{
            const fetchPicFun = async () =>{
                const fetchPicData = 
                await fetch(`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`);
                setPic(fetchPicData);

            }
            fetchPicFun();
        }catch(err) {
            console.log(err);
        }

    },[])
    console.log("props",pic)
  return (
    <>
    
      <Row xs={1} md={4} className="g-4" style={{float:"left"}}>
        <Col>
          <Card border="danger" style={{ width: '20rem',border:"2px solid blue",marginBottom:"20px",
          marginLeft:"20px",backgroundColor:"white",borderRadius:"20px" }}>
            <Card.Img variant="top" src={pic.url} />
            <Card.Body>
              <Card.Title>
                <div style={{marginLeft:"10px"}}>
                  <p>Name: <span style={{color:"blue"}}>{props.name}</span></p>
                  <p>Email: <span style={{color:"blue"}}>{props.email}</span></p>
                  <p>Phone: <span style={{color:"blue"}}>{props.phone}</span></p>
                  <p>Company: <span style={{color:"blue"}}>{props.company}</span></p>
                  <p>Website: <span style={{color:"blue"}}>{props.website}</span></p>
                  <p>Address: <span style={{color:"red"}}>
                  {props.address.street} 
                   {props.address.suite} {props.address.city} {props.address.zipcode}
                  </span>
                   </p>
                </div>     
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </>
    // <div>
    //    <img src={pic.url} />
    //    <div>{props.website}</div>
    // </div>
  )
}

export default User;

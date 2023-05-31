import React from 'react'
  // import './Dashboard.css'
  // import Button from 'react-bootstrap/Button';
  // import Card from 'react-bootstrap/Card'
  import Table from 'react-bootstrap/Table';

  function Dashboard() {
    return (
      <>
    <div classNameName="conatiner-fluid">
    
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
        <div className="card" >
          <div className="card-body" style={{backgroundColor:'green',color:'white'}}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
            
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
        <div className="card" >
          <div className="card-body" style={{backgroundColor:'#FF8C00',color:'white'}} >
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
            
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
        <div className="card" >
          <div className="card-body" style={{backgroundColor:'#F15152',color:'white'}} >
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
            
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
        <div className="card" >
          <div className="card-body" style={{backgroundColor:'blue',color:'white'}}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
            
          </div>
        </div>
      </div>

  </div>
  <div className="contaier-fluid mt-4">
  <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>userName</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
      </tbody>
    </Table>

  </div>
    </div>

      </>
    )
  }

  export default Dashboard
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css';

const PersonDetails = () => {
  const {id} = useParams();
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/api/people/' + id)
    .then(res => {
        if (res.status !== 200) {
          console.log('PersonDetail problem. Status Code: ' + res.status);
          return;
        }
        res.json().then(function(data) {
          setPerson(data);
        });
      }
    )
    .catch(function(err) {
      console.log('PersonDetail Fetch Error :-S', err);
    });
  }, [id]);

  function onDeleteClick (id) {
    fetch('http://localhost:8082/api/books/'+id, {
      method: "DELETE"
    })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form PersonDetail_deleteClick");
      })
  };

    return (
      <div className="PersonDetail">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning btn-lg float-left">
                  Person List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Person's Record</h1>
              <p className="lead text-center">
                  View Person's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
          <div>
    <table className="table table-hover table-dark">
    {/* <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead> */}
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>First Name</td>
        <td>{ person.first }</td>
      </tr>
          <tr>
            <th scope="row">2</th>
            <td>Last Name</td>
            <td>{ person.last }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Registration Date</td>
            <td>{ /*person.registered.date*/ }</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={() => onDeleteClick(person._id)}>Delete Person</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-person/${person._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Person
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Person</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Person</button> */}
        </div>
      </div>
  );
}

export default PersonDetails;
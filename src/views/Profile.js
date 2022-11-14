import React, { Component } from 'react';
// import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { ReactDOM } from 'react';

export default class Profile extends Component {
  render() {
    return (
      
      <section>
        <h1>Dossier</h1>
        {/* <Card>
        <div class="card" style={"width: 18rem;"}>
          <img  class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <Link class="card-link">Card link</Link>
            <Link class="card-link">Another link</Link>
          </div>
        </div>
        </Card> */}
      </section>
    )
  };
};

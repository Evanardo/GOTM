import React from 'react';
import { GiCrucifix, } from "react-icons/gi";

export default function Contact() {

  return (
    <section>
      <h1 className='title-contact'>Con<GiCrucifix className='crucifix' size={39}/>act</h1>
      <div className='checklist'>
        <div className='card' id='contact'>
          <h3>Phone: 0118 999 881 999 119 725 3</h3>
          <h3>email: gotmclub@gotmclub.com</h3>
          <h3>Complaints Dept: get over it</h3>
          <h3>Find us on Twitter: @gotmclub</h3>

        </div>
      </div>
    </section>
  );
};

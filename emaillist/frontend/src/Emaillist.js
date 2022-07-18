import React from 'react';
import './assets/scss/Emaillist.scss';

function emaillist({emails}) {
    return (
        <ul id={'Emaillist'}>
        {emails.map(email => {
            return (
                <li key={email.no}>
                {email.firstName + email.lastName}
                <br/>
                {email.email}
            </li> 
            )
        })}
    </ul>
    );
}

export default emaillist;
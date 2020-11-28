import React from 'react';
import { User } from '../../Classes/Classes';
import './UserCard.css';

export default function UserCard(props: any) {
    const user: User = props.user;
    return (
        <div className="user-card fade-in">
            <div className="user-card-flex">
                <div className="user-card-full-col user-card-user-name"><p>{user.name}</p></div>
                <div className="user-card-full-col">
                    <ul className="details-list">
                        <li className="user-details"><i className="fa fa-envelope"></i>{user.email}</li>
                        <li className="user-details"><i className="fa fa-phone"></i>{user.phone}</li>
                        <li className="user-details"><i className="fa fa-globe"></i>{user.website}</li>
                        <li className="user-details"><i className="fa fa-building"></i>{user.company.name}</li>
                        <li className="user-details"><i className="fa fa-address-book"></i>{user.fulladdress}</li>
                    </ul>
                    <div className="view-more"><p>View More <i className="fa fa-arrow-right"></i></p></div>
                </div>
            </div>
        </div>
    )
}
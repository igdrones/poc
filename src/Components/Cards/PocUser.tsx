import React from 'react';
import { Poc_User } from '../../Classes/Classes';
import './UserCard.css';

export default function PocUserCard(props: any) {
    const user: Poc_User = props.user;
    return (
        <div className="user-card fade-in">
            <div className="user-card-flex">
                <div className="user-card-full-col">
                    <ul className="details-list">
                        <li className="user-details"><i className="fa fa-envelope"></i>{user.firstname}</li>
                        <li className="user-details"><i className="fa fa-envelope"></i>{user.lastname}</li>
                        <li className="user-details"><i className="fa fa-phone"></i>{user.phone}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
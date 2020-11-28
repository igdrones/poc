import React from 'react';
import { projectName } from '../../Constants/Base';
import './Header.css';

export default function Header() {

    return (
        <header className="app-header">
            <div className="brand">{projectName}</div>
        </header>
    );

}

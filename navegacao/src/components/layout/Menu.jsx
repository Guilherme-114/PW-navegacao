import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Conteudo01/123">Conteúdo 01</Link>
                </li>
                <li>
                    <Link to="/Conteudo02">Conteúdo 02</Link>
                </li>
                <li>
                    <Link to="/Conteudo03">Conteúdo 03</Link>
                </li>
                <li>
                    <Link to="/Conteudo04">Conteúdo 04</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu
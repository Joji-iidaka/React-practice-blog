import React from 'react'
import {Link} from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,
        faFilePen,
        faArrowRightToBracket
        } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({isAuth}) => {
  return (
    <nav>
        {/*  cssを当てる際はaタグを指定する */}
        <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            ホーム
        </Link>
        {!isAuth ? (
            <Link to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket}/>
            ログイン
            </Link>
        ) : (
            <>
                <Link to="/createpost">
                    <FontAwesomeIcon icon={faFilePen}/>
                    記事投稿
                </Link>
                <Link to="/logout">
                    <FontAwesomeIcon icon={faArrowRightToBracket}/>
                    ログアウト
                </Link>
            </>
        )}
    </nav>
  );
}

export default NavBar

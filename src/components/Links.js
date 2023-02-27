import PropTypes from 'prop-types';
import React from 'react'
import gh from '../assets/icons/GitHub-Mark-Light-64px.png'
import imdb from '../assets/icons/imdb.png'
import li from '../assets/icons/LI-In-Bug.png'


const Link = ({ icon, width, height, target, alt, url }) => {
    return (
        <a href={url} target={target} className="header-link">
            <img src={icon} width={width} height={height} alt={alt}></img>
        </a>
    )
}

Link.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    target: PropTypes.string,
    alt: PropTypes.string

};

Link.defaultProps = {
    width: 40,
    height: 40,
    target: "_blank",
    alt: ""
};

const Links = () => {
    return (
        <div>
            <Link icon={li} width={45} url="https://www.linkedin.com/in/ash-nayar/" />
            <Link icon={gh} url="http://github.com/juggernautrises" />
            <Link icon={imdb} url="https://www.imdb.com/name/nm2363452/" />
        </div>
    )
}


export default Links



// import react from 'react'
import './AboutEntry.css'
import {FaLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {CgMail} from "react-icons/cg";

function Entry(props)
{
    return (
        <div className='term'>
            <dt>
                <span className='emoji'> {props.img} </span>
                <span> {props.name} </span>
            </dt>
            <dd> {props.role} </dd>
            <ul>
                <a href='https://www.linkedin.com/in/aditya-gupta-83426b237/'><FaLinkedin /></a>
                <a href='https://github.com/adityastro'><AiFillGithub /></a>
                <a href='lit2020055@iiitl.ac.in'><CgMail /></a>
            </ul>
        </div>
    );
}

export default Entry;
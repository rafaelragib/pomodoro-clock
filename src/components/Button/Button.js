import React,{Component} from 'react'
import classes from './Button.module.css'
import {BsPlay} from 'react-icons/bs'
import { VscDebugRestart} from "react-icons/vsc";
class Button extends Component
{
    render()
    {   return(
        <div className={classes.ButtonContent}>
        <button ><BsPlay className={classes.IconImage}/></button>
        <button className={classes.RightButton}><VscDebugRestart className={classes.IconImage}/></button>
        </div>
        );
    }
}
export default Button;
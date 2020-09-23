import React,{Component} from 'react'
import Button from '../Button/Button'
import MainClock from '../Main_Clock/MainClock'
import classes from './Body.module.css'
class Body extends Component
{

    render()
    {
        return (
            <div className={classes.Body}>
            <MainClock/>
            <Button/>
            </div>
        );
    }

}
export default Body;
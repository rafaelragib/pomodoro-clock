import React,{Component} from 'react'
import classes from './MainClock.module.css'
class MainClock extends Component
{
    render()
    {
        return (
            <div className={classes.MainClock}>
                25:00
            </div>
            );
    }
}

export default MainClock;
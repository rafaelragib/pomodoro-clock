import React,{Component} from 'react'
import classes from './MainClock.module.css'
class MainClock extends Component
{
    shouldComponentUpdate(prevProps,prevState)
    {
        if (prevProps!==this.props)
            return true;
        else
            return false;

    }
    render()
    {
        //console.log(this.props.timer);
        //console.log(this.props.time);
        let s;
        let m;
        if(this.props.seconds===0)
            s="00";
        else
            s=this.props.seconds;
        
        if(this.props.minutes<0)
           { m="00";
             s="00";
           }
        else
            m=this.props.minutes;
        return (
            <div className={classes.MainClock}>

                {m}:{s}
            </div>
            );
    }
}

export default MainClock;
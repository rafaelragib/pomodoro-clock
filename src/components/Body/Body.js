import React,{Component} from 'react'
import Button from '../Button/Button'
import MainClock from '../Main_Clock/MainClock'
import classes from './Body.module.css'
class Body extends Component
{
    state =
    {
        minutes:1,
        seconds:0,
        intervalID:-1
    }

    resetTimer= ()=>
    {
        if(this.state.intervalID!==-1)
            clearInterval(this.state.intervalID);
        const m=25;
        const s=0;
        this.setState({
            minutes:m,
            seconds:s
        });
    }

    startTimer = () =>
    {
        let m=this.state.minutes;
        let s=this.state.seconds;
        
        console.log("value");
        const intervalID= setInterval(()=>
        {
            console.log(m);
            if(m<0)
            {
                clearInterval(intervalID);
                m=1;
                s=1;
                return;
                

            }
            else if(s===0)
             {
                m--;
                s=59;
             }   
            else
            {
                s--;
            }
            this.setState({
                minutes:m,
                seconds:s
            })
        },1000);
        this.setState({
            intervalID:intervalID
        })
        
    }
    render()
    {
        //this.startTimer();
        //console.log("[render]");
        //console.log(this.state.minutes);
        return (
            <div className={classes.Body}>
            <MainClock minutes={this.state.minutes} seconds={this.state.seconds} intervalID={this.state.intervalID} />
            <Button start={this.startTimer} reset={this.resetTimer}/>
            </div>
        );
    }

}
export default Body;
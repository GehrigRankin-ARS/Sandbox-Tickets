import React from 'react';

class CollapsibleContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: null,
            style: {
                backgroundColor: 'white',
                height: '0px'
            }
        }

    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.open !== prevState.open){
          return { open: nextProps.open};
       }
       else return null;
    }

    
    

    render(){
        let style = {}
        if (this.state.open){
            style.container = {
                ...this.state.style,
                animationName: 'showCollapsibleContent' ,
                animationTimingFunction: 'ease-in-out',
                animationDuration: '0.4s',
                animationFillMode: 'forwards'
            } 

            style.form = {
                display: 'flex'
            } 
        }
        else {
            style.container = {
                ...this.state.style,
                animationName: 'hideCollapsibleContent' ,
                animationTimingFunction: 'ease-in-out',
                animationDuration: '0.4s',
                animationFillMode: 'forwards'
            } 
        }

        return (
            <div style={style.container} className="CollapsibleContent">
                <form style={style.form} className="cols">
                    <div className="col">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" id="fname"/> 
                    </div>
                    <div className="col">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname"/> 
                    </div>
                </form>
            </div>
        )
    }
}
export default CollapsibleContent
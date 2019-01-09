import React from 'react';
import CollapsibleContent from './CollapsibleContent'

class CollapsibleCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render(){
        let style = {};
        if ( this.state.open ){
            style.container = {
                padding: '10px 0px'
            }
            style.button = {
                backgroundColor: 'rgb(4, 29, 43)',
                boxShadow: '5px 0px 10px rgba(0,0,0,0.6)'
            }
        }
        
        return (
            <div style={style.container} className="CollapsibleCard" onClick={this.handleClick}>
                <button style={style.button} className="IIONS_button">Menu Button 1</button>
                {
                    this.state.open ? <CollapsibleContent open /> : <CollapsibleContent open={false}/>
                }
            </div>
        )
    }
}

export default CollapsibleCard
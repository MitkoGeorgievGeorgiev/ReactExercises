import React ,{Component}from 'react'
import './House.css'
class House extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="House">
            <img src={this.props.imageUrl} alt=""/>
            </div>
        )
    }
}
export default House
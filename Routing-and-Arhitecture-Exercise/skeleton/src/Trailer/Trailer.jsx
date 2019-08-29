import React from 'react'
import ReactPlayer from  'react-player'

class Trailer extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
    }
}

export default Trailer
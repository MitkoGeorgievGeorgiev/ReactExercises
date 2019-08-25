import React from 'react';

class CreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            imageUrl: ''
        }
    }
    handleChange= (event)=>{
        this.setState({
            [event.target.id]:event.target.value
        })
    }


    render() {
        return (
            <div className="create-form">
                <h1>Create game</h1>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.createGame(this.state)
                    // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
                }}>
                    <label>Title</label>
                    <input type="text" id="title" value ={this.state.title} onChange={this.handleChange}/>
                    <label>Description</label>
                    <textarea type="text" id="description" value={this.state.description} onChange={this.handleChange}/>
                    <label>ImageUrl</label>
                    <input type="text" id="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
                    <input type="submit" value="Create" />
                </form>
            </div>)
    }




};

export default CreateForm;


import React, { Component } from 'react'

export class Layout extends Component {

    state = {
        title : ''
    }

    getValue = (e) => {
        this.setState({title: e.target.value})
    }

    addElement = () => {
        this.props.addElement(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <div>
                <h1 style = {{
                            fontFamily: "serif",
                            backgroundColor: "black",
                            color: "white",
                            height: "60px",
                            textAlign: "center"}}>
                TodoList</h1>
            <div style = {{display: "flex"}}>
                <input 
                    type = "text" 
                    value = {this.state.title}
                    onChange = {this.getValue}
                    style = {{flex: "10",
                              height: "40px",
                              marginBottom: "20px",
                              fontFamily: "sans-serif"}} 
                    name = "title" placeholder = "Enter Todo Item Here">
                </input>
                <input 
                    type = "submit"
                    onClick = {this.addElement} 
                    style = {{backgroundColor: "grey",
                        color:"white",
                        border: "1px solid lightcyan",
                        height: "47px",
                        margin: "0px 10px 20px 0px",
                        width: "150px",
                        fontFamily: "sans-serif",
                    flex: "1"}}
                    value = "Add Todo"/>
                    
            </div>
            </div>
        )
    }
}

export default Layout

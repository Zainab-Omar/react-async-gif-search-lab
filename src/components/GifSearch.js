import React from 'react'

export default class GifSearch extends React.Component {
    constructor(){
        super()
        this.state = {
            query: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchData(this.state.query)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
                    <input type="submit" />
                </form>

            </div>
        )
    }
}
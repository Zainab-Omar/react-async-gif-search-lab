import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = (query = "flowers") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(json=> {
            // console.log(json)
            this.setState({gifs: json.data.map(img => img.images.original.url)}) 
        })
            
    }
    
    render(){
        return(
        <div>
            <GifSearch fetchData={this.fetchData}/>
            {/* this.state.gifs is array of urls */}
           <GifList gifs={this.state.gifs} />
        </div>
        )
    }

}
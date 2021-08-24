import React, {Component} from 'react'

class FootballNews extends Component{
    constructor(props){
        super(props)
        this.state={guardianData:[]}
    }

    componentDidMount(){
        fetch(`https://content.guardianapis.com/search?q=football&show-fields=body&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`)
        .then(data => data.json())
        .then(data => data.response.results)
        .then(data => this.setState({guardianData:data}))
    }

    render(){
        return(
            <div>
                {this.state.guardianData.map((item, index)=>(
                        <div key={index} id={index}>
                            <span> {item.webTitle}</span>
                        </div>))}
            </div>
        )
    }
}

export default FootballNews
import React from 'react';
import Planets from './Planets';




class App extends React.Component {

    state = { planets: [], isLoading : true }
    componentDidMount() {
        if (this.state.planets)
            fetch(" https://assignment-machstatz.herokuapp.com/planet")
                .then(res => res.json())
                .then(data => this.setState({ planets: data , isLoading : false }))
                .catch(err => console.log(err));
    }

   



    render() {
        let content;
        if(this.state.isLoading)
        content=<div>Page is Loading...</div>
        else
        content = <Planets planets={this.state.planets} />

        return (<div>
            {content}

        </div>);
    }
}

export default App;
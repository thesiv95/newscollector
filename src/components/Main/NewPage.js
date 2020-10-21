import React from 'react';
import Loader from './Page/Loader';
import InfoBlock from './Page/InfoBlock';

export default class NewPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            storiesIds: null
        }
        this.mounted = false;
    }

    componentDidMount(){
        this.mounted = true;
        this.mounted && fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
            .then(response => response.json())
            .then(data => this.setState({
                storiesIds: data
            }))
    }

    componentWillUnmount() {
        this.mounted = false;
     }

    render(){
            if (!this.state.storiesIds) return <Loader />;
            return (
                   <div className='row'>
                            {
                                // key = React key
                                this.mounted && this.state.storiesIds.map((item, index) =>
                                    <InfoBlock id={item} key={index} />                                
                                    
                                )
                            }
                   </div>
            )
        }
    }

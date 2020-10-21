import React from 'react';

export default class InfoBlock extends React.Component {

    constructor(props){
        super(props);
        this.mounted = false;
        this.state = {
            cardData: null
        }
    }

    posterURL = 'https://opendatasecurity.io/wp-content/uploads/2017/05/can-you-hire-a-hacker-ods.jpg';
    
    componentDidMount(){
        this.mounted = true;
        // Get the particular story by its id
        this.mounted && fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`)
            .then(response => response.json())
            .then(data => this.setState({
                cardData: data
            }));
    }

    componentWillUnmount() {
        this.mounted = false;
     }
    
    render(){
        if (this.mounted && this.state.cardData) {
            return (
                <div className='card poster-card'>
                    <img src={this.posterURL} className='card-img-top' alt='Poster' />
                    <div className='card-body'>
                        <h5 className='card-title'>{this.state.cardData.title}</h5>
                        <p className='card-text'>Author: <strong>{this.state.cardData.by}</strong></p>
                        <a href={this.state.cardData.url ? this.state.cardData.url : '#'} 
                        className={this.state.cardData.url ? 'btn btn-primary' : ''} 
                        target='_blank' rel='noopener noreferrer'>
                            {this.state.cardData.url ? 'See more...' : 'NO LINK HERE'}
                            </a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='card poster-card'>
                    <img src={this.posterURL} className='card-img-top' alt='Poster' />
                    <div className='card-body'>
                        <p className='card-text'>Info is loading, please wait...</p>
                    </div>
                </div>
            )
        }
       
    }
}
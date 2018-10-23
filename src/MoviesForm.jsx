import React, { Component } from 'react'

export default class MoviesForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            poster: "",
            comment: "",
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState(
            {[e.target.name]: e.target.value},
            
            );
    
    }
onSubmit(e){
    e.preventDefault();
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
        };
    const url = "http://92.175.11.66:3001/api/quests/movies/";

    fetch(url, config)
    .then(res => res.json())
        .then(res => {
        if (res.error) {
            alert(res.error);
        } else {
            alert(`You are back to the future ! ${res}!`);
        }
        }).catch(e => {
        console.error(e);
        alert(`you are lost in space-time...`);
        });
        
    }


render() {
    return (

    <div className="moviesForm">
    <h1>which movie do you prefer ?</h1>
    <form onSubmit={this.onSubmit}>
            
                <div className="data">
                <input
                    type = "text" 
                    id = "name"
                    name="name"
                    placeholder="Enter the name"
                    onChange={this.onChange}
                    value={this.state.name}
                    />
                </div>
                
                <div className="data">
                <input
                    type = "text" 
                    id = "poster"
                    name="poster"
                    placeholder="Enter the URL poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                    />
                </div>
                <div className="data">
                
                <textarea
                    type = "text" 
                    id = "comment"
                    name="comment"
                    placeholder="Why ?"
                    onChange={this.onChange}
                    value={this.state.comment}
                    />
                </div>
                <div>
                <input
                    type = "submit" 
                    value=" Send"
                    />
                </div>
        </form>
    </div>
    );
    }
}

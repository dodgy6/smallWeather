import React, { Component } from 'react'
import axios                from 'axios'

import './app.css';

import If   from '../components/if'
import Like from '../components/like'
import Form from '../components/form'

class App extends Component {
    constructor(props) {
        super(props)

        this.state      = { weather: '' }
        this.renderRows = this.renderRows.bind(this)
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Faro,pt&units=metric&APPID=b58080319ae781322bf26cc8a89ac424`).then(res => {
            const weather = res.data.list

            this.setState({ weather: weather })
        })
    }

    renderRows(){
        const { weather } = this.state

        return Object.keys(weather).map((w, index) => (
            // Filtering first weathers day - 5 days / 3 hours 
            <If test={index % 8 === 0} key={index}>
                <div className="row underline">
                    <div className="col-sm-3 center middle">
                        <h5>{ weather[index].dt_txt }</h5>
                    </div>
                    <div className="col-sm-1 center middle">
                        <h6> {weather[index].weather[0].description} </h6> 
                    </div>
                    <div className="col-sm-2 center">
                        <img src={`http://openweathermap.org/img/wn/${weather[index].weather[0].icon}@2x.png`} height="100" alt={`weather icon ${weather[index].weather[0].icon}`} />
                    </div>
                    <div className="col-sm-2 center">
                        Min
                        <h3>{ weather[index].main.temp_min }º</h3>
                    </div>
                    <div className="col-sm-2 center">
                        Current
                        <h3>{ weather[index].main.temp }º</h3>
                    </div>
                    <div className="col-sm-2 center">
                        Max
                        <h3>{ weather[index].main.temp_max }º</h3>
                    </div>
                </div>
            </If>
        ))
    }

    render() {        
        return (
            <div className="col-sm-8 offset-sm-2">
                <div className="card">
                    <h1 className="center">Faro's Weather</h1>
                    <div className="rows">
                        { this.renderRows() }
                    </div>
                    <Like />
                    <Form />
                </div>
            </div>
        )
    }
}

export default App;
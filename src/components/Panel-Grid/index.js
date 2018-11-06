import React from 'react'
import axios from "axios"
import './panel-grid.css';
import Button from '../Button/index';
import ButtonMaterialUI from '../Button/index-material_ui';

class PanelGrid extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            films: []
        }
    }

    componentDidMount(){
        //fetch data member dari web
        axios.get("https://swapi.co/api/films/",
            // {
            //     params: {
            //         ID: 12345
            //     }
            // }
        )
        .then(response => response.data.results)
        .then(filmsData => {
            this.setState({
                //slice untuk limit                
                films: filmsData.slice(0,3).map(film => ({
                    filmTitle : film.title,
                    releaseDate : film.release_date
                }))
            })
        })
    }

    render(){
        const {PanelGridDate, PanelGridTitleName, PanelGridDescription} = this.props
        const {films} = this.state

        return (
            <div className="PanelGrid-Box">
                <div className="PanelGrid-Date">{PanelGridDate}</div>
                <div className="PanelGrid-TitleName">{PanelGridTitleName}</div>
                <div className="PanelGrid-Description">{PanelGridDescription}</div>
                <Button type="button" className="SmallSize-Primary-Button">View</Button>
                <ButtonMaterialUI color="secondary">View</ButtonMaterialUI>
                <ul>{films.map(p => <li>{p.filmTitle} {p.releaseDate}</li>)}</ul>
            </div>
        )
    }
}

export default PanelGrid
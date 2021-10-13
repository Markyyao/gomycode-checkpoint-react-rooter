import React from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const Description = ({films, match})=>{

    const movies = films.find(element => element.id == match.params.elId )

    console.log(movies.titre)
    console.log(films)


    return(
        <div>
            <ReactPlayer
                url={movies.bandeAnnonce}
                controls={true}
            />
            <p>{movies.description}</p>

            <NavLink to="/" exact>
                <button className="btn btn-primary">Home</button>
            </NavLink>

        </div>
    )
}

export default Description;
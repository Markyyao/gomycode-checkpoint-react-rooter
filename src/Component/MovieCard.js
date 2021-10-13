import React from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const MovieCard = ({el}) =>{
 return(
     <>
        <div className="col-12 col-md-3">
            <div className="card w-100">
            
            
                <ReactPlayer
                    url={el.videoURL}
                    // controls={true}
                />
            

                {/* <span>{el.description}</span> */}
                <NavLink to={`/description/${el.id}`}>
                    <h5>{el.titre}</h5>
                </NavLink>
            </div>
        </div>
     </>
 )
}
export default MovieCard;

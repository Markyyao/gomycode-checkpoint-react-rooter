import React, { useState } from "react";


const Form = ({addFilms,search}) =>{

    const [titre, setTitre] = useState("");
    const [videoURL, setVideoURL] = useState("");
    // const [urlPoster, setUrlPoster] = useState("");
    const [description, setDescription] = useState("");

  

    const handleSubmit = (e)=>{
        e.preventDefault()
        addFilms({
            id: new Date().getTime(),
            titre,
            videoURL,
            // urlPoster,
            description
        })
        setTitre("");
        setVideoURL("");
        // setUrlPoster("");
        setDescription("");
    }

    return(
        <>
            <div className = "forms">
                <form action="#" className="form-group">
                    <label htmlFor="">Titre du film</label>
                    <input 
                        type="text" 
                        className= "form-control mt-3"
                        onChange= {(e)=>setTitre(e.target.value)}
                        value={titre}    
                    />
                    <label htmlFor="">Lien du Film</label>
                    <input 
                        type="url" 
                        className= "form-control mt-3" 
                        onChange= {(e)=>setVideoURL(e.target.value)}
                        value={videoURL}
                     />
                    {/* <label htmlFor="">Lien du Poster</label>
                    <input 
                        type="url" 
                        className= "form-control" 
                        onChange= {(e)=>setUrlPoster(e.target.value)}
                        value={urlPoster}
                    /> */}
                    <label htmlFor="">Description de la video</label>
                    <textarea 
                        name="descript" 
                        id="descript" 
                        cols="10" rows="5" 
                        className= "form-control mt-3 mb-3"
                        onChange= {(e)=>setDescription(e.target.value)}
                        value={description}
                    >      
                    </textarea>
                    <button 
                        className= "btn btn-success mt-3 mb-3" 
                        onClick={(e)=>handleSubmit(e)}
                    >Enregistrer le Film</button>
                </form>
            </div>
            <form action="">
                <input type="text" className="form-control mt-3 mb-3" placeholder="Rechercher..." onChange={search}/>
            </form>
        </>
    )
}

export default Form;
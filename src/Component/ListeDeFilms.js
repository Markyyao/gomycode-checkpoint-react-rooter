import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Form from "./Form";


const ListeDeFilms = () =>{

const [films, setFilms] = useState(
    [
        {
            id: 1,  
            titre : "Dadju (Ma woman)",
            videoURL: "https://youtu.be/f4Txtkqbs48",
            description: "Fidel a son registre Dadju nous fais decouvrir cet opus musicale haut en couleur",
            posterURL: "URL POSTER 1",
            evaluation: 5,
            bandeAnnonce: "https://youtu.be/f4Txtkqbs48"           
        },
        {
            id: 2,
            titre : "Meïtod (Tes yeux)",
            videoURL: "https://youtu.be/KbitkvhE99w",
            description: "La force des mots nous indique le melancolique qu'est notre chèr artiste",
            posterURL: "URL POSTER 2",
            evaluation: 5,
            bandeAnnonce: "https://youtu.be/KbitkvhE99w"
        },
        {
            id: 3,
            titre : "Benediction (je suis tombé dedans)",
            videoURL: "https://youtu.be/Sbi-KA8TqyU",
            description: "Je suis tombé dedans, du groupe Benediction une chanson avec de belles melodie ",
            posterURL: "URL POSTER 3",
            evaluation: 5,
            bandeAnnonce: "https://youtu.be/Sbi-KA8TqyU"
        },
        {
            id: 4,
            titre : "Josey feat Bonigo",
            videoURL: "https://youtu.be/Ap_xNq9DMqc",
            description: "Featuring entre Josey et Bonigo un titre tres dansent qui reveille les nostaligiques",
            posterURL: "URL POSTER 4",
            evaluation: 5,
            bandeAnnonce: "https://youtu.be/Ap_xNq9DMqc"
        }
    ]
)

const [recherche, setRecherche] = useState("");

const search = (e)=>{
    setRecherche(e.target.value)
}

const handleAdd = (video) =>{
    const newFilms = [...films];
    newFilms.push(video)
    setFilms(newFilms)
}
    return(
        <>
            <Form 
                    addFilms = {handleAdd}
                    search = {search}
                />
            <div className="container">
                <div className="row">
                    {films
                        .filter((ele)=>ele.titre.toLowerCase().includes(recherche.toLowerCase()))
                        .map((el) =>{
                        return(
                            <MovieCard el = {el} key={el.id}/>   
                        )
                    })}
                </div>               
            </div>
        </>
    )
}

export default ListeDeFilms;
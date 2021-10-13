import ListeDeFilms from "./Component/ListeDeFilms";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Description from "./Component/Description";
import { useState } from "react";

function App() {

  const [films, setFilms] = useState(
    [
        {
            id: 1,  
            titre : "Hic Man",
            videoURL: "URL VIDEO 1",
            description: "La guerre au Roi Elossy",
            posterURL: "URL POSTER 1",
            evaluation: 5,
            bandeAnnonce: "URL video1"
        },
        {
            id: 2,
            titre : "Jean",
            videoURL: "URL VIDEO 2",
            description: "La guerre au Roi Elossy",
            posterURL: "URL POSTER 2",
            evaluation: 5,
            bandeAnnonce: "URL video2"
        },
        {
            id: 3,
            titre : "Hic Man",
            videoURL: "URL VIDEO 3",
            description: "La guerre au Roi Elossy",
            posterURL: "URL POSTER 3",
            evaluation: 5,
            bandeAnnonce: "URL video3"
        },
        {
            id: 4,
            titre : "Willy",
            videoURL: "URL VIDEO 4",
            description: "La guerre au Roi Elossy",
            posterURL: "URL POSTER 4",
            evaluation: 5,
            bandeAnnonce: "URL video4"
        },
        {
            id: 5,
            titre : "Willy",
            videoURL: "URL VIDEO 5",
            description: "La guerre au Roi Elossy",
            posterURL: "URL POSTER 5",
            evaluation: 5,
            bandeAnnonce: "URL video5"
        }
    ]
)

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ListeDeFilms} exact/>
            <Route exact path="/description/:elId"  render={(props)=><Description films={films} {...props}/> }/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;

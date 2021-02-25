import React from "react";
import "./index.css";
import ListOfProjects from "./components/ListOfProjects";
import { Films } from "./components/Films";
export default class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <div className="header">
          <div>
            <h2>Фильмы</h2>
          </div>
          <div id="filmName">
            {Films.map((film) => (
              <li key={film.id}>
                {film.id}.{film.name}, Рейтинг фильма:{" "}
                <span style={{ color: "#aeb002" }}>{film.rayting}</span>
              </li>
            ))}
          </div>
          <div>
            <h2>Афиша фильмов</h2>
          </div>
        </div>
        <div className="films">
          {Films.map((film) => (
            <ListOfProjects
              key={film.id}
              photo={film.photo}
              rayt={film.rayting}
              name={film.name}
              vid={film.vid}
              url={film.url}
              descr={film.descr}
              id={film.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

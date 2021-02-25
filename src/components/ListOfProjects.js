import React from "react";
import ReactDOM from "react-dom";
import Rating from "material-ui-rating";

class ListOfProjects extends React.Component {
  constructor(props) {
    super(props);
    this.MouseMove = this.MouseMove.bind(this);
    this.click = this.click.bind(this);
    this.clicko = this.clicko.bind(this);
  }
  MouseMove() {
    ReactDOM.render(
      <div>
        <img src={this.props.photo} onClick={this.clicko} />
        <p>
          {this.props.id}.{this.props.name}{" "}
        </p>
      </div>,
      document.getElementById("filmName")
    );
  }
  click() {
    ReactDOM.render(
      <div>
        <img src={this.props.photo} />
        <p>
          {this.props.id}.{this.props.name} Рeйтинг: {this.props.rayt}
        </p>
          	<Rating value={this.props.rayt} max={5} />
      </div>,
      document.getElementById("filmName")
    );
  }
  clicko() {
      ReactDOM.render(
      <div>  
        <iframe width="560" height="315" src={this.props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{this.props.id}.{this.props.name} </p>  
        <p>{this.props.descr}</p>
        <p id='raiting'>Рейтинг: <Rating value={this.props.rayt} max={5} /></p>
        <a href={this.props.vid} target="_blank">Посмотреть фильм "{this.props.name}" на YouTube</a>
      </div>,
       document.getElementById("video")
    ); 
  }
  render() {
    return (
      <div>
        <div id="im">
          <img
            className="photo"
            src={this.props.photo}
            onMouseMove={this.MouseMove}
            onClick={this.clicko}
          />
          <p id = "video" onClick={this.click} style={{ cursor: "pointer" }}>
            {this.props.name}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default ListOfProjects;

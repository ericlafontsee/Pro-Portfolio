import React from 'react'
import './style.css'

function Card(props) {

  return (
        <div className="card mx-auto">
        <a href={props.Deployed} target="_blank" rel="noopener noreferrer">
          <img
            className="img-thumbnail img-max-width"
            variant="top"
            src={process.env.PUBLIC_URL + props.image}
            alt={props.name}
          />
        </a>
        <div className="text-center pt-2">{props.name}</div>
        <div className="mx-auto pb-5 text-center">
          <div className="description">{props.description}</div>
        </div>
        <div className="mx-auto pb-5">
          <button
            className="btn m-1"
            href={props.GitHub}
            target="_blank"
            style={{
              background: "#556270",
              border: "2px outset white ",
              width: "150px"
            }}
          >
            GitHub Repo
          </button>
          <button
            className="btn m-1"
            style={{
              background: "#556270",
              border: "2px outset white ",
              width: "150px"
            }}
            href={props.Deployed}
            target="_blank"
          >
            Deployed App
          </button>
        </div>
      </div>
    );
  
}

export default Card;


import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "../styles/Slider.css"


function Slider() {
    const { movies } = useContext(DataContext);
  
    return (
      <>
        <div className="Slider">

          <section className="sliderBox">
            {movies.slice(0, 5).map(movie => (
              <img
                key={movie.id}
                className="sliderImg"
                src={movie.poster}
                alt={movie.title}
              />
            ))}
          </section>
        </div>
      </>
    );
  }
  
  export default Slider;

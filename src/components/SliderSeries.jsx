import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "../styles/Slider.css"


function SliderSeries() {
    const { series } = useContext(DataContext);
  
    return (
      <>
        <div className="Slider">
          <section className="sliderBox">
            {series.slice(0, 5).map(serie => (
              <img
                key={serie.id}
                className="sliderImg"
                src={serie.poster}
                alt={serie.title}
              />
            ))}
          </section>
        </div>
      </>
    );
  }
  
  export default SliderSeries;

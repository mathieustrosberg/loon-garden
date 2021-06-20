import HourData from "../data/heures.json";
import Slider from "../components/Slider";

const Informations = () => {
  return (
    <div>
      <Slider />
      <div id="informations">
        <h1>Informations</h1>
        <div className="layout">
          <div className="container-info">
            <span className="title-adresse">Nos horaires d'accueil</span>
            <div className="hour-container">
              {HourData.map((HourDetail, index) => {
                return (
                  <div key={index} className="hour-wrapper">
                    <span className="title-day">{HourDetail.day}</span>
                    <span className="title-info">Déjeuner</span>
                    <span className="title-hour">{HourDetail.hourLunch}</span>
                    <span className="title-info">Dîner</span>
                    <span className="title-hour">{HourDetail.hourDinner}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container-info">
            <span className="title-adresse">Nos horaires d'accueil</span>
            <div className="hour-container">
              <div className="hour-wrapper">
                <span className="title-info">Numéros de téléphone</span>
                <span className="title-hour">03 28 63 74 89</span>
                <span className="title-info">Adresse</span>
                <span className="title-hour">
                  zi 25 rue Canton Cailloutis, 59279 LOON PLAGE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informations;

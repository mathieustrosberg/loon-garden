const Reservation = () => {
  return (
    <div id="reservation" className="layout">
      <h1>Réservation en ligne</h1>
      <p>
        Nous acceptons un nombre ilimité de réservations <br />
        jusqu’à un mois à l’avance pour des soirées de groupes.
      </p>
      <div className="reservation-wrapper ">
        <iframe
          title="Reservation"
          src="https://ib.guestonline.fr/instabook/bookings/dODcTR3"
          width="340px"
          height="455px"
          frameborder="0"
          allowTransparency="true"
          scrolling="yes"
        ></iframe>
      </div>
    </div>
  );
};

export default Reservation;

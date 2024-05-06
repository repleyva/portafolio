import "./profile.css";
const Profile = () => {
  return (
    <section id="profile" className="profile-container">
      <div className="profile-container-wrapper">
        <div className="profile-right">
          <img src="assets/perfil.jpg" alt="perfil" />
        </div>
        <div className="profile-left">
          <h2>Perfil Profesional</h2>
          <p>
            ¡Hola!, me llamo Rusvel Pasos, soy{" "}
            <b>Ingeniero Electrónico, Android Mobile developer & Web Developer</b>. Soy un apasionado
            por la programación y el desarrollo de aplicativos e interfaces de
            usuario. Trabajo desarrollando aplicativos webs y{" "}
            <b>aplicaciones móviles android nativas</b> haciendo uso de las
            tecnicas mas elegantes como:{" "}
            <i>Patrones MVVM, clean architecture, data binding, Jetpack Compose, entre otros</i>. <br />
            <br />Trabajo de manera conjunta con los clientes para lograr
            una rápida y eficaz solución a cada problema, asesorando y
            coordinando hasta el último detalle.
          </p>
          <a
            href="assets/CV_RUSVEL_ENRIQUE_PASOS_LEYVA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <input type="button" value="DESCARGA MI CV" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;

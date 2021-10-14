import "./profile.css";
const Profile = () => {
  return (
    <section id="profile" className="profile-container">
      <div className="profile-container-wrapper">
        <div className="profile-right">
          <img src="assets/perfil.png" alt="perfil" />
        </div>
        <div className="profile-left">
          <h2>Perfil Profesional</h2>
          <p>
            ¡Hola!, me llamo Rusvel Pasos, soy{" "}
            <b>Frontend (UI-UX) developer junior</b>, hábil en el manejo de
            herramientas para el desarrollo web. Soy un apasionado por la
            programación y el desarrollo de aplicativos e interfaces de usuario.
            Trabajo como freelance, desarrollando aplicativos webs y{" "}
            <b>aplicaciones móviles android nativas</b>. <br />
            <br /> Actualmente estoy en último semestre de Ingeniería
            electrónica. Trabajo de manera conjunta con los clientes para lograr
            una rápida y eficaz solución a cada problema, asesorando y
            coordinando hasta el último detalle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

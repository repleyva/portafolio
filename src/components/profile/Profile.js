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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum
            ratione nobis modi ex. Id, molestias porro dicta recusandae,
            accusantium animi mollitia nam quod, nostrum voluptatibus obcaecati
            itaque voluptate quam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus eveniet nemo illo iste suscipit mollitia
            aut blanditiis corporis! Iste eveniet itaque animi explicabo quos
            deserunt aut, dicta fugiat beatae nulla!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

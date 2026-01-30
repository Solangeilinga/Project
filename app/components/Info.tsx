const infos = () => {
return (
    <Info
      img="./logo.png"
      title="Fiche Etudiant"
      tag="Logo de 2ie"
      firstname="Solange"
      lastname="ILINGA"
      genre="Féminin"
    />
  );
};

const Info = ({ img, title, tag, firstname, lastname, genre }) => {
  return (
    <main>
        <img src={img} alt={tag} />
      <h1>{title}</h1>
      <ul>
        <li>
          Nom : {lastname}
        </li>
        <li>
          Prénom :{firstname}
        </li> 
        <li>
          Genre {genre}
        </li>
      </ul>
    </main>
  )
}

export default infos;

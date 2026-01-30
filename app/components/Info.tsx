const infos = () => {
return (
    <Info
      tag="Logo de 2ie"
      firstname="Solange"
      lastname="ILINGA"
      genre="Féminin"
    />
  );
};

const Info = ({ firstname, lastname, genre }) => {
  return (
    <main>
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

const Cours = () => {
const modules = ["Business Opportunities", "Marketing", "Challenge and Innovation", "Web development"];

   return (
     <section>
      <h1>Cours</h1>
      <div>
       {modules.map((module) => (
         <ol key={Math.random()}>
           <li>{module}</li>
         </ol>
       ))}
       </div>
     </section>
   );
 };
export default Cours;
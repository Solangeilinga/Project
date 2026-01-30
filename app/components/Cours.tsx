const Cours = () => {
const modules = ["Business Opportunities", "Marketing", "Challenge and Innovation", "Web development"];

   return (
     <section id="cours">
      <div>
       {modules.map((module) => (
         <ul key={Math.random()}>
           <li>{module}</li>
         </ul>
       ))}
       </div>
     </section>
   );
 };
export default Cours;
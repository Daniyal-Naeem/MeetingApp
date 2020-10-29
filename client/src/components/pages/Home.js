import React from 'react';
import Meetings from "../meeting/Meeting";
import MeetingForm from "../meeting/MeetingForm";

const Home = () => {

   return(
       <div className="Grid-2">
           <div>
            <MeetingForm/>
           </div>
           <div>
               <Meetings />
           </div>
       </div>
   )
}
export default Home;
import Programs from "./Programs"
import Nav from './Nav';
import Search from "./Search";
import { ReactChild, ReactFragment, ReactPortal, useContext } from "react";
import ShowsContext from "../context/showsContext";
import '../layout/channel.scss'



const Channel = () => {
  const showsContext = useContext(ShowsContext);
  const {loading, shows} = showsContext;
  console.log(shows);
  

    return  <><Nav/><div id='channelbox'>
      <Search/>
      {loading ? <h2>I am loading the website</h2> :
        <div id='fullProgram'>
         {shows.map((ashow: { show: any; }) => <Programs 
              key={ashow.show.id}
              id={ashow.show.id}
              image={
                ashow.show.image
                  ? ashow.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }
              name={ashow.show.name}
              rating={
                ashow.show.rating.average
                  ? ashow.show.rating.average
                  : "No rating"
              }
              airtime={ashow.show.schedule.days[0] ? ashow.show.schedule.days[0] : "Not scheduled"}
              time={ashow.show.schedule.time}
         />)
         }
         </div>}
    </div></>
  }
  
  export default Channel



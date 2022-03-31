import Programs from "../component/Programs"
import Nav from '../component/Nav';
import Search from "../component/Search";
import { useContext } from "react";
import ShowsContext from "../context/showsContext";
import '../layout/channel.scss'
import Loader from "../component/Loader";



const Channel = () => {
  const showsContext = useContext(ShowsContext);
  const {loading, shows} = showsContext;
  console.log(shows);
  

    return  <><Nav/><div id='channelbox'>
      <Search/>
      {loading ? <Loader/> :
        <div id='fullProgram'>
         {shows.map((ashow: { show: any; }) => <Programs 
              key={ashow.show.id}
              id={ashow.show.id}
              image={
                ashow.show.image
                  ? ashow.show.image.medium
                  : "https://i.ibb.co/xswKy6P/noImage.png"
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



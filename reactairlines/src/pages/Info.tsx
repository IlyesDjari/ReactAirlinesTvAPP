import { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import ShowsContext from "../context/showsContext";
import Loader from "../component/Loader";
import Nav from "../component/Nav";
import '../layout/info.scss'

function Info() {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  let { id } = useParams(); 

  useEffect(() => {
    getSingleShow(id);
 
  }, []);

  const removeTags = (text: string | null) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
    <Nav/>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="imgDesc">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://i.ibb.co/xswKy6P/noImage.png"
            }
            alt={singleShow.name}
          />
          <div className="fullDesc">
          </div>

          </div>

          <div className="singleshow__info">
            <div className="whole">
            <div className="head">
            <h1 className="showName">{singleShow.name}</h1>
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            </div>
            <h2> {singleShow.schedule.days[0]} {singleShow.schedule.time} </h2>
            </div>

            <hr />

           <div className="second">
            <div className="singleshow__genre">
            {singleShow.genres &&
              singleShow.genres.map((genre: any) => (
                <p key={genre} className="singleshow__genre">
                  {genre}
                </p>
              ))}
              <p className="rating">
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
              </div>
              <h2>{singleShow.runtime} minutes</h2>
              </div>
            
            <p className="desc">{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
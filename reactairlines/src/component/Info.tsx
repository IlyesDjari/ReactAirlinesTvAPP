import { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import ShowsContext from "../context/showsContext";
import Loader from "./Loader";

function Info() {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  let { id } = useParams(); 
  console.log(id);

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
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
          />


          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre: any) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
        
            <p><strong>Description:</strong>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
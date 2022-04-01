import { useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import ShowsContext from "../context/showsContext";
import Loader from "../component/Loader";
import Nav from "../component/Nav";
import '../layout/info.scss'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from 'react-router-dom'

function Info() {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  let { id } = useParams(); 
  console.log(singleShow);

  let url = window.location.href
  console.log(url);
  
  

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
        <><Nav />

    <Link to="/">
      <div className="backnav">
      <img className="arrow" src={require('../testimages/back.png')} alt="" />
      <h2 className="back">Back to home</h2>
      </div>
    </Link>
    
        <div className="container">
            <div className="imgDesc">
              <img
                src={singleShow.image
                  ? singleShow.image.medium
                  : "https://i.ibb.co/xswKy6P/noImage.png"}
                alt={singleShow.name} />
              <div className="fullDesc">
                <h3 className="network">Language: {singleShow.language}</h3>
                <h3 className="network">Premiered: {singleShow.premiered}</h3>
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
                <CopyToClipboard
                  text={url}
                  onCopy={() => alert("Copied")}>
                  <h3 className="share">Share</h3>
                </CopyToClipboard>

              </div>


              <hr className="theHr" />

              <div className="second">
                <div className="singleshow__genre">
                  {singleShow.genres && 
                    singleShow.genres.map((genre: any) => (
                      <p key={genre} className="singleshow__genre">
                        {genre}
                      </p>
                    ))}
                      <p  className="singleshow__genre">
                        {singleShow.type}
                      </p>
                  <p className="rating">
                    <strong>Rating:</strong>{" "}
                    {singleShow.rating == null ? `${singleShow.rating}` : "No rating"}
                  </p>
                </div>
                <h2>{singleShow.runtime == undefined ? null : `${singleShow.runtime} minutes`} </h2>
              </div>

              <p className="desc">{singleShow.summary && removeTags(singleShow.summary)}</p>
            </div>
            
            <div className="dis">
            <h2>Disclaimer: Watching episodes is completly illegal, we aren't responsible in case of problems.</h2>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><div className="watch">
              <em><i></i><i></i><i></i><i></i><i></i><i></i></em><span>Watch episode</span>
              </div>
              </a> 
          </div>
          </div></>
      )}
    </>
  );
};

export default Info;
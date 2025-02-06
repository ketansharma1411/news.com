import React from "react";
import styled from "styled-components";

export default function NewsItem(props) {
  // console.log(props)
  return (
    <Head>
      {/* {console.log(props)} */}
      <div>

        <div
          className="card"
          style={{
            backgroundColor:
              props.mode === "dark" ? "rgb(66 77 88 / 86%)" : "white",
            color: props.mode === "dark" ? "white" : "rgb(66 77 88 / 86%)",
          }}
        >
          
          <img
            src={
              !props.data.imgUrl
                ? `https://picsum.photos/200/124?${props.category}`
                : props.data.imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.data.heading}...</h5>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'74%',marginTop:'18px'}}>
              {props.source}

            </span>
            <p className="card-text">{props.data.describe}...</p>
            <p className="card-text">
              <small className="text-muted">{`By ${props.author ? props.author : "Unknown"
                } at ${new Date(props.publish).toGMTString()}`}</small>
            </p>
            <a
              href={props.data.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: props.mode === "dark" ? "#04AA6D" : "#0d6efd",
                border: props.mode === "light" ? "none" : "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "0px",
                width: "100%",
                fontSize: "15px",
              }}
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </Head>
  );
}

const Head = styled.div`
  .card {
    width: 18rem;  /* Set fixed width */
    min-height: 24rem;  /* Ensure all cards are the same height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;  /* Align content properly */
    overflow: hidden;
  }
  
  .card-img-top {
    height: 8rem;  /* Fixed height for images */
    object-fit: cover;  /* Ensure images fit without distortion */
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;  /* Ensures uniform spacing */
    flex-grow: 1;
  }

  .card-title {
    font-size: 15px;
    height: 2.5rem; /* Ensure title doesn't expand card */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-text {
    font-size: 13px;
    height: 7rem;  /* Set a fixed height for description */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Show 3 lines only */
    -webkit-box-orient: vertical;
  }

  .card a {
    width: 5rem;
    height: 2rem;
    font-size: 12px;
    text-align: left;
    margin-left: 0px;
    padding-left: 5px;
    padding-top: 6px;
    font-weight: 500;
    padding-right: 0;
  }

  .card a:hover {
    background-color: red;
  }

  .badge {
    font-size: 0.67em;
  }
`;


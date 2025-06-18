// import React from "react";
// import styled from "styled-components";

// export default function NewsItem(props) {
//   // console.log(props)
//   return (
//     <Head>
//       {/* {console.log(props)} */}
//       <div>

//         <div
//           className="card"
//           style={{
//             backgroundColor:
//               props.mode === "dark" ? "rgb(66 77 88 / 86%)" : "white",
//             color: props.mode === "dark" ? "white" : "rgb(66 77 88 / 86%)",
//           }}
//         >
          
//           <img
//             src={
//               !props.data.imgUrl
//                 ? `https://picsum.photos/200/124?${props.category}`
//                 : props.data.imgUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{props.data.heading}...</h5>
//             <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'74%',marginTop:'18px'}}>
//               {props.source}

//             </span>
//             <p className="card-text">{props.data.describe}...</p>
//             <p className="card-text">
//               <small className="text-muted">{`By ${props.author ? props.author : "Unknown"
//                 } at ${new Date(props.publish).toGMTString()}`}</small>
//             </p>
//             <a
//               href={props.data.url}
//               target="_blank"
//               rel="noreferrer"
//               className="btn btn-primary"
//               style={{
//                 backgroundColor: props.mode === "dark" ? "#04AA6D" : "#0d6efd",
//                 border: props.mode === "light" ? "none" : "none",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginLeft: "0px",
//                 width: "100%",
//                 fontSize: "15px",
//               }}
//             >
//               Read More...
//             </a>
//           </div>
//         </div>
//       </div>
//     </Head>
//   );
// }

// const Head = styled.div`
//   .card {
//     width: 18rem;  /* Set fixed width */
//     min-height: 24rem;  /* Ensure all cards are the same height */
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;  /* Align content properly */
//     overflow: hidden;
//   }
  
//   .card-img-top {
//     height: 8rem;  /* Fixed height for images */
//     object-fit: cover;  /* Ensure images fit without distortion */
//   }

//   .card-body {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;  /* Ensures uniform spacing */
//     flex-grow: 1;
//   }

//   .card-title {
//     font-size: 15px;
//     height: 2.5rem; /* Ensure title doesn't expand card */
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }

//   .card-text {
//     font-size: 13px;
//     height: 7rem;  /* Set a fixed height for description */
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 3; /* Show 3 lines only */
//     -webkit-box-orient: vertical;
//   }

//   .card a {
//     width: 5rem;
//     height: 2rem;
//     font-size: 12px;
//     text-align: left;
//     margin-left: 0px;
//     padding-left: 5px;
//     padding-top: 6px;
//     font-weight: 500;
//     padding-right: 0;
//   }

//   .card a:hover {
//     background-color: red;
//   }

//   .badge {
//     font-size: 0.67em;
//   }
// `;




import React from "react";
import styled from "styled-components";
import { ExternalLink } from "lucide-react";

export default function NewsItem(props) {
  const {
    data: { imgUrl, heading, describe, url },
    mode,
    source,
    author,
    publish,
    category
  } = props;

  const cardBg = mode === "dark" ? "#1e293b" : "#ffffff";
  const textColor = mode === "dark" ? "#f8fafc" : "#1e293b";

  return (
    <CardContainer>
      <Card style={{ backgroundColor: cardBg, color: textColor }}>
        <Badge>{source}</Badge>
        <Image
          src={!imgUrl ? `https://picsum.photos/400/200?${category}` : imgUrl}
          alt="News"
        />
        
        <Content>
          <Title>{heading || "No Title Available"}</Title>
          
          <Description $isLong={describe && describe.length > 150}>
            {describe || "No description found."}
          </Description>
          <Footer>
            <Meta>{`By ${author || "Unknown"} • ${new Date(publish).toLocaleString()}`}</Meta>
            <ReadMore href={url} target="_blank" rel="noreferrer" mode={mode}>
              <ExternalLink size={16} style={{ marginRight: "5px" }} />
              Read More
            </ReadMore>
          </Footer>

        </Content>
      </Card>
    </CardContainer>
  );
}

// Styled Components


const CardContainer = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  min-height: 480px; /* Increased from ~400 */
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: inherit;
  opacity: 0.9;
  line-height: 1.4;
  margin-bottom: 1rem;

  ${(props) =>
    props.$isLong &&
    `
    max-height: 8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  `}
`;



const Badge = styled.span`
  position: absolute;
  background-color: crimson;
  color: white;
  padding: 0.3em 0.6em;
  font-size: 0.75rem;
  font-weight: bold;
  border-bottom-right-radius: 8px;
  z-index: 10;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

// const Content = styled.div`
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;
const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h5`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;



const Meta = styled.small`
  color: gray;
  font-size: 0.75rem;
`;

// const Footer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// `;
const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReadMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.mode === "dark" ? "#10b981" : "#2563eb"};
  color: white;  /* <- Force white text */
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  width: 80%;
  margin-top: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.mode === "dark" ? "#059669" : "#1d4ed8"};
    color: white;  /* <- Maintain white on hover */
    text-decoration: none;
  }
`;


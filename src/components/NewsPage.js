import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function NewsPage(props) {
    const [loading, setLoading] = useState(true);
    const [dataNew, setData] = useState({ results: [] });
    const [nextPage, setNextPage] = useState(""); // Store the nextPage token

    
    const fetchData = async (pageToken = "") => {
        props.changeref.current.continuousStart();
        
        let newsUrl = `https://newsdata.io/api/1/latest?apikey=pub_6761600a44f053bff15e4e8b3e30e278ae384&country=in&language=en&category=${props.data.category}`;
        
        if (pageToken) {
            newsUrl += `&page=${pageToken}`; // Append nextPage token if available
        }
    
        console.log("Fetching:", newsUrl);
        const response = await fetch(newsUrl);
        const jsonData = await response.json();
        
        if (jsonData.status === "success") {
            // ✅ Filter out articles that don't have a description
            const filteredResults = jsonData.results.filter(article => article.description && article.description.trim() !== "");
    
            setData((prevData) => ({
                ...jsonData, 
                results: [...prevData.results, ...filteredResults], // Append only filtered news
            }));
            setNextPage(jsonData.nextPage || ""); // Store nextPage token
        } else {
            console.error("API Error:", jsonData);
        }
    
        setLoading(false);
        props.changeref.current.complete();
        document.title = `${props.data.category.toUpperCase()} - NewsTera`;
    };
    
    useEffect(() => {
        fetchData(); // Initial fetch
    }, [props.data.category, props.changeProgress, props]);

    return (
        <Main>
            <center>
                <h2 style={{ marginTop: '64px' }}>
                    News.com - Top Headlines from {props.data.category.charAt(0).toUpperCase() + props.data.category.slice(1).toLowerCase()}
                </h2>
            </center>
            
            {loading && <center><Spinner /></center>}
            
            <div className="container">
                {dataNew.results.map((element, index) => (
                    <NewsItem
                        key={element.link || index} // Use index as a fallback key
                        data={{
                            heading: element.title,
                            imgUrl: element.image_url,
                            describe: element.description,
                            url: element.link,
                        }}
                        mode={props.mode}
                        toogle={props.toogle}
                        author={element.source_id}
                        publish={element.pubDate}
                        source={element.source_name}
                        category={props.data.category}
                    />
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="arr-btn">
                <button
                    className="btn1 btn-primary"
                    disabled={!nextPage} // Disable if no nextPage available
                    onClick={() => fetchData(nextPage)} // ✅ Now fetchData is accessible!
                >
                    Load More
                </button>
            </div>
        </Main>
    );
}

const Main = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    height: auto;
    margin-top: 2rem;
    margin-left: 3rem;
    gap: 1rem;
    justify-content: center;
    align-items: center;

  }
  .arr-btn {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -40px;
  }
  .arr-btn button {
    border: none;
    border-radius: 3px;
    text-align: center;
    width: 120px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  .arr-btn button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


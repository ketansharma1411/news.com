import React from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsPage(props) {
    let [pageCount, setpageCount] = useState(1);
    let[loading,setLoading]=useState(true)
    // console.log(props)
    let [dataNew, setData] = useState({articles:[]});

    useEffect(() => {
        const fetchData = async () => {
            props.changeref.current.continuousStart();
            let newsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.data.category}&apiKey=abb603c6d89343069b122ea44c6b49be&page=${pageCount}&pagesize=10`;
            const response = await fetch(newsUrl);
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false)   
            props.changeref.current.complete(); 
            document.title=`${props.data.category.toUpperCase()}-NewsTera`
        };

        fetchData();
    }, [pageCount,props.data.category,props.changeProgress,props]);
    

    return (
        <Main>
            <center><h2  style={{marginTop:'64px'}} >News.com-Top Headlines from {props.data.category.slice(0,1).toUpperCase()+props.data.category.slice(1).toLowerCase()}</h2></center>
           {loading && <center><Spinner/></center>} 
            
            <div className="container">
                {dataNew.articles.map((element) => {
                    
                    console.log(element);
                    return (
                      
                        
                        <NewsItem
                            key={element.url}
                            data={{
                                heading: element.title,
                                imgUrl: element.urlToImage,
                                describe: element.description,
                                url: element.url,
                            }}
                            mode={props.mode}
                            toogle={props.toogle}
                            author={element.author}
                            publish={element.publishedAt}
                            source={element.source.name}
                            category={props.data.category}

                        />
                          
                    );
                })}
            </div>
            <div className="arr-btn">
                <button
                    className="btn1 btn-primary"
                    disabled={pageCount<=1}
                    onClick={() => {
                        setpageCount(pageCount > 1 ? pageCount-- : (pageCount = 1));
                    }}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                    disabled={pageCount>dataNew.totalResults/10}
                    className="btn2 btn-primary"
                    
                    onClick={() => {
                        if(pageCount<=dataNew.totalResults/10){setpageCount(pageCount++);}
                        else{
                            setpageCount(pageCount+=0)
                        
                        }
                        
                    }}
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="result">
                <center><h5>{pageCount}</h5></center>
            </div>
        </Main>
    );
}
const Main = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    /* justify-content: center;
    align-items: center; */
    flex-wrap: wrap;
    width: auto;
    height: auto;
    margin-top: 2rem;
    margin-left: 3rem;
    gap: 1rem;
  }
  .arr-btn {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: -40px;
  }
  .arr-btn button {
    border: none;
    border-radius: 3px;
    text-align: center;
    width: 60px;
  }
  .result{
    color: red;
    margin-left: 30.5rem;
    width: 100%;
    display: inline;
    justify-content: center;
    align-items: center;
    
  }
`;

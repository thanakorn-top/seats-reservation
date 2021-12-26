import React from "react"
import { Link } from "react-router-dom"
import mealsImage from "../../assests/news.jpg"
import Styled from "styled-components"

const DivStyled = Styled.div`
    margin: auto;
    width: 70%;
    text-align: center;
    padding: 10px;
    p{
      color: white;
      font-size: 50px;
    }
    img{
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
`

const NewsPage = () => {
    return (
        <DivStyled>
            <p>Available Now On Youtube</p>
            <div>
                <a
                    href="https://www.youtube.com/watch?v=c9RzZpV460k"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <img src={mealsImage} alt="a table of food"></img>
                </a>
            </div>
            <Link to="/home">
                <p>Click Here To Enter Store</p>
            </Link>
        </DivStyled>
    )
}
export default NewsPage

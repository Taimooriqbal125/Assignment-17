import Button from "../button/Button";
import Blogbutton from "../blogbutton/Blogbutton";
import Imagesection from "../imagesection/Imagesection";
import "./Blogsection.css";

function Blogsection() {

  const data =[
    {
title : "Building microservices with  Dropwizard, MongoDB & Docker",
description :"This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-",
img : "./blog-1.png",
content : "Database"
},
{
  title : "Fast web page loading on a $20 feature phone",
  description :"Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light",
  img : "./blog-2.png",
  content : "Web Performance"
  },
  {
    title : "Accessibility Tips for Web Developers",
    description :"It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual, hearing, mobility,",
    img : "./blog-3.png",
    content : "Accessibility" 
    },
    {
      title : "Dynamically Securing Databases using Hashicorp Vault",
      description :"Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing",
      img : "./blog-4.png",
      content : "Database"
      },
      {
        title : "Adaptive Loading - Improving Web Performance on low-end devices",
        description :"Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely",
        img : "./blog-5.png",
        content : "Web Performance"
        },
        {
          title : "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
          description :"We, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively pay attention, the sites are often accessible only for certain",
          img : "./blog-6.png",
          content : "Accessibility" 
          },
          {
            title : "Building a Restful CRUD API with Node JS, Express, and MongoDB",
            description :"Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API",
            img : "./blog-7.png",
            content : "Database" 
            },
            {
              title : "Monitoring Performance with the PageSpeed Insights API",
              description :"The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes",
              img : "./blog-8.png",
              content : "Web Performance" 
              },
              {
                title : "The best web accessibility tools for developers in 2021",
                description : "The quality of the tools you use defines the speed with which you can diagnose and resolve problems. Each year the landscape changes dramatically in web technologies,",
                img : "./blog-9.png",
                content : "Accessibility"
              },
              {
                title : "How to connect a React frontend with a NodeJS/Express backend",
                description : "The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a",
                img : "./blog-10.png",
                content : "Database" 
              }
]






return (


    <div >
      {data.map((item)=>(
        <div key={item}>
          <div id="blogmain">
        <div id="blogdata">
            <h4>Latest Blog post</h4>
            <div id="a">
            <div id="blogs">
              <div>
                <img src={item.img} alt="here" style={{ width: 200, height:150 ,borderRadius:7}} />
              </div>
              <div>
                <div style={{textAlign:"left"}}>
                <button id="blogbutton">{item.content} </button> <br></br>
                <a id="ankertag" href="#">
                {item.title}
                </a>
                <p id="pera">{item.description} <Imagesection /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>))} <br></br>
     <div id = "loadbtn"> <Button title = "Load more" /></div>

     <div id="b"></div>
      </div>
      
  );
}





export default Blogsection;

import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {emptyOrNaaa(props.userBio)} */}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
      {/* <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a> */}
    </div>
  );
}



// function emptyOrNaaa(prop) {
//   if (prop === ""){
//     return null
//   } else if (prop === null) {
//     return null
//   } else {
//     return <p>{prop}</p>;
//   };
// };

export default About;
import React from "react";

function Article(props) {
    //sets the data of the articles
  const title = props.title;
  const content = props.content;
  //and the search
  const search = props.search;
//this function uses the search content provided and title to highlight the text when the user searches
  function highlightStuff(text, search) {
    //if nothing matches nothing is highlighted 
    if (!search) {
      return text;
    }
//regex uses regexp to match the search with the data and g is used to search all content and i is to ignore case senesitivity
    const regex = new RegExp(`(${search})`, "gi");
    //split the data into piece
    const pieces = text.split(regex);
    //loops through the whole content and marks the data that matches mark highlights the text in yellow 
    return pieces.map((p, i) => {
      if (p.toLowerCase() === search.toLowerCase()) {
        return <mark key={i}>{p}</mark>;
      }
      return p;
    });
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{highlightStuff(title, search)}</h2>
      <p>{highlightStuff(content, search)}</p>
    </div>
  );
}

export default Article;
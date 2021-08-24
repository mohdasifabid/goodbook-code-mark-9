import "./styles.css";
import React, { useState } from "react";

var bookGener = ["all", "fiction", "history", "coding-world"];
var libBooks = [
  { category: "fiction", title: "Love in the time of Cholera", rating: "4/5" },
  {
    category: "fiction",
    title: "the diary of young girl, Anne Frank",
    rating: "4.5/5"
  },
  { category: "fiction", title: "Mother", rating: "5/5" },
  { category: "history", title: "the age of extremes", rating: "3.5/5" },
  {
    category: "history",
    title: "India at the death of Akbar",
    rating: "4.5/5"
  },
  {
    category: "history",
    title: "The agrarian system of Mughal India",
    rating: "4.5/5"
  },
  { category: "coding-world", title: "Eloquent Java Script", rating: "4.5/5" },
  { category: "coding-world", title: "Weaving the web", rating: "4/5" }
];

export default function App() {
  let [filteredBooks, setFilteredBooks] = useState(libBooks);

  function handleFilter(cat) {
    if (cat === "all") {
      return setFilteredBooks(libBooks);
    }
    let filtered = libBooks.filter(function (book) {
      return book.category === cat;
    });
    setFilteredBooks(filtered);
  }
  return (
    <div>
      <div>
        <div className="heading">
          <h1>
            <span role="img" aria-label="bookEmoji">
              📚
            </span>
            mylibrary
          </h1>
          <p>hey! checkout some interesting books</p>
        </div>

        <ul className="allList">
          {bookGener.map(function (book) {
            return (
              <li className="oneList">
                <button onClick={() => handleFilter(book)}>{book}</button>
              </li>
            );
          })}

          {filteredBooks.map(function (one) {
            return (
              <div className="bookDetails">
                <h2>{one.title}</h2>
                <p>{one.rating}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

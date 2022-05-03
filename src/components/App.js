import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createEntry(newNote) {
  return (
    <Note key={newNote.key} title={newNote.title} content={newNote.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createEntry)}
      <Footer />
    </div>
  );
}

export default App;

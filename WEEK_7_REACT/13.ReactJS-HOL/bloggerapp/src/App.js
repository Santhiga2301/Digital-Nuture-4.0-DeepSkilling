import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("book"); // book, blog, course
  const [showCourse, setShowCourse] = useState(true);

  // For rendering multiple components from an array
  const items = [
    { id: 1, type: "book", title: "The Great Gatsby" },
    { id: 2, type: "blog", title: "Learning React" },
    { id: 3, type: "course", title: "React for Beginners" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      {/* Buttons to switch views */}
      <button onClick={() => setView("book")}>Show Book</button>
      <button onClick={() => setView("blog")}>Show Blog</button>
      <button onClick={() => setView("course")}>Show Course</button>
      <button onClick={() => setShowCourse(!showCourse)}>
        Toggle Course
      </button>

      <hr />

      {/* 1️⃣ If/Else Statement */}
      <h3>1. If/Else</h3>
      {(() => {
        if (view === "book") return <BookDetails />;
        else if (view === "blog") return <BlogDetails />;
        else return <CourseDetails />;
      })()}

      {/* 2️⃣ Ternary Operator */}
      <h3>2. Ternary Operator</h3>
      {view === "book" ? <BookDetails /> : <BlogDetails />}

      {/* 3️⃣ Logical AND (&&) Operator */}
      <h3>3. Logical AND (&&)</h3>
      {showCourse && <CourseDetails />}

      {/* 4️⃣ Switch Statement */}
      <h3>4. Switch Statement</h3>
      {(() => {
        switch (view) {
          case "book":
            return <BookDetails />;
          case "blog":
            return <BlogDetails />;
          case "course":
            return <CourseDetails />;
          default:
            return <p>No view selected</p>;
        }
      })()}

      {/* 5️⃣ Rendering Multiple Components from an Array with map() */}
      <h3>5. Rendering with map()</h3>
      {items.map((item) => (
        <div key={item.id}>
          <strong>{item.type.toUpperCase()}:</strong> {item.title}
        </div>
      ))}
    </div>
  );
}

export default App;

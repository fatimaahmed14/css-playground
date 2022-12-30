import { Link } from "react-router-dom";
import "../Styling/Style.css";

function StartPage() {
  return (
    <>
      <div className="startpage">
        <header className="header">
          <div className="title">Fatima's CSS Playground</div>
        </header>
        <main className="main">
          <Link to="/display">
            <div className="box"></div>
          </Link>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </main>
      </div>
    </>
  );
}

export default StartPage;

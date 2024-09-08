// import "./Imagesection.css";

function Imagesection(props) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <div>
        <img
          src="author.png"
          alt="here"
          style={{ borderRadius: 50, width: 37 }}
        />
      </div>
      <div>
        <p style={{ position: "absolute", top: 60, fontSize: 10 }}>
          Julia walker <br></br>{" "}
          <h6 style={{ position: "absolute", top: 6 }}>Dec 10 ,2020</h6>
        </p>
      </div>
    </div>
  );
}
export default Imagesection;

import profilepic from "../images/profilepic.jpg";

export default function Info() {
  return (
    <div className="info--section">
      <img src={profilepic} alt="Profile Picture" />
      <h1 className="name">Laura Smith</h1>
      <h3 className="job--description">Frontend Developer</h3>
      <p className="website">laurasmith.website</p>
      <div className="button--section">
        <button type="button" className="email--button">
          {" "}
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button type="button" className="linkedin--button">
          {" "}
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
}

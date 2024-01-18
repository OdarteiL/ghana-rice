import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <div className="flex justify-center items-center gap-8 mx-auto">
        <div>
          <Link to={"#"}>Organic Rice</Link>
        </div>
        <div>
          <Link to={"#"}>Perfumed Ghana Rice</Link>
        </div>
        <div>
          <Link to={"#"}>Broken Rice</Link>
        </div>
        <div>
          <Link to={"#"}>Long Grain Rice</Link>
        </div>
        <div>
          <Link to={"#"}>Savana Rice</Link>
        </div>
      </div>
    </>
  );
}

export default NavLinks;

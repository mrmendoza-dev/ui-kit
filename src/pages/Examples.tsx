import Buttons from "../components/Buttons";
import Form from "../components/Form";
import SideNav from "../components/SideNavScroll";
import "../css/input.css";

export default function Examples(props: any) {
  return (
    <div className="Examples page">
      <SideNav links={props.links} />

      <div className="page-display">
        <Form />
        <Buttons />
      </div>
    </div>
  );
}

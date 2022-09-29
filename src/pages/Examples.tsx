
import "../css/input.css"
import Form from "../components/Form";
import Buttons from "../components/Buttons";
import SideNav from "../components/SideNav";
import {Routes, Route, Link} from "react-router-dom"


export default function Examples(props: any) {
  return (
    <div className="Examples page">
      <SideNav links={props.links}/>

      <div>

      </div>
    </div>
  );
}
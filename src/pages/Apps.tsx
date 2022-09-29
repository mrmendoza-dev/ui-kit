

import SideNav from "../components/SideNav";
import { Routes, Route, Link } from "react-router-dom";

export default function Apps(props: any) {
  return (
    <div className="Apps page">
      <SideNav links={props.links}/>

      <div></div>
    </div>
  );
}
import Buttons from "../components/Buttons";
import Form from "../components/Form";
import SideNav from "../components/SideNav/SideNavScroll";
import "../css/input.css";

export default function Examples(props: any) {
    const links = [
      {
        name: "Forms",
        path: "forms",
      },
      {
        name: "Buttons",
        path: "buttons",
      },
      {
        name: "Carousels",
        path: "carousels",
      },
      {
        name: "Modals",
        path: "modals",
      },
      {
        name: "Marquees",
        path: "marquees",
      },
      {
        name: "Audio Player",
        path: "audio-player",
      },
      {
        name: "Video Player",
        path: "video-player",
      },
    ];

  return (
    <div className="Examples page">
      <SideNav links={links} />

      <div className="page-display">
        <Form />
        <Buttons />
      </div>
    </div>
  );
}

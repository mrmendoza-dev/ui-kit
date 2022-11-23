import Counter from "../apps/Counter";
import SideNav from "../components/SideNav/SideNavScroll";

export default function Apps(props: any) {
  return (
    <div className="Apps page">
      <SideNav links={props.links} />

      <div className="page-display">
        <Counter />
      </div>
    </div>
  );
}

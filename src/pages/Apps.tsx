import Counter from "../apps/Counter";
import SideNav from "../components/SideNav/SideNavScroll";

export default function Apps(props: any) {

    const links = [
      {
        name: "Converter",
        path: "converter",
      },
      {
        name: "Clock",
        path: "clock",
      },
      {
        name: "Counter",
        path: "counter",
      },
      {
        name: "Calculator",
        path: "calculator",
      },
      {
        name: "Stock Tracker",
        path: "stock",
      },
      {
        name: "Crypto Tracker",
        path: "crypto",
      },
      {
        name: "Autofill Search",
        path: "autofill",
      },
      {
        name: "Item Filtering",
        path: "filters",
      },
      {
        name: "Weather Tracker",
        path: "weather",
      },
    ];
  return (
    <div className="Apps page">
      <SideNav links={links} />

      <div className="page-display">
        <Counter />
      </div>
    </div>
  );
}

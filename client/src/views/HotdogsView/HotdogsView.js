import Header from "../../components/Header/Header";
import HotdogsList from "../../components/HotdogsList/HotdogsList";

function HotdogView({ openEdit }) {
  return (
    <>
      <Header />
      <HotdogsList openEdit={openEdit} />
    </>
  );
}

export default HotdogView;

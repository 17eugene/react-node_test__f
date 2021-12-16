import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HotdogView from "./views/HotdogsView/HotdogsView";
import operations from "./redux/hotdog/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getHotdogs());
  }, [dispatch]);

  return (
    <div className="App">
      <HotdogView />
    </div>
  );
}

export default App;

import FunctionContextB from "./FunctionContextB";
import FunctionContextC from "./FunctionContextC";

import ColorTheme from "./MyColorContext";

const FunctionContextA = () => {
  const colors = { bkga: "green", bkgb: "white", bkgc: "yellow", bkgd: "blue" };

  return (
    <div>
      <h2>01 - OLHA AS CORES</h2>
      <ColorTheme.Provider value={colors}>
        <FunctionContextB />
        <FunctionContextC />
      </ColorTheme.Provider>
    </div>
  );
};

export default FunctionContextA;

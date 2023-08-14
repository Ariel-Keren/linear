import IGraph from "@/types";
import Graph from "./Graph";

interface Props {
  slots: IGraph[];
}

const Plane: React.FC<Props> = ({ slots }) => {
  return (
    <>
      {slots.map(
        (slot, index) =>
          slot.isShown && (
            <Graph
              equation={slot.equation}
              color={slot.color}
              thickness={slot.thickness}
              deepness={9 - index}
              key={index}
            />
          )
      )}

      <Graph equation="y=0x+0" color="#111827" thickness={5} deepness={-1} />
      <Graph equation="y=9999x+0" color="#111827" thickness={5} deepness={-1} />
    </>
  );
};

export default Plane;
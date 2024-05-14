import Stack from "react-bootstrap/Stack";
import ProgressBar from "react-bootstrap/ProgressBar";
import { STATE } from "../../common/constants";
import * as Icon from "react-bootstrap-icons";

function Progress({ curState }) {
  const progress = {
    [STATE.draft]: {
      bar: 10,
      icon: 0,
    },
    [STATE.review]: {
      bar: 30,
      icon: 1,
    },
    [STATE.approve]: {
      bar: 50,
      icon: 2,
    },
    [STATE.release]: {
      bar: 70,
      icon: 3,
    },
    [STATE.live]: {
      bar: 100,
      icon: 5,
    },
  };

  return (
    <Stack>
      <Stack direction="horizontal" gap={3}>
        {/* render all states */}
        {Object.values(STATE).map((value, idx) => {
          const icon =
            idx < progress[curState].icon ? (
              <Icon.Check2Circle color="green" size={22} />
            ) : (
              <Icon.Circle size={20} />
            );
          const step = value.charAt(0).toUpperCase() + value.slice(1);
          return (
            <div className="p-3 me-auto" key={idx}>
              {icon} {step}
            </div>
          );
        })}
      </Stack>
      <ProgressBar now={progress[curState].bar} />
    </Stack>
  );
}

export default Progress;

import FSM from "./fsm";
import { STATE, PROGRESS_STATE } from "../pages/common/constants";

export const progressFsm = new FSM(STATE.draft);

// Define transitions
progressFsm.addTransition(
  STATE.draft,
  STATE.review,
  PROGRESS_STATE[STATE.draft].transition
);
progressFsm.addTransition(
  STATE.review,
  STATE.approve,
  PROGRESS_STATE[STATE.review].transition
);
progressFsm.addTransition(
  STATE.approve,
  STATE.release,
  PROGRESS_STATE[STATE.approve].transition
);
progressFsm.addTransition(
  STATE.release,
  STATE.live,
  PROGRESS_STATE[STATE.release].transition
);
progressFsm.addTransition(
  STATE.review,
  STATE.draft,
  PROGRESS_STATE.cancel.transition
);
progressFsm.addTransition(
  STATE.approve,
  STATE.draft,
  PROGRESS_STATE.cancel.transition
);

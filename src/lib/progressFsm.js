import FSM from "./fsm";

export const progressFsm = new FSM("draft");

// Define transitions
progressFsm.addTransition("draft", "review", "submitForReview");
progressFsm.addTransition("review", "approval", "submitForApproval");
progressFsm.addTransition("approval", "release", "submitForRelease");

// progressFsm.addTransition("review", "draft", "submitForAdjust");
// progressFsm.addTransition("approval", "draft", "submitForAdjust");

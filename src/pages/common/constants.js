const baseURL = "http://localhost:3001";

export const STATE = {
  draft: "draft",
  review: "review",
  approve: "approve",
  release: "release",
  live: "live",
};

export const API = {
  progress: `${baseURL}/api`,
  create: `${baseURL}/api/exp`,
};

export const PROGRESS_STATE = {
  [STATE.draft]: {
    to: STATE.review,
    transition: "submitForReview",
    btnText: "Submit draft",
  },
  [STATE.review]: {
    to: STATE.approve,
    transition: "submitForApproval",
    btnText: "Confirm",
  },
  [STATE.approve]: {
    to: STATE.release,
    transition: "submitForRelease",
    btnText: "Approve",
  },
  [STATE.release]: {
    to: STATE.live,
    transition: "release",
    btnText: "Publish",
  },
  cancel: {
    to: STATE.draft,
    transition: "cancel",
    btnText: "Cancel",
  },
};

export const FORM_DATA = {
  id: 10001,
  name: "LandingPage:Banner",
  type: "A/B",
  product: "Ian Ramesh",
  engineer: "John Marr",
  business: "EDP",
  allocation: 50,
};

export const User = {
  user1: {
    name: "Sharilyn",
    permission: true,
    role: "owner",
  },
  user2: {
    name: "John",
    permission: true,
    role: "poc",
  },
  user1: {
    name: "Mike",
    permission: false,
    role: "",
  },
};

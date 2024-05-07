const baseURL = "http://localhost:3001";

export const API = {
  test: `${baseURL}/api`,
  progress: `${baseURL}/progress`,
};

export const PROGRESS_STATE = {
  draft: {
    to: "review",
    transition: "submitForReview",
    btnText: "submit for review",
  },
  review: {
    to: "approval",
    transition: "submitForApproval",
    btnText: "Approve",
  },
  approval: {
    to: "release",
    transition: "submitForRelease",
    btnText: "Publish",
  },
};

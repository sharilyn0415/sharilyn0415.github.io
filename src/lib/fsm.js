// fsm.js

class FSM {
  constructor(initialState) {
    this.currentState = initialState;
    this.transitions = {};
  }

  addTransition(fromState, toState, action) {
    if (!this.transitions[fromState]) {
      this.transitions[fromState] = {};
    }
    this.transitions[fromState][action] = toState;
  }

  transition(action) {
    const nextState = this.transitions[this.currentState][action];
    if (!nextState) {
      throw new Error(
        `Invalid transition from ${this.currentState} for action ${action}`
      );
    }
    this.currentState = nextState;
  }

  getCurrentState() {
    return this.currentState;
  }
}

export default FSM;

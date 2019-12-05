import React from 'react';
import {connect} from "react-redux"
import {toggleLocked, toggleClosed} from "../actions"

const Controls = ({locked, closed, toggleLocked, toggleClosed}) => {

  return (
    <div className="controls panel">
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  closed: state.closed,
  locked: state.locked
})

export default connect(mapStateToProps,{toggleLocked, toggleClosed})(Controls);

import { connect } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import {inc} from './store/actions/counter.action'
import { MisterToyApp } from "./pages/mister-toy-app";
import { AppHeader } from "./cmp/app-header";

function _App(props) {
  return (
    <div className="app">
      <AppHeader/>
      <main>
        <Routes>
          <Route path="/" element={<MisterToyApp/>} />
        </Routes>
      </main>
    </div>
  );
}



function mapStateToProps(storeState) {
  return {
      count: storeState.countModule.count,
      status: storeState.statusModule.status
  }
}
const mapDispatchToProps = {
  inc
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)
import './App.css';
import './style/style.scss'

import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";



import { AppHeader } from "./cmp/app-header";
import { MisterToyApp } from "./pages/mister-toy-app";
import { ToyEdit } from "./pages/toy-edit";
import { inc } from "./store/actions/counter.action";

function _App(props) {
  return (
    <div className="app">
      <AppHeader/>
      <Router>
        <main>
          <Switch>
            <Route path="/edit/:toyId?" exact component={ToyEdit} />
            <Route path="/" component={MisterToyApp} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

function mapStateToProps(storeState) {
  return {
    count: storeState.countModule.count,
    status: storeState.statusModule.status,
  };
}
const mapDispatchToProps = {
  inc,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);

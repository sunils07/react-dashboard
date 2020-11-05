import React from 'react';
import { Provider } from "react-redux";

import DashboardPage from "./pages/dashboard/dashboard.page";
import store from "./lib/redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <DashboardPage />
    </Provider>
  );
}

export default App;

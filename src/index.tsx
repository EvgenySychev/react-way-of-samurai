import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {renderTree} from "./render";

renderTree(state)


reportWebVitals();

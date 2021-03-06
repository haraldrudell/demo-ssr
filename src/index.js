/*
© 2018-present Harald Rudell <harald.rudell@gmail.com> (http://www.haraldrudell.com)
This source code is licensed under the ISC-style license found in the LICENSE file in the root directory of this source tree.
*/
import React from 'react'
import {render, hydrate} from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const component = <App />
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Cannot find elemet with id root')
const isClientRendering = rootElement.childElementCount === 0
const args = [component, rootElement]

isClientRendering ? render(...args) : hydrate(...args)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

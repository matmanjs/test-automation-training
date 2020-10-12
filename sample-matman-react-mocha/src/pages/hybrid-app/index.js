import React, { Component } from 'react';

import { callByIframe, callByLocaiton } from './util';

import './index.less';

export default class PageHybridApp extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      logs: [],
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    this.handleObserve();
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  handleObserve = () => {
    const self = this;

    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('body');

    // Options for the observer (which mutations to observe)
    const config = { childList: true };

    // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    // Callback function to execute when mutations are observed
    const callback = function (mutationsList) {
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord
        // console.log(mutation)

        if (mutation.type === 'childList') {
          try {
            if (mutation.addedNodes.length) {
              console.log('新增 node!', mutation.addedNodes.length, mutation.addedNodes);
              if (mutation.addedNodes[0].nodeName.toUpperCase() === 'IFRAME') {
                console.log('找到了一个 iframe：', mutation.addedNodes[0]);
                console.log('iframe 地址：', mutation.addedNodes[0].src);
                self.addLog(`监听到新增 iframe：${mutation.addedNodes[0].src}`);
              }
            }

            if (mutation.removedNodes.length) {
              console.log('移除 node!', mutation.removedNodes.length, mutation.removedNodes);
              if (mutation.removedNodes[0].nodeName.toUpperCase() === 'IFRAME') {
                console.log('找到了一个 iframe：', mutation.removedNodes[0]);
                console.log('iframe 地址：', mutation.removedNodes[0].src);
                self.addLog(`监听到移除 iframe ：${mutation.removedNodes[0].src}`);
              }
            }
          } catch (e) {}
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // Later, you can stop observing
    // observer.disconnect();

    this.observer = observer;
  };

  addLog(msg) {
    this.setState({
      logs: [`${msg}`, ...this.state.logs],
    });
  }

  testJSBridge = () => {
    const jsbridge = 'tnow://callByLocation?name=matman';
    console.log('=====testJSBridge======', jsbridge);

    callByLocaiton(jsbridge);

    this.addLog(`点击调用： ${jsbridge}`);
  };

  testJSBridgeIframe = () => {
    const jsbridge = 'tnow://callByIframe?name=matman';
    console.log('=====testJSBridgeIframe======', jsbridge);

    callByIframe(jsbridge);

    this.addLog(`点击调用： ${jsbridge}`);
  };

  testJumpUrl = () => {
    const url = 'https://www.baidu.com?name=matman';
    console.log('=====testJumpUrl======', url);

    setTimeout(() => {
      window.location.href = url;
    }, 500);

    this.addLog(`点击跳转： ${url}，延时 500ms 执行`);
  };

  render() {
    const { logs } = this.state;

    return (
      <div className="page-hybrid-app">
        <div id="call-by-location" className="btn" onClick={this.testJSBridge}>
          call JSBridge by location
        </div>
        <div id="call-by-iframe" className="btn" onClick={this.testJSBridgeIframe}>
          call JSBridge by iframe
        </div>
        <div id="jump" className="btn" onClick={this.testJumpUrl}>
          url 跳转
        </div>

        <ul className="msg">
          {logs.map((log, index) => <li key={index}>{log}</li>)}
        </ul>
      </div>
    );
  }
}

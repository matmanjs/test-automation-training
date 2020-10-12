import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Animation from '../now-base-animation';

import './index.less';

export default class AppToast extends Component {
  static create(opts) {
    if (!opts.dom) {
      opts.dom = document.createElement('div');
      opts.dom.id = `now-apptoast-wrapper-${Date.now()}`;
      document.body.appendChild(opts.dom);
    }

    opts.appear = true;

    const { dom } = opts;

    ReactDOM.render(React.createElement(this, opts), dom);

    const remove = () => {
      opts.show = false;
      opts.onLeave = () => {
        ReactDOM.unmountComponentAtNode(dom);
        document.body.removeChild(dom);
      };

      ReactDOM.render(React.createElement(this, opts), dom);
    };

    // 如果设置了延时关闭，则自动消失
    if (opts.delay) {
      setTimeout(remove, opts.delay);
    }

    return {
      remove,
    };
  }

  static defaultProps = {
    content: '',
    type: 'info',
    top: 0,
    style: {},
  };

  render() {
    const { content, type, top, style, children, show = true } = this.props;

    let toastClass = '';
    switch (type) {
      case 'warn':
        toastClass = 'toastWarn';
        break;
      case 'error':
        toastClass = 'toastError';
        break;
      case 'success':
        toastClass = 'toastSuccess';
        break;
      case 'info':
      default:
        toastClass = 'toastInfo';
        break;
    }

    const toastStyle = Object.assign({}, style, {
      paddingTop: `${top + 8}px`,
    });

    return (
      <Animation
        animationName="now-apptoast"
        key={type + content}
        show={show && !!(children || content)}
        className={`now-apptoast ${toastClass}`}
        {...this.props}
        style={toastStyle}>
        {children ? children : content}
      </Animation>
    );
  }
}

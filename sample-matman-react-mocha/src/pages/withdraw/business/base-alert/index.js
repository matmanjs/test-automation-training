import Dialog from '../../components/now-base-dialog';

/**
 * 展现一个模态框
 * opts={
    skin,
    text,
    onEnter,
    onCancel,
    enterText,
    cancelText
 }
 * @param {Object | String} opts
 */
export function showAlert(opts) {
  if (typeof opts === 'string') {
    opts = {
      text: opts,
    };
  }

  return new Promise((resolve, reject) => {
    opts.onEnter = () => {
      resolve();
    };

    showByBaseDialog(opts);
  });
}

/**
 * 展现一个模态框
 * opts={
    skin,
    text,
    onEnter,
    onCancel,
    enterText,
    cancelText
 }
 * @param {Object | String} opts
 */
function showByBaseDialog(opts) {
  const params = Object.assign(
    {
      text: '提示文案',
      enterText: '确定',
      skin: 'base-alert',
    },
    opts,
  );

  let dlg;

  const removeDlg = () => {
    if (typeof dlg !== 'undefined') {
      dlg.remove();
    }
  };

  if (typeof params.onEnter !== 'function') {
    params.onEnter = removeDlg;
  } else {
    const _onEnter = params.onEnter;

    params.onEnter = () => {
      _onEnter();
      removeDlg();
    };
  }

  dlg = Dialog.create(params);
}

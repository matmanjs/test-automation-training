import Toast from '../../components/now-base-toast';

export function showErrorTips(msg) {
  Toast.create({
    type: 'error',
    content: msg,
    delay: 2000,
  });
}

export const isFirefox = typeof InstallTrigger !== 'undefined';

export const isSafari = /constructor/i.test(window.HTMLElement) || (function (pushN) {
  return pushN.toString() === '[object SafariRemoteNotification]';
})(!window['safari'] || (typeof window['safari'] !== 'undefined' && window['safari'].pushNotification));

export const isIE = false || !!document.documentMode;

export const isEdge = !isIE && !!window.StyleMedia;

export const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

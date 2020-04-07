
// const keyArr = [];
// // document.onkeypress = function (event) {
// //   event.preventDefault();
// //   console.log(event);
// //   console.log(event.code);
// //   console.log(event.key);
// //   console.log(event.charCode);
// //   console.log(event.which);
// //   console.log(event.location);
// //   keyArr.push(event.code);
// //   keyArr.push('[]');
// //   console.log(keyArr);
// // }

// function keyEve(event) {
//   // event.preventDefault();
//   console.log(event);
//   console.log(event.code);
//   console.log(event.key);
//   console.log(event.charCode);
//   console.log(event.which);
//   console.log(event.location);
//   // // --- one init KEY_LIST ---
//   // keyArr.push(event.code);
//   // keyArr.push('[]');
//   // console.log(keyArr);
//   // // --- one init KEY_LIST ---

//   // --- two collect KEY_LIST ---
//   // KEY_LIST[event.code][0] = event.which;
//   if (event.shiftKey) {
//   KEY_LIST[event.code][4] = `'${event.key}'`;
//  } else {
//     KEY_LIST[event.code][3] = `'${event.key}'`;
//   }

//   const keyArrX = [];
//   for (const key in KEY_LIST) {
//     // const element = object[key];
//     // console.log(KEY_LIST.lenght);
//     const arrH = [];
//     arrH.push(key);
//     const str = `[${KEY_LIST[key].join(', ')}]`;
//     arrH.push(str);
//     keyArrX.push(arrH.join(': '));
//   }
//   console.log(keyArrX.join(', '));// collect KEY_LIST
//   // --- two collect KEY_LIST ---
// }


// let KEY_LIST = {
//   Backquote: [],
//   Digit1: [],
//   Digit2: [],
//   Digit3: [],
//   Digit4: [],
//   Digit5: [],
//   Digit6: [],
//   Digit7: [],
//   Digit8: [],
//   Digit9: [],
//   Digit0: [],
//   Minus: [],
//   Equal: [],
//   Backspace: [],
//   Tab: [],
//   KeyQ: [],
//   KeyW: [],
//   KeyE: [],
//   KeyR: [],
//   KeyT: [],
//   KeyY: [],
//   KeyU: [],
//   KeyI: [],
//   KeyO: [],
//   KeyP: [],
//   BracketLeft: [],
//   BracketRight: [],
//   Backslash: [],
//   Delete: [],
//   CapsLock: [],
//   KeyA: [],
//   KeyS: [],
//   KeyD: [],
//   KeyF: [],
//   KeyG: [],
//   KeyH: [],
//   KeyJ: [],
//   KeyK: [],
//   KeyL: [],
//   Semicolon: [],
//   Quote: [],
//   Enter: [],
//   ShiftLeft: [],
//   KeyZ: [],
//   KeyX: [],
//   KeyC: [],
//   KeyV: [],
//   KeyB: [],
//   KeyN: [],
//   KeyM: [],
//   Comma: [],
//   Period: [],
//   Slash: [],
//   ArrowUp: [],
//   ShiftRight: [],
//   ControlLeft: [],
//   MetaLeft: [],
//   AltLeft: [],
//   Space: [],
//   AltRight: [],
//   ArrowLeft: [],
//   ArrowDown: [],
//   ArrowRight: [],
//   ControlRight: [],
// };

// let KEY_LIST = {
//   Backquote: [192, '`'], Digit1: [49, '1'], Digit2: [50, '2'], Digit3: [51, '3'], Digit4: [52, '4'], Digit5: [53, '5'], Digit6: [54, '6'], Digit7: [55, '7'], Digit8: [56, '8'], Digit9: [57, '9'], Digit0: [48, '0'], Minus: [189, '-'], Equal: [187, '='], Backspace: [8, 'Backspace'], Tab: [9, 'Tab'], KeyQ: [81, 'q'], KeyW: [87, 'w'], KeyE: [69, 'e'], KeyR: [82, 'r'], KeyT: [84, 't'], KeyY: [89, 'y'], KeyU: [85, 'u'], KeyI: [73, 'i'], KeyO: [79, 'o'], KeyP: [80, 'p'], BracketLeft: [219, '['], BracketRight: [221, ']'], Backslash: [220, '\\'], Delete: [46, 'Delete'], CapsLock: [20, 'CapsLock'], KeyA: [65, 'a'], KeyS: [83, 's'], KeyD: [68, 'd'], KeyF: [70, 'f'], KeyG: [71, 'g'], KeyH: [72, 'h'], KeyJ: [74, 'j'], KeyK: [75, 'k'], KeyL: [76, 'l'], Semicolon: [186, ';'], Quote: [222, "'"], Enter: [13, 'Enter'], ShiftLeft: [16, 'Shift'], KeyZ: [90, 'z'], KeyX: [88, 'x'], KeyC: [67, 'c'], KeyV: [86, 'v'], KeyB: [66, 'b'], KeyN: [78, 'n'], KeyM: [77, 'm'], Comma: [188, ','], Period: [190, '.'], Slash: [191, '/'], ArrowUp: [38, 'ArrowUp'], ShiftRight: [16, 'Shift'], ControlLeft: [17, 'Control'], MetaLeft: [91, 'Meta'], AltLeft: [18, 'Alt'], Space: [32, ' '], AltRight: [18, 'Alt'], ArrowLeft: [37, 'ArrowLeft'], ArrowDown: [40, 'ArrowDown'], ArrowRight: [39, 'ArrowRight'], ControlRight: [17, 'Control'],
// };

// let KEY_LIST = {Backquote: [192, '`', '~'], Digit1: [49, 1, '!'], Digit2: [50, 2, '@'], Digit3: [51, 3, '#'], Digit4: [52, 4, '$'], Digit5: [53, 5, '%'], Digit6: [54, 6, '^'], Digit7: [55, 7, '&'], Digit8: [56, 8, '*'], Digit9: [57, 9, '('], Digit0: [48, 0, ')'], Minus: [189, '-', '_'], Equal: [187, '=', '+'], Backspace: [8, 'Backspace', 'Backspace'], Tab: [9, 'Tab', 'Tab'], KeyQ: [81, 'q', 'Q'], KeyW: [87, 'w', 'W'], KeyE: [69, 'e', 'E'], KeyR: [82, 'r', 'R'], KeyT: [84, 't', 'T'], KeyY: [89, 'y', 'Y'], KeyU: [85, 'u', 'U'], KeyI: [73, 'i', 'I'], KeyO: [79, 'o', 'O'], KeyP: [80, 'p', 'P'], BracketLeft: [219, '[', '{'], BracketRight: [221, ']', '}'], Backslash: [220, '\\', '|'], Delete: [46, 'Delete', 'Delete'], CapsLock: [20, 'CapsLock', 'CapsLock'], KeyA: [65, 'a', 'A'], KeyS: [83, 's', 'S'], KeyD: [68, 'd', 'D'], KeyF: [70, 'f', 'F'], KeyG: [71, 'g', 'G'], KeyH: [72, 'h', 'H'], KeyJ: [74, 'j', 'J'], KeyK: [75, 'k', 'K'], KeyL: [76, 'l', 'L'], Semicolon: [186, ';', ':'], Quote: [222, "'", '"'], Enter: [13, 'Enter', 'Enter'], ShiftLeft: [16, 'Shift', 'Shift'], KeyZ: [90, 'z', 'Z'], KeyX: [88, 'x', 'X'], KeyC: [67, 'c', 'C'], KeyV: [86, 'v', 'V'], KeyB: [66, 'b', 'B'], KeyN: [78, 'n', 'N'], KeyM: [77, 'm', 'M'], Comma: [188, ',', '<'], Period: [190, '.', '>'], Slash: [191, '/', '?'], ArrowUp: [38, 'ArrowUp', 'ArrowUp'], ShiftRight: [16, 'Shift', 'Shift'], ControlLeft: [17, 'Control', 'Control'], MetaLeft: [91, 'Meta', 'Meta'], AltLeft: [18, 'Alt', 'Alt'], Space: [32, ' ', ' '], AltRight: [18, 'Alt', 'Alt'], ArrowLeft: [37, 'ArrowLeft', 'ArrowLeft'], ArrowDown: [40, 'ArrowDown', 'ArrowDown'], ArrowRight: [39, 'ArrowRight', 'ArrowRight'], ControlRight: [17, 'Control', 'Control']}

// document.addEventListener('keypress', keyEve);
// document.addEventListener('keydown', keyEve);

// const keyArr = [
//   'Backquote',
//   'Digit1',
//   'Digit2',
//   'Digit3',
//   'Digit4',
//   'Digit5',
//   'Digit6',
//   'Digit7',
//   'Digit8',
//   'Digit9',
//   'Digit0',
//   'Minus',
//   'Equal',
//   'Backspace',
//   'Tab',
//   'KeyQ',
//   'KeyW',
//   'KeyE',
//   'KeyR',
//   'KeyT',
//   'KeyY',
//   'KeyU',
//   'KeyI',
//   'KeyO',
//   'KeyP',
//   'BracketLeft',
//   'BracketRight',
//   'Backslash',
//   'Delete',
//   'CapsLock',
//   'KeyA',
//   'KeyS',
//   'KeyD',
//   'KeyF',
//   'KeyG',
//   'KeyH',
//   'KeyJ',
//   'KeyK',
//   'KeyL',
//   'Semicolon',
//   'Quote',
//   'Enter',
//   'ShiftLeft',
//   'KeyZ',
//   'KeyX',
//   'KeyC',
//   'KeyV',
//   'KeyB',
//   'KeyN',
//   'KeyM',
//   'Comma',
//   'Period',
//   'Slash',
//   'ArrowUp',
//   'ShiftRight',
//   'ControlLeft',
//   'MetaLeft',
//   'AltLeft',
//   'Space',
//   'AltRight',
//   'ArrowLeft',
//   'ArrowDown',
//   'ArrowRight',
//   'ControlRight',
// ];

// // KEY_LIST by event values
// const KEY_LIST = {
//   Backquote: [192, '`', '~', 'ё', 'Ё'],
//   Digit1: [49, '1', '!', '1', '!'],
//   Digit2: [50, '2', '@', '2', '"'],
//   Digit3: [51, '3', '#', '3', '№'],
//   Digit4: [52, '4', '$', '4', ';'],
//   Digit5: [53, '5', '%', '5', '%'],
//   Digit6: [54, '6', '^', '6', ':'],
//   Digit7: [55, '7', '&', '7', '?'],
//   Digit8: [56, '8', '*', '8', '*'],
//   Digit9: [57, '9', '(', '9', '('],
//   Digit0: [48, '0', ')', '0', ')'],
//   Minus: [189, '-', '_', '-', '_'],
//   Equal: [187, '=', '+', '=', '+'],
//   Backspace: [8, 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
//   Tab: [9, 'Tab', 'Tab', 'Tab', 'Tab'],
//   KeyQ: [81, 'q', 'Q', 'й', 'Й'],
//   KeyW: [87, 'w', 'W', 'ц', 'Ц'],
//   KeyE: [69, 'e', 'E', 'у', 'У'],
//   KeyR: [82, 'r', 'R', 'к', 'К'],
//   KeyT: [84, 't', 'T', 'е', 'Е'],
//   KeyY: [89, 'y', 'Y', 'н', 'Н'],
//   KeyU: [85, 'u', 'U', 'г', 'Г'],
//   KeyI: [73, 'i', 'I', 'ш', 'Ш'],
//   KeyO: [79, 'o', 'O', 'щ', 'Щ'],
//   KeyP: [80, 'p', 'P', 'з', 'З'],
//   BracketLeft: [219, '[', '{', 'х', 'Х'],
//   BracketRight: [221, ']', '}', 'ъ', 'Ъ'],
//   Backslash: [220, '\\', '|', '\\', '/'],
//   Delete: [46, 'Delete', 'Delete', 'Delete', 'Delete'],
//   CapsLock: [20, 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
//   KeyA: [65, 'a', 'A', 'ф', 'Ф'],
//   KeyS: [83, 's', 'S', 'ы', 'Ы'],
//   KeyD: [68, 'd', 'D', 'в', 'В'],
//   KeyF: [70, 'f', 'F', 'а', 'А'],
//   KeyG: [71, 'g', 'G', 'п', 'П'],
//   KeyH: [72, 'h', 'H', 'р', 'Р'],
//   KeyJ: [74, 'j', 'J', 'о', 'О'],
//   KeyK: [75, 'k', 'K', 'л', 'Л'],
//   KeyL: [76, 'l', 'L', 'д', 'Д'],
//   Semicolon: [186, ';', ':', 'ж', 'Ж'],
//   Quote: [222, "'", '"', 'э', 'Э'],
//   Enter: [13, 'Enter', 'Enter', 'Enter', 'Enter'],
//   ShiftLeft: [16, 'Shift', 'Shift', 'Shift', 'Shift'],
//   KeyZ: [90, 'z', 'Z', 'я', 'Я'],
//   KeyX: [88, 'x', 'X', 'ч', 'Ч'],
//   KeyC: [67, 'c', 'C', 'с', 'С'],
//   KeyV: [86, 'v', 'V', 'м', 'М'],
//   KeyB: [66, 'b', 'B', 'и', 'И'],
//   KeyN: [78, 'n', 'N', 'т', 'Т'],
//   KeyM: [77, 'm', 'M', 'ь', 'Ь'],
//   Comma: [188, ',', '<', 'б', 'Б'],
//   Period: [190, '.', '>', 'ю', 'Ю'],
//   Slash: [191, '/', '?', '.', ','],
//   ArrowUp: [38, 'ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowUp'],
//   ShiftRight: [16, 'Shift', 'Shift', 'Shift', 'Shift'],
//   ControlLeft: [17, 'Control', 'Control', 'Control', 'Control'],
//   MetaLeft: [91, 'Meta', 'Meta', 'Meta', 'Meta'],
//   AltLeft: [18, 'Alt', 'Alt', 'Alt', 'Alt'],
//   Space: [32, ' ', ' ', ' ', ' '],
//   AltRight: [18, 'Alt', 'Alt', 'AltGraph', 'AltGraph'],
//   ArrowLeft: [37, 'ArrowLeft', 'ArrowLeft', 'ArrowLeft', 'ArrowLeft'],
//   ArrowDown: [40, 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown'],
//   ArrowRight: [39, 'ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight'],
//   ControlRight: [17, 'Control', 'Control', 'Control', 'Control'],
// };

// KEY_LIST by use values
const KEY_LIST = {
  Backquote: [192, '`', '~', 'ё', 'Ё', 'key_usual'],
  Digit1: [49, '1', '!', '1', '!', 'key_usual'],
  Digit2: [50, '2', '@', '2', '"', 'key_usual'],
  Digit3: [51, '3', '#', '3', '№', 'key_usual'],
  Digit4: [52, '4', '$', '4', ';', 'key_usual'],
  Digit5: [53, '5', '%', '5', '%', 'key_usual'],
  Digit6: [54, '6', '^', '6', ':', 'key_usual'],
  Digit7: [55, '7', '&', '7', '?', 'key_usual'],
  Digit8: [56, '8', '*', '8', '*', 'key_usual'],
  Digit9: [57, '9', '(', '9', '(', 'key_usual'],
  Digit0: [48, '0', ')', '0', ')', 'key_usual'],
  Minus: [189, '-', '_', '-', '_', 'key_usual'],
  Equal: [187, '=', '+', '=', '+', 'key_usual'],
  Backspace: [8, 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'key_backspace'],
  Tab: [9, 'Tab', 'Tab', 'Tab', 'Tab', 'key_tab'],
  KeyQ: [81, 'q', 'Q', 'й', 'Й', 'key_usual'],
  KeyW: [87, 'w', 'W', 'ц', 'Ц', 'key_usual'],
  KeyE: [69, 'e', 'E', 'у', 'У', 'key_usual'],
  KeyR: [82, 'r', 'R', 'к', 'К', 'key_usual'],
  KeyT: [84, 't', 'T', 'е', 'Е', 'key_usual'],
  KeyY: [89, 'y', 'Y', 'н', 'Н', 'key_usual'],
  KeyU: [85, 'u', 'U', 'г', 'Г', 'key_usual'],
  KeyI: [73, 'i', 'I', 'ш', 'Ш', 'key_usual'],
  KeyO: [79, 'o', 'O', 'щ', 'Щ', 'key_usual'],
  KeyP: [80, 'p', 'P', 'з', 'З', 'key_usual'],
  BracketLeft: [219, '[', '{', 'х', 'Х', 'key_usual'],
  BracketRight: [221, ']', '}', 'ъ', 'Ъ', 'key_usual'],
  Backslash: [220, '\\', '|', '\\', '/', 'key_usual'],
  Delete: [46, 'Delete', 'Delete', 'Delete', 'Delete', 'key_delete'],
  CapsLock: [20, 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'key_capsLock'],
  KeyA: [65, 'a', 'A', 'ф', 'Ф', 'key_usual'],
  KeyS: [83, 's', 'S', 'ы', 'Ы', 'key_usual'],
  KeyD: [68, 'd', 'D', 'в', 'В', 'key_usual'],
  KeyF: [70, 'f', 'F', 'а', 'А', 'key_usual'],
  KeyG: [71, 'g', 'G', 'п', 'П', 'key_usual'],
  KeyH: [72, 'h', 'H', 'р', 'Р', 'key_usual'],
  KeyJ: [74, 'j', 'J', 'о', 'О', 'key_usual'],
  KeyK: [75, 'k', 'K', 'л', 'Л', 'key_usual'],
  KeyL: [76, 'l', 'L', 'д', 'Д', 'key_usual'],
  Semicolon: [186, ';', ':', 'ж', 'Ж', 'key_usual'],
  Quote: [222, "'", '"', 'э', 'Э', 'key_usual'],
  Enter: [13, 'Enter', 'Enter', 'Enter', 'Enter', 'key_enter'],
  ShiftLeft: [16, 'Shift', 'Shift', 'Shift', 'Shift', 'key_shiftLeft'],
  KeyZ: [90, 'z', 'Z', 'я', 'Я', 'key_usual'],
  KeyX: [88, 'x', 'X', 'ч', 'Ч', 'key_usual'],
  KeyC: [67, 'c', 'C', 'с', 'С', 'key_usual'],
  KeyV: [86, 'v', 'V', 'м', 'М', 'key_usual'],
  KeyB: [66, 'b', 'B', 'и', 'И', 'key_usual'],
  KeyN: [78, 'n', 'N', 'т', 'Т', 'key_usual'],
  KeyM: [77, 'm', 'M', 'ь', 'Ь', 'key_usual'],
  Comma: [188, ',', '<', 'б', 'Б', 'key_usual'],
  Period: [190, '.', '>', 'ю', 'Ю', 'key_usual'],
  Slash: [191, '/', '?', '.', ',', 'key_usual'],
  ArrowUp: [38, '▲', '▲', '▲', '▲', 'key_usual'],
  ShiftRight: [16, 'Shift', 'Shift', 'Shift', 'Shift', 'key_shiftRight'],
  ControlLeft: [17, 'Control', 'Control', 'Control', 'Control', 'key_controlLeft'],
  MetaLeft: [91, 'Meta', 'Meta', 'Meta', 'Meta', 'key_metaLeft'],
  AltLeft: [18, 'Alt', 'Alt', 'Alt', 'Alt', 'key_altLeft'],
  Space: [32, ' ', ' ', ' ', ' ', 'key_space'],
  AltRight: [18, 'Alt', 'Alt', 'AltGraph', 'AltGraph', 'key_altRight'],
  ArrowLeft: [37, '◄', '◄', '◄', '◄', 'key_usual'],
  ArrowDown: [40, '▼', '▼', '▼', '▼', 'key_usual'],
  ArrowRight: [39, '►', '►', '►', '►', 'key_usual'],
  ControlRight: [17, 'Control', 'Control', 'Control', 'Control', 'key_controlRight'],
};

/* global document */
const inputArea = document.createElement('div');
const textArea = document.createElement('textarea');
inputArea.appendChild(textArea);

inputArea.classList.add('input-area');
textArea.id = 'TextArea';
textArea.classList.add('text-area');
textArea.setAttribute('name', 'textarea');

document.querySelector('body').appendChild(inputArea);

const keyListKeys = Object.keys(KEY_LIST);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

keyListKeys.forEach((element) => {
  const key = document.createElement('div');
  key.lettering = document.createElement('div');
  key.appendChild(key.lettering);
  keyboard.appendChild(key);

  key.id = element;
  key.classList.add('key');
  key.classList.add(KEY_LIST[element][5]);
  key.lettering.classList.add('lettering');

  const letter = KEY_LIST[element][1];
  key.lettering.innerHTML = letter;
});

document.querySelector('body').appendChild(keyboard);

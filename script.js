/* global document */
/* global localStorage */

const KEY_LIST = {
  Backquote: { en: ['`', '~', 'nCL'], ru: ['ё', 'Ё', 'yCL'], stl: 'key_usual' },
  Digit1: { en: ['1', '!', 'nCL'], ru: ['1', '!', 'nCL'], stl: 'key_usual' },
  Digit2: { en: ['2', '@', 'nCL'], ru: ['2', '"', 'nCL'], stl: 'key_usual' },
  Digit3: { en: ['3', '#', 'nCL'], ru: ['3', '№', 'nCL'], stl: 'key_usual' },
  Digit4: { en: ['4', '$', 'nCL'], ru: ['4', ';', 'nCL'], stl: 'key_usual' },
  Digit5: { en: ['5', '%', 'nCL'], ru: ['5', '%', 'nCL'], stl: 'key_usual' },
  Digit6: { en: ['6', '^', 'nCL'], ru: ['6', ':', 'nCL'], stl: 'key_usual' },
  Digit7: { en: ['7', '&', 'nCL'], ru: ['7', '?', 'nCL'], stl: 'key_usual' },
  Digit8: { en: ['8', '*', 'nCL'], ru: ['8', '*', 'nCL'], stl: 'key_usual' },
  Digit9: { en: ['9', '(', 'nCL'], ru: ['9', '(', 'nCL'], stl: 'key_usual' },
  Digit0: { en: ['0', ')', 'nCL'], ru: ['0', ')', 'nCL'], stl: 'key_usual' },
  Minus: { en: ['-', '_', 'nCL'], ru: ['-', '_', 'nCL'], stl: 'key_usual' },
  Equal: { en: ['=', '+', 'nCL'], ru: ['=', '+', 'nCL'], stl: 'key_usual' },
  Backspace: { en: ['Backspace', 'Backspace', 'nCL'], ru: ['Backspace', 'Backspace', 'nCL'], stl: 'key_backspace' },
  Tab: { en: ['Tab', 'Tab', 'nCL'], ru: ['Tab', 'Tab', 'nCL'], stl: 'key_tab' },
  KeyQ: { en: ['q', 'Q', 'yCL'], ru: ['й', 'Й', 'yCL'], stl: 'key_usual' },
  KeyW: { en: ['w', 'W', 'yCL'], ru: ['ц', 'Ц', 'yCL'], stl: 'key_usual' },
  KeyE: { en: ['e', 'E', 'yCL'], ru: ['у', 'У', 'yCL'], stl: 'key_usual' },
  KeyR: { en: ['r', 'R', 'yCL'], ru: ['к', 'К', 'yCL'], stl: 'key_usual' },
  KeyT: { en: ['t', 'T', 'yCL'], ru: ['е', 'Е', 'yCL'], stl: 'key_usual' },
  KeyY: { en: ['y', 'Y', 'yCL'], ru: ['н', 'Н', 'yCL'], stl: 'key_usual' },
  KeyU: { en: ['u', 'U', 'yCL'], ru: ['г', 'Г', 'yCL'], stl: 'key_usual' },
  KeyI: { en: ['i', 'I', 'yCL'], ru: ['ш', 'Ш', 'yCL'], stl: 'key_usual' },
  KeyO: { en: ['o', 'O', 'yCL'], ru: ['щ', 'Щ', 'yCL'], stl: 'key_usual' },
  KeyP: { en: ['p', 'P', 'yCL'], ru: ['з', 'З', 'yCL'], stl: 'key_usual' },
  BracketLeft: { en: ['[', '{', 'nCL'], ru: ['х', 'Х', 'yCL'], stl: 'key_usual' },
  BracketRight: { en: [']', '}', 'nCL'], ru: ['ъ', 'Ъ', 'yCL'], stl: 'key_usual' },
  Backslash: { en: ['\\', '|', 'nCL'], ru: ['\\', '/', 'nCL'], stl: 'key_usual' },
  Delete: { en: ['Delete', 'Delete', 'nCL'], ru: ['Delete', 'Delete', 'nCL'], stl: 'key_delete' },
  CapsLock: { en: ['CapsLock', 'CapsLock', 'nCL'], ru: ['CapsLock', 'CapsLock', 'nCL'], stl: 'key_capsLock' },
  KeyA: { en: ['a', 'A', 'yCL'], ru: ['ф', 'Ф', 'yCL'], stl: 'key_usual' },
  KeyS: { en: ['s', 'S', 'yCL'], ru: ['ы', 'Ы', 'yCL'], stl: 'key_usual' },
  KeyD: { en: ['d', 'D', 'yCL'], ru: ['в', 'В', 'yCL'], stl: 'key_usual' },
  KeyF: { en: ['f', 'F', 'yCL'], ru: ['а', 'А', 'yCL'], stl: 'key_usual' },
  KeyG: { en: ['g', 'G', 'yCL'], ru: ['п', 'П', 'yCL'], stl: 'key_usual' },
  KeyH: { en: ['h', 'H', 'yCL'], ru: ['р', 'Р', 'yCL'], stl: 'key_usual' },
  KeyJ: { en: ['j', 'J', 'yCL'], ru: ['о', 'О', 'yCL'], stl: 'key_usual' },
  KeyK: { en: ['k', 'K', 'yCL'], ru: ['л', 'Л', 'yCL'], stl: 'key_usual' },
  KeyL: { en: ['l', 'L', 'yCL'], ru: ['д', 'Д', 'yCL'], stl: 'key_usual' },
  Semicolon: { en: [';', ':', 'nCL'], ru: ['ж', 'Ж', 'yCL'], stl: 'key_usual' },
  Quote: { en: ["'", '"', 'nCL'], ru: ['э', 'Э', 'yCL'], stl: 'key_usual' },
  Enter: { en: ['Enter', 'Enter', 'nCL'], ru: ['Enter', 'Enter', 'nCL'], stl: 'key_enter' },
  ShiftLeft: { en: ['Shift', 'Shift', 'nCL'], ru: ['Shift', 'Shift', 'nCL'], stl: 'key_shiftLeft' },
  KeyZ: { en: ['z', 'Z', 'yCL'], ru: ['я', 'Я', 'yCL'], stl: 'key_usual' },
  KeyX: { en: ['x', 'X', 'yCL'], ru: ['ч', 'Ч', 'yCL'], stl: 'key_usual' },
  KeyC: { en: ['c', 'C', 'yCL'], ru: ['с', 'С', 'yCL'], stl: 'key_usual' },
  KeyV: { en: ['v', 'V', 'yCL'], ru: ['м', 'М', 'yCL'], stl: 'key_usual' },
  KeyB: { en: ['b', 'B', 'yCL'], ru: ['и', 'И', 'yCL'], stl: 'key_usual' },
  KeyN: { en: ['n', 'N', 'yCL'], ru: ['т', 'Т', 'yCL'], stl: 'key_usual' },
  KeyM: { en: ['m', 'M', 'yCL'], ru: ['ь', 'Ь', 'yCL'], stl: 'key_usual' },
  Comma: { en: [',', '<', 'nCL'], ru: ['б', 'Б', 'yCL'], stl: 'key_usual' },
  Period: { en: ['.', '>', 'nCL'], ru: ['ю', 'Ю', 'yCL'], stl: 'key_usual' },
  Slash: { en: ['/', '?', 'nCL'], ru: ['.', ',', 'nCL'], stl: 'key_usual' },
  ArrowUp: { en: ['▲', '▲', 'nCL'], ru: ['▲', '▲', 'nCL'], stl: 'key_usual' },
  ShiftRight: { en: ['Shift', 'Shift', 'nCL'], ru: ['Shift', 'Shift', 'nCL'], stl: 'key_shiftRight' },
  ControlLeft: { en: ['Control', 'Control', 'nCL'], ru: ['Control', 'Control', 'nCL'], stl: 'key_controlLeft' },
  MetaLeft: { en: ['Meta', 'Meta', 'nCL'], ru: ['Meta', 'Meta', 'nCL'], stl: 'key_metaLeft' },
  AltLeft: { en: ['Alt', 'Alt', 'nCL'], ru: ['Alt', 'Alt', 'nCL'], stl: 'key_altLeft' },
  Space: { en: [' ', ' ', 'nCL'], ru: [' ', ' ', 'nCL'], stl: 'key_space' },
  AltRight: { en: ['Alt', 'Alt', 'nCL'], ru: ['Alt', 'Alt', 'nCL'], stl: 'key_altRight' },
  ArrowLeft: { en: ['◄', '◄', 'nCL'], ru: ['◄', '◄', 'nCL'], stl: 'key_usual' },
  ArrowDown: { en: ['▼', '▼', 'nCL'], ru: ['▼', '▼', 'nCL'], stl: 'key_usual' },
  ArrowRight: { en: ['►', '►', 'nCL'], ru: ['►', '►', 'nCL'], stl: 'key_usual' },
  ControlRight: { en: ['Сtrl', 'Сtrl', 'nCL'], ru: ['Сtrl', 'Сtrl', 'nCL'], stl: 'key_controlRight' },
};

if (localStorage.length === 0) {
  localStorage.setItem('lang', 'en');
}
let CapsLock = false;

const inputArea = document.createElement('div');
const textArea = document.createElement('textarea');
inputArea.appendChild(textArea);

inputArea.classList.add('input-area');
textArea.id = 'TextArea';
textArea.classList.add('text-area');
textArea.setAttribute('name', 'textarea');

document.querySelector('body').appendChild(inputArea);

const vrtKeySet = [];

const keyListKeys = Object.keys(KEY_LIST);
const vrtKeyboard = document.createElement('div');
vrtKeyboard.classList.add('keyboard');

keyListKeys.forEach((element) => {
  const key = document.createElement('div');
  key.lettering = document.createElement('div');
  key.appendChild(key.lettering);
  vrtKeyboard.appendChild(key);

  key.id = element;
  key.classList.add('key');
  key.classList.add(KEY_LIST[element].stl);
  key.lettering.classList.add('lettering');

  vrtKeySet.push(key);

  const { lang } = localStorage;
  const letter = KEY_LIST[element][lang][0];
  // console.log(letter);
  key.lettering.innerHTML = letter;
});

document.querySelector('body').appendChild(vrtKeyboard);

const description = document.createElement('div');
description.innerHTML = 'Клавиатура создана в ОС Windows. Переключение языка: СtrlLeft + AltLeft';
description.classList.add('description');

document.querySelector('body').appendChild(description);

const changeLayout = (event) => {
  if (event.ctrlKey && event.altKey) {
    let { lang } = localStorage;
    if (lang === 'en') {
      localStorage.setItem('lang', 'ru');
      lang = 'ru';
    } else {
      localStorage.setItem('lang', 'en');
      lang = 'en';
    }
    vrtKeySet.forEach((element) => {
      const [letterL, letterU, useCL] = KEY_LIST[element.id][lang];
      if (CapsLock === false) {
        element.lettering.innerHTML = letterL;
      } else {
        if (useCL === 'nCL') {
          element.lettering.innerHTML = letterL;
        }
        element.lettering.innerHTML = letterU;
      }
    });
  }
};

document.addEventListener('keydown', changeLayout);

function changeCapsLock(event) {
  if (event.code === 'CapsLock') {
    const { lang } = localStorage;
    if (CapsLock === false) {
      CapsLock = true;
    } else {
      CapsLock = false;
    }
    vrtKeySet.forEach((element) => {
      const [letterL, letterU, useCL] = KEY_LIST[element.id][lang];

      if (useCL === 'yCL') {
        if (element.lettering.innerHTML === letterL) {
          element.lettering.innerHTML = letterU;
        } else if (element.lettering.innerHTML === letterU) {
          element.lettering.innerHTML = letterL;
        }
      }
    });
  }
}

document.addEventListener('keydown', changeCapsLock);

function pressKey(event) {
  const keyOne = document.getElementById(event.code);
  keyOne.classList.add('key_active');
  function upKey() {
    keyOne.classList.remove('key_active');
  }
  document.addEventListener('keyup', upKey);
}

document.addEventListener('keydown', pressKey);

function pressVirtualKey(event) {
  const keyOne = event.currentTarget;
  keyOne.classList.add('key_active');
  function upVirtualKey() {
    keyOne.classList.remove('key_active');
  }
  document.addEventListener('mouseup', upVirtualKey);
}

vrtKeySet.forEach((element) => {
  element.addEventListener('mousedown', pressVirtualKey);
});

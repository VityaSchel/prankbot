(function(){"use strict";try{if(typeof document!="undefined"){var _=document.createElement("style");_.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";._background_vx3rb_2{opacity:0;pointer-events:none;position:fixed;z-index:100;left:0;top:0;width:100vw;height:100vh;background-color:#0000009e;transition:visibility 0s,opacity .1s ease-in-out;visibility:hidden;display:flex;justify-content:center;align-items:center}._background_vx3rb_2 *{font-family:Gilroy,Roboto,sans-serif}._background_vx3rb_2._active_vx3rb_21{visibility:visible;opacity:1;pointer-events:all}._background_vx3rb_2._active_vx3rb_21 ._container_vx3rb_26{max-height:90%;overflow-y:auto;overscroll-behavior:none;transition:height .5s cubic-bezier(.22,1,.36,1)}._background_vx3rb_2._active_vx3rb_21 ._container_vx3rb_26::-webkit-scrollbar{display:none;width:0;scrollbar-width:0px}._background_vx3rb_2 ._paymentFormHeading_vx3rb_37{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}._background_vx3rb_2 ._paymentFormHeading_vx3rb_37 ._name_vx3rb_44{margin:0;font-family:Roboto;font-style:normal;font-weight:700;font-size:22px;text-align:center;letter-spacing:.015em;color:#303030}._background_vx3rb_2 ._paymentFormHeading_vx3rb_37 ._priceLabelHeader_vx3rb_54{font-family:Roboto;font-style:normal;font-weight:500;font-size:15px;letter-spacing:.01em;color:#979797;margin:13px 0 0}._background_vx3rb_2 ._paymentFormHeading_vx3rb_37 ._price_vx3rb_54{margin:5px 0 0;font-family:Roboto;font-style:normal;font-weight:700;font-size:44px;text-align:center;letter-spacing:.005em;color:#303030}._background_vx3rb_2 ._container_vx3rb_26{width:434px;background:#F7F8FC;border-radius:32px;overflow:hidden;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;position:relative;color:#000}._background_vx3rb_2 ._container_vx3rb_26 ._header_vx3rb_85{width:100%;height:72px;padding:24px 38px;display:flex;align-items:center;justify-content:space-between;background:#FFFFFF;border-bottom:2px solid #F2F2F2;color:#303030;position:sticky;top:0}._background_vx3rb_2 ._container_vx3rb_26 ._header_vx3rb_85 ._left_vx3rb_98{display:flex;align-items:center;gap:16px}._background_vx3rb_2 ._container_vx3rb_26 ._header_vx3rb_85 ._left_vx3rb_98 ._icon_vx3rb_103{background:#589195;border-radius:12px;width:34px;height:34px;display:flex;align-items:center;justify-content:center}._background_vx3rb_2 ._container_vx3rb_26 ._header_vx3rb_85 ._left_vx3rb_98 ._label_vx3rb_112{font-family:Roboto;font-style:normal;font-weight:700;font-size:18px}._background_vx3rb_2 ._container_vx3rb_26 ._header_vx3rb_85 ._close_vx3rb_118{background-color:transparent;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:10px}._background_vx3rb_2 ._container_vx3rb_26._loadingScreen_vx3rb_128{height:480px}._background_vx3rb_2 ._container_vx3rb_26 ._loading_vx3rb_128{display:flex;justify-content:center;align-items:center;background:#F7F8FC;transition:opacity .3s ease-in-out;opacity:0;position:absolute;top:72px;width:100%;height:calc(100% - 72px);pointer-events:none;z-index:1}._background_vx3rb_2 ._container_vx3rb_26 ._loading_vx3rb_128._visible_vx3rb_145{opacity:1;pointer-events:all}._background_vx3rb_2 ._container_vx3rb_26._formScreen_vx3rb_149{height:710px}._background_vx3rb_2 ._container_vx3rb_26._paymentLoading_vx3rb_152{height:398.5px}._background_vx3rb_2 ._container_vx3rb_26._paymentSuccess_vx3rb_155{height:441px}._background_vx3rb_2 ._container_vx3rb_26._paymentFailed_vx3rb_158{height:502px}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37{display:flex;align-items:stretch;flex-direction:column;padding:24px 38px}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form{display:flex;flex-direction:column;align-items:stretch;gap:24px;margin-top:30px}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._additional_vx3rb_174{display:flex;flex-direction:row;gap:30px}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._additional_vx3rb_174 ._popupHint_vx3rb_179{width:20px;height:20px;position:relative}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._additional_vx3rb_174 ._popupHint_vx3rb_179 ._trigger_vx3rb_184{width:20px;height:20px;background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAwMDEgMS41NjI0N0M4LjMzMTM1IDEuNTYyNDcgNi43MDAwNCAyLjA1NzMyIDUuMzEyNSAyLjk4NDQ0QzMuOTI0OTYgMy45MTE1NyAyLjg0MzUxIDUuMjI5MzMgMi4yMDQ4OSA2Ljc3MTA4QzEuNTY2MjggOC4zMTI4MyAxLjM5OTE5IDEwLjAwOTMgMS43MjQ3NSAxMS42NDZDMi4wNTAzMSAxMy4yODI4IDIuODUzOTEgMTQuNzg2MiA0LjAzMzkxIDE1Ljk2NjJDNS4yMTM5MiAxNy4xNDYyIDYuNzE3MzQgMTcuOTQ5OCA4LjM1NDA1IDE4LjI3NTNDOS45OTA3NiAxOC42MDA5IDExLjY4NzMgMTguNDMzOCAxMy4yMjkgMTcuNzk1MkMxNC43NzA4IDE3LjE1NjYgMTYuMDg4NSAxNi4wNzUxIDE3LjAxNTYgMTQuNjg3NkMxNy45NDI4IDEzLjMwMDEgMTguNDM3NiAxMS42Njg3IDE4LjQzNzYgOS45OTk5N0MxOC40MzUxIDcuNzYyOTggMTcuNTQ1MyA1LjYxODMzIDE1Ljk2MzYgNC4wMzY1NEMxNC4zODE4IDIuNDU0NzUgMTIuMjM3MSAxLjU2NDk5IDEwLjAwMDEgMS41NjI0N1pNMTAuMDAwMSAxNi41NjI1QzguNzAyMTkgMTYuNTYyNSA3LjQzMzM5IDE2LjE3NzYgNi4zNTQyIDE1LjQ1NjVDNS4yNzUgMTQuNzM1NCA0LjQzMzg3IDEzLjcxMDUgMy45MzcxNyAxMi41MTEzQzMuNDQwNDcgMTEuMzEyMiAzLjMxMDUxIDkuOTkyNjkgMy41NjM3MiA4LjcxOTY5QzMuODE2OTQgNy40NDY2OSA0LjQ0MTk2IDYuMjc3MzYgNS4zNTk3NCA1LjM1OTU4QzYuMjc3NTIgNC40NDE4IDcuNDQ2ODQgMy44MTY3OCA4LjcxOTg0IDMuNTYzNTdDOS45OTI4NCAzLjMxMDM1IDExLjMxMjMgMy40NDAzMSAxMi41MTE1IDMuOTM3MDFDMTMuNzEwNiA0LjQzMzcxIDE0LjczNTUgNS4yNzQ4NCAxNS40NTY2IDYuMzU0MDRDMTYuMTc3NyA3LjQzMzI0IDE2LjU2MjYgOC43MDIwMyAxNi41NjI2IDkuOTk5OTdDMTYuNTYwNiAxMS43Mzk4IDE1Ljg2ODYgMTMuNDA3OSAxNC42MzgzIDE0LjYzODJDMTMuNDA4MSAxNS44Njg1IDExLjc0IDE2LjU2MDUgMTAuMDAwMSAxNi41NjI1Wk0xMi40MzA5IDUuNjk0MzJDMTIuODU1NCA2LjExOTQ5IDEzLjE2MTIgNi42NDg0NSAxMy4zMTc4IDcuMjI4NTVDMTMuNDc0NCA3LjgwODY1IDEzLjQ3NjMgOC40MTk2NSAxMy4zMjM0IDkuMDAwNzJDMTMuMTcwNCA5LjU4MTc4IDEyLjg2NzkgMTAuMTEyNiAxMi40NDYgMTAuNTQwNUMxMi4wMjQxIDEwLjk2ODMgMTEuNDk3NCAxMS4yNzgxIDEwLjkxODYgMTEuNDM5MUMxMC44NzE3IDExLjY2NjUgMTAuNzQyMSAxMS44Njg1IDEwLjU1NDkgMTIuMDA1OEMxMC4zNjc3IDEyLjE0MzIgMTAuMTM2MiAxMi4yMDYyIDkuOTA1MTggMTIuMTgyNkM5LjY3NDE4IDEyLjE1OTEgOS40NjAxNCAxMi4wNTA3IDkuMzA0NDkgMTEuODc4NEM5LjE0ODg0IDExLjcwNjEgOS4wNjI2NSAxMS40ODIyIDkuMDYyNjIgMTEuMjVWMTAuNjI1QzkuMDYyNjQgMTAuMzc2MyA5LjE2MTQxIDEwLjEzNzkgOS4zMzcyMyA5Ljk2MjA3QzkuNTEzMDQgOS43ODYyNiA5Ljc1MTQ5IDkuNjg3NDggMTAuMDAwMSA5LjY4NzQ3QzEwLjMwOTEgOS42ODc0NiAxMC42MTEyIDkuNTk1ODEgMTAuODY4MSA5LjQyNDEzQzExLjEyNTEgOS4yNTI0NCAxMS4zMjUzIDkuMDA4NDIgMTEuNDQzNiA4LjcyMjkyQzExLjU2MTggOC40Mzc0MiAxMS41OTI4IDguMTIzMjggMTEuNTMyNSA3LjgyMDJDMTEuNDcyMiA3LjUxNzEyIDExLjMyMzQgNy4yMzg3MiAxMS4xMDQ5IDcuMDIwMjJDMTAuODg2NCA2LjgwMTcxIDEwLjYwOCA2LjY1MjkgMTAuMzA0OSA2LjU5MjYxQzEwLjAwMTggNi41MzIzMiA5LjY4NzY3IDYuNTYzMjYgOS40MDIxNyA2LjY4MTUxQzkuMTE2NjggNi43OTk3NiA4Ljg3MjY2IDcuMDAwMDEgOC43MDA5NyA3LjI1Njk1QzguNTI5MjggNy41MTM4OCA4LjQzNzY0IDcuODE1OTUgOC40Mzc2MiA4LjEyNDk3QzguNDM3NjIgOC4zNzM2MSA4LjMzODg1IDguNjEyMDcgOC4xNjMwNCA4Ljc4Nzg4QzcuOTg3MjIgOC45NjM3IDcuNzQ4NzcgOS4wNjI0NyA3LjUwMDEyIDkuMDYyNDdDNy4yNTE0OCA5LjA2MjQ3IDcuMDEzMDMgOC45NjM3IDYuODM3MjEgOC43ODc4OEM2LjY2MTQgOC42MTIwNyA2LjU2MjYyIDguMzczNjEgNi41NjI2MiA4LjEyNDk3QzYuNTYyNjMgNy40NDUwOSA2Ljc2NDI0IDYuNzgwNDggNy4xNDE5NiA2LjIxNTE5QzcuNTE5NjggNS42NDk4OSA4LjA1NjU1IDUuMjA5MyA4LjY4NDY4IDQuOTQ5MTJDOS4zMTI4MSA0LjY4ODk1IDEwLjAwNCA0LjYyMDg4IDEwLjY3MDggNC43NTM1M0MxMS4zMzc2IDQuODg2MTcgMTEuOTUwMSA1LjIxMzU3IDEyLjQzMDkgNS42OTQzMlpNMTEuMjUwMiAxNC4zNzVWMTQuMzc1NEMxMS4yNTAyIDE0LjcwNjkgMTEuMTE4NCAxNS4wMjQ5IDEwLjg4MzkgMTUuMjU5M0MxMC42NDk1IDE1LjQ5MzcgMTAuMzMxNSAxNS42MjU0IDkuOTk5OTIgMTUuNjI1NEM5LjY2ODM2IDE1LjYyNTMgOS4zNTAzOSAxNS40OTM2IDkuMTE1OTYgMTUuMjU5MUM4Ljg4MTUyIDE1LjAyNDcgOC43NDk4MiAxNC43MDY3IDguNzQ5ODIgMTQuMzc1MkM4Ljc0OTgyIDE0LjA0MzYgOC44ODE1MiAxMy43MjU2IDkuMTE1OTYgMTMuNDkxMkM5LjM1MDM5IDEzLjI1NjcgOS42NjgzNiAxMy4xMjUgOS45OTk5MiAxMy4xMjVDMTAuMzMxNSAxMy4xMjQ5IDEwLjY0OTUgMTMuMjU2NiAxMC44ODM5IDEzLjQ5MUMxMS4xMTg0IDEzLjcyNTUgMTEuMjUwMiAxNC4wNDM0IDExLjI1MDIgMTQuMzc1WiIgZmlsbD0iI0M1QzVDNSIvPgo8L3N2Zz4K);display:block}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._additional_vx3rb_174 ._popupHint_vx3rb_179 ._trigger_vx3rb_184:hover+._popup_vx3rb_179{opacity:1}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._additional_vx3rb_174 ._popupHint_vx3rb_179 ._popup_vx3rb_179{opacity:0;transition:opacity .15s ease-in-out;position:absolute;z-index:10;background:#FFFFFF;border:2px solid #589195;color:#589195;border-radius:12px;padding:7px 12px;right:0;top:30px;width:146px;font-family:Roboto;font-style:normal;font-weight:500;font-size:13px;pointer-events:none}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._checkbox_vx3rb_212{padding-top:0;padding-bottom:0}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._receiptEmail_vx3rb_216{height:0px;transition:height .25s ease-out,padding-top .25s ease-out;overflow-y:hidden;padding-top:0}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 form ._receiptEmail_vx3rb_216._show_vx3rb_222{height:65px;padding-top:5px}._background_vx3rb_2 ._container_vx3rb_26 ._paymentForm_vx3rb_37 ._paymentSystem_vx3rb_226{margin-top:40px}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229{font-family:Roboto;font-style:normal;font-weight:500;font-size:15px;height:100%;display:flex;flex-direction:column}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229 ._info_vx3rb_238{padding:26px 38px 0;display:flex;flex-direction:column}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229 ._info_vx3rb_238 ._price_vx3rb_54{font-family:Roboto;font-style:normal;font-weight:700;font-size:20px}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229 ._result_vx3rb_229{display:flex;justify-content:center;align-items:center;margin:40px 0;flex:1}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229 ._result_vx3rb_229 ._resultMessage_vx3rb_256{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229 ._result_vx3rb_229 ._resultMessage_vx3rb_256 span{font-family:Roboto;font-style:normal;font-weight:700;font-size:23px;text-align:center;color:#303030}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229 ._result_vx3rb_229 ._resultMessage_vx3rb_256 ._hint_vx3rb_271{font-weight:500;font-size:15px;color:#9b9b9b;width:292px}._background_vx3rb_2 ._container_vx3rb_26 ._resultScreen_vx3rb_229 ._action_vx3rb_277{border-top:2px solid #EFEFEF;padding:28px 38px 32px}._lockedBody_vx3rb_282{overflow:hidden}@keyframes _spinner_1nikn_10{0%{transform:rotate(0)}to{transform:rotate(360deg)}}._spinner_1nikn_10 div{box-sizing:border-box!important}._spinner_1nikn_10>div{position:absolute;width:73px;height:73px;top:13.5px;left:13.5px;border-radius:50%;border:9px solid #000;border-color:#589195 transparent #589195 transparent;animation:_spinner_1nikn_10 1.1111111111s linear infinite}._spinner_1nikn_10>div:nth-child(2){border-color:transparent}._spinner_1nikn_10>div:nth-child(2) div{position:absolute;width:100%;height:100%;transform:rotate(45deg)}._spinner_1nikn_10>div:nth-child(2) div:before,._spinner_1nikn_10>div:nth-child(2) div:after{content:"";display:block;position:absolute;width:9px;height:9px;top:-9px;left:23px;background:#589195;border-radius:50%;box-shadow:0 64px #589195}._spinner_1nikn_10>div:nth-child(2) div:after{left:-9px;top:23px;box-shadow:64px 0 #589195}._spinnerContainer_1nikn_56{width:52px;height:52px;display:inline-block;overflow:hidden;background:#f7f8fc}._spinner_1nikn_10{width:100%;height:100%;position:relative;transform:translateZ(0) scale(.52);backface-visibility:hidden;transform-origin:0 0}._spinner_1nikn_10 div{box-sizing:content-box}._button_h62ll_1{box-shadow:6px 6px 26px 7px #cbcbcb40!important;border-radius:16px!important;font-family:inherit!important;font-style:normal!important;font-weight:700!important;font-size:16px!important;text-transform:none!important;padding:13px 6px!important}._fieldContainer_h62ll_12{position:relative}._fieldContainer_h62ll_12 ._field_h62ll_12,._fieldContainer_h62ll_12 ._field_h62ll_12 div{border-radius:16px}._fieldContainer_h62ll_12 ._field_h62ll_12 fieldset{border:2px solid #DFE7EF;border-radius:16px}._fieldContainer_h62ll_12 ._field_h62ll_12,._fieldContainer_h62ll_12 ._field_h62ll_12 *,._fieldContainer_h62ll_12 ._field_h62ll_12 input::placeholder{font-family:inherit!important;font-style:normal!important;font-weight:500!important}._fieldContainer_h62ll_12 ._field_h62ll_12 input{background:#FFFFFF;border-radius:16px}._fieldContainer_h62ll_12 ._adornment_h62ll_31{position:absolute;right:10px;top:28px;transform:translateY(-50%);background-color:#fff;padding:10px 20px 10px 10px;display:flex;justify-content:center;align-items:center}')),document.head.appendChild(_)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as React from "react";
import React__default, { createContext, useImperativeHandle, createElement, Children, forwardRef, useContext, useRef, useEffect, useReducer, useCallback, useMemo, useLayoutEffect, Component, Fragment, isValidElement, cloneElement } from "react";
import * as ReactDOM from "react-dom";
import ReactDOM__default, { flushSync } from "react-dom";
const background = "_background_vx3rb_2";
const active = "_active_vx3rb_21";
const container = "_container_vx3rb_26";
const paymentFormHeading = "_paymentFormHeading_vx3rb_37";
const name = "_name_vx3rb_44";
const priceLabelHeader = "_priceLabelHeader_vx3rb_54";
const price = "_price_vx3rb_54";
const header = "_header_vx3rb_85";
const left = "_left_vx3rb_98";
const icon = "_icon_vx3rb_103";
const label = "_label_vx3rb_112";
const close = "_close_vx3rb_118";
const loadingScreen = "_loadingScreen_vx3rb_128";
const loading = "_loading_vx3rb_128";
const visible = "_visible_vx3rb_145";
const formScreen = "_formScreen_vx3rb_149";
const paymentLoading = "_paymentLoading_vx3rb_152";
const paymentSuccess = "_paymentSuccess_vx3rb_155";
const paymentFailed = "_paymentFailed_vx3rb_158";
const paymentForm = "_paymentForm_vx3rb_37";
const additional = "_additional_vx3rb_174";
const popupHint = "_popupHint_vx3rb_179";
const trigger = "_trigger_vx3rb_184";
const popup = "_popup_vx3rb_179";
const checkbox = "_checkbox_vx3rb_212";
const receiptEmail = "_receiptEmail_vx3rb_216";
const show = "_show_vx3rb_222";
const paymentSystem = "_paymentSystem_vx3rb_226";
const resultScreen = "_resultScreen_vx3rb_229";
const info = "_info_vx3rb_238";
const result = "_result_vx3rb_229";
const resultMessage = "_resultMessage_vx3rb_256";
const hint = "_hint_vx3rb_271";
const action = "_action_vx3rb_277";
const lockedBody = "_lockedBody_vx3rb_282";
var styles$5 = {
  background,
  active,
  container,
  paymentFormHeading,
  name,
  priceLabelHeader,
  price,
  header,
  left,
  icon,
  label,
  close,
  loadingScreen,
  loading,
  visible,
  formScreen,
  paymentLoading,
  paymentSuccess,
  paymentFailed,
  paymentForm,
  additional,
  popupHint,
  trigger,
  popup,
  checkbox,
  receiptEmail,
  show,
  paymentSystem,
  resultScreen,
  info,
  result,
  resultMessage,
  hint,
  action,
  lockedBody
};
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module2.exports) {
      classNames.default = classNames;
      module2.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);
var cx = classnames.exports;
const SvgShoppingCart = (props) => /* @__PURE__ */ React.createElement("svg", {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React.createElement("path", {
  d: "M5.75 13.75C5.75 13.9972 5.67669 14.2389 5.53934 14.4445C5.40199 14.65 5.20676 14.8102 4.97835 14.9049C4.74995 14.9995 4.49861 15.0242 4.25614 14.976C4.01366 14.9278 3.79093 14.8087 3.61612 14.6339C3.4413 14.4591 3.32225 14.2363 3.27402 13.9939C3.22579 13.7514 3.25054 13.5001 3.34515 13.2716C3.43976 13.0432 3.59998 12.848 3.80554 12.7107C4.0111 12.5733 4.25277 12.5 4.5 12.5C4.83141 12.5004 5.14913 12.6322 5.38347 12.8665C5.61781 13.1009 5.74963 13.4186 5.75 13.75ZM12 12.5C11.7528 12.5 11.5111 12.5733 11.3055 12.7107C11.1 12.848 10.9398 13.0432 10.8451 13.2716C10.7505 13.5001 10.7258 13.7514 10.774 13.9939C10.8222 14.2363 10.9413 14.4591 11.1161 14.6339C11.2909 14.8087 11.5137 14.9278 11.7561 14.976C11.9986 15.0242 12.2499 14.9995 12.4784 14.9049C12.7068 14.8102 12.902 14.65 13.0393 14.4445C13.1767 14.2389 13.25 13.9972 13.25 13.75C13.2496 13.4186 13.1178 13.1009 12.8835 12.8665C12.6491 12.6322 12.3314 12.5004 12 12.5ZM14.6308 4.72351L13.5859 10.4735C13.5337 10.7616 13.382 11.0222 13.1572 11.2098C12.9324 11.3974 12.6489 11.5001 12.3561 11.5H4.14929C3.85664 11.5001 3.57324 11.3975 3.34851 11.21C3.12377 11.0226 2.97197 10.7622 2.91956 10.4742L1.77203 4.18113C1.76453 4.15084 1.75892 4.1201 1.75525 4.08911L1.41986 2.25H0.75C0.551088 2.25 0.360322 2.17098 0.21967 2.03033C0.0790176 1.88968 0 1.69891 0 1.5C0 1.30109 0.0790176 1.11032 0.21967 0.96967C0.360322 0.829018 0.551088 0.75 0.75 0.75H1.62836C1.92102 0.749904 2.20442 0.852531 2.42917 1.03999C2.65391 1.22744 2.80573 1.48783 2.85815 1.77576L3.12695 3.25H13.4009C13.584 3.25001 13.7649 3.29023 13.9307 3.36783C14.0965 3.44542 14.2433 3.55849 14.3606 3.69905C14.4779 3.8396 14.5629 4.00421 14.6096 4.18123C14.6563 4.35826 14.6635 4.54338 14.6308 4.72351H14.6308ZM13.1014 4.75H3.40051L4.35785 10H12.1474L13.1014 4.75Z",
  fill: "white"
}));
const SvgClose = (props) => /* @__PURE__ */ React.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React.createElement("path", {
  d: "M13.4099 12L17.7099 7.71C17.8982 7.5217 18.004 7.2663 18.004 7C18.004 6.7337 17.8982 6.47831 17.7099 6.29C17.5216 6.1017 17.2662 5.99591 16.9999 5.99591C16.7336 5.99591 16.4782 6.1017 16.2899 6.29L11.9999 10.59L7.70994 6.29C7.52164 6.1017 7.26624 5.99591 6.99994 5.99591C6.73364 5.99591 6.47824 6.1017 6.28994 6.29C6.10164 6.47831 5.99585 6.7337 5.99585 7C5.99585 7.2663 6.10164 7.5217 6.28994 7.71L10.5899 12L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L11.9999 13.41L16.2899 17.71C16.3829 17.8037 16.4935 17.8781 16.6154 17.9289C16.7372 17.9797 16.8679 18.0058 16.9999 18.0058C17.132 18.0058 17.2627 17.9797 17.3845 17.9289C17.5064 17.8781 17.617 17.8037 17.7099 17.71C17.8037 17.617 17.8781 17.5064 17.9288 17.3846C17.9796 17.2627 18.0057 17.132 18.0057 17C18.0057 16.868 17.9796 16.7373 17.9288 16.6154C17.8781 16.4936 17.8037 16.383 17.7099 16.29L13.4099 12Z",
  fill: "#D0D0D0"
}));
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = React__default, k$2 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$2(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a)
    m$2.call(a, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a = c2.defaultProps, a)
      void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$2, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$2;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
function Header(props) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsxs("div", {
    className: styles$5.header,
    children: [(_d = (_a = props.components) == null ? void 0 : _a.header) != null ? _d : /* @__PURE__ */ jsxs("div", {
      className: styles$5.left,
      children: [/* @__PURE__ */ jsx("div", {
        className: styles$5.icon,
        style: {
          backgroundColor: props.color
        },
        children: /* @__PURE__ */ jsx(SvgShoppingCart, {})
      }), /* @__PURE__ */ jsx("span", {
        className: styles$5.label,
        children: (_c = (_b = props.labels) == null ? void 0 : _b.header) != null ? _c : "\u041E\u043F\u043B\u0430\u0442\u0430"
      })]
    }), /* @__PURE__ */ jsx("button", {
      className: styles$5.close,
      onClick: props.onClose,
      children: /* @__PURE__ */ jsx(SvgClose, {})
    })]
  });
}
const spinner = "_spinner_1nikn_10";
const spinnerContainer = "_spinnerContainer_1nikn_56";
var styles$4 = {
  spinner,
  spinnerContainer
};
function Spinner() {
  return /* @__PURE__ */ jsx("div", {
    className: styles$4.spinnerContainer,
    children: /* @__PURE__ */ jsxs("div", {
      className: styles$4.spinner,
      children: [/* @__PURE__ */ jsx("div", {}), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("div", {})
      })]
    })
  });
}
const SvgPaymentSystems = (props) => /* @__PURE__ */ React.createElement("svg", {
  width: 320,
  height: 18,
  viewBox: "0 0 320 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React.createElement("g", {
  clipPath: "url(#clip0_1_39)"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M284.034 6.30646L282.004 0.411661H282.871L283.837 3.31495C284.104 4.11085 284.336 4.82834 284.501 5.51839H284.52C284.696 4.83618 284.955 4.09125 285.23 3.32279L286.283 0.409698H287.137L284.913 6.30449L284.034 6.30646Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M287.568 4.32847C287.586 5.36942 288.288 5.79874 289.101 5.79874C289.527 5.81168 289.95 5.73676 290.342 5.57918L290.481 6.13004C290.01 6.31572 289.503 6.40524 288.993 6.39273C287.617 6.39273 286.796 5.53409 286.796 4.2579C286.796 2.9817 287.591 1.97604 288.89 1.97604C290.349 1.97604 290.738 3.19342 290.738 3.96972C290.736 4.08976 290.726 4.20958 290.709 4.32847H287.568ZM289.949 3.77761C289.949 3.28752 289.742 2.5269 288.824 2.5269C287.996 2.5269 287.642 3.24439 287.582 3.77761H289.949Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M291.37 3.39351C291.37 2.89558 291.37 2.46626 291.333 2.07223H292.045L292.072 2.90342H292.103C292.179 2.64417 292.341 2.41467 292.564 2.24801C292.787 2.08135 293.06 1.98617 293.344 1.97618C293.422 1.97503 293.499 1.9836 293.574 2.00165V2.72699C293.483 2.70765 293.39 2.69844 293.297 2.69954C292.725 2.69954 292.32 3.11122 292.208 3.67972C292.185 3.79807 292.173 3.9181 292.171 4.03847V6.29484H291.368L291.37 3.39351Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M294.965 0.882156C294.965 1.00876 294.911 1.13017 294.817 1.21969C294.723 1.30921 294.594 1.3595 294.461 1.3595C294.327 1.3595 294.199 1.30921 294.105 1.21969C294.01 1.13017 293.957 1.00876 293.957 0.882156C293.955 0.818474 293.967 0.755128 293.992 0.695991C294.017 0.636855 294.055 0.583173 294.102 0.53822C294.15 0.493267 294.207 0.457986 294.269 0.434543C294.332 0.411099 294.399 0.399985 294.466 0.401872C294.533 0.39961 294.599 0.410545 294.661 0.433986C294.724 0.457427 294.78 0.492858 294.827 0.538028C294.874 0.583199 294.91 0.637124 294.934 0.696368C294.958 0.755612 294.968 0.81888 294.965 0.882156ZM294.058 2.07209H294.871V6.3045H294.058V2.07209Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M295.933 6.3063V2.65807H295.312V2.06997H295.933V1.87393C295.933 1.28582 296.072 0.736923 296.45 0.395821C296.746 0.136248 297.136 -0.0043499 297.539 0.00374944C297.776 0.00251221 298.011 0.0437554 298.232 0.125297L298.122 0.713404C297.959 0.646077 297.783 0.613289 297.605 0.617342C296.914 0.617342 296.738 1.19565 296.738 1.84257V2.06997H297.816V2.65807H296.738V6.3063H295.933Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M299.52 0.881942C299.52 1.00828 299.467 1.12945 299.373 1.21878C299.279 1.30812 299.151 1.35831 299.018 1.35831C298.884 1.35831 298.756 1.30812 298.662 1.21878C298.568 1.12945 298.515 1.00828 298.515 0.881942C298.513 0.81826 298.525 0.754914 298.55 0.695778C298.575 0.636641 298.613 0.582959 298.66 0.538006C298.708 0.493053 298.765 0.457773 298.827 0.434329C298.89 0.410885 298.957 0.399772 299.024 0.401658C299.091 0.399397 299.157 0.410331 299.219 0.433773C299.281 0.457214 299.338 0.492644 299.385 0.537815C299.432 0.582986 299.468 0.636911 299.492 0.696155C299.515 0.755399 299.526 0.818667 299.522 0.881942M298.618 2.07188H299.429V6.30429H298.618V2.07188Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M300.861 4.32847C300.88 5.36942 301.581 5.79874 302.395 5.79874C302.82 5.81174 303.244 5.73682 303.636 5.57917L303.775 6.13003C303.304 6.31561 302.797 6.40512 302.287 6.39273C300.911 6.39273 300.09 5.53409 300.09 4.2579C300.09 2.9817 300.884 1.97604 302.183 1.97604C303.644 1.97604 304.031 3.19342 304.031 3.96972C304.03 4.08978 304.02 4.20963 304.002 4.32847H300.861ZM303.243 3.77761C303.243 3.28752 303.036 2.5269 302.117 2.5269C301.29 2.5269 300.936 3.24439 300.876 3.77761H303.243Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M308.526 0.0961914V5.21273C308.526 5.58911 308.526 6.01647 308.561 6.30661H307.828L307.791 5.57147H307.772C307.627 5.83151 307.406 6.04737 307.137 6.19437C306.868 6.34137 306.56 6.41355 306.25 6.40266C305.17 6.40266 304.34 5.53619 304.34 4.24627C304.34 2.83873 305.254 1.97225 306.343 1.97225C306.608 1.95699 306.872 2.00888 307.109 2.12258C307.346 2.23629 307.546 2.4077 307.69 2.61918H307.708V0.0961914H308.526ZM307.712 3.79539C307.714 3.6859 307.701 3.57665 307.675 3.46997C307.617 3.21686 307.469 2.99027 307.256 2.82797C307.043 2.66567 306.777 2.57745 306.504 2.578C305.662 2.578 305.165 3.27785 305.165 4.2149C305.165 5.07158 305.608 5.78319 306.485 5.78319C306.765 5.78209 307.035 5.6902 307.252 5.52287C307.468 5.35554 307.618 5.12289 307.675 4.86378C307.702 4.75527 307.715 4.64396 307.712 4.53248V3.79539Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M311.531 6.30649C311.55 6.01635 311.569 5.58899 311.569 5.2126V0.0960693H312.38V2.75432H312.398C312.551 2.50304 312.774 2.29673 313.043 2.15831C313.312 2.01989 313.616 1.95477 313.921 1.97018C315.03 1.97018 315.812 2.8445 315.806 4.12657C315.806 5.63997 314.798 6.39274 313.801 6.39274C313.498 6.40913 313.195 6.34289 312.93 6.20186C312.665 6.06083 312.448 5.8509 312.305 5.59684H312.278L312.239 6.29668L311.531 6.30649ZM312.38 4.60882C312.382 4.70322 312.394 4.79714 312.417 4.88915C312.484 5.14705 312.641 5.37612 312.862 5.53963C313.083 5.70314 313.355 5.79163 313.636 5.79091C314.486 5.79091 314.993 5.13419 314.993 4.16381C314.993 3.31694 314.531 2.59552 313.665 2.59552C313.376 2.59989 313.098 2.69516 312.873 2.86628C312.648 3.03739 312.49 3.27459 312.423 3.54042C312.396 3.64311 312.381 3.74827 312.378 3.85408L312.38 4.60882Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M316.685 2.07227L317.664 4.57564C317.765 4.85597 317.871 5.18727 317.949 5.44212H317.966C318.051 5.18923 318.142 4.86381 318.253 4.558L319.139 2.07423H319.997L318.779 5.09318C318.197 6.5458 317.8 7.28877 317.246 7.74358C316.964 7.98865 316.621 8.16082 316.248 8.24347L316.041 7.59459C316.302 7.51346 316.544 7.38568 316.753 7.2182C317.048 6.98662 317.282 6.69335 317.436 6.36153C317.468 6.30477 317.49 6.24306 317.5 6.17921C317.492 6.11151 317.474 6.04537 317.444 5.98317L315.789 2.08207L316.685 2.07227Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M295.476 9.19605L293.014 15.0967L292.016 10.0802C291.976 9.83359 291.844 9.6088 291.644 9.44658C291.444 9.28437 291.189 9.19548 290.926 9.19605H286.9L286.846 9.44698C287.652 9.59904 288.436 9.84394 289.18 10.1762C289.527 10.3585 289.626 10.5134 289.74 10.9408L291.629 17.8589H294.131L297.965 9.19605H295.476Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M298.979 9.1958L297.021 17.8645H299.391L301.342 9.1958H298.979Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M304.449 11.5974C304.449 11.2876 304.769 10.9563 305.452 10.8681C306.253 10.7991 307.059 10.9345 307.786 11.2602L308.2 9.42332C307.492 9.16873 306.743 9.03595 305.986 9.03125C303.646 9.03125 302.001 10.2075 301.985 11.9012C301.972 13.148 303.162 13.8439 304.054 14.2536C304.945 14.6634 305.295 14.9496 305.28 15.3318C305.28 15.9199 304.544 16.167 303.865 16.1768C303.018 16.1947 302.181 16.0071 301.432 15.6318L301.006 17.5314C301.845 17.84 302.738 17.9962 303.638 17.992C306.121 17.992 307.747 16.8276 307.757 15.026C307.757 12.7363 304.418 12.6109 304.447 11.5895",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M311.302 14.7948L312.56 11.5387L313.267 14.7948H311.302ZM312.2 9.19605C311.984 9.19437 311.772 9.25422 311.593 9.36782C311.413 9.48142 311.273 9.64354 311.192 9.83316L307.642 17.8706H310.124L310.619 16.5748H313.648L313.934 17.8706H316.129L314.221 9.19605H312.2Z",
  fill: "#D3D3D3"
})), /* @__PURE__ */ React.createElement("g", {
  clipPath: "url(#clip1_1_39)"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M89.1048 12.252C88.7963 12.0565 88.4742 11.9045 88.1383 11.7961C87.8025 11.6881 87.4512 11.6342 87.0845 11.6342C86.8446 11.6342 86.6252 11.6592 86.4265 11.709C86.2277 11.7584 86.0572 11.8305 85.9149 11.9254C85.7729 12.0199 85.6622 12.1329 85.5834 12.2649C85.5046 12.3971 85.4651 12.546 85.4651 12.7106C85.4651 12.8615 85.4995 12.9902 85.5681 13.0967C85.6366 13.2032 85.7352 13.2933 85.8637 13.3672C85.9921 13.4411 86.149 13.5017 86.334 13.5499C86.5192 13.5981 86.7282 13.6395 86.9611 13.6737L87.4598 13.7405C87.751 13.7817 88.0356 13.8454 88.3131 13.9314C88.5907 14.017 88.8382 14.137 89.0559 14.2917C89.2735 14.4459 89.4484 14.6404 89.5803 14.8736C89.7124 15.1069 89.7783 15.3904 89.7783 15.7233C89.7783 16.0908 89.7012 16.4153 89.5469 16.6968C89.3925 16.9783 89.1835 17.2152 88.9198 17.4072C88.6556 17.5997 88.3498 17.7458 88.0022 17.8453C87.6541 17.9448 87.2849 17.9945 86.8942 17.9945C86.6507 17.9945 86.3982 17.9741 86.136 17.9324C85.8739 17.8916 85.615 17.8307 85.3597 17.7501C85.1044 17.6691 84.8601 17.5687 84.627 17.4488C84.3939 17.3285 84.1849 17.1878 83.9999 17.0261L84.6322 16.0994C84.7558 16.2123 84.9038 16.3176 85.077 16.4137C85.2499 16.5098 85.4357 16.5937 85.6346 16.6659C85.8335 16.7376 86.0398 16.794 86.2541 16.8333C86.4682 16.8727 86.6801 16.8927 86.8889 16.8927C87.1255 16.8927 87.3456 16.8688 87.5496 16.8205C87.7536 16.7724 87.9309 16.7017 88.0816 16.6092C88.2323 16.5166 88.3515 16.404 88.4389 16.2718C88.5265 16.1399 88.5701 15.9914 88.5701 15.8267C88.5701 15.5448 88.4319 15.3303 88.1563 15.1827C87.8803 15.035 87.4785 14.9251 86.9508 14.853L86.3904 14.7759C86.123 14.738 85.8617 14.6763 85.6064 14.5903C85.3512 14.5053 85.1233 14.384 84.9226 14.2275C84.7221 14.0713 84.561 13.8758 84.4395 13.6404C84.3176 13.4056 84.2568 13.1198 84.2568 12.7831C84.2568 12.4225 84.3315 12.1024 84.4806 11.8223C84.6295 11.5427 84.8327 11.3074 85.0897 11.1168C85.3467 10.926 85.6475 10.781 85.9919 10.6818C86.3363 10.5819 86.7038 10.5322 87.0947 10.5322C87.6191 10.5322 88.0928 10.6016 88.5159 10.7408C88.9392 10.8797 89.3326 11.0695 89.696 11.3097L89.1048 12.252ZM93.0273 12.8033C93.3698 12.8033 93.6843 12.8662 93.9705 12.9912C94.2565 13.1169 94.5015 13.2934 94.7056 13.5219C94.9095 13.7502 95.0688 14.0232 95.1838 14.3406C95.2983 14.6584 95.3558 15.0094 95.3558 15.394C95.3558 15.4625 95.3541 15.5313 95.3508 15.5999C95.3471 15.6685 95.3422 15.7338 95.3352 15.7955H91.6956C91.7298 16.0188 91.7934 16.2093 91.8857 16.3671C91.9781 16.5252 92.0897 16.6548 92.2199 16.7562C92.3502 16.8574 92.4957 16.9322 92.6571 16.9799C92.818 17.0281 92.9858 17.052 93.1607 17.052C93.4077 17.052 93.655 17.0069 93.9035 16.916C94.1522 16.8249 94.3791 16.6969 94.5848 16.5322L95.1193 17.2994C94.8178 17.557 94.4984 17.7375 94.1607 17.84C93.8231 17.9434 93.4676 17.9947 93.0939 17.9947C92.7238 17.9947 92.3843 17.9326 92.0761 17.8096C91.7677 17.6859 91.5021 17.5107 91.2793 17.2843C91.0564 17.0576 90.8833 16.7845 90.7601 16.4651C90.6367 16.1458 90.5749 15.7906 90.5749 15.3991C90.5749 15.0145 90.6348 14.6625 90.7549 14.3435C90.8748 14.0241 91.0428 13.7503 91.2585 13.522C91.4746 13.2935 91.7323 13.117 92.0324 12.9913C92.3322 12.8662 92.6639 12.8033 93.0273 12.8033ZM93.0065 13.7612C92.8145 13.7612 92.6442 13.7901 92.495 13.8484C92.3461 13.9075 92.2173 13.9903 92.1095 14.0987C92.0017 14.2068 91.9133 14.3355 91.8448 14.4848C91.7761 14.634 91.7282 14.7979 91.7008 14.9766H94.2557C94.1974 14.592 94.0604 14.2931 93.8444 14.0806C93.6286 13.8678 93.3493 13.7612 93.0065 13.7612ZM98.7179 12.8033C99.088 12.8033 99.4324 12.8692 99.751 13.0015C100.07 13.1338 100.339 13.3304 100.558 13.5913L99.8693 14.3275C99.6947 14.1628 99.513 14.0366 99.3245 13.9491C99.136 13.8615 98.9236 13.818 98.6871 13.818C98.4814 13.818 98.2893 13.8566 98.1112 13.9337C97.933 14.0108 97.7787 14.1192 97.6486 14.258C97.5183 14.3969 97.4163 14.5639 97.3426 14.7576C97.2691 14.9519 97.2321 15.1656 97.2321 15.3989C97.2321 15.6322 97.2691 15.8464 97.3426 16.0402C97.4163 16.2343 97.5183 16.4008 97.6486 16.5398C97.7787 16.6785 97.9329 16.7865 98.1112 16.8641C98.2893 16.9412 98.4814 16.9798 98.6871 16.9798C98.9235 16.9798 99.1445 16.9309 99.3501 16.8332C99.5558 16.7356 99.7375 16.6125 99.895 16.4648L100.558 17.2065C100.332 17.4673 100.061 17.664 99.7461 17.7963C99.4307 17.9286 99.0881 17.9945 98.718 17.9945C98.3272 17.9945 97.9725 17.9286 97.6537 17.7963C97.3352 17.664 97.0626 17.482 96.8363 17.2506C96.6102 17.0187 96.4354 16.745 96.312 16.4287C96.1886 16.1132 96.1268 15.7699 96.1268 15.3989C96.1268 15.0283 96.1886 14.6846 96.312 14.3687C96.4354 14.0528 96.6102 13.779 96.8363 13.5476C97.0625 13.3158 97.3351 13.1338 97.6537 13.0015C97.9724 12.8692 98.3271 12.8033 98.7179 12.8033ZM106.069 15.7749C106.069 16.166 106.004 16.5027 105.874 16.7842C105.743 17.0657 105.572 17.2961 105.36 17.4745C105.147 17.6532 104.904 17.7843 104.63 17.8683C104.355 17.9525 104.074 17.9945 103.786 17.9945C103.499 17.9945 103.218 17.9525 102.943 17.8683C102.669 17.7843 102.425 17.6532 102.211 17.4745C101.996 17.2961 101.825 17.0657 101.697 16.7842C101.568 16.5027 101.504 16.1659 101.504 15.7749V12.9321H102.583V15.677C102.583 15.9137 102.614 16.116 102.676 16.2821C102.738 16.4487 102.823 16.5834 102.93 16.6866C103.038 16.7893 103.166 16.8641 103.313 16.9104C103.461 16.9567 103.618 16.9798 103.786 16.9798C103.954 16.9798 104.112 16.9567 104.259 16.9104C104.407 16.8641 104.534 16.7893 104.642 16.6866C104.75 16.5834 104.835 16.4486 104.897 16.2821C104.958 16.116 104.989 15.9137 104.989 15.677V12.9321H106.069V15.7749H106.069ZM109.991 12.8033C110.156 12.8033 110.304 12.8144 110.436 12.8367C110.568 12.8588 110.696 12.8942 110.819 12.9421L110.562 14.0085C110.449 13.9498 110.317 13.9056 110.166 13.8743C110.015 13.8434 109.875 13.828 109.744 13.828C109.573 13.828 109.416 13.8573 109.272 13.9156C109.128 13.9741 109.004 14.0598 108.902 14.1732C108.799 14.2865 108.718 14.4255 108.66 14.59C108.601 14.7552 108.572 14.9422 108.572 15.1517V17.8657H107.498V12.9321H108.562V13.4882C108.726 13.251 108.93 13.0778 109.174 12.968C109.417 12.858 109.69 12.8033 109.991 12.8033ZM113.6 12.8033C113.943 12.8033 114.258 12.8662 114.544 12.9912C114.83 13.1169 115.075 13.2934 115.279 13.5219C115.483 13.7502 115.642 14.0232 115.757 14.3406C115.871 14.6584 115.929 15.0094 115.929 15.394C115.929 15.4625 115.927 15.5313 115.924 15.5999C115.92 15.6685 115.915 15.7338 115.908 15.7955H112.269C112.303 16.0188 112.366 16.2093 112.459 16.3671C112.551 16.5252 112.663 16.6548 112.793 16.7562C112.923 16.8574 113.069 16.9322 113.23 16.9799C113.391 17.0281 113.559 17.052 113.733 17.052C113.981 17.052 114.228 17.0069 114.476 16.916C114.725 16.8249 114.952 16.6969 115.158 16.5322L115.692 17.2994C115.391 17.557 115.071 17.7375 114.734 17.84C114.396 17.9434 114.041 17.9947 113.667 17.9947C113.297 17.9947 112.957 17.9326 112.649 17.8096C112.341 17.6859 112.075 17.5107 111.852 17.2843C111.629 17.0576 111.456 16.7845 111.333 16.4651C111.209 16.1458 111.148 15.7906 111.148 15.3991C111.148 15.0145 111.208 14.6625 111.328 14.3435C111.448 14.0241 111.616 13.7503 111.832 13.522C112.048 13.2935 112.305 13.117 112.605 12.9913C112.905 12.8662 113.237 12.8033 113.6 12.8033ZM113.58 13.7612C113.388 13.7612 113.217 13.7901 113.068 13.8484C112.919 13.9075 112.79 13.9903 112.682 14.0987C112.575 14.2068 112.486 14.3355 112.418 14.4848C112.349 14.634 112.301 14.7979 112.274 14.9766H114.829C114.771 14.592 114.634 14.2931 114.418 14.0806C114.202 13.8678 113.923 13.7612 113.58 13.7612ZM120.566 10.5215C120.885 10.5215 121.193 10.5558 121.491 10.6245C121.79 10.6935 122.067 10.7926 122.324 10.9234C122.581 11.0541 122.815 11.2126 123.023 11.4001C123.232 11.5872 123.408 11.797 123.548 12.0307L122.576 12.6794C122.356 12.3566 122.075 12.1028 121.731 11.9174C121.386 11.7322 120.998 11.6396 120.566 11.6396C120.199 11.6396 119.86 11.7029 119.548 11.8297C119.236 11.957 118.967 12.1356 118.741 12.3655C118.515 12.5954 118.337 12.872 118.209 13.1948C118.08 13.5176 118.016 13.8728 118.016 14.2608C118.016 14.6489 118.08 15.0044 118.209 15.327C118.337 15.6498 118.515 15.9259 118.741 16.1562C118.967 16.3864 119.236 16.5646 119.548 16.6915C119.86 16.8188 120.199 16.8821 120.566 16.8821C120.994 16.8821 121.379 16.7915 121.72 16.6094C122.061 16.4274 122.345 16.1736 122.571 15.8473L123.517 16.5426C123.363 16.769 123.182 16.9715 122.975 17.1501C122.768 17.3287 122.538 17.4814 122.286 17.6086C122.033 17.7355 121.763 17.8327 121.473 17.8995C121.184 17.9666 120.881 18.0002 120.566 18.0002C120.014 18.0002 119.507 17.9065 119.045 17.7191C118.582 17.5323 118.184 17.2719 117.852 16.9391C117.519 16.6058 117.261 16.2113 117.075 15.7546C116.891 15.2975 116.798 14.8002 116.798 14.2609C116.798 13.7216 116.891 13.2242 117.075 12.7672C117.261 12.3105 117.519 11.9157 117.852 11.5828C118.184 11.2499 118.582 10.9899 119.045 10.8029C119.507 10.6152 120.014 10.5215 120.566 10.5215ZM126.915 12.8033C127.295 12.8033 127.647 12.8692 127.971 13.0015C128.295 13.1338 128.575 13.3158 128.811 13.5476C129.048 13.779 129.233 14.0528 129.367 14.3687C129.501 14.6846 129.567 15.0283 129.567 15.3989C129.567 15.7699 129.501 16.1132 129.367 16.4287C129.233 16.745 129.048 17.0187 128.811 17.2506C128.575 17.482 128.295 17.664 127.971 17.7963C127.647 17.9286 127.295 17.9945 126.915 17.9945C126.534 17.9945 126.182 17.9286 125.858 17.7963C125.534 17.664 125.255 17.482 125.021 17.2506C124.785 17.0187 124.602 16.745 124.468 16.4287C124.334 16.1132 124.268 15.7699 124.268 15.3989C124.268 15.0283 124.334 14.6846 124.468 14.3687C124.602 14.0528 124.785 13.779 125.021 13.5476C125.255 13.3158 125.534 13.1338 125.858 13.0015C126.182 12.8692 126.534 12.8033 126.915 12.8033ZM126.915 13.818C126.695 13.818 126.491 13.8566 126.303 13.9337C126.115 14.0108 125.951 14.1192 125.815 14.258C125.677 14.3969 125.569 14.5639 125.491 14.7576C125.412 14.9519 125.372 15.1656 125.372 15.3989C125.372 15.6322 125.412 15.8464 125.491 16.0402C125.569 16.2343 125.677 16.4008 125.815 16.5398C125.951 16.6785 126.115 16.7865 126.303 16.8641C126.491 16.9412 126.695 16.9798 126.915 16.9798C127.134 16.9798 127.338 16.9412 127.526 16.8641C127.715 16.7866 127.879 16.6786 128.017 16.5398C128.156 16.4008 128.265 16.2343 128.344 16.0402C128.423 15.8464 128.462 15.6322 128.462 15.3989C128.462 15.1656 128.423 14.9519 128.344 14.7576C128.265 14.5639 128.156 14.3969 128.017 14.258C127.879 14.1193 127.715 14.0109 127.526 13.9337C127.338 13.8565 127.134 13.818 126.915 13.818ZM132.801 12.8033C133.154 12.8033 133.457 12.8692 133.711 13.0015C133.965 13.1338 134.177 13.3099 134.349 13.5294V10.4494H135.423V17.8657H134.349V17.2737C134.177 17.4932 133.965 17.6686 133.711 17.799C133.457 17.9295 133.154 17.9945 132.801 17.9945C132.455 17.9945 132.133 17.9305 131.835 17.8014C131.536 17.6725 131.276 17.4932 131.053 17.263C130.83 17.0334 130.656 16.7597 130.529 16.4418C130.402 16.1243 130.339 15.7765 130.339 15.3989C130.339 15.0213 130.402 14.6734 130.529 14.356C130.656 14.0386 130.83 13.7644 131.053 13.5344C131.276 13.3046 131.536 13.1252 131.835 12.9964C132.133 12.8676 132.455 12.8033 132.801 12.8033ZM132.93 13.818C132.696 13.818 132.489 13.8601 132.305 13.9437C132.122 14.0282 131.967 14.1416 131.84 14.2839C131.713 14.4263 131.615 14.5936 131.547 14.7861C131.478 14.9786 131.444 15.1826 131.444 15.399C131.444 15.615 131.478 15.8194 131.547 16.0119C131.615 16.2044 131.713 16.3717 131.84 16.5141C131.967 16.6564 132.122 16.7698 132.305 16.8543C132.489 16.9383 132.696 16.98 132.93 16.98C133.152 16.98 133.354 16.9399 133.536 16.8588C133.718 16.7786 133.874 16.6676 134.004 16.5267C134.134 16.3864 134.235 16.2198 134.307 16.0274C134.379 15.8352 134.415 15.6259 134.415 15.3991C134.415 15.1727 134.379 14.9629 134.307 14.7708C134.235 14.5783 134.134 14.4123 134.004 14.2714C133.874 14.1306 133.718 14.0199 133.536 13.939C133.354 13.8585 133.152 13.818 132.93 13.818ZM139.001 12.8033C139.344 12.8033 139.658 12.8662 139.944 12.9912C140.23 13.1169 140.476 13.2934 140.679 13.5219C140.883 13.7502 141.042 14.0232 141.158 14.3406C141.272 14.6584 141.33 15.0094 141.33 15.394C141.33 15.4625 141.328 15.5313 141.324 15.5999C141.321 15.6685 141.316 15.7338 141.309 15.7955H137.67C137.703 16.0188 137.767 16.2093 137.86 16.3671C137.952 16.5252 138.063 16.6548 138.194 16.7562C138.324 16.8574 138.47 16.9322 138.631 16.9799C138.792 17.0281 138.96 17.052 139.134 17.052C139.382 17.052 139.629 17.0069 139.877 16.916C140.126 16.8249 140.353 16.6969 140.559 16.5322L141.093 17.2994C140.791 17.557 140.472 17.7375 140.134 17.84C139.797 17.9434 139.442 17.9947 139.068 17.9947C138.698 17.9947 138.358 17.9326 138.05 17.8096C137.741 17.6859 137.475 17.5107 137.253 17.2843C137.03 17.0576 136.857 16.7845 136.734 16.4651C136.611 16.1458 136.549 15.7906 136.549 15.3991C136.549 15.0145 136.609 14.6625 136.729 14.3435C136.849 14.0241 137.017 13.7503 137.233 13.522C137.449 13.2935 137.706 13.117 138.006 12.9913C138.306 12.8662 138.638 12.8033 139.001 12.8033ZM141.843 17.8657V17.6177H141.943V17.5669H141.688V17.6177H141.788V17.8657H141.843ZM142.337 17.8657V17.5664H142.259L142.169 17.7723L142.079 17.5664H142.002V17.8657H142.057V17.64L142.141 17.8345H142.198L142.282 17.6393V17.8656H142.337V17.8657ZM138.981 13.7612C138.788 13.7612 138.618 13.7901 138.469 13.8484C138.32 13.9075 138.191 13.9903 138.083 14.0987C137.975 14.2068 137.887 14.3355 137.819 14.4848C137.75 14.634 137.702 14.7979 137.675 14.9766H140.229C140.171 14.592 140.035 14.2931 139.819 14.0806C139.603 13.8678 139.323 13.7612 138.981 13.7612Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M92.6425 7.69244H91.4374V1.53865L89.2566 6.96048H87.9876L85.8066 1.59727V7.69244H84.6014V0.213844H86.4519L88.6222 5.55578L90.7923 0.213844H92.6425V7.69244ZM98.9876 7.69244H97.8732V7.07823C97.6954 7.30619 97.4751 7.48764 97.2121 7.62298C96.949 7.75852 96.6342 7.82619 96.2683 7.82619C95.909 7.82619 95.5751 7.75931 95.2658 7.62586C94.9564 7.49221 94.6862 7.30619 94.4552 7.0674C94.2242 6.82911 94.0429 6.54501 93.9114 6.2154C93.7797 5.88589 93.7141 5.52537 93.7141 5.13376C93.7141 4.74184 93.7798 4.38123 93.9114 4.05192C94.043 3.7227 94.2243 3.4383 94.4552 3.19992C94.6862 2.96113 94.9564 2.77531 95.2658 2.64146C95.5751 2.508 95.909 2.44103 96.2683 2.44103C96.6342 2.44103 96.9489 2.50989 97.2121 2.64692C97.475 2.78405 97.6954 2.9665 97.8732 3.19425V2.57488H98.9876V7.69244ZM96.4015 3.49365C96.1597 3.49365 95.9437 3.53738 95.7538 3.62442C95.5636 3.71197 95.4026 3.82962 95.2711 3.97709C95.1395 4.12525 95.0382 4.29835 94.9672 4.49799C94.896 4.69762 94.8606 4.90928 94.8606 5.13376C94.8606 5.35804 94.8959 5.56999 94.9672 5.76933C95.0382 5.96886 95.1395 6.14266 95.2711 6.29023C95.4026 6.43809 95.5635 6.55535 95.7538 6.64299C95.9437 6.72994 96.1597 6.77366 96.4015 6.77366C96.6327 6.77366 96.8423 6.73183 97.0307 6.64816C97.2192 6.56449 97.3809 6.44972 97.5161 6.30354C97.6512 6.15757 97.7559 5.98496 97.8308 5.78533C97.9053 5.58589 97.9426 5.36877 97.9426 5.13376C97.9426 4.89845 97.9053 4.68133 97.8308 4.48189C97.7559 4.28226 97.6512 4.10965 97.5161 3.96348C97.381 3.8179 97.2192 3.70273 97.0307 3.61906C96.8424 3.53559 96.6327 3.49365 96.4015 3.49365ZM104.106 3.85685C104.028 3.81094 103.932 3.76166 103.819 3.71008C103.705 3.65861 103.579 3.61151 103.44 3.56858C103.301 3.52595 103.155 3.49047 103 3.46176C102.845 3.43324 102.688 3.41913 102.528 3.41913C102.222 3.41913 101.985 3.47507 101.816 3.58736C101.647 3.69935 101.563 3.84652 101.563 4.02817C101.563 4.1171 101.585 4.19173 101.63 4.25225C101.674 4.31316 101.734 4.36294 101.808 4.4021C101.883 4.44145 101.972 4.47235 102.075 4.4956C102.178 4.51876 102.288 4.53913 102.406 4.55672L102.933 4.63711C103.491 4.71889 103.927 4.88175 104.24 5.12581C104.553 5.36976 104.709 5.7109 104.709 6.14882C104.709 6.39447 104.656 6.61994 104.552 6.82444C104.447 7.02924 104.296 7.20572 104.098 7.35329C103.901 7.50115 103.658 7.61592 103.368 7.6981C103.078 7.77988 102.75 7.82053 102.384 7.82053C102.253 7.82053 102.1 7.81278 101.926 7.79678C101.751 7.78058 101.567 7.74858 101.371 7.70079C101.176 7.65259 100.976 7.58562 100.774 7.50036C100.571 7.415 100.377 7.30231 100.193 7.16389L100.71 6.32501C100.802 6.39635 100.903 6.46283 101.011 6.52514C101.12 6.58764 101.242 6.64299 101.379 6.69079C101.516 6.73898 101.667 6.77744 101.832 6.80576C101.998 6.83428 102.185 6.84839 102.395 6.84839C102.779 6.84839 103.069 6.79244 103.264 6.68025C103.459 6.56826 103.557 6.41593 103.557 6.22345C103.557 6.07767 103.486 5.95754 103.344 5.86284C103.202 5.76873 102.978 5.70007 102.672 5.65744L102.139 5.58788C101.57 5.50948 101.139 5.34333 100.846 5.08835C100.553 4.83396 100.406 4.50007 100.406 4.08669C100.406 3.8337 100.455 3.60574 100.553 3.40313C100.65 3.20011 100.791 3.0282 100.974 2.8875C101.157 2.74689 101.378 2.63828 101.638 2.56176C101.897 2.48505 102.191 2.44699 102.518 2.44699C102.919 2.44699 103.298 2.49409 103.654 2.58849C104.009 2.6826 104.32 2.81525 104.587 2.98637L104.106 3.85685ZM109.396 3.58974H107.439V5.81762C107.439 5.98824 107.461 6.13441 107.503 6.25555C107.546 6.37638 107.604 6.47555 107.676 6.55217C107.749 6.62878 107.835 6.68482 107.932 6.7203C108.03 6.75578 108.136 6.77366 108.25 6.77366C108.424 6.77366 108.601 6.74017 108.78 6.67211C108.96 6.60443 109.126 6.52265 109.279 6.42656L109.721 7.31851C109.515 7.45733 109.283 7.57697 109.026 7.67644C108.768 7.77621 108.477 7.82629 108.154 7.82629C107.574 7.82629 107.123 7.66531 106.802 7.34285C106.48 7.0204 106.319 6.51937 106.319 5.83889V3.58974H105.301V2.57498H106.319V1.0257H107.439V2.57498H109.396V3.58974ZM112.825 2.44113C113.18 2.44113 113.506 2.50631 113.803 2.63629C114.1 2.76626 114.354 2.9497 114.566 3.1867C114.777 3.4235 114.942 3.7068 115.062 4.03582C115.181 4.36543 115.24 4.72962 115.24 5.12849C115.24 5.19984 115.238 5.27119 115.235 5.34214C115.231 5.41348 115.226 5.48096 115.219 5.54495H111.444C111.479 5.77658 111.545 5.97433 111.641 6.13819C111.737 6.30185 111.852 6.4363 111.987 6.54143C112.122 6.64637 112.274 6.72398 112.441 6.77376C112.608 6.82394 112.782 6.84839 112.963 6.84839C113.219 6.84839 113.476 6.80139 113.734 6.70689C113.992 6.61278 114.227 6.48012 114.44 6.30911L114.995 7.10476C114.682 7.37207 114.351 7.55908 114 7.66591C113.65 7.77273 113.281 7.82629 112.894 7.82629C112.51 7.82629 112.158 7.7619 111.838 7.63391C111.518 7.50562 111.243 7.32417 111.012 7.08906C110.781 6.85375 110.601 6.57095 110.473 6.23945C110.345 5.90855 110.281 5.53978 110.281 5.13396C110.281 4.73489 110.343 4.3699 110.468 4.0386C110.592 3.7077 110.766 3.4236 110.99 3.1868C111.214 2.9498 111.482 2.76646 111.793 2.63639C112.104 2.50631 112.448 2.44113 112.825 2.44113ZM112.803 3.43503C112.604 3.43503 112.427 3.46533 112.273 3.52585C112.118 3.58647 111.985 3.67262 111.873 3.78481C111.761 3.8972 111.669 4.03045 111.598 4.18547C111.527 4.34039 111.477 4.51061 111.449 4.69563H114.099C114.039 4.29696 113.897 3.98693 113.673 3.76613C113.449 3.54543 113.159 3.43503 112.803 3.43503ZM119.101 2.44113C119.272 2.44113 119.425 2.45285 119.562 2.4761C119.699 2.49926 119.831 2.53583 119.959 2.58541L119.693 3.6913C119.575 3.63078 119.438 3.58448 119.282 3.55248C119.125 3.52068 118.98 3.50468 118.845 3.50468C118.667 3.50468 118.503 3.53479 118.354 3.59541C118.205 3.65593 118.077 3.74476 117.97 3.86252C117.864 3.97997 117.78 4.12416 117.72 4.29517C117.659 4.46589 117.629 4.66026 117.629 4.87738V7.69254H116.515V2.57498H117.618V3.15182C117.789 2.90618 118.001 2.72642 118.253 2.61244C118.505 2.49846 118.788 2.44113 119.101 2.44113ZM122.913 2.44113C123.297 2.44113 123.655 2.50999 123.985 2.64702C124.316 2.78415 124.594 2.98826 124.822 3.25874L124.107 4.0227C123.926 3.85149 123.738 3.72071 123.543 3.62989C123.347 3.53926 123.126 3.49345 122.881 3.49345C122.668 3.49345 122.469 3.5336 122.284 3.61379C122.099 3.69388 121.939 3.80587 121.804 3.95056C121.669 4.09484 121.563 4.26745 121.487 4.46838C121.41 4.6696 121.372 4.89119 121.372 5.13366C121.372 5.37592 121.41 5.59742 121.487 5.79874C121.563 5.99967 121.669 6.17247 121.804 6.31696C121.939 6.46114 122.099 6.57343 122.284 6.65323C122.469 6.73372 122.668 6.77356 122.881 6.77356C123.126 6.77356 123.355 6.72269 123.569 6.62143C123.782 6.51987 123.971 6.39258 124.134 6.23925L124.822 7.00877C124.588 7.27956 124.306 7.48307 123.98 7.6202C123.652 7.75733 123.297 7.82609 122.913 7.82609C122.508 7.82609 122.14 7.75733 121.81 7.6202C121.479 7.48307 121.196 7.29456 120.962 7.05418C120.727 6.81351 120.546 6.52961 120.418 6.20199C120.29 5.87416 120.226 5.51822 120.226 5.13376C120.226 4.749 120.29 4.39295 120.418 4.06513C120.546 3.73761 120.727 3.45371 120.962 3.21303C121.196 2.97276 121.479 2.78415 121.81 2.64702C122.14 2.50999 122.508 2.44113 122.913 2.44113ZM130.762 7.69244H129.648V7.07823C129.47 7.30619 129.25 7.48764 128.987 7.62298C128.724 7.75852 128.409 7.82619 128.043 7.82619C127.684 7.82619 127.35 7.75931 127.04 7.62586C126.731 7.49221 126.461 7.30619 126.23 7.0674C125.999 6.82911 125.818 6.54501 125.686 6.2154C125.555 5.88589 125.489 5.52537 125.489 5.13376C125.489 4.74184 125.555 4.38123 125.686 4.05192C125.818 3.7227 125.999 3.4383 126.23 3.19992C126.461 2.96113 126.731 2.77531 127.04 2.64146C127.35 2.508 127.684 2.44103 128.043 2.44103C128.409 2.44103 128.724 2.50989 128.987 2.64692C129.25 2.78405 129.47 2.9665 129.648 3.19425V2.57488H130.762V7.69244ZM128.176 3.49365C127.934 3.49365 127.718 3.53738 127.528 3.62442C127.338 3.71197 127.178 3.82962 127.046 3.97709C126.915 4.12525 126.813 4.29835 126.742 4.49799C126.671 4.69762 126.635 4.90928 126.635 5.13376C126.635 5.35804 126.671 5.56999 126.742 5.76933C126.813 5.96886 126.915 6.14266 127.046 6.29023C127.178 6.43809 127.338 6.55535 127.528 6.64299C127.718 6.72994 127.935 6.77366 128.176 6.77366C128.407 6.77366 128.617 6.73183 128.806 6.64816C128.994 6.56449 129.156 6.44972 129.291 6.30354C129.426 6.15757 129.531 5.98496 129.605 5.78533C129.68 5.58589 129.717 5.36877 129.717 5.13376C129.717 4.89845 129.68 4.68133 129.605 4.48189C129.531 4.28226 129.426 4.10965 129.291 3.96348C129.156 3.8179 128.994 3.70273 128.806 3.61906C128.617 3.53559 128.407 3.49365 128.176 3.49365ZM134.991 2.44113C135.162 2.44113 135.315 2.45285 135.452 2.4761C135.589 2.49926 135.721 2.53583 135.849 2.58541L135.582 3.6913C135.465 3.63078 135.329 3.58448 135.172 3.55248C135.016 3.52068 134.87 3.50468 134.735 3.50468C134.557 3.50468 134.394 3.53479 134.245 3.59541C134.095 3.65593 133.967 3.74476 133.86 3.86252C133.754 3.97997 133.67 4.12416 133.61 4.29517C133.549 4.46589 133.519 4.66026 133.519 4.87738V7.69254H132.405V2.57498H133.509V3.15182C133.679 2.90618 133.891 2.72642 134.143 2.61244C134.396 2.49846 134.678 2.44113 134.991 2.44113ZM138.649 2.44113C139.015 2.44113 139.329 2.50999 139.593 2.64702C139.856 2.78415 140.076 2.96659 140.254 3.19435V0H141.368V7.69244H140.254V7.07823C140.076 7.30619 139.856 7.48764 139.593 7.62298C139.33 7.75852 139.015 7.82619 138.649 7.82619C138.29 7.82619 137.956 7.75931 137.646 7.62586C137.337 7.49221 137.067 7.30619 136.836 7.0674C136.605 6.82911 136.424 6.54501 136.292 6.2154C136.161 5.88589 136.095 5.52537 136.095 5.13376C136.095 4.74184 136.161 4.38123 136.292 4.05192C136.424 3.7227 136.605 3.4383 136.836 3.19992C137.067 2.96113 137.337 2.77531 137.646 2.64146C137.956 2.5081 138.29 2.44113 138.649 2.44113ZM142.67 7.21924C142.715 7.21924 142.758 7.22768 142.798 7.24487C142.838 7.26187 142.873 7.28502 142.903 7.31463C142.933 7.34415 142.957 7.37873 142.974 7.41818C142.992 7.45792 143 7.49996 143 7.54468C143 7.58929 142.992 7.63123 142.974 7.67068C142.957 7.71003 142.933 7.74451 142.903 7.77402C142.873 7.80353 142.838 7.82689 142.798 7.84398C142.758 7.86137 142.715 7.87001 142.67 7.87001C142.623 7.87001 142.579 7.86137 142.539 7.84398C142.498 7.82689 142.463 7.80353 142.433 7.77402C142.404 7.74451 142.38 7.70993 142.363 7.67068C142.346 7.63133 142.337 7.58929 142.337 7.54468C142.337 7.49996 142.346 7.45792 142.363 7.41818C142.38 7.37863 142.404 7.34415 142.433 7.31463C142.463 7.28502 142.498 7.26187 142.539 7.24487C142.579 7.22768 142.623 7.21924 142.67 7.21924ZM142.67 7.79837C142.705 7.79837 142.737 7.79161 142.768 7.77849C142.798 7.76498 142.824 7.74709 142.847 7.72414C142.87 7.70138 142.888 7.67435 142.901 7.64365C142.914 7.61274 142.921 7.57985 142.921 7.54468C142.921 7.5096 142.914 7.47661 142.901 7.4457C142.888 7.4149 142.87 7.38807 142.847 7.36511C142.824 7.34216 142.798 7.32437 142.768 7.31125C142.737 7.29814 142.705 7.29178 142.67 7.29178C142.634 7.29178 142.601 7.29804 142.57 7.31125C142.539 7.32437 142.512 7.34216 142.489 7.36511C142.466 7.38807 142.448 7.4149 142.435 7.4457C142.422 7.47661 142.416 7.5096 142.416 7.54468C142.416 7.57985 142.422 7.61274 142.435 7.64365C142.448 7.67425 142.466 7.70128 142.489 7.72414C142.512 7.74699 142.539 7.76498 142.57 7.77849C142.601 7.79161 142.634 7.79837 142.67 7.79837ZM142.689 7.39244C142.728 7.39244 142.757 7.40089 142.779 7.41828C142.799 7.43567 142.81 7.45912 142.81 7.48883C142.81 7.51387 142.802 7.53444 142.785 7.55074C142.768 7.56703 142.744 7.57677 142.714 7.58065L142.812 7.69462H142.735L142.643 7.58134H142.614V7.69462H142.549V7.39244H142.689ZM142.614 7.44908V7.52947H142.688C142.705 7.52947 142.719 7.52619 142.729 7.51943C142.739 7.51288 142.744 7.50264 142.744 7.48883C142.744 7.47551 142.739 7.46568 142.729 7.45892C142.718 7.45236 142.705 7.44908 142.688 7.44908H142.614ZM138.782 3.49365C138.54 3.49365 138.324 3.53738 138.134 3.62442C137.944 3.71197 137.784 3.82962 137.652 3.97709C137.521 4.12525 137.419 4.29835 137.348 4.49799C137.277 4.69762 137.241 4.90928 137.241 5.13376C137.241 5.35804 137.277 5.56999 137.348 5.76933C137.419 5.96886 137.521 6.14266 137.652 6.29023C137.784 6.43809 137.944 6.55535 138.134 6.64299C138.324 6.72994 138.54 6.77366 138.782 6.77366C139.013 6.77366 139.223 6.73183 139.412 6.64816C139.6 6.56449 139.762 6.44972 139.897 6.30354C140.032 6.15757 140.137 5.98496 140.211 5.78533C140.286 5.58589 140.324 5.36877 140.324 5.13376C140.324 4.89845 140.286 4.68133 140.211 4.48189C140.137 4.28226 140.032 4.10965 139.897 3.96348C139.762 3.8179 139.6 3.70273 139.412 3.61906C139.223 3.53559 139.013 3.49365 138.782 3.49365Z",
  fill: "#D3D3D3"
})), /* @__PURE__ */ React.createElement("path", {
  d: "M165.821 0.892224C167.566 0.581961 169.41 0.851368 170.986 1.67025C172.533 2.46426 173.821 3.76393 174.596 5.32887C173.869 5.32946 173.143 5.32828 172.416 5.32887C171.605 4.19025 170.418 3.324 169.083 2.92255C167.724 2.50334 166.224 2.56907 164.906 3.10374C163.471 3.67749 162.259 4.79538 161.572 6.18742C160.99 7.3438 160.776 8.68255 160.965 9.96446C161.178 11.469 161.952 12.8829 163.096 13.8735C164.087 14.7416 165.35 15.2928 166.66 15.4118C168.171 15.5604 169.731 15.1324 170.957 14.2306C171.651 13.7338 172.23 13.0854 172.681 12.3601C180.788 12.3595 188.896 12.3607 197.003 12.3595C197.458 12.3643 197.857 12.6846 198.07 13.0736C198.296 13.4691 198.347 13.9416 198.289 14.3881C190.036 14.3869 181.784 14.3893 173.531 14.3869C172.436 15.6877 170.94 16.6446 169.296 17.0638C167.65 17.4883 165.873 17.3883 164.288 16.7672C162.499 16.0744 160.971 14.7291 160.049 13.0375C159.244 11.5827 158.903 9.87683 159.07 8.22071C159.227 6.55157 159.916 4.94163 161 3.66979C162.224 2.22032 163.958 1.21611 165.821 0.892224Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M172.513 5.93716C173.872 5.93597 175.232 5.93538 176.591 5.93716C177.413 5.96617 178.163 6.59735 178.344 7.4038C178.414 7.68327 178.412 7.97696 178.364 8.25999C177.576 8.25939 176.789 8.25999 176.001 8.25999C175.472 8.25584 174.926 8.30025 174.417 8.12202C173.445 7.82005 172.692 6.94314 172.513 5.93716ZM195.794 7.89051C196.883 7.88992 197.971 7.89051 199.059 7.88992V8.70406C198.672 8.70406 198.284 8.70347 197.897 8.70406V11.7386H196.957C196.956 10.7273 196.957 9.71538 196.956 8.70406C196.569 8.70347 196.182 8.70406 195.794 8.70406V7.89051ZM182.805 8.39084C183.5 7.76795 184.661 7.8011 185.343 8.42874C185.209 8.64663 185.077 8.86512 184.943 9.08183C184.542 8.73959 183.909 8.57972 183.46 8.92196C182.902 9.37433 183.044 10.4354 183.734 10.6799C184.186 10.8457 184.666 10.6237 184.994 10.3099C185.143 10.5201 185.29 10.7314 185.437 10.9428C184.724 11.7007 183.356 11.7392 182.659 10.9422C182.045 10.2323 182.092 9.01729 182.805 8.39084Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M186.091 8.44223C186.778 7.77256 187.992 7.7767 188.685 8.43394C188.551 8.64887 188.419 8.86499 188.29 9.08229C188.021 8.87802 187.699 8.70571 187.351 8.73236C187.011 8.7371 186.677 8.94315 186.549 9.26525C186.342 9.76262 186.515 10.456 187.045 10.6644C187.501 10.8556 188.009 10.6383 188.338 10.3056C188.485 10.5152 188.629 10.7266 188.779 10.9338C188.134 11.6485 186.929 11.7213 186.185 11.1227C185.412 10.4755 185.373 9.14624 186.091 8.44223ZM178.933 11.4566C179.328 10.3038 179.711 9.14624 180.106 7.99341H180.997C181.385 9.14861 181.779 10.302 182.163 11.4584C181.871 11.4566 181.578 11.4572 181.285 11.4572C181.215 11.221 181.145 10.9841 181.078 10.7473C180.725 10.7461 180.372 10.7473 180.02 10.7461C179.951 10.983 179.884 11.2204 179.817 11.4578C179.522 11.4566 179.228 11.4578 178.933 11.4566ZM180.223 10.0504C180.439 10.051 180.656 10.051 180.873 10.051C180.761 9.64242 180.631 9.23802 180.555 8.82058C180.463 9.23565 180.342 9.64302 180.223 10.0504ZM189.191 7.99341C189.912 7.99282 190.632 7.99341 191.353 7.99341C191.353 8.24032 191.353 8.48663 191.352 8.73354H190.044C190.043 8.94078 190.043 9.14802 190.044 9.35525H191.088V10.0954H190.044C190.043 10.3074 190.043 10.5199 190.044 10.7319H191.412V11.4572H189.192C189.191 10.3026 189.192 9.14802 189.191 7.99341ZM191.985 9.65131C193.161 9.6519 194.336 9.64894 195.512 9.65308C195.378 10.0557 195.013 10.3778 194.585 10.4033C194.003 10.411 193.421 10.4033 192.838 10.4062C192.838 10.7615 192.838 11.1168 192.838 11.4714C192.553 11.472 192.269 11.472 191.985 11.4714V9.65131Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M162.323 5.93645C162.922 5.93527 163.521 5.93645 164.119 5.93527C164.553 5.9258 164.966 6.23665 165.088 6.65409C165.343 7.52211 165.581 8.39428 165.84 9.26053C165.867 9.26231 165.919 9.26586 165.945 9.26823C166.214 8.39369 166.449 7.50849 166.709 6.63159C166.836 6.2331 167.229 5.93882 167.644 5.93586C168.253 5.93586 168.861 5.93645 169.47 5.93586V11.5905C168.872 11.5899 168.274 11.5905 167.676 11.5899C167.674 10.4749 167.68 9.35941 167.673 8.24448C167.645 8.25218 167.589 8.26876 167.561 8.27645C167.21 9.37718 166.883 10.4862 166.542 11.5899C166.111 11.5911 165.681 11.5887 165.25 11.5917C164.904 10.4856 164.582 9.37066 164.225 8.26935C164.199 8.26343 164.146 8.25277 164.12 8.24744C164.113 9.36178 164.12 10.4761 164.117 11.5905H162.323V5.93645ZM170.22 5.93645C170.823 5.93586 171.426 5.93586 172.029 5.93586V11.5899C171.426 11.5905 170.823 11.5905 170.22 11.5899V5.93645ZM191.638 7.97922C192.505 7.97803 193.372 7.97803 194.239 7.97922C194.664 7.97566 195.083 8.19948 195.309 8.56363C195.497 8.84073 195.545 9.19066 195.491 9.51751C194.856 9.51869 194.22 9.51751 193.584 9.5181C193.13 9.52106 192.665 9.39553 192.309 9.10422C191.954 8.83007 191.73 8.41441 191.638 7.97922ZM172.779 8.49672C174.618 8.49968 176.457 8.4908 178.296 8.50145C178.104 9.04205 177.676 9.47961 177.144 9.68507C177.566 10.3198 177.986 10.9545 178.406 11.5905C177.717 11.5893 177.027 11.5922 176.338 11.5893C176.031 10.9907 175.717 10.3974 175.41 9.79935C175.131 9.79935 174.852 9.79876 174.573 9.79994C174.573 10.3968 174.573 10.9936 174.573 11.5905H172.779V8.49672Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M263.942 11.9268H262.495C262.196 11.9268 261.946 11.7271 261.946 11.4775C261.946 11.178 262.196 11.0282 262.495 11.0282H265.139L265.737 9.68144H262.495C261.148 9.68144 260.4 10.4802 260.4 11.5274C260.4 12.6246 261.148 13.2736 262.296 13.2736H263.742C264.042 13.2736 264.29 13.4733 264.29 13.7229C264.29 13.9725 264.092 14.1711 263.742 14.1711H260.549V15.5179H263.742C265.089 15.5179 265.837 14.7202 265.837 13.623C265.837 12.5258 265.139 11.9268 263.942 11.9268ZM258.105 11.9268H256.659C256.359 11.9268 256.11 11.7271 256.11 11.4775C256.11 11.178 256.359 11.0282 256.659 11.0282H259.302L259.902 9.68144H256.659C255.312 9.68144 254.563 10.4802 254.563 11.5274C254.563 12.6246 255.312 13.2736 256.459 13.2736H257.906C258.205 13.2736 258.455 13.4733 258.455 13.7229C258.455 13.9725 258.255 14.1711 257.906 14.1711H254.713V15.5179H257.906C259.253 15.5179 260 14.7202 260 13.623C260.05 12.5279 259.353 11.9268 258.105 11.9268ZM248.876 15.5668H253.868V14.2148H250.473V13.2674H253.815V11.9268H250.473V10.9783H253.865V9.62632H248.873L248.876 15.5668ZM245.785 12.1754H244.138V10.9783H245.785C246.233 10.9783 246.482 11.2778 246.482 11.5774C246.482 11.9268 246.233 12.1764 245.785 12.1764M248.079 11.5274C248.079 10.3834 247.28 9.63152 245.983 9.63152H242.542V15.5678H244.138V13.5232H244.736L246.532 15.5678H248.433L246.488 13.4234C247.485 13.1738 248.084 12.4749 248.084 11.5274M239.556 12.2762H237.852V10.9783H239.549C239.998 10.9783 240.248 11.2778 240.248 11.6273C240.248 11.9767 240.048 12.2762 239.549 12.2762M239.748 9.63152H236.306V15.5678H237.902V13.623H239.748C241.095 13.623 241.893 12.7744 241.893 11.6273C241.843 10.4302 241.045 9.63152 239.748 9.63152ZM236.004 9.63152H233.962L232.465 11.4276L230.919 9.63152H228.824L231.468 12.5747L228.777 15.5678H230.822L232.417 13.6719L234.014 15.5678H236.108L233.413 12.5279L236.004 9.63152ZM223.586 15.5678H228.578V14.2158H225.137V13.2684H228.48V11.9268H225.137V10.9783H228.58V9.62632H223.588L223.586 15.5678ZM263.343 5.64104L260.899 2.04992H258.903V7.93632H260.497V4.19232L262.993 7.93632H264.889V2.04992H263.343V5.64104ZM254.165 5.44136L255.012 3.44664L255.86 5.44136H254.165ZM253.965 2.04992L251.371 7.98624H253.113L253.613 6.78816H256.356L256.855 7.98624H258.65L256.007 2.04992H253.965ZM248.777 5.03992V4.93592C248.777 4.03736 249.276 3.43936 250.273 3.43936H252.019V2H250.123C248.179 2 247.181 3.248 247.181 4.89328V4.99728C247.181 6.84224 248.325 7.89056 250.075 7.89056H250.623L251.272 6.53856H250.323C249.376 6.58848 248.777 6.03936 248.777 5.042M244.786 7.93528H246.383V2.04888H244.786V7.93528ZM241.693 4.5428H240.048V3.3468H241.693C242.142 3.3468 242.392 3.64632 242.392 3.9448C242.392 4.29424 242.142 4.54384 241.693 4.54384M243.988 3.9448C243.988 2.8008 243.19 2.04992 241.893 2.04992H238.449V7.98624H240.046V5.89064H240.644L242.44 7.93632H244.388L242.392 5.7908C243.389 5.59112 243.988 4.84336 243.988 3.9448ZM232.417 7.93632H237.409V6.58952H234.012V5.64104H237.305V4.29424H234.012V3.3468H237.409V2.04992H232.417V7.93632ZM227.38 5.74088L226.028 2.04992H223.586V7.93632H225.137V3.69624L226.684 7.93632H228.081L229.627 3.69624V7.93632H231.224V2.04992H228.728L227.38 5.74088ZM218.793 5.44136L219.641 3.44664L220.49 5.44136H218.793ZM218.594 2.04992L216 7.93632H217.753L218.253 6.73824H220.992L221.491 7.93632H223.286L220.643 2.04992H218.594Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("g", {
  clipPath: "url(#clip2_1_39)"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M15.75 8.25C15.75 12.4125 12.87 16.305 9 17.25C5.13 16.305 2.25 12.4125 2.25 8.25V3.75L9 0.75L15.75 3.75V8.25ZM9 15.75C11.8125 15 14.25 11.655 14.25 8.415V4.725L9 2.385L3.75 4.725V8.415C3.75 11.655 6.1875 15 9 15.75ZM11.1 8.25V7.125C11.1 6.075 10.05 5.25 9 5.25C7.95 5.25 6.9 6.075 6.9 7.125V8.25C6.45 8.25 6 8.7 6 9.15V11.775C6 12.3 6.45 12.75 6.9 12.75H11.025C11.55 12.75 12 12.3 12 11.85V9.225C12 8.7 11.55 8.25 11.1 8.25ZM10.125 8.25H7.875V7.125C7.875 6.525 8.4 6.15 9 6.15C9.6 6.15 10.125 6.525 10.125 7.125V8.25Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M21.3027 6.2334C21.3643 7.38037 22.3135 8.10547 23.7197 8.10547C25.2227 8.10547 26.1675 7.36279 26.1675 6.17627C26.1675 5.24902 25.627 4.72607 24.3262 4.41846L23.6274 4.24707C22.8101 4.04492 22.4761 3.78125 22.4761 3.33301C22.4761 2.77051 22.999 2.38379 23.7637 2.38379C24.5283 2.38379 25.0513 2.76611 25.1084 3.39893H26.0664C26.0356 2.30469 25.1172 1.55322 23.7769 1.55322C22.4233 1.55322 21.4697 2.30469 21.4697 3.39893C21.4697 4.28223 22.0103 4.82715 23.1748 5.1084L23.9966 5.30615C24.8184 5.5083 25.1655 5.80273 25.1655 6.29492C25.1655 6.86182 24.5898 7.2749 23.79 7.2749C22.9551 7.2749 22.3442 6.86182 22.2739 6.2334H21.3027Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M29.1851 4.05811C29.8487 4.05811 30.2969 4.55469 30.3189 5.26221H28.0074C28.0557 4.56348 28.5215 4.05811 29.1851 4.05811ZM30.3145 6.64209C30.1871 7.04639 29.7872 7.31885 29.2466 7.31885C28.4864 7.31885 28.003 6.78711 28.003 5.98291V5.92578H31.2681V5.60059C31.2681 4.19873 30.4683 3.29346 29.1851 3.29346C27.8799 3.29346 27.045 4.26025 27.045 5.71045C27.045 7.16943 27.8668 8.08789 29.2247 8.08789C30.2838 8.08789 31.0836 7.48584 31.2154 6.64209H30.3145Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M36.2897 4.96777C36.2062 4.05811 35.4811 3.29346 34.2902 3.29346C32.9762 3.29346 32.1149 4.2207 32.1149 5.68848C32.1149 7.18262 32.9762 8.08789 34.2989 8.08789C35.4108 8.08789 36.1974 7.41992 36.2985 6.43555H35.3844C35.2745 6.97168 34.8922 7.29248 34.3077 7.29248C33.5695 7.29248 33.0817 6.70361 33.0817 5.68848C33.0817 4.69531 33.5651 4.08447 34.2989 4.08447C34.9186 4.08447 35.2877 4.47559 35.3844 4.96777H36.2897Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M41.2497 3.37695H40.3005V6.0708C40.3005 6.7915 39.8874 7.26611 39.2018 7.26611C38.5471 7.26611 38.2131 6.88818 38.2131 6.18506V3.37695H37.2638V6.36963C37.2638 7.42871 37.8791 8.0835 38.8854 8.0835C39.5929 8.0835 40.0632 7.77148 40.318 7.21777H40.34V8H41.2497V3.37695Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M42.5051 8H43.4543V5.23145C43.4543 4.57666 43.8323 4.16797 44.4431 4.16797C44.6277 4.16797 44.7947 4.18994 44.8694 4.2207V3.3374C44.7991 3.32422 44.6804 3.30225 44.5442 3.30225C43.9993 3.30225 43.5862 3.62305 43.4324 4.16357H43.4104V3.37695H42.5051V8Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M47.5047 4.05811C48.1683 4.05811 48.6165 4.55469 48.6385 5.26221H46.327C46.3753 4.56348 46.8411 4.05811 47.5047 4.05811ZM48.6341 6.64209C48.5066 7.04639 48.1067 7.31885 47.5662 7.31885C46.806 7.31885 46.3226 6.78711 46.3226 5.98291V5.92578H49.5877V5.60059C49.5877 4.19873 48.7879 3.29346 47.5047 3.29346C46.1995 3.29346 45.3646 4.26025 45.3646 5.71045C45.3646 7.16943 46.1863 8.08789 47.5442 8.08789C48.6033 8.08789 49.4031 7.48584 49.535 6.64209H48.6341Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M24.2603 17.1055C25.7192 17.1055 26.7124 16.3364 26.9541 15.0269H25.9741C25.7764 15.7915 25.1479 16.2441 24.2646 16.2441C23.1001 16.2441 22.3618 15.3081 22.3618 13.8271C22.3618 12.3594 23.1089 11.4146 24.2603 11.4146C25.1216 11.4146 25.7983 11.9463 25.9741 12.7593H26.9497C26.7827 11.4365 25.6973 10.5532 24.2603 10.5532C22.4893 10.5532 21.3555 11.8188 21.3555 13.8271C21.3555 15.8486 22.4805 17.1055 24.2603 17.1055Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M30.0289 17.0879C31.3516 17.0879 32.2217 16.1782 32.2217 14.6885C32.2217 13.2031 31.3472 12.2935 30.0289 12.2935C28.7105 12.2935 27.836 13.2031 27.836 14.6885C27.836 16.1782 28.7061 17.0879 30.0289 17.0879ZM30.0289 16.3057C29.2862 16.3057 28.8028 15.7168 28.8028 14.6885C28.8028 13.6646 29.2862 13.0757 30.0289 13.0757C30.7715 13.0757 31.2549 13.6646 31.2549 14.6885C31.2549 15.7168 30.7759 16.3057 30.0289 16.3057Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M33.2706 17H34.2198V14.3062C34.2198 13.5898 34.6505 13.1152 35.3185 13.1152C35.9777 13.1152 36.3029 13.4976 36.3029 14.1919V17H37.2565V14.0073C37.2565 12.9482 36.672 12.2979 35.6525 12.2979C34.9405 12.2979 34.4484 12.623 34.1979 13.1504H34.1759V12.377H33.2706V17Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M38.4899 17H39.4391V14.3062C39.4391 13.5898 39.8698 13.1152 40.5378 13.1152C41.197 13.1152 41.5221 13.4976 41.5221 14.1919V17H42.4758V14.0073C42.4758 12.9482 41.8913 12.2979 40.8718 12.2979C40.1598 12.2979 39.6677 12.623 39.4172 13.1504H39.3952V12.377H38.4899V17Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M45.6428 13.0581C46.3064 13.0581 46.7546 13.5547 46.7766 14.2622H44.4651C44.5134 13.5635 44.9792 13.0581 45.6428 13.0581ZM46.7722 15.6421C46.6448 16.0464 46.2449 16.3188 45.7043 16.3188C44.9441 16.3188 44.4607 15.7871 44.4607 14.9829V14.9258H47.7258V14.6006C47.7258 13.1987 46.926 12.2935 45.6428 12.2935C44.3376 12.2935 43.5027 13.2603 43.5027 14.7104C43.5027 16.1694 44.3245 17.0879 45.6824 17.0879C46.7414 17.0879 47.5413 16.4858 47.6731 15.6421H46.7722Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M52.7474 13.9678C52.6639 13.0581 51.9388 12.2935 50.7479 12.2935C49.4339 12.2935 48.5726 13.2207 48.5726 14.6885C48.5726 16.1826 49.4339 17.0879 50.7566 17.0879C51.8685 17.0879 52.6551 16.4199 52.7562 15.4355H51.8421C51.7322 15.9717 51.3499 16.2925 50.7654 16.2925C50.0271 16.2925 49.5394 15.7036 49.5394 14.6885C49.5394 13.6953 50.0228 13.0845 50.7566 13.0845C51.3763 13.0845 51.7454 13.4756 51.8421 13.9678H52.7474Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M54.0204 11.2827V12.377H53.348V13.1284H54.0204V15.7827C54.0204 16.6748 54.3851 17.0308 55.3212 17.0308C55.5321 17.0308 55.743 17.0132 55.8485 16.9868V16.2354C55.787 16.2485 55.6332 16.2573 55.5365 16.2573C55.1498 16.2573 54.974 16.0771 54.974 15.6772V13.1284H55.8529V12.377H54.974V11.2827H54.0204Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M56.9809 17H57.9301V12.377H56.9809V17ZM57.4555 11.7002C57.7631 11.7002 58.0092 11.4585 58.0092 11.1597C58.0092 10.8564 57.7631 10.6147 57.4555 10.6147C57.1523 10.6147 56.9062 10.8564 56.9062 11.1597C56.9062 11.4585 57.1523 11.7002 57.4555 11.7002Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M61.2026 17.0879C62.5254 17.0879 63.3955 16.1782 63.3955 14.6885C63.3955 13.2031 62.521 12.2935 61.2026 12.2935C59.8843 12.2935 59.0097 13.2031 59.0097 14.6885C59.0097 16.1782 59.8799 17.0879 61.2026 17.0879ZM61.2026 16.3057C60.4599 16.3057 59.9765 15.7168 59.9765 14.6885C59.9765 13.6646 60.4599 13.0757 61.2026 13.0757C61.9453 13.0757 62.4287 13.6646 62.4287 14.6885C62.4287 15.7168 61.9497 16.3057 61.2026 16.3057Z",
  fill: "#D3D3D3"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M64.4444 17H65.3936V14.3062C65.3936 13.5898 65.8243 13.1152 66.4922 13.1152C67.1514 13.1152 67.4766 13.4976 67.4766 14.1919V17H68.4302V14.0073C68.4302 12.9482 67.8457 12.2979 66.8262 12.2979C66.1143 12.2979 65.6221 12.623 65.3716 13.1504H65.3496V12.377H64.4444V17Z",
  fill: "#D3D3D3"
})), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
  id: "clip0_1_39"
}, /* @__PURE__ */ React.createElement("rect", {
  width: 38,
  height: 18,
  fill: "white",
  transform: "translate(282)"
})), /* @__PURE__ */ React.createElement("clipPath", {
  id: "clip1_1_39"
}, /* @__PURE__ */ React.createElement("rect", {
  width: 59,
  height: 18,
  fill: "white",
  transform: "translate(84)"
})), /* @__PURE__ */ React.createElement("clipPath", {
  id: "clip2_1_39"
}, /* @__PURE__ */ React.createElement("rect", {
  width: 69,
  height: 18,
  fill: "white"
}))));
var isArray$2 = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== "undefined";
function equal(a, b2) {
  if (a === b2)
    return true;
  if (a && b2 && typeof a == "object" && typeof b2 == "object") {
    var arrA = isArray$2(a), arrB = isArray$2(b2), i, length2, key;
    if (arrA && arrB) {
      length2 = a.length;
      if (length2 != b2.length)
        return false;
      for (i = length2; i-- !== 0; )
        if (!equal(a[i], b2[i]))
          return false;
      return true;
    }
    if (arrA != arrB)
      return false;
    var dateA = a instanceof Date, dateB = b2 instanceof Date;
    if (dateA != dateB)
      return false;
    if (dateA && dateB)
      return a.getTime() == b2.getTime();
    var regexpA = a instanceof RegExp, regexpB = b2 instanceof RegExp;
    if (regexpA != regexpB)
      return false;
    if (regexpA && regexpB)
      return a.toString() == b2.toString();
    var keys2 = keyList(a);
    length2 = keys2.length;
    if (length2 !== keyList(b2).length)
      return false;
    for (i = length2; i-- !== 0; )
      if (!hasProp.call(b2, keys2[i]))
        return false;
    if (hasElementType && a instanceof Element && b2 instanceof Element)
      return a === b2;
    for (i = length2; i-- !== 0; ) {
      key = keys2[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      } else {
        if (!equal(a[key], b2[key]))
          return false;
      }
    }
    return true;
  }
  return a !== a && b2 !== b2;
}
var reactFastCompare = function exportedEqual(a, b2) {
  try {
    return equal(a, b2);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
      console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
      return false;
    }
    throw error;
  }
};
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge$1(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  Object.keys(source).forEach(function(key) {
    if (!options.isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    } else {
      destination[key] = deepmerge$1(target[key], source[key], options);
    }
  });
  return destination;
}
function deepmerge$1(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge$1.all = function deepmergeAll(array2, options) {
  if (!Array.isArray(array2)) {
    throw new Error("first argument should be an array");
  }
  return array2.reduce(function(prev2, next2) {
    return deepmerge$1(prev2, next2, options);
  }, {});
};
var deepmerge_1 = deepmerge$1;
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var nativeObjectToString$1 = objectProto$d.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result2 = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result2;
}
var objectProto$c = Object.prototype;
var nativeObjectToString = objectProto$c.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var objectTag$3 = "[object Object]";
var funcProto$2 = Function.prototype, objectProto$b = Object.prototype;
var funcToString$2 = funcProto$2.toString;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var objectCtorString = funcToString$2.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$9.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array2, key) {
  var length2 = array2.length;
  while (length2--) {
    if (eq(array2[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result2 = data["delete"](key);
  this.size = data.size;
  return result2;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$a = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue$1(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
function getNative(object2, key) {
  var value = getValue$1(object2, key);
  return baseIsNative(value) ? value : void 0;
}
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result2 = this.has(key) && delete this.__data__[key];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result2 = data[key];
    return result2 === HASH_UNDEFINED$1 ? void 0 : result2;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result2 = getMapData(this, key)["delete"](key);
  this.size -= result2 ? 1 : 0;
  return result2;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length2) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayEach(array2, iteratee) {
  var index = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index < length2) {
    if (iteratee(array2[index], index, array2) === false) {
      break;
    }
  }
  return array2;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty$1 = defineProperty;
function baseAssignValue(object2, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function assignValue(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty$5.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
    baseAssignValue(object2, key, value);
  }
}
function copyObject(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index = -1, length2 = props.length;
  while (++index < length2) {
    var key = props[index];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object2, key, newValue);
    } else {
      assignValue(object2, key, newValue);
    }
  }
  return object2;
}
function baseTimes(n2, iteratee) {
  var index = -1, result2 = Array(n2);
  while (++index < n2) {
    result2[index] = iteratee(index);
  }
  return result2;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
var isArray = Array.isArray;
var isArray$1 = isArray;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length2) {
  var type = typeof value;
  length2 = length2 == null ? MAX_SAFE_INTEGER$1 : length2;
  return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$5 = Object.prototype;
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length2 = result2.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length2)))) {
      result2.push(key);
    }
  }
  return result2;
}
var objectProto$4 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object2) {
  if (!isPrototype(object2)) {
    return nativeKeys$1(object2);
  }
  var result2 = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$2.call(object2, key) && key != "constructor") {
      result2.push(key);
    }
  }
  return result2;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
function keys(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
}
function baseAssign(object2, source) {
  return object2 && copyObject(source, keys(source), object2);
}
function nativeKeysIn(object2) {
  var result2 = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result2.push(key);
    }
  }
  return result2;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function baseKeysIn(object2) {
  if (!isObject$2(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype(object2), result2 = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object2, key)))) {
      result2.push(key);
    }
  }
  return result2;
}
function keysIn(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
}
function baseAssignIn(object2, source) {
  return object2 && copyObject(source, keysIn(source), object2);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length2 = buffer.length, result2 = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
  buffer.copy(result2);
  return result2;
}
function copyArray(source, array2) {
  var index = -1, length2 = source.length;
  array2 || (array2 = Array(length2));
  while (++index < length2) {
    array2[index] = source[index];
  }
  return array2;
}
function arrayFilter(array2, predicate) {
  var index = -1, length2 = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
  while (++index < length2) {
    var value = array2[index];
    if (predicate(value, index, array2)) {
      result2[resIndex++] = value;
    }
  }
  return result2;
}
function stubArray() {
  return [];
}
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols$1(object2), function(symbol) {
    return propertyIsEnumerable.call(object2, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object2) {
  return copyObject(source, getSymbols$1(source), object2);
}
function arrayPush(array2, values2) {
  var index = -1, length2 = values2.length, offset = array2.length;
  while (++index < length2) {
    array2[offset + index] = values2[index];
  }
  return array2;
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
  var result2 = [];
  while (object2) {
    arrayPush(result2, getSymbols$1(object2));
    object2 = getPrototype$1(object2);
  }
  return result2;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object2) {
  return copyObject(source, getSymbolsIn$1(source), object2);
}
function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
  var result2 = keysFunc(object2);
  return isArray$1(object2) ? result2 : arrayPush(result2, symbolsFunc(object2));
}
function getAllKeys(object2) {
  return baseGetAllKeys(object2, keys, getSymbols$1);
}
function getAllKeysIn(object2) {
  return baseGetAllKeys(object2, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var WeakMap$1 = getNative(root$1, "WeakMap");
var WeakMap$2 = WeakMap$1;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map$2 && getTag(new Map$2()) != mapTag$3 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$3 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag$1) {
  getTag = function(value) {
    var result2 = baseGetTag(value), Ctor = result2 == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result2;
  };
}
var getTag$1 = getTag;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array2) {
  var length2 = array2.length, result2 = new array2.constructor(length2);
  if (length2 && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
    result2.index = array2.index;
    result2.input = array2.input;
  }
  return result2;
}
var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result2).set(new Uint8Array$1(arrayBuffer));
  return result2;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result2.lastIndex = regexp.lastIndex;
  return result2;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object2, tag, isDeep) {
  var Ctor = object2.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object2);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object2);
    case dataViewTag$1:
      return cloneDataView(object2, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object2, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object2);
    case regexpTag$1:
      return cloneRegExp(object2);
    case setTag$2:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object2);
  }
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object2() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object2.prototype = proto;
    var result2 = new object2();
    object2.prototype = void 0;
    return result2;
  };
}();
var baseCreate$1 = baseCreate;
function initCloneObject(object2) {
  return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate$1(getPrototype$1(object2)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$1;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$2 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object2, stack) {
  var result2, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
  if (customizer) {
    result2 = object2 ? customizer(value, key, object2, stack) : customizer(value);
  }
  if (result2 !== void 0) {
    return result2;
  }
  if (!isObject$2(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result2 = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result2);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object2) {
      result2 = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object2 ? value : {};
      }
      result2 = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result2);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result2;
}
var CLONE_SYMBOLS_FLAG$1 = 4;
function clone$1(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG$1);
}
function arrayMap(array2, iteratee) {
  var index = -1, length2 = array2 == null ? 0 : array2.length, result2 = Array(length2);
  while (++index < length2) {
    result2[index] = iteratee(array2[index], index, array2);
  }
  return result2;
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result2 = func.apply(this, args);
    memoized.cache = cache.set(key, result2) || cache;
    return result2;
  };
  memoized.cache = new (memoize$2.Cache || MapCache)();
  return memoized;
}
memoize$2.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize$2(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result2.cache;
  return result2;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string2) {
  var result2 = [];
  if (string2.charCodeAt(0) === 46) {
    result2.push("");
  }
  string2.replace(rePropName, function(match2, number2, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match2);
  });
  return result2;
});
var stringToPath$1 = stringToPath;
var INFINITY$1 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY$1 ? "-0" : result2;
}
var INFINITY = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString$1 = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : "";
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
}
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function toPath(value) {
  if (isArray$1(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath$1(toString$1(value)));
}
var isProduction = true;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x2) {
    }
  }
}
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = "function" === typeof Symbol && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$1 ? Symbol.for("react.memo") : 60115, t$1 = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w = b$1 ? Symbol.for("react.fundamental") : 60117, x = b$1 ? Symbol.for("react.responder") : 60118, y = b$1 ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c$1:
        switch (a = a.type, a) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case n$1:
              case t$1:
              case r$1:
              case h$1:
                return a;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$1;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function(a) {
  return A(a) || z(a) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A;
reactIs_production_min$1.isContextConsumer = function(a) {
  return z(a) === k$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return z(a) === h$1;
};
reactIs_production_min$1.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return z(a) === n$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return z(a) === e$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return z(a) === t$1;
};
reactIs_production_min$1.isMemo = function(a) {
  return z(a) === r$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return z(a) === d$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return z(a) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return z(a) === f$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return z(a) === p$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min$1;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized$3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
var isEmptyArray = function isEmptyArray2(value) {
  return Array.isArray(value) && value.length === 0;
};
var isFunction = function isFunction2(obj) {
  return typeof obj === "function";
};
var isObject$1 = function isObject(obj) {
  return obj !== null && typeof obj === "object";
};
var isInteger = function isInteger2(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
var isString$1 = function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};
var isEmptyChildren = function isEmptyChildren2(children) {
  return Children.count(children) === 0;
};
var isPromise = function isPromise2(value) {
  return isObject$1(value) && isFunction(value.then);
};
function getIn$1(obj, key, def, p2) {
  if (p2 === void 0) {
    p2 = 0;
  }
  var path = toPath(key);
  while (obj && p2 < path.length) {
    obj = obj[path[p2++]];
  }
  return obj === void 0 ? def : obj;
}
function setIn(obj, path, value) {
  var res = clone$1(obj);
  var resVal = res;
  var i = 0;
  var pathArray = toPath(path);
  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn$1(obj, pathArray.slice(0, i + 1));
    if (currentObj && (isObject$1(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone$1(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }
  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }
  if (value === void 0) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  }
  if (i === 0 && value === void 0) {
    delete res[pathArray[i]];
  }
  return res;
}
function setNestedObjectValues(object2, value, visited, response) {
  if (visited === void 0) {
    visited = /* @__PURE__ */ new WeakMap();
  }
  if (response === void 0) {
    response = {};
  }
  for (var _i = 0, _Object$keys = Object.keys(object2); _i < _Object$keys.length; _i++) {
    var k2 = _Object$keys[_i];
    var val = object2[k2];
    if (isObject$1(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k2] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k2]);
      }
    } else {
      response[k2] = value;
    }
  }
  return response;
}
var FormikContext = /* @__PURE__ */ createContext(void 0);
FormikContext.displayName = "FormikContext";
var FormikProvider = FormikContext.Provider;
FormikContext.Consumer;
function useFormikContext() {
  var formik = useContext(FormikContext);
  !!!formik ? warning(false) : void 0;
  return formik;
}
function formikReducer(state, msg) {
  switch (msg.type) {
    case "SET_VALUES":
      return _extends$1({}, state, {
        values: msg.payload
      });
    case "SET_TOUCHED":
      return _extends$1({}, state, {
        touched: msg.payload
      });
    case "SET_ERRORS":
      if (reactFastCompare(state.errors, msg.payload)) {
        return state;
      }
      return _extends$1({}, state, {
        errors: msg.payload
      });
    case "SET_STATUS":
      return _extends$1({}, state, {
        status: msg.payload
      });
    case "SET_ISSUBMITTING":
      return _extends$1({}, state, {
        isSubmitting: msg.payload
      });
    case "SET_ISVALIDATING":
      return _extends$1({}, state, {
        isValidating: msg.payload
      });
    case "SET_FIELD_VALUE":
      return _extends$1({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return _extends$1({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_ERROR":
      return _extends$1({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });
    case "RESET_FORM":
      return _extends$1({}, state, msg.payload);
    case "SET_FORMIK_STATE":
      return msg.payload(state);
    case "SUBMIT_ATTEMPT":
      return _extends$1({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return _extends$1({}, state, {
        isSubmitting: false
      });
    case "SUBMIT_SUCCESS":
      return _extends$1({}, state, {
        isSubmitting: false
      });
    default:
      return state;
  }
}
var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref.isInitialValid, _ref$enableReinitiali = _ref.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref.onSubmit, rest = _objectWithoutPropertiesLoose$3(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);
  var props = _extends$1({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    onSubmit
  }, rest);
  var initialValues = useRef(props.initialValues);
  var initialErrors = useRef(props.initialErrors || emptyErrors);
  var initialTouched = useRef(props.initialTouched || emptyTouched);
  var initialStatus = useRef(props.initialStatus);
  var isMounted = useRef(false);
  var fieldRegistry = useRef({});
  useEffect(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  var _React$useReducer = useReducer(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }), state = _React$useReducer[0], dispatch2 = _React$useReducer[1];
  var runValidateHandler = useCallback(function(values2, field2) {
    return new Promise(function(resolve, reject) {
      var maybePromisedErrors = props.validate(values2, field2);
      if (maybePromisedErrors == null) {
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function(errors) {
          resolve(errors || emptyErrors);
        }, function(actualException) {
          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  var runValidationSchema = useCallback(function(values2, field2) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field2) : validationSchema;
    var promise = field2 && schema.validateAt ? schema.validateAt(field2, values2) : validateYupSchema(values2, schema);
    return new Promise(function(resolve, reject) {
      promise.then(function() {
        resolve(emptyErrors);
      }, function(err) {
        if (err.name === "ValidationError") {
          resolve(yupToFormErrors(err));
        } else {
          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = useCallback(function(field2, value) {
    return new Promise(function(resolve) {
      return resolve(fieldRegistry.current[field2].validate(value));
    });
  }, []);
  var runFieldLevelValidations = useCallback(function(values2) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f2) {
      return isFunction(fieldRegistry.current[f2].validate);
    });
    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f2) {
      return runSingleFieldLevelValidation(f2, getIn$1(values2, f2));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(fieldValidations).then(function(fieldErrorsList) {
      return fieldErrorsList.reduce(function(prev2, curr, index) {
        if (curr === "DO_NOT_DELETE_YOU_WILL_BE_FIRED") {
          return prev2;
        }
        if (curr) {
          prev2 = setIn(prev2, fieldKeysWithValidation[index], curr);
        }
        return prev2;
      }, {});
    });
  }, [runSingleFieldLevelValidation]);
  var runAllValidations = useCallback(function(values2) {
    return Promise.all([runFieldLevelValidations(values2), props.validationSchema ? runValidationSchema(values2) : {}, props.validate ? runValidateHandler(values2) : {}]).then(function(_ref2) {
      var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
      var combinedErrors = deepmerge_1.all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]);
  var validateFormWithHighPriority = useEventCallback$1(function(values2) {
    if (values2 === void 0) {
      values2 = state.values;
    }
    dispatch2({
      type: "SET_ISVALIDATING",
      payload: true
    });
    return runAllValidations(values2).then(function(combinedErrors) {
      if (!!isMounted.current) {
        dispatch2({
          type: "SET_ISVALIDATING",
          payload: false
        });
        dispatch2({
          type: "SET_ERRORS",
          payload: combinedErrors
        });
      }
      return combinedErrors;
    });
  });
  useEffect(function() {
    if (validateOnMount && isMounted.current === true && reactFastCompare(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = useCallback(function(nextState) {
    var values2 = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values2;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;
    var dispatchFn = function dispatchFn2() {
      dispatch2({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors,
          touched,
          status,
          values: values2,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === "number" ? nextState.submitCount : 0
        }
      });
    };
    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);
      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  useEffect(function() {
    if (isMounted.current === true && !reactFastCompare(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
      }
      if (validateOnMount) {
        validateFormWithHighPriority(initialValues.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  useEffect(function() {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch2({
        type: "SET_ERRORS",
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  useEffect(function() {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch2({
        type: "SET_TOUCHED",
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  useEffect(function() {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch2({
        type: "SET_STATUS",
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback$1(function(name2) {
    if (fieldRegistry.current[name2] && isFunction(fieldRegistry.current[name2].validate)) {
      var value = getIn$1(state.values, name2);
      var maybePromise = fieldRegistry.current[name2].validate(value);
      if (isPromise(maybePromise)) {
        dispatch2({
          type: "SET_ISVALIDATING",
          payload: true
        });
        return maybePromise.then(function(x2) {
          return x2;
        }).then(function(error) {
          dispatch2({
            type: "SET_FIELD_ERROR",
            payload: {
              field: name2,
              value: error
            }
          });
          dispatch2({
            type: "SET_ISVALIDATING",
            payload: false
          });
        });
      } else {
        dispatch2({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name2,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch2({
        type: "SET_ISVALIDATING",
        payload: true
      });
      return runValidationSchema(state.values, name2).then(function(x2) {
        return x2;
      }).then(function(error) {
        dispatch2({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name2,
            value: error[name2]
          }
        });
        dispatch2({
          type: "SET_ISVALIDATING",
          payload: false
        });
      });
    }
    return Promise.resolve();
  });
  var registerField = useCallback(function(name2, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name2] = {
      validate
    };
  }, []);
  var unregisterField = useCallback(function(name2) {
    delete fieldRegistry.current[name2];
  }, []);
  var setTouched = useEventCallback$1(function(touched, shouldValidate) {
    dispatch2({
      type: "SET_TOUCHED",
      payload: touched
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = useCallback(function(errors) {
    dispatch2({
      type: "SET_ERRORS",
      payload: errors
    });
  }, []);
  var setValues = useEventCallback$1(function(values2, shouldValidate) {
    var resolvedValues = isFunction(values2) ? values2(state.values) : values2;
    dispatch2({
      type: "SET_VALUES",
      payload: resolvedValues
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = useCallback(function(field2, value) {
    dispatch2({
      type: "SET_FIELD_ERROR",
      payload: {
        field: field2,
        value
      }
    });
  }, []);
  var setFieldValue = useEventCallback$1(function(field2, value, shouldValidate) {
    dispatch2({
      type: "SET_FIELD_VALUE",
      payload: {
        field: field2,
        value
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field2, value)) : Promise.resolve();
  });
  var executeChange = useCallback(function(eventOrTextValue, maybePath) {
    var field2 = maybePath;
    var val = eventOrTextValue;
    var parsed;
    if (!isString$1(eventOrTextValue)) {
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }
      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type, name2 = target.name, id = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
      field2 = maybePath ? maybePath : name2 ? name2 : id;
      if (!field2 && false) {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
          handlerName: "handleChange"
        });
      }
      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? "" : parsed) : /checkbox/.test(type) ? getValueForCheckbox(getIn$1(state.values, field2), checked, value) : options && multiple ? getSelectedValues(options) : value;
    }
    if (field2) {
      setFieldValue(field2, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback$1(function(eventOrPath) {
    if (isString$1(eventOrPath)) {
      return function(event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback$1(function(field2, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }
    dispatch2({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field: field2,
        value: touched
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = useCallback(function(e2, path) {
    if (e2.persist) {
      e2.persist();
    }
    var _e$target = e2.target, name2 = _e$target.name, id = _e$target.id, outerHTML = _e$target.outerHTML;
    var field2 = path ? path : name2 ? name2 : id;
    if (!field2 && false) {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: "handleblur-e-any--void",
        handlerName: "handleBlur"
      });
    }
    setFieldTouched(field2, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback$1(function(eventOrString) {
    if (isString$1(eventOrString)) {
      return function(event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = useCallback(function(stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch2({
        type: "SET_FORMIK_STATE",
        payload: stateOrCb
      });
    } else {
      dispatch2({
        type: "SET_FORMIK_STATE",
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = useCallback(function(status) {
    dispatch2({
      type: "SET_STATUS",
      payload: status
    });
  }, []);
  var setSubmitting = useCallback(function(isSubmitting) {
    dispatch2({
      type: "SET_ISSUBMITTING",
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback$1(function() {
    dispatch2({
      type: "SUBMIT_ATTEMPT"
    });
    return validateFormWithHighPriority().then(function(combinedErrors) {
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;
      if (isActuallyValid) {
        var promiseOrUndefined;
        try {
          promiseOrUndefined = executeSubmit();
          if (promiseOrUndefined === void 0) {
            return;
          }
        } catch (error) {
          throw error;
        }
        return Promise.resolve(promiseOrUndefined).then(function(result2) {
          if (!!isMounted.current) {
            dispatch2({
              type: "SUBMIT_SUCCESS"
            });
          }
          return result2;
        })["catch"](function(_errors) {
          if (!!isMounted.current) {
            dispatch2({
              type: "SUBMIT_FAILURE"
            });
            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        dispatch2({
          type: "SUBMIT_FAILURE"
        });
        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }
      return;
    });
  });
  var handleSubmit = useEventCallback$1(function(e2) {
    if (e2 && e2.preventDefault && isFunction(e2.preventDefault)) {
      e2.preventDefault();
    }
    if (e2 && e2.stopPropagation && isFunction(e2.stopPropagation)) {
      e2.stopPropagation();
    }
    submitForm()["catch"](function(reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    setFormikState,
    submitForm
  };
  var executeSubmit = useEventCallback$1(function() {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback$1(function(e2) {
    if (e2 && e2.preventDefault && isFunction(e2.preventDefault)) {
      e2.preventDefault();
    }
    if (e2 && e2.stopPropagation && isFunction(e2.stopPropagation)) {
      e2.stopPropagation();
    }
    resetForm();
  });
  var getFieldMeta = useCallback(function(name2) {
    return {
      value: getIn$1(state.values, name2),
      error: getIn$1(state.errors, name2),
      touched: !!getIn$1(state.touched, name2),
      initialValue: getIn$1(initialValues.current, name2),
      initialTouched: !!getIn$1(initialTouched.current, name2),
      initialError: getIn$1(initialErrors.current, name2)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = useCallback(function(name2) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name2, value, shouldValidate);
      },
      setTouched: function setTouched2(value, shouldValidate) {
        return setFieldTouched(name2, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name2, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = useCallback(function(nameOrOptions) {
    var isAnObject = isObject$1(nameOrOptions);
    var name2 = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn$1(state.values, name2);
    var field2 = {
      name: name2,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };
    if (isAnObject) {
      var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
      if (type === "checkbox") {
        if (valueProp === void 0) {
          field2.checked = !!valueState;
        } else {
          field2.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field2.value = valueProp;
        }
      } else if (type === "radio") {
        field2.checked = valueState === valueProp;
        field2.value = valueProp;
      } else if (is === "select" && multiple) {
        field2.value = field2.value || [];
        field2.multiple = true;
      }
    }
    return field2;
  }, [handleBlur, handleChange, state.values]);
  var dirty = useMemo(function() {
    return !reactFastCompare(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = useMemo(function() {
    return typeof isInitialValid !== "undefined" ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);
  var ctx = _extends$1({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setErrors,
    setFormikState,
    setFieldTouched,
    setFieldValue,
    setFieldError,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    isValid,
    dirty,
    unregisterField,
    registerField,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    validateOnBlur,
    validateOnChange,
    validateOnMount
  });
  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef;
  useImperativeHandle(innerRef, function() {
    return formikbag;
  });
  return createElement(FormikProvider, {
    value: formikbag
  }, component ? createElement(component, formikbag) : render ? render(formikbag) : children ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? Children.only(children) : null : null);
}
function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent, documentationAnchorLink = _ref4.documentationAnchorLink, handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
  var errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }
    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
      var _ref5;
      if (_isArray) {
        if (_i >= _iterator.length)
          break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done)
          break;
        _ref5 = _i.value;
      }
      var err = _ref5;
      if (!getIn$1(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }
  return errors;
}
function validateYupSchema(values2, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }
  if (context === void 0) {
    context = {};
  }
  var validateData = prepareDataForValidation(values2);
  return schema[sync ? "validateSync" : "validate"](validateData, {
    abortEarly: false,
    context
  });
}
function prepareDataForValidation(values2) {
  var data = Array.isArray(values2) ? [] : {};
  for (var k2 in values2) {
    if (Object.prototype.hasOwnProperty.call(values2, k2)) {
      var key = String(k2);
      if (Array.isArray(values2[key]) === true) {
        data[key] = values2[key].map(function(value) {
          if (Array.isArray(value) === true || isPlainObject$1(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== "" ? value : void 0;
          }
        });
      } else if (isPlainObject$1(values2[key])) {
        data[key] = prepareDataForValidation(values2[key]);
      } else {
        data[key] = values2[key] !== "" ? values2[key] : void 0;
      }
    }
  }
  return data;
}
function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge2(e2, i) {
    if (typeof destination[i] === "undefined") {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e2);
      destination[i] = shouldClone ? deepmerge_1(Array.isArray(e2) ? [] : {}, e2, options) : e2;
    } else if (options.isMergeableObject(e2)) {
      destination[i] = deepmerge_1(target[i], e2, options);
    } else if (target.indexOf(e2) === -1) {
      destination.push(e2);
    }
  });
  return destination;
}
function getSelectedValues(options) {
  return Array.from(options).filter(function(el) {
    return el.selected;
  }).map(function(el) {
    return el.value;
  });
}
function getValueForCheckbox(currentValue, checked, valueProp) {
  if (typeof currentValue === "boolean") {
    return Boolean(checked);
  }
  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;
  if (!Array.isArray(currentValue)) {
    if (!valueProp || valueProp == "true" || valueProp == "false") {
      return Boolean(checked);
    }
  } else {
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  }
  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  }
  if (!isValueInArray) {
    return currentArrayOfValues;
  }
  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
function useEventCallback$1(fn) {
  var ref = useRef(fn);
  useIsomorphicLayoutEffect(function() {
    ref.current = fn;
  });
  return useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current.apply(void 0, args);
  }, []);
}
var Form$1 = /* @__PURE__ */ forwardRef(function(props, ref) {
  var action2 = props.action, rest = _objectWithoutPropertiesLoose$3(props, ["action"]);
  var _action = action2 != null ? action2 : "#";
  var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
  return createElement("form", Object.assign({
    onSubmit: handleSubmit,
    ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form$1.displayName = "Form";
var move = function move2(array2, from2, to) {
  var copy2 = copyArrayLike(array2);
  var value = copy2[from2];
  copy2.splice(from2, 1);
  copy2.splice(to, 0, value);
  return copy2;
};
var swap = function swap2(arrayLike, indexA, indexB) {
  var copy2 = copyArrayLike(arrayLike);
  var a = copy2[indexA];
  copy2[indexA] = copy2[indexB];
  copy2[indexB] = a;
  return copy2;
};
var insert = function insert2(arrayLike, index, value) {
  var copy2 = copyArrayLike(arrayLike);
  copy2.splice(index, 0, value);
  return copy2;
};
var replace$1 = function replace(arrayLike, index, value) {
  var copy2 = copyArrayLike(arrayLike);
  copy2[index] = value;
  return copy2;
};
var copyArrayLike = function copyArrayLike2(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function(key) {
      return parseInt(key);
    }).reduce(function(max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends$1({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};
var FieldArrayInner = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$1(FieldArrayInner2, _React$Component);
  function FieldArrayInner2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.updateArrayField = function(fn, alterTouched, alterErrors) {
      var _this$props = _this.props, name2 = _this$props.name, setFormikState = _this$props.formik.setFormikState;
      setFormikState(function(prevState) {
        var updateErrors = typeof alterErrors === "function" ? alterErrors : fn;
        var updateTouched = typeof alterTouched === "function" ? alterTouched : fn;
        var values2 = setIn(prevState.values, name2, fn(getIn$1(prevState.values, name2)));
        var fieldError = alterErrors ? updateErrors(getIn$1(prevState.errors, name2)) : void 0;
        var fieldTouched = alterTouched ? updateTouched(getIn$1(prevState.touched, name2)) : void 0;
        if (isEmptyArray(fieldError)) {
          fieldError = void 0;
        }
        if (isEmptyArray(fieldTouched)) {
          fieldTouched = void 0;
        }
        return _extends$1({}, prevState, {
          values: values2,
          errors: alterErrors ? setIn(prevState.errors, name2, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name2, fieldTouched) : prevState.touched
        });
      });
    };
    _this.push = function(value) {
      return _this.updateArrayField(function(arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [cloneDeep(value)]);
      }, false, false);
    };
    _this.handlePush = function(value) {
      return function() {
        return _this.push(value);
      };
    };
    _this.swap = function(indexA, indexB) {
      return _this.updateArrayField(function(array2) {
        return swap(array2, indexA, indexB);
      }, true, true);
    };
    _this.handleSwap = function(indexA, indexB) {
      return function() {
        return _this.swap(indexA, indexB);
      };
    };
    _this.move = function(from2, to) {
      return _this.updateArrayField(function(array2) {
        return move(array2, from2, to);
      }, true, true);
    };
    _this.handleMove = function(from2, to) {
      return function() {
        return _this.move(from2, to);
      };
    };
    _this.insert = function(index, value) {
      return _this.updateArrayField(function(array2) {
        return insert(array2, index, value);
      }, function(array2) {
        return insert(array2, index, null);
      }, function(array2) {
        return insert(array2, index, null);
      });
    };
    _this.handleInsert = function(index, value) {
      return function() {
        return _this.insert(index, value);
      };
    };
    _this.replace = function(index, value) {
      return _this.updateArrayField(function(array2) {
        return replace$1(array2, index, value);
      }, false, false);
    };
    _this.handleReplace = function(index, value) {
      return function() {
        return _this.replace(index, value);
      };
    };
    _this.unshift = function(value) {
      var length2 = -1;
      _this.updateArrayField(function(array2) {
        var arr = array2 ? [value].concat(array2) : [value];
        if (length2 < 0) {
          length2 = arr.length;
        }
        return arr;
      }, function(array2) {
        var arr = array2 ? [null].concat(array2) : [null];
        if (length2 < 0) {
          length2 = arr.length;
        }
        return arr;
      }, function(array2) {
        var arr = array2 ? [null].concat(array2) : [null];
        if (length2 < 0) {
          length2 = arr.length;
        }
        return arr;
      });
      return length2;
    };
    _this.handleUnshift = function(value) {
      return function() {
        return _this.unshift(value);
      };
    };
    _this.handleRemove = function(index) {
      return function() {
        return _this.remove(index);
      };
    };
    _this.handlePop = function() {
      return function() {
        return _this.pop();
      };
    };
    _this.remove = _this.remove.bind(_assertThisInitialized$3(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized$3(_this));
    return _this;
  }
  var _proto = FieldArrayInner2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !reactFastCompare(getIn$1(prevProps.formik.values, prevProps.name), getIn$1(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };
  _proto.remove = function remove(index) {
    var result2;
    this.updateArrayField(
      function(array2) {
        var copy2 = array2 ? copyArrayLike(array2) : [];
        if (!result2) {
          result2 = copy2[index];
        }
        if (isFunction(copy2.splice)) {
          copy2.splice(index, 1);
        }
        return copy2;
      },
      true,
      true
    );
    return result2;
  };
  _proto.pop = function pop() {
    var result2;
    this.updateArrayField(
      function(array2) {
        var tmp = array2;
        if (!result2) {
          result2 = tmp && tmp.pop && tmp.pop();
        }
        return tmp;
      },
      true,
      true
    );
    return result2;
  };
  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };
    var _this$props2 = this.props, component = _this$props2.component, render2 = _this$props2.render, children = _this$props2.children, name2 = _this$props2.name, _this$props2$formik = _this$props2.formik, restOfFormik = _objectWithoutPropertiesLoose$3(_this$props2$formik, ["validate", "validationSchema"]);
    var props = _extends$1({}, arrayHelpers, {
      form: restOfFormik,
      name: name2
    });
    return component ? createElement(component, props) : render2 ? render2(props) : children ? typeof children === "function" ? children(props) : !isEmptyChildren(children) ? Children.only(children) : null : null;
  };
  return FieldArrayInner2;
}(Component);
FieldArrayInner.defaultProps = {
  validateOnChange: true
};
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2))
      for (t2 = 0; t2 < e2.length; t2++)
        e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t2 in e2)
        e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
    (e2 = arguments[f2++]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function isHostComponent(element) {
  return typeof element === "string";
}
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}
function extractEventHandlers(object2, excludeKeys = []) {
  if (object2 === void 0) {
    return {};
  }
  const result2 = {};
  Object.keys(object2).filter((prop) => prop.match(/^on[A-Z]/) && typeof object2[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result2[prop] = object2[prop];
  });
  return result2;
}
function resolveComponentProps(componentProps, ownerState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState);
  }
  return componentProps;
}
function isPlainObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
function formatMuiErrorMessage(code) {
  let url = "https://mui.com/production-error/?code=" + code;
  for (let i = 1; i < arguments.length; i += 1) {
    url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
}
function capitalize(string2) {
  if (typeof string2 !== "string") {
    throw new Error(formatMuiErrorMessage(7));
  }
  return string2.charAt(0).toUpperCase() + string2.slice(1);
}
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
function isMuiElement(element, muiNames) {
  return /* @__PURE__ */ React.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}
function ownerDocument(node2) {
  return node2 && node2.ownerDocument || document;
}
function ownerWindow(node2) {
  const doc = ownerDocument(node2);
  return doc.defaultView || window;
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
const useEnhancedEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var useEnhancedEffect$1 = useEnhancedEffect;
let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React.useState(idOverride);
  const id = idOverride || defaultId;
  React.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
const maybeReactUseId = React["useId"];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
function useControlled({
  controlled,
  default: defaultProp,
  name: name2,
  state = "value"
}) {
  const {
    current: isControlled
  } = React.useRef(controlled !== void 0);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect$1(() => {
    ref.current = fn;
  });
  return React.useCallback((...args) => (0, ref.current)(...args), []);
}
function useForkRef(...refs) {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node2) {
  const {
    type,
    tagName
  } = node2;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node2.readOnly) {
    return true;
  }
  if (node2.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = React.useCallback((node2) => {
    if (node2 != null) {
      prepare(node2.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = React.useRef(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function resolveProps(defaultProps2, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps2).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends({}, defaultProps2[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps2[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        output[propName] = slotProps;
      } else {
        output[propName] = _extends({}, slotProps);
        Object.keys(defaultSlotProps).forEach((slotPropName) => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === void 0) {
      output[propName] = defaultProps2[propName];
    }
  });
  return output;
}
function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach(
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          acc.push(getUtilityClass(key));
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}
const defaultGenerator = (componentName) => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator$1 = ClassNameGenerator;
const globalStateClassesMapping = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
}
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result2 = {};
  slots.forEach((slot) => {
    result2[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result2;
}
function omitEventHandlers(object2) {
  if (object2 === void 0) {
    return {};
  }
  const result2 = {};
  Object.keys(object2).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object2[prop] === "function")).forEach((prop) => {
    result2[prop] = object2[prop];
  });
  return result2;
}
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
const _excluded$L = ["elementType", "externalSlotProps", "ownerState"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState
  } = parameters, rest = _objectWithoutPropertiesLoose$2(parameters, _excluded$L);
  const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node2) {
  const tabindexAttr = parseInt(node2.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node2.contentEditable === "true" || (node2.nodeName === "AUDIO" || node2.nodeName === "VIDEO" || node2.nodeName === "DETAILS") && node2.getAttribute("tabindex") === null) {
    return 0;
  }
  return node2.tabIndex;
}
function isNonTabbableRadio(node2) {
  if (node2.tagName !== "INPUT" || node2.type !== "radio") {
    return false;
  }
  if (!node2.name) {
    return false;
  }
  const getRadio = (selector) => node2.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node2.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node2.name}"]`);
  }
  return roving !== node2;
}
function isNodeMatchingSelectorFocusable(node2) {
  if (node2.disabled || node2.tagName === "INPUT" && node2.type === "hidden" || isNonTabbableRadio(node2)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root2) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root2.querySelectorAll(candidatesSelector)).forEach((node2, i) => {
    const nodeTabIndex = getTabIndex(node2);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node2)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node2);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node2
      });
    }
  });
  return orderedTabNodes.sort((a, b2) => a.tabIndex === b2.tabIndex ? a.documentOrder - b2.documentOrder : a.tabIndex - b2.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React.useRef(false);
  const sentinelStart = React.useRef(null);
  const sentinelEnd = React.useRef(null);
  const nodeToRestore = React.useRef(null);
  const reactFocusEventTarget = React.useRef(null);
  const activated = React.useRef(false);
  const rootRef = React.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = React.useRef(null);
  React.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const contain = (nativeEvent) => {
      const {
        current: rootElement
      } = rootRef;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (!rootElement.contains(doc.activeElement)) {
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }
        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;
          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          }
        } else {
          rootElement.focus();
        }
      }
    };
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain(null);
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ React.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
function getContainer$1(container2) {
  return typeof container2 === "function" ? container2() : container2;
}
const Portal = /* @__PURE__ */ React.forwardRef(function Portal2(props, ref) {
  const {
    children,
    container: container2,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = useForkRef(/* @__PURE__ */ React.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect$1(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container2) || document.body);
    }
  }, [container2, disablePortal]);
  useEnhancedEffect$1(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ React.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /* @__PURE__ */ React.cloneElement(children, newProps);
    }
    return /* @__PURE__ */ jsx(React.Fragment, {
      children
    });
  }
  return /* @__PURE__ */ jsx(React.Fragment, {
    children: mountNode ? /* @__PURE__ */ ReactDOM.createPortal(children, mountNode) : mountNode
  });
});
var Portal$1 = Portal;
function isOverflowing(container2) {
  const doc = ownerDocument(container2);
  if (doc.body === container2) {
    return ownerWindow(container2).innerWidth > doc.documentElement.clientWidth;
  }
  return container2.scrollHeight > container2.clientHeight;
}
function ariaHidden(element, show2) {
  if (show2) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container2, mountElement, currentElement, elementsToExclude, show2) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container2.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show2);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container2 = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container2)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container2));
      restoreStyle.push({
        value: container2.style.paddingRight,
        property: "padding-right",
        el: container2
      });
      container2.style.paddingRight = `${getPaddingRight(container2) + scrollbarSize}px`;
      const fixedElements2 = ownerDocument(container2).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements2, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container2.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container2).body;
    } else {
      const parent = container2.parentElement;
      const containerWindow = ownerWindow(container2);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container2;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container2) {
  const hiddenSiblings = [];
  [].forEach.call(container2.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container2) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container2);
    ariaHiddenSiblings(container2, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container2);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container: container2,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
generateUtilityClasses("MuiModal", ["root", "hidden"]);
const _excluded$K = ["children", "classes", "closeAfterTransition", "component", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
const useUtilityClasses$o = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
function getContainer(container2) {
  return typeof container2 === "function" ? container2() : container2;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
const defaultManager = new ModalManager();
const ModalUnstyled = /* @__PURE__ */ React.forwardRef(function ModalUnstyled2(props, forwardedRef) {
  var _props$ariaHidden, _ref;
  const {
    children,
    classes: classesProp,
    closeAfterTransition = false,
    component,
    container: container2,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,
    onTransitionEnter,
    onTransitionExited,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$K);
  const [exited, setExited] = React.useState(!open);
  const modal = React.useRef({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const handleRef = useForkRef(modalRef, forwardedRef);
  const hasTransition = getHasTransition(children);
  const ariaHiddenProp = (_props$ariaHidden = props["aria-hidden"]) != null ? _props$ariaHidden : true;
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container2) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback((node2) => {
    mountNodeRef.current = node2;
    if (!node2 || !modalRef.current) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const ownerState = _extends({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });
  const classes = useUtilityClasses$o(ownerState);
  const handleEnter = () => {
    setExited(false);
    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };
  const handleExited = () => {
    setExited(true);
    if (onTransitionExited) {
      onTransitionExited();
    }
    if (closeAfterTransition) {
      handleClose();
    }
  };
  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const handleKeyDown2 = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  const Root = (_ref = component != null ? component : slots.root) != null ? _ref : "div";
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRef,
      role: "presentation",
      onKeyDown: handleKeyDown2
    },
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = useSlotProps({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    additionalProps: {
      "aria-hidden": true,
      onClick: handleBackdropClick,
      open
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    Portal$1,
    {
      ref: handlePortalRef,
      container: container2,
      disablePortal,
      children: /* @__PURE__ */ jsxs(Root, _extends({}, rootProps, {
        children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsx(BackdropComponent, _extends({}, backdropProps)) : null, /* @__PURE__ */ jsx(FocusTrap, {
          disableEnforceFocus,
          disableAutoFocus,
          disableRestoreFocus,
          isEnabled: isTopModal,
          open,
          children: /* @__PURE__ */ React.cloneElement(children, childProps)
        })]
      }))
    }
  );
});
var ModalUnstyled$1 = ModalUnstyled;
const _excluded$J = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue$1(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}
const styles$3 = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)"
  }
};
function isEmpty$4(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
const TextareaAutosize = /* @__PURE__ */ React.forwardRef(function TextareaAutosize2(props, ref) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style: style2,
    value
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$J);
  const {
    current: isControlled
  } = React.useRef(value != null);
  const inputRef = React.useRef(null);
  const handleRef = useForkRef(ref, inputRef);
  const shadowRef = React.useRef(null);
  const renders = React.useRef(0);
  const [state, setState] = React.useState({});
  const getUpdatedState = React.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {};
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing2 = computedStyle["box-sizing"];
    const padding2 = getStyleValue$1(computedStyle, "padding-bottom") + getStyleValue$1(computedStyle, "padding-top");
    const border2 = getStyleValue$1(computedStyle, "border-bottom-width") + getStyleValue$1(computedStyle, "border-top-width");
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing2 === "border-box" ? padding2 + border2 : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    return prevState;
  };
  const syncHeight = React.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty$4(newState)) {
      return;
    }
    setState((prevState) => {
      return updateState(prevState, newState);
    });
  }, [getUpdatedState]);
  const syncHeightWithFlushSycn = () => {
    const newState = getUpdatedState();
    if (isEmpty$4(newState)) {
      return;
    }
    flushSync(() => {
      setState((prevState) => {
        return updateState(prevState, newState);
      });
    });
  };
  React.useEffect(() => {
    const handleResize = debounce(() => {
      renders.current = 0;
      if (inputRef.current) {
        syncHeightWithFlushSycn();
      }
    });
    const containerWindow = ownerWindow(inputRef.current);
    containerWindow.addEventListener("resize", handleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(inputRef.current);
    }
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });
  useEnhancedEffect$1(() => {
    syncHeight();
  });
  React.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        overflow: state.overflow ? "hidden" : null
      }, style2)
    }, other)), /* @__PURE__ */ jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles$3.shadow, style2, {
        padding: 0
      })
    })]
  });
});
var TextareaAutosize$1 = TextareaAutosize;
function memoize$1(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$1(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
);
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert3(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace2(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array2) {
  return array2.push(value), value;
}
function combine(array2, callback) {
  return array2.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type, props, children, length2) {
  return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root2, props) {
  return assign(node("", null, null, "", null, null, 0), root2, { length: -root2.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace2(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace2(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k2 = 0; i < index; ++i)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace2(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root2, parent) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root2, parent, length2) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k2 = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k2++) {
      element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace2(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace2(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace2(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace2(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace2(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace2(value, "-grow", "") + WEBKIT + value + MS + replace2(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace2(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace2(replace2(replace2(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace2(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace2(replace2(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace2(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace2(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace2(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace2(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace2(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace2(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace2(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace2(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace2(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace2(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace2(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace2(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace2(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container2;
  var nodesToHydrate = [];
  {
    container2 = options.container || document.head;
    Array.prototype.forEach.call(
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert3(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container: container2,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag2) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag2 === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag2) {
  registerStyles(cache, serialized, isStringTag2);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result2 = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result2);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string2 = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string2 += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string2 += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string2 += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string2 += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string2 += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string2 += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string2;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      styles2 += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name2 = murmur2(styles2) + identifierName;
  return {
    name: name2,
    styles: styles2,
    next: cursor
  };
};
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || useLayoutEffect;
var EmotionCacheContext = /* @__PURE__ */ createContext(
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ forwardRef(function(props, ref) {
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext$2 = /* @__PURE__ */ createContext({});
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, useContext(ThemeContext$2));
  var sheetRef = useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name2 = "animation-" + insertable.name;
  return {
    name: name2,
    styles: "@keyframes " + name2 + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString2() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag2);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag2);
  });
  return null;
};
var createStyled$1 = function createStyled(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = useContext(ThemeContext$2);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled$1.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
var emStyled = newStyled;
function isEmpty$3(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$1(props) {
  const {
    styles: styles2,
    defaultTheme: defaultTheme2 = {}
  } = props;
  const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty$3(themeInput) ? defaultTheme2 : themeInput) : styles2;
  return /* @__PURE__ */ jsx(Global, {
    styles: globalStyles
  });
}
/**
 * @mui/styled-engine v5.11.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled$2(tag, options) {
  const stylesFactory = emStyled(tag, options);
  return stylesFactory;
}
const internal_processStyles = (tag, processor) => {
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
  });
}
const values$1 = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};
const defaultBreakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values$1[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style2) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style2);
}
function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== "string") {
    return null;
  }
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;
  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = {};
  fn.filterProps = [prop];
  return fn;
}
function compose(...styles2) {
  const handlers = styles2.reduce((acc, style2) => {
    style2.filterProps.forEach((prop) => {
      acc[prop] = style2;
    });
    return acc;
  }, {});
  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = {};
  fn.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
  return fn;
}
function memoize(fn) {
  const cache = {};
  return (arg) => {
    if (cache[arg] === void 0) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
const properties = {
  m: "margin",
  p: "padding"
};
const directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
const aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
const getCssProperties = memoize((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b2] = prop.split("");
  const property = properties[a];
  const direction = directions[b2] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing * abs2;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing[abs2];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8);
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs2 = Math.abs(propValue);
  const transformed = transformer(abs2);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys2, prop, transformer) {
  if (keys2.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys2) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys2, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style(props, marginKeys);
}
margin.propTypes = {};
margin.filterProps = marginKeys;
function padding(props) {
  return style(props, paddingKeys);
}
padding.propTypes = {};
padding.filterProps = paddingKeys;
function borderTransform(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
const border = style$1({
  prop: "border",
  themeKey: "borders",
  transform: borderTransform
});
const borderTop = style$1({
  prop: "borderTop",
  themeKey: "borders",
  transform: borderTransform
});
const borderRight = style$1({
  prop: "borderRight",
  themeKey: "borders",
  transform: borderTransform
});
const borderBottom = style$1({
  prop: "borderBottom",
  themeKey: "borders",
  transform: borderTransform
});
const borderLeft = style$1({
  prop: "borderLeft",
  themeKey: "borders",
  transform: borderTransform
});
const borderColor = style$1({
  prop: "borderColor",
  themeKey: "palette"
});
const borderTopColor = style$1({
  prop: "borderTopColor",
  themeKey: "palette"
});
const borderRightColor = style$1({
  prop: "borderRightColor",
  themeKey: "palette"
});
const borderBottomColor = style$1({
  prop: "borderBottomColor",
  themeKey: "palette"
});
const borderLeftColor = style$1({
  prop: "borderLeftColor",
  themeKey: "palette"
});
const borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = {};
borderRadius.filterProps = ["borderRadius"];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
const gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = {};
gap.filterProps = ["gap"];
const columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = {};
columnGap.filterProps = ["columnGap"];
const rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = {};
rowGap.filterProps = ["rowGap"];
const gridColumn = style$1({
  prop: "gridColumn"
});
const gridRow = style$1({
  prop: "gridRow"
});
const gridAutoFlow = style$1({
  prop: "gridAutoFlow"
});
const gridAutoColumns = style$1({
  prop: "gridAutoColumns"
});
const gridAutoRows = style$1({
  prop: "gridAutoRows"
});
const gridTemplateColumns = style$1({
  prop: "gridTemplateColumns"
});
const gridTemplateRows = style$1({
  prop: "gridTemplateRows"
});
const gridTemplateAreas = style$1({
  prop: "gridTemplateAreas"
});
const gridArea = style$1({
  prop: "gridArea"
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
function paletteTransform(value, userValue) {
  if (userValue === "grey") {
    return userValue;
  }
  return value;
}
const color = style$1({
  prop: "color",
  themeKey: "palette",
  transform: paletteTransform
});
const bgcolor = style$1({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
const backgroundColor = style$1({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$1({
  prop: "width",
  transform: sizingTransform
});
const maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values$1[propValue];
      return {
        maxWidth: breakpoint || sizingTransform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
const minWidth = style$1({
  prop: "minWidth",
  transform: sizingTransform
});
const height = style$1({
  prop: "height",
  transform: sizingTransform
});
const maxHeight = style$1({
  prop: "maxHeight",
  transform: sizingTransform
});
const minHeight = style$1({
  prop: "minHeight",
  transform: sizingTransform
});
style$1({
  prop: "size",
  cssProperty: "width",
  transform: sizingTransform
});
style$1({
  prop: "size",
  cssProperty: "height",
  transform: sizingTransform
});
const boxSizing = style$1({
  prop: "boxSizing"
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
const defaultSxConfig = {
  border: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderTop: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderRight: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderBottom: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderLeft: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: borderRadius
  },
  color: {
    themeKey: "palette",
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: "palette",
    transform: paletteTransform
  },
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  displayPrint: {
    cssProperty: false,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: {
    themeKey: "shadows"
  },
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: "typography"
  }
};
var defaultSxConfig$1 = defaultSxConfig;
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys2, object2) => keys2.concat(Object.keys(object2)), []);
  const union = new Set(allKeys);
  return objects.every((object2) => union.size === Object.keys(object2).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config2) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config2[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style: style2
    } = options;
    if (val == null) {
      return null;
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style2) {
      return style2(props);
    }
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx2(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null;
    }
    const config2 = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (config2[styleKey]) {
              css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, (x2) => ({
                [styleKey]: x2
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme
                });
              } else {
                css2 = merge(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge(css2, getThemeValue(styleKey, value, theme, config2));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
var styleFunctionSx$1 = styleFunctionSx;
const _excluded$I = ["sx"];
const splitProps = (props) => {
  var _props$theme$unstable, _props$theme;
  const result2 = {
    systemProps: {},
    otherProps: {}
  };
  const config2 = (_props$theme$unstable = props == null ? void 0 : (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig$1;
  Object.keys(props).forEach((prop) => {
    if (config2[prop]) {
      result2.systemProps[prop] = props[prop];
    } else {
      result2.otherProps[prop] = props[prop];
    }
  });
  return result2;
};
function extendSxProp(props) {
  const {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$I);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result2 = inSx(...args);
      if (!isPlainObject(result2)) {
        return systemProps;
      }
      return _extends({}, systemProps, result2);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx
  });
}
const _excluded$H = ["values", "unit", "step"];
const sortBreakpointsValues = (values2) => {
  const breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    values: values2 = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose$2(breakpoints, _excluded$H);
  const sortedValues = sortBreakpointsValues(values2);
  const keys2 = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys2.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys2[endIndex]] === "number" ? values2[keys2[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys2.indexOf(key) + 1 < keys2.length) {
      return between(key, keys2[keys2.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys2.indexOf(key);
    if (keyIndex === 0) {
      return up(keys2[1]);
    }
    if (keyIndex === keys2.length - 1) {
      return down(keys2[keyIndex]);
    }
    return between(key, keys2[keys2.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys: keys2,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}
const shape = {
  borderRadius: 4
};
var shape$1 = shape;
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing.mui = true;
  return spacing;
}
const _excluded$G = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose$2(options, _excluded$G);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing,
    shape: _extends({}, shape$1, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
const ThemeContext = /* @__PURE__ */ React.createContext(null);
var ThemeContext$1 = ThemeContext;
function useTheme$3() {
  const theme = React.useContext(ThemeContext$1);
  return theme;
}
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme2 = null) {
  const contextTheme = useTheme$3();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
const systemDefaultTheme$1 = createTheme$1();
function useTheme$1(defaultTheme2 = systemDefaultTheme$1) {
  return useTheme$2(defaultTheme2);
}
const _excluded$F = ["variant"];
function isEmpty$2(string2) {
  return string2.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$F);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty$2(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$2(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}
const _excluded$E = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], _excluded2$2 = ["theme"], _excluded3 = ["theme"];
function isEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96;
}
const getStyleOverrides = (name2, theme) => {
  if (theme.components && theme.components[name2] && theme.components[name2].styleOverrides) {
    return theme.components[name2].styleOverrides;
  }
  return null;
};
const getVariantStyles = (name2, theme) => {
  let variants = [];
  if (theme && theme.components && theme.components[name2] && theme.components[name2].variants) {
    variants = theme.components[name2].variants;
  }
  const variantsStyles = {};
  variants.forEach((definition) => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};
const variantsResolver = (props, styles2, theme, name2) => {
  var _theme$components, _theme$components$nam;
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name2]) == null ? void 0 : _theme$components$nam.variants;
  if (themeVariants) {
    themeVariants.forEach((themeVariant) => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach((key) => {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });
      if (isMatch) {
        variantsStyles.push(styles2[propsToClassKey(themeVariant.props)]);
      }
    });
  }
  return variantsStyles;
};
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const systemDefaultTheme = createTheme$1();
function createStyled2(input = {}) {
  const {
    defaultTheme: defaultTheme2 = systemDefaultTheme,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
  } = input;
  const systemSx = (props) => {
    const theme = isEmpty$1(props.theme) ? defaultTheme2 : props.theme;
    return styleFunctionSx$1(_extends({}, props, {
      theme
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles2) => styles2.filter((style2) => !(style2 != null && style2.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions, options = _objectWithoutPropertiesLoose$2(inputOptions, _excluded$E);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : componentSlot && componentSlot !== "Root" || false;
    const skipSx = inputSkipSx || false;
    let label2;
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled$2(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label: label2
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
        return typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg ? (_ref) => {
          let {
            theme: themeInput
          } = _ref, other = _objectWithoutPropertiesLoose$2(_ref, _excluded2$2);
          return stylesArg(_extends({
            theme: isEmpty$1(themeInput) ? defaultTheme2 : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme2 : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(_extends({}, props, {
                theme
              })) : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme2 : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === "function" && styleArg.__emotion_real !== styleArg) {
        transformedStyleArg = (_ref2) => {
          let {
            theme: themeInput
          } = _ref2, other = _objectWithoutPropertiesLoose$2(_ref2, _excluded3);
          return styleArg(_extends({
            theme: isEmpty$1(themeInput) ? defaultTheme2 : themeInput
          }, other));
        };
      }
      const Component2 = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      return Component2;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
function getThemeProps(params) {
  const {
    theme,
    name: name2,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name2] || !theme.components[name2].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name2].defaultProps, props);
}
function useThemeProps$1({
  props,
  name: name2,
  defaultTheme: defaultTheme2
}) {
  const theme = useTheme$1(defaultTheme2);
  const mergedProps = getThemeProps({
    theme,
    name: name2,
    props
  });
  return mergedProps;
}
function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors = color2.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n2) => n2 + n2);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(9, color2));
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color2) {
  const {
    type,
    colorSpace
  } = color2;
  let {
    values: values2
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map((n2, i) => i < 3 ? parseInt(n2, 10) : n2);
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = `${values2[1]}%`;
    values2[2] = `${values2[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values2 = `${colorSpace} ${values2.join(" ")}`;
  } else {
    values2 = `${values2.join(", ")}`;
  }
  return `${type}(${values2})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values2
  } = color2;
  const h2 = values2[0];
  const s = values2[1] / 100;
  const l2 = values2[2] / 100;
  const a = s * Math.min(l2, 1 - l2);
  const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background2) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background2);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  if (color2.type === "color") {
    color2.values[3] = `/${value}`;
  } else {
    color2.values[3] = value;
  }
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (1 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}
const common = {
  black: "#000",
  white: "#fff"
};
var common$1 = common;
const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
var grey$1 = grey;
const purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
};
var purple$1 = purple;
const red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
var red$1 = red;
const orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
var orange$1 = orange;
const blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
var blue$1 = blue;
const lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
};
var lightBlue$1 = lightBlue;
const green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
var green$1 = green;
const _excluded$D = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: common$1.white,
    default: common$1.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common$1.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common$1.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue$1[200],
      light: blue$1[50],
      dark: blue$1[400]
    };
  }
  return {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple$1[200],
      light: purple$1[50],
      dark: purple$1[400]
    };
  }
  return {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red$1[500],
      light: red$1[300],
      dark: red$1[700]
    };
  }
  return {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue$1[400],
      light: lightBlue$1[300],
      dark: lightBlue$1[700]
    };
  }
  return {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green$1[400],
      light: green$1[300],
      dark: green$1[700]
    };
  }
  return {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }
  return {
    main: "#ed6c02",
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(palette) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette, other = _objectWithoutPropertiesLoose$2(palette, _excluded$D);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info2 = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning2 = palette.warning || getDefaultWarning(mode);
  function getContrastText(background2) {
    const contrastText = getContrastRatio(background2, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name: name2,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(formatMuiErrorMessage(11, name2 ? ` (${name2})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(formatMuiErrorMessage(12, name2 ? ` (${name2})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light
  };
  const paletteOutput = deepmerge(_extends({
    common: _extends({}, common$1),
    mode,
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: augmentColor({
      color: error,
      name: "error"
    }),
    warning: augmentColor({
      color: warning2,
      name: "warning"
    }),
    info: augmentColor({
      color: info2,
      name: "info"
    }),
    success: augmentColor({
      color: success,
      name: "success"
    }),
    grey: grey$1,
    contrastThreshold,
    getContrastText,
    augmentColor,
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}
const _excluded$C = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: "uppercase"
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
  const _ref = typeof typography === "function" ? typography(palette) : typography, {
    fontFamily = defaultFontFamily,
    fontSize = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose$2(_ref, _excluded$C);
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
  });
}
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows$1 = shadows;
const _excluded$B = ["duration", "easing", "delay"];
const easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options;
    _objectWithoutPropertiesLoose$2(options, _excluded$B);
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}
const zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex$1 = zIndex;
const _excluded$A = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose$2(options, _excluded$A);
  if (options.vars) {
    throw new Error(formatMuiErrorMessage(18));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    shadows: shadows$1.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
const defaultTheme = createTheme();
var defaultTheme$1 = defaultTheme;
const rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
const slotShouldForwardProp = shouldForwardProp;
const styled = createStyled2({
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
});
var styled$1 = styled;
function useThemeProps({
  props,
  name: name2
}) {
  return useThemeProps$1({
    props,
    name: name2,
    defaultTheme: defaultTheme$1
  });
}
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}
const FormControlContext = /* @__PURE__ */ React.createContext(void 0);
var FormControlContext$1 = FormControlContext;
function useFormControl() {
  return React.useContext(FormControlContext$1);
}
function GlobalStyles(props) {
  return /* @__PURE__ */ jsx(GlobalStyles$1, _extends({}, props, {
    defaultTheme: defaultTheme$1
  }));
}
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
const inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var inputBaseClasses$1 = inputBaseClasses;
const _excluded$z = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
const rootOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.formControl && styles2.formControl, ownerState.startAdornment && styles2.adornedStart, ownerState.endAdornment && styles2.adornedEnd, ownerState.error && styles2.error, ownerState.size === "small" && styles2.sizeSmall, ownerState.multiline && styles2.multiline, ownerState.color && styles2[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.hiddenLabel && styles2.hiddenLabel];
};
const inputOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.input, ownerState.size === "small" && styles2.inputSizeSmall, ownerState.multiline && styles2.inputMultiline, ownerState.type === "search" && styles2.inputTypeSearch, ownerState.startAdornment && styles2.inputAdornedStart, ownerState.endAdornment && styles2.inputAdornedEnd, ownerState.hiddenLabel && styles2.inputHiddenLabel];
};
const useUtilityClasses$n = (ownerState) => {
  const {
    classes,
    color: color2,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size === "small" && "sizeSmall", multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = styled$1("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  boxSizing: "border-box",
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
}));
const InputBaseComponent = styled$1("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light2 = theme.palette.mode === "light";
  const placeholder = _extends({
    color: "currentColor"
  }, theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  }, {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  });
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  };
  return _extends({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    margin: 0,
    WebkitTapHighlightColor: "transparent",
    display: "block",
    minWidth: 0,
    width: "100%",
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    "&:-ms-input-placeholder": placeholder,
    "&::-ms-input-placeholder": placeholder,
    "&:focus": {
      outline: 0
    },
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      WebkitAppearance: "none"
    },
    [`label[data-shrink=false] + .${inputBaseClasses$1.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      "&:-ms-input-placeholder": placeholderHidden,
      "&::-ms-input-placeholder": placeholderHidden,
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      "&:focus:-ms-input-placeholder": placeholderVisible,
      "&:focus::-ms-input-placeholder": placeholderVisible
    },
    [`&.${inputBaseClasses$1.disabled}`]: {
      opacity: 1,
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    MozAppearance: "textfield"
  });
});
const inputGlobalStyles = /* @__PURE__ */ jsx(GlobalStyles, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
});
const InputBase = /* @__PURE__ */ React.forwardRef(function InputBase2(inProps, ref) {
  var _slotProps$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name: name2,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$z);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = React.useRef(value != null);
  const inputRef = React.useRef();
  const handleInputRefWarning = React.useCallback((instance) => {
  }, []);
  const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = React.useState(false);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = React.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect$1(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  React.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      inputProps = _extends({
        type: void 0,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: void 0,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize$1;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = useUtilityClasses$n(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input3 = slots.input || components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /* @__PURE__ */ jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx(classes.root, rootProps.className, className),
      children: [startAdornment, /* @__PURE__ */ jsx(FormControlContext$1.Provider, {
        value: null,
        children: /* @__PURE__ */ jsx(Input3, _extends({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name: name2,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent(Input3) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx(classes.input, inputProps.className),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
var InputBase$1 = InputBase;
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
const inputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiInput", ["root", "underline", "input"]));
var inputClasses$1 = inputClasses;
const _excluded$y = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$m = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const InputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light2 = theme.palette.mode === "light";
  let bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return _extends({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
    },
    [`&.${inputClasses$1.focused}:after`]: {
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${inputClasses$1.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
    },
    [`&:hover:not(.${inputClasses$1.disabled}, .${inputClasses$1.error}):before`]: {
      borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
      "@media (hover: none)": {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
});
const InputInput = styled$1(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
const Input = /* @__PURE__ */ React.forwardRef(function Input2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$y);
  const classes = useUtilityClasses$m(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /* @__PURE__ */ jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
Input.muiName = "Input";
var Input$1 = Input;
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
const filledInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"]));
var filledInputClasses$1 = filledInputClasses;
const _excluded$x = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$l = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const FilledInputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme,
  ownerState
}) => {
  var _palette;
  const light2 = theme.palette.mode === "light";
  const bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor2 = light2 ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return _extends({
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2
      }
    },
    [`&.${filledInputClasses$1.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor2
    },
    [`&.${filledInputClasses$1.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main}`,
      left: 0,
      bottom: 0,
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
    },
    [`&.${filledInputClasses$1.focused}:after`]: {
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${filledInputClasses$1.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
      left: 0,
      bottom: 0,
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
    },
    [`&:hover:not(.${filledInputClasses$1.disabled}, .${filledInputClasses$1.error}):before`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
    },
    [`&.${filledInputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
});
const FilledInputInput = styled$1(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}));
const FilledInput = /* @__PURE__ */ React.forwardRef(function FilledInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$x);
  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = useUtilityClasses$l(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return /* @__PURE__ */ jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
FilledInput.muiName = "Input";
var FilledInput$1 = FilledInput;
var _span$2;
const _excluded$w = ["children", "classes", "className", "label", "notched"];
const NotchedOutlineRoot$1 = styled$1("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
const NotchedOutlineLegend = styled$1("legend")(({
  ownerState,
  theme
}) => _extends({
  float: "unset",
  width: "auto",
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  transition: theme.transitions.create("width", {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends({
  display: "block",
  padding: 0,
  height: 11,
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme.transitions.create("max-width", {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme.transitions.create("max-width", {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  const {
    className,
    label: label2,
    notched
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$w);
  const withLabel = label2 != null && label2 !== "";
  const ownerState = _extends({}, props, {
    notched,
    withLabel
  });
  return /* @__PURE__ */ jsx(NotchedOutlineRoot$1, _extends({
    "aria-hidden": true,
    className,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ jsx("span", {
        children: label2
      }) : _span$2 || (_span$2 = /* @__PURE__ */ jsx("span", {
        className: "notranslate",
        children: "\u200B"
      }))
    })
  }));
}
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
const outlinedInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
var outlinedInputClasses$1 = outlinedInputClasses;
const _excluded$v = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
const useUtilityClasses$k = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const OutlinedInputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor2 = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends({
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
      }
    },
    [`&.${outlinedInputClasses$1.focused} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses$1.error} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    [`&.${outlinedInputClasses$1.disabled} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
});
const NotchedOutlineRoot = styled$1(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles2) => styles2.notchedOutline
})(({
  theme
}) => {
  const borderColor2 = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
  };
});
const OutlinedInputInput = styled$1(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  padding: "16.5px 14px"
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
const OutlinedInput = /* @__PURE__ */ React.forwardRef(function OutlinedInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  const props = useThemeProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label: label2,
    multiline = false,
    notched,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$v);
  const classes = useUtilityClasses$k(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["required"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  });
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return /* @__PURE__ */ jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => /* @__PURE__ */ jsx(NotchedOutlineRoot, {
      ownerState,
      className: classes.notchedOutline,
      label: label2 != null && label2 !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ jsxs(React.Fragment, {
        children: [label2, "\xA0", "*"]
      })) : label2,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
OutlinedInput.muiName = "Input";
var OutlinedInput$1 = OutlinedInput;
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
const formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
var formLabelClasses$1 = formLabelClasses;
const _excluded$u = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
const useUtilityClasses$j = (ownerState) => {
  const {
    classes,
    color: color2,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = styled$1("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, ownerState.color === "secondary" && styles2.colorSecondary, ownerState.filled && styles2.filled);
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses$1.focused}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${formLabelClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formLabelClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const AsteriskComponent = styled$1("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles2) => styles2.asterisk
})(({
  theme
}) => ({
  [`&.${formLabelClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const FormLabel = /* @__PURE__ */ React.forwardRef(function FormLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$u);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$j(ownerState);
  return /* @__PURE__ */ jsxs(FormLabelRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: [children, fcs.required && /* @__PURE__ */ jsxs(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: ["\u2009", "*"]
    })]
  }));
});
var FormLabel$1 = FormLabel;
function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiInputLabel", slot);
}
generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const _excluded$t = ["disableAnimation", "margin", "shrink", "variant", "className"];
const useUtilityClasses$i = (ownerState) => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size === "small" && "sizeSmall", variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return _extends({}, classes, composedClasses);
};
const InputLabelRoot = styled$1(FormLabel$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses$1.asterisk}`]: styles2.asterisk
    }, styles2.root, ownerState.formControl && styles2.formControl, ownerState.size === "small" && styles2.sizeSmall, ownerState.shrink && styles2.shrink, !ownerState.disableAnimation && styles2.animated, styles2[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, ownerState.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  transform: "translate(0, 20px) scale(1)"
}, ownerState.size === "small" && {
  transform: "translate(0, 17px) scale(1)"
}, ownerState.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !ownerState.disableAnimation && {
  transition: theme.transitions.create(["color", "transform", "max-width"], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.variant === "filled" && _extends({
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, ownerState.shrink && _extends({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), ownerState.variant === "outlined" && _extends({
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, ownerState.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  maxWidth: "calc(133% - 24px)",
  transform: "translate(14px, -9px) scale(0.75)"
})));
const InputLabel = /* @__PURE__ */ React.forwardRef(function InputLabel2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    shrink: shrinkProp,
    className
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$t);
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required"]
  });
  const ownerState = _extends({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required
  });
  const classes = useUtilityClasses$i(ownerState);
  return /* @__PURE__ */ jsx(InputLabelRoot, _extends({
    "data-shrink": shrink,
    ownerState,
    ref,
    className: clsx(classes.root, className)
  }, other, {
    classes
  }));
});
var InputLabel$1 = InputLabel;
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _excluded$s = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
const useUtilityClasses$h = (ownerState) => {
  const {
    classes,
    margin: margin2,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin2 !== "none" && `margin${capitalize(margin2)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = styled$1("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, styles2[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles2.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
}));
const FormControl = /* @__PURE__ */ React.forwardRef(function FormControl2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color: color2 = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin: margin2 = "none",
    required = false,
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$s);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin: margin2,
    required,
    size,
    variant
  });
  const classes = useUtilityClasses$h(ownerState);
  const [adornedStart, setAdornedStart] = React.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      React.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = React.useState(() => {
    let initialFilled = false;
    if (children) {
      React.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = React.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const childContext = React.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color: color2,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onEmpty: () => {
        setFilled(false);
      },
      onFilled: () => {
        setFilled(true);
      },
      onFocus: () => {
        setFocused(true);
      },
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color2, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
  return /* @__PURE__ */ jsx(FormControlContext$1.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsx(FormControlRoot, _extends({
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref
    }, other, {
      children
    }))
  });
});
var FormControl$1 = FormControl;
function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass("MuiFormHelperText", slot);
}
const formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var formHelperTextClasses$1 = formHelperTextClasses;
var _span$1;
const _excluded$r = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
const useUtilityClasses$g = (ownerState) => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = styled$1("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.size && styles2[`size${capitalize(ownerState.size)}`], ownerState.contained && styles2.contained, ownerState.filled && styles2.filled];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses$1.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}, ownerState.size === "small" && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
}));
const FormHelperText = /* @__PURE__ */ React.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children,
    className,
    component = "p"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$r);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = _extends({}, props, {
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$g(ownerState);
  return /* @__PURE__ */ jsx(FormHelperTextRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: children === " " ? _span$1 || (_span$1 = /* @__PURE__ */ jsx("span", {
      className: "notranslate",
      children: "\u200B"
    })) : children
  }));
});
var FormHelperText$1 = FormHelperText;
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a) {
  if ("object" === typeof a && null !== a) {
    var r2 = a.$$typeof;
    switch (r2) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a;
              default:
                return r2;
            }
        }
      case c:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return v(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return v(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return v(a) === l;
};
reactIs_production_min.isFragment = function(a) {
  return v(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return v(a) === q;
};
reactIs_production_min.isMemo = function(a) {
  return v(a) === p;
};
reactIs_production_min.isPortal = function(a) {
  return v(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return v(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return v(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return v(a) === m;
};
reactIs_production_min.isSuspenseList = function(a) {
  return v(a) === n;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v;
const ListContext = /* @__PURE__ */ React.createContext({});
var ListContext$1 = ListContext;
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
const _excluded$q = ["children", "className", "component", "dense", "disablePadding", "subheader"];
const useUtilityClasses$f = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
const ListRoot = styled$1("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disablePadding && styles2.padding, ownerState.dense && styles2.dense, ownerState.subheader && styles2.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /* @__PURE__ */ React.forwardRef(function List2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$q);
  const context = React.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses$f(ownerState);
  return /* @__PURE__ */ jsx(ListContext$1.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxs(ListRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
var List$1 = List;
const _excluded$p = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
const MenuList = /* @__PURE__ */ React.forwardRef(function MenuList2(props, ref) {
  const {
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$p);
  const listRef = React.useRef(null);
  const textCriteriaRef = React.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
        listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown2 = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef(listRef, ref);
  let activeItemIndex = -1;
  React.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ React.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const items = React.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ React.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsx(List$1, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
var MenuList$1 = MenuList;
const getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var getOverlayAlpha$1 = getOverlayAlpha;
function useTheme() {
  const theme = useTheme$1(defaultTheme$1);
  return theme;
}
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const _excluded$o = ["className", "component", "elevation", "square", "variant"];
const useUtilityClasses$e = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled$1("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha$1(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha$1(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
const Paper = /* @__PURE__ */ React.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$o);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses$e(ownerState);
  return /* @__PURE__ */ jsx(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other));
});
var Paper$1 = Paper;
function _setPrototypeOf$2(o, p2) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$2(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$2(subClass, superClass);
}
var config = {
  disabled: false
};
var TransitionGroupContext = React__default.createContext(null);
var forceReflow = function forceReflow2(node2) {
  return node2.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;
    if (timeout != null && typeof timeout !== "number") {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear !== void 0 ? timeout.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
          if (node2)
            forceReflow(node2);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM__default.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active2 = true;
    this.nextCallback = function(event) {
      if (active2) {
        active2 = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active2 = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
    if (!node2 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose$2(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return /* @__PURE__ */ React__default.createElement(TransitionGroupContext.Provider, {
      value: null
    }, typeof children === "function" ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps));
  };
  return Transition2;
}(React__default.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;
function _assertThisInitialized$2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };
  var result2 = /* @__PURE__ */ Object.create(null);
  if (children)
    Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result2[child.key] = mapper(child);
    });
  return result2;
}
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {};
  next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev2) {
    if (prevKey in next2) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next2) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!isValidElement(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized$2(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node2);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component2 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose$2(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component2 === null) {
      return /* @__PURE__ */ React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React__default.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React__default.createElement(Component2, props, children));
  };
  return TransitionGroup2;
}(React__default.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup$1 = TransitionGroup;
const reflow = (node2) => node2.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing: easing2,
    style: style2 = {}
  } = props;
  return {
    duration: (_style$transitionDura = style2.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style2.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing2 === "object" ? easing2[options.mode] : easing2,
    delay: style2.transitionDelay
  };
}
const _excluded$n = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles$2 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
const Grow = /* @__PURE__ */ React.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = "auto",
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$n);
  const timer = React.useRef();
  const autoTimeout = React.useRef();
  const theme = useTheme();
  const nodeRef = React.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay: isWebKit154 ? delay : delay || duration2 * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node2.style.opacity = 0;
    node2.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (timeout === "auto") {
      timer.current = setTimeout(next2, autoTimeout.current || 0);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return /* @__PURE__ */ jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ React.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$2[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
Grow.muiSupportAuto = true;
var Grow$1 = Grow;
const _excluded$m = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles$1 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ React.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = defaultTimeout,
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$m);
  const nodeRef = React.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    node2.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node2.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  return /* @__PURE__ */ jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ React.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$1[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
var Fade$1 = Fade;
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
const _excluded$l = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
const useUtilityClasses$d = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled$1("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.invisible && styles2.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
}));
const Backdrop = /* @__PURE__ */ React.forwardRef(function Backdrop2(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    className,
    component = "div",
    components = {},
    componentsProps = {},
    invisible = false,
    open,
    slotProps = {},
    slots = {},
    TransitionComponent = Fade$1,
    transitionDuration
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$l);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses$d(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /* @__PURE__ */ jsx(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ jsx(BackdropRoot, _extends({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes,
      ref,
      children
    }))
  }));
});
var Backdrop$1 = Backdrop;
const _excluded$k = ["BackdropComponent", "BackdropProps", "closeAfterTransition", "children", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "slotProps", "slots", "theme"];
const extendUtilityClasses = (ownerState) => {
  return ownerState.classes;
};
const ModalRoot = styled$1("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
}));
const ModalBackdrop = styled$1(Backdrop$1, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles2) => {
    return styles2.backdrop;
  }
})({
  zIndex: -1
});
const Modal = /* @__PURE__ */ React.forwardRef(function Modal2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = useThemeProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    closeAfterTransition = false,
    children,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    slotProps,
    slots,
    theme
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$k);
  const [exited, setExited] = React.useState(true);
  const commonProps = {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const ownerState = _extends({}, props, commonProps, {
    exited
  });
  const classes = extendUtilityClasses(ownerState);
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  return /* @__PURE__ */ jsx(ModalUnstyled$1, _extends({
    slots: {
      root: RootSlot,
      backdrop: BackdropSlot
    },
    slotProps: {
      root: () => _extends({}, resolveComponentProps(rootSlotProps, ownerState), !isHostComponent(RootSlot) && {
        as: component,
        theme
      }),
      backdrop: () => _extends({}, BackdropProps, resolveComponentProps(backdropSlotProps, ownerState))
    },
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref
  }, other, {
    classes
  }, commonProps, {
    children
  }));
});
var Modal$1 = Modal;
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
generateUtilityClasses("MuiPopover", ["root", "paper"]);
const _excluded$j = ["onEntering"], _excluded2$1 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n2) => typeof n2 === "number" ? `${n2}px` : n2).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const useUtilityClasses$c = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = styled$1(Modal$1, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const PopoverPaper = styled$1(Paper$1, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  outline: 0
});
const Popover = /* @__PURE__ */ React.forwardRef(function Popover2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action: action2,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps = {},
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow$1,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose$2(props.TransitionProps, _excluded$j), other = _objectWithoutPropertiesLoose$2(props, _excluded2$1);
  const paperRef = React.useRef();
  const handlePaperRef = useForkRef(paperRef, PaperProps.ref);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    PaperProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = useUtilityClasses$c(ownerState);
  const getAnchorOffset = React.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = React.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = React.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left2 = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left2 + elemRect.width;
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (left2 < marginThreshold) {
      const diff = left2 - marginThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left2 -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left2)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = React.useState(open);
  const setPositioningStyles = React.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React.useImperativeHandle(action2, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  React.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container2 = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  return /* @__PURE__ */ jsx(PopoverRoot, _extends({
    BackdropProps: {
      invisible: true
    },
    className: clsx(classes.root, className),
    container: container2,
    open,
    ref,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsx(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /* @__PURE__ */ jsx(PopoverPaper, _extends({
        elevation
      }, PaperProps, {
        ref: handlePaperRef,
        className: clsx(classes.paper, PaperProps.className)
      }, isPositioned ? void 0 : {
        style: _extends({}, PaperProps.style, {
          opacity: 0
        })
      }, {
        ownerState,
        children
      }))
    }))
  }));
});
var Popover$1 = Popover;
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
const _excluded$i = ["onEntering"], _excluded2 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"];
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const useUtilityClasses$b = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
const MenuRoot = styled$1(Popover$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const MenuPaper = styled$1(Paper$1, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  maxHeight: "calc(100% - 96px)",
  WebkitOverflowScrolling: "touch"
});
const MenuMenuList = styled$1(MenuList$1, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles2) => styles2.list
})({
  outline: 0
});
const Menu = /* @__PURE__ */ React.forwardRef(function Menu2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu"
  } = props, TransitionProps = _objectWithoutPropertiesLoose$2(props.TransitionProps, _excluded$i), other = _objectWithoutPropertiesLoose$2(props, _excluded2);
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = useUtilityClasses$b(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = React.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  React.Children.map(children, (child, index) => {
    if (!/* @__PURE__ */ React.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  return /* @__PURE__ */ jsx(MenuRoot, _extends({
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: _extends({
      component: MenuPaper
    }, PaperProps, {
      classes: _extends({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    className: classes.root,
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: /* @__PURE__ */ jsx(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx(classes.list, MenuListProps.className),
      children
    }))
  }));
});
var Menu$1 = Menu;
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
var nativeSelectClasses$1 = nativeSelectClasses;
const _excluded$h = ["className", "disabled", "IconComponent", "inputRef", "variant"];
const useUtilityClasses$a = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends({
  MozAppearance: "none",
  WebkitAppearance: "none",
  userSelect: "none",
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": _extends({}, theme.vars ? {
    backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
  }),
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${nativeSelectClasses$1.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  "&&&": {
    paddingRight: 24,
    minWidth: 16
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: (theme.vars || theme).shape.borderRadius,
  "&:focus": {
    borderRadius: (theme.vars || theme).shape.borderRadius
  },
  "&&&": {
    paddingRight: 32
  }
});
const NativeSelectSelect = styled$1("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.select, styles2[ownerState.variant], {
      [`&.${nativeSelectClasses$1.multiple}`]: styles2.multiple
    }];
  }
})(nativeSelectSelectStyles);
const nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends({
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  pointerEvents: "none",
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
});
const NativeSelectIcon = styled$1("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const NativeSelectInput = /* @__PURE__ */ React.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$h);
  const ownerState = _extends({}, props, {
    disabled,
    variant
  });
  const classes = useUtilityClasses$a(ownerState);
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx(NativeSelectSelect, _extends({
      ownerState,
      className: clsx(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /* @__PURE__ */ jsx(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
var NativeSelectInput$1 = NativeSelectInput;
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
const selectClasses = generateUtilityClasses("MuiSelect", ["select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput"]);
var selectClasses$1 = selectClasses;
var _span;
const _excluded$g = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
const SelectSelect = styled$1("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [
      {
        [`&.${selectClasses$1.select}`]: styles2.select
      },
      {
        [`&.${selectClasses$1.select}`]: styles2[ownerState.variant]
      },
      {
        [`&.${selectClasses$1.multiple}`]: styles2.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  [`&.${selectClasses$1.select}`]: {
    height: "auto",
    minHeight: "1.4375em",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const SelectIcon = styled$1("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const SelectNativeInput = styled$1("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles2) => styles2.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b2) {
  if (typeof b2 === "object" && b2 !== null) {
    return a === b2;
  }
  return String(a) === String(b2);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
const SelectInput = /* @__PURE__ */ React.forwardRef(function SelectInput2(props, ref) {
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name: name2,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$g);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = React.useRef(null);
  const displayRef = React.useRef(null);
  const [displayNode, setDisplayNode] = React.useState(null);
  const {
    current: isOpenControlled
  } = React.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = React.useState();
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = React.useCallback((node2) => {
    displayRef.current = node2;
    if (node2) {
      setDisplayNode(node2);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  React.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  React.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  React.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  React.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label2 = ownerDocument(displayRef.current).getElementById(labelId);
    if (label2) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label2.addEventListener("click", handler);
      return () => {
        label2.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = React.Children.toArray(children);
  const handleChange = (event) => {
    const index = childrenArray.map((child2) => child2.props.value).indexOf(event.target.value);
    if (index === -1) {
      return;
    }
    const child = childrenArray[index];
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name: name2
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown2 = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name: name2
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child, index, arr) => {
    var _arr$, _arr$$props, _arr$2, _arr$2$props;
    if (!/* @__PURE__ */ React.isValidElement(child)) {
      return null;
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }
      selected = value.some((v2) => areEqualValues(v2, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (child.props.value === void 0) {
      return /* @__PURE__ */ React.cloneElement(child, {
        "aria-readonly": true,
        role: "option"
      });
    }
    const isFirstSelectableElement = () => {
      if (value) {
        return selected;
      }
      const firstSelectableElement = arr.find((item) => {
        var _item$props;
        return (item == null ? void 0 : (_item$props = item.props) == null ? void 0 : _item$props.value) !== void 0 && item.props.disabled !== true;
      });
      if (child === firstSelectableElement) {
        return true;
      }
      return selected;
    };
    return /* @__PURE__ */ React.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected: ((_arr$ = arr[0]) == null ? void 0 : (_arr$$props = _arr$.props) == null ? void 0 : _arr$$props.value) === void 0 || ((_arr$2 = arr[0]) == null ? void 0 : (_arr$2$props = _arr$2.props) == null ? void 0 : _arr$2$props.disabled) === true ? isFirstSelectableElement() : selected,
      value: void 0,
      "data-value": child.props.value
    });
  });
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name2 ? `mui-component-select-${name2}` : void 0);
  const ownerState = _extends({}, props, {
    variant,
    value,
    open
  });
  const classes = useUtilityClasses$9(ownerState);
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex,
      role: "button",
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown2,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? _span || (_span = /* @__PURE__ */ jsx("span", {
        className: "notranslate",
        children: "\u200B"
      })) : display
    })), /* @__PURE__ */ jsx(SelectNativeInput, _extends({
      value: Array.isArray(value) ? value.join(",") : value,
      name: name2,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), /* @__PURE__ */ jsx(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ jsx(Menu$1, _extends({
      id: `menu-${name2 || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends({
        "aria-labelledby": labelId,
        role: "listbox",
        disableListWrap: true
      }, MenuProps.MenuListProps),
      PaperProps: _extends({}, MenuProps.PaperProps, {
        style: _extends({
          minWidth: menuMinWidth
        }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
      }),
      children: items
    }))]
  });
});
var SelectInput$1 = SelectInput;
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _excluded$f = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
const useUtilityClasses$8 = (ownerState) => {
  const {
    color: color2,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize(color2)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled$1("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null ? void 0 : (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null ? void 0 : (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null ? void 0 : (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
const SvgIcon = /* @__PURE__ */ React.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$f);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$8(ownerState);
  return /* @__PURE__ */ jsxs(SvgIconRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, {
    ownerState,
    children: [children, titleAccess ? /* @__PURE__ */ jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.muiName = "SvgIcon";
var SvgIcon$1 = SvgIcon;
function createSvgIcon(path, displayName) {
  function Component2(props, ref) {
    return /* @__PURE__ */ jsx(SvgIcon$1, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  Component2.muiName = SvgIcon$1.muiName;
  return /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(Component2));
}
var ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
var _StyledInput, _StyledFilledInput;
const _excluded$e = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  return classes;
};
const styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles2) => styles2.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
const StyledInput = styled$1(Input$1, styledRootConfig)("");
const StyledOutlinedInput = styled$1(OutlinedInput$1, styledRootConfig)("");
const StyledFilledInput = styled$1(FilledInput$1, styledRootConfig)("");
const Select = /* @__PURE__ */ React.forwardRef(function Select2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id,
    input,
    inputProps,
    label: label2,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$e);
  const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  const variant = fcs.variant || variantProp;
  const InputComponent = input || {
    standard: _StyledInput || (_StyledInput = /* @__PURE__ */ jsx(StyledInput, {})),
    outlined: /* @__PURE__ */ jsx(StyledOutlinedInput, {
      label: label2
    }),
    filled: _StyledFilledInput || (_StyledFilledInput = /* @__PURE__ */ jsx(StyledFilledInput, {}))
  }[variant];
  const ownerState = _extends({}, props, {
    variant,
    classes: classesProp
  });
  const classes = useUtilityClasses$7(ownerState);
  const inputComponentRef = useForkRef(ref, InputComponent.ref);
  return /* @__PURE__ */ jsx(React.Fragment, {
    children: /* @__PURE__ */ React.cloneElement(InputComponent, _extends({
      inputComponent,
      inputProps: _extends({
        children,
        IconComponent,
        variant,
        type: void 0,
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge(classes, inputProps.classes) : classes
      }, input ? input.props.inputProps : {})
    }, multiple && native && variant === "outlined" ? {
      notched: true
    } : {}, {
      ref: inputComponentRef,
      className: clsx(InputComponent.props.className, className)
    }, !input && {
      variant
    }, other))
  });
});
Select.muiName = "Select";
var Select$1 = Select;
function getTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiTextField", slot);
}
generateUtilityClasses("MuiTextField", ["root"]);
const _excluded$d = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
const variantComponent = {
  standard: Input$1,
  filled: FilledInput$1,
  outlined: OutlinedInput$1
};
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = styled$1(FormControl$1, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const TextField$1 = /* @__PURE__ */ React.forwardRef(function TextField(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color: color2 = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label: label2,
    maxRows,
    minRows,
    multiline = false,
    name: name2,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$d);
  const ownerState = _extends({}, props, {
    autoFocus,
    color: color2,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses$6(ownerState);
  const InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label2;
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label2 && id ? `${id}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const InputElement = /* @__PURE__ */ jsx(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name: name2,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return /* @__PURE__ */ jsxs(TextFieldRoot, _extends({
    className: clsx(classes.root, className),
    disabled,
    error,
    fullWidth,
    ref,
    required,
    color: color2,
    variant,
    ownerState
  }, other, {
    children: [label2 != null && label2 !== "" && /* @__PURE__ */ jsx(InputLabel$1, _extends({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label2
    })), select ? /* @__PURE__ */ jsx(Select$1, _extends({
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement
    }, SelectProps, {
      children
    })) : InputElement, helperText && /* @__PURE__ */ jsx(FormHelperText$1, _extends({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
var MUITextField = TextField$1;
const button = "_button_h62ll_1";
const fieldContainer = "_fieldContainer_h62ll_12";
const field = "_field_h62ll_12";
const adornment = "_adornment_h62ll_31";
var styles = {
  button,
  fieldContainer,
  field,
  adornment
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _setPrototypeOf$1(o, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$1(o, p2);
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn$1(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self2);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result2;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result2 = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result2 = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result2);
  };
}
function _superPropBase(object2, property) {
  while (!Object.prototype.hasOwnProperty.call(object2, property)) {
    object2 = _getPrototypeOf$1(object2);
    if (object2 === null)
      break;
  }
  return object2;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get2(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set2(target2, property2, value2, receiver2) {
      var base = _superPropBase(target2, property2);
      var desc;
      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property2);
        if (desc.set) {
          desc.set.call(receiver2, value2);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }
      desc = Object.getOwnPropertyDescriptor(receiver2, property2);
      if (desc) {
        if (!desc.writable) {
          return false;
        }
        desc.value = value2;
        Object.defineProperty(receiver2, property2, desc);
      } else {
        _defineProperty(receiver2, property2, value2);
      }
      return true;
    };
  }
  return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);
  if (!s && isStrict) {
    throw new Error("failed to set property");
  }
  return value;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var ChangeDetails = /* @__PURE__ */ function() {
  function ChangeDetails2(details) {
    _classCallCheck$1(this, ChangeDetails2);
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      skip: false,
      tailShift: 0
    }, details);
  }
  _createClass$1(ChangeDetails2, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);
  return ChangeDetails2;
}();
function isString2(str) {
  return typeof str === "string" || str instanceof String;
}
var DIRECTION = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
}
function normalizePrepare(prep) {
  return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
}
function objectIncludes(b2, a) {
  if (a === b2)
    return true;
  var arrA = Array.isArray(a), arrB = Array.isArray(b2), i;
  if (arrA && arrB) {
    if (a.length != b2.length)
      return false;
    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b2[i]))
        return false;
    }
    return true;
  }
  if (arrA != arrB)
    return false;
  if (a && b2 && _typeof(a) === "object" && _typeof(b2) === "object") {
    var dateA = a instanceof Date, dateB = b2 instanceof Date;
    if (dateA && dateB)
      return a.getTime() == b2.getTime();
    if (dateA != dateB)
      return false;
    var regexpA = a instanceof RegExp, regexpB = b2 instanceof RegExp;
    if (regexpA && regexpB)
      return a.toString() == b2.toString();
    if (regexpA != regexpB)
      return false;
    var keys2 = Object.keys(a);
    for (i = 0; i < keys2.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b2, keys2[i]))
        return false;
    }
    for (i = 0; i < keys2.length; i++) {
      if (!objectIncludes(b2[keys2[i]], a[keys2[i]]))
        return false;
    }
    return true;
  } else if (a && b2 && typeof a === "function" && typeof b2 === "function") {
    return a.toString() === b2.toString();
  }
  return false;
}
var ActionDetails = /* @__PURE__ */ function() {
  function ActionDetails2(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck$1(this, ActionDetails2);
    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection;
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  _createClass$1(ActionDetails2, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
  }, {
    key: "removedCount",
    get: function get() {
      return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
    }
  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount)
        return DIRECTION.NONE;
      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);
  return ActionDetails2;
}();
var ContinuousTailDetails = /* @__PURE__ */ function() {
  function ContinuousTailDetails2() {
    var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var from2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : void 0;
    _classCallCheck$1(this, ContinuousTailDetails2);
    this.value = value;
    this.from = from2;
    this.stop = stop;
  }
  _createClass$1(ContinuousTailDetails2, [{
    key: "toString",
    value: function toString2() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set2(state) {
      Object.assign(this, state);
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos)
        return "";
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.value.length)
        return "";
      var shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }]);
  return ContinuousTailDetails2;
}();
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new IMask.InputMask(el, opts);
}
var Masked = /* @__PURE__ */ function() {
  function Masked2(opts) {
    _classCallCheck$1(this, Masked2);
    this._value = "";
    this._update(Object.assign({}, Masked2.DEFAULTS, opts));
    this.isInitialized = true;
  }
  _createClass$1(Masked2, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length)
        return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set2(state) {
      this._value = state._value;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._value = "";
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(value) {
      this.resolve(value);
    }
  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, "");
      this.doCommit();
      return this.value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {}, "");
      this.doCommit();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set2(value) {
      this.value = this.doFormat(value);
    }
  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set2(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, "");
      this.doCommit();
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return this.isComplete;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString2(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch)
        return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : void 0;
      var consistentState = this.state;
      var details;
      var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));
      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      details = details.aggregate(this._appendCharRaw(ch, flags));
      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;
        if (appended && checkTail != null) {
          var beforeTailState = this.state;
          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length);
          }
          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();
          if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            checkTail.shift();
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
          }
          if (appended && tailDetails.inserted)
            this.state = beforeTailState;
        }
        if (!appended) {
          details = new ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail)
            checkTail.state = consistentTail;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new ChangeDetails();
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new ChangeDetails();
    }
  }, {
    key: "append",
    value: function append2(str, flags, tail) {
      if (!isString2(str))
        throw new Error("value should be string");
      var details = new ChangeDetails();
      var checkTail = isString2(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags !== null && flags !== void 0 && flags.tail)
        flags._beforeTailState = this.state;
      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      }
      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift;
      }
      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }
      return details;
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new ChangeDetails();
    }
  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized)
        return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput;
      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, "");
      }
      delete this._refreshing;
      return ret;
    }
  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized)
        return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit)
        this.commit(this.value, this);
    }
  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
  }, {
    key: "splice",
    value: function splice2(start, deleteCount, inserted, removeDirection) {
      var flags = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        input: true
      };
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var oldRawValue;
      if (this.eager) {
        removeDirection = forceDirection(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }
      var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
      var details = new ChangeDetails({
        tailShift: startChangePos - start
      }).aggregate(this.remove(startChangePos));
      if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === DIRECTION.FORCE_LEFT) {
          var valLength;
          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new ChangeDetails({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }
      return details.aggregate(this.append(inserted, flags, tail));
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return this.mask === mask;
    }
  }, {
    key: "typedValueEquals",
    value: function typedValueEquals(value) {
      var tval = this.typedValue;
      return value === tval || Masked2.EMPTY_VALUES.includes(value) && Masked2.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
    }
  }]);
  return Masked2;
}();
Masked.DEFAULTS = {
  format: function format(v2) {
    return v2;
  },
  parse: function parse2(v2) {
    return v2;
  }
};
Masked.EMPTY_VALUES = [void 0, null, ""];
IMask.Masked = Masked;
function maskedClass(mask) {
  if (mask == null) {
    throw new Error("mask property should be defined");
  }
  if (mask instanceof RegExp)
    return IMask.MaskedRegExp;
  if (isString2(mask))
    return IMask.MaskedPattern;
  if (mask instanceof Date || mask === Date)
    return IMask.MaskedDate;
  if (mask instanceof Number || typeof mask === "number" || mask === Number)
    return IMask.MaskedNumber;
  if (Array.isArray(mask) || mask === Array)
    return IMask.MaskedDynamic;
  if (IMask.Masked && mask.prototype instanceof IMask.Masked)
    return mask;
  if (mask instanceof IMask.Masked)
    return mask.constructor;
  if (mask instanceof Function)
    return IMask.MaskedFunction;
  console.warn("Mask not found for mask", mask);
  return IMask.Masked;
}
function createMask(opts) {
  if (IMask.Masked && opts instanceof IMask.Masked)
    return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask;
  if (IMask.Masked && mask instanceof IMask.Masked)
    return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass)
    throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
  return new MaskedClass(opts);
}
IMask.createMask = createMask;
var _excluded$c = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  "0": /\d/,
  "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  "*": /./
};
var PatternInputDefinition = /* @__PURE__ */ function() {
  function PatternInputDefinition2(opts) {
    _classCallCheck$1(this, PatternInputDefinition2);
    var mask = opts.mask, blockOpts = _objectWithoutProperties$1(opts, _excluded$c);
    this.masked = createMask({
      mask
    });
    Object.assign(this, blockOpts);
  }
  _createClass$1(PatternInputDefinition2, [{
    key: "reset",
    value: function reset() {
      this.isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }
      return new ChangeDetails();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.isFilled)
        return new ChangeDetails();
      var state = this.masked.state;
      var details = this.masked._appendChar(ch, flags);
      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = "";
        this.masked.state = state;
      }
      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }
      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append2() {
      var _this$masked;
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this.isFilled || this.isOptional)
        return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new ChangeDetails();
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;
      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;
      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;
        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;
      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    },
    set: function set2(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }]);
  return PatternInputDefinition2;
}();
var PatternFixedDefinition = /* @__PURE__ */ function() {
  function PatternFixedDefinition2(opts) {
    _classCallCheck$1(this, PatternFixedDefinition2);
    Object.assign(this, opts);
    this._value = "";
    this.isFixed = true;
  }
  _createClass$1(PatternFixedDefinition2, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : "";
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = "";
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value)
        this._isRawInput = false;
      return new ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;
        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return Boolean(this._value);
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = new ChangeDetails();
      if (this._value)
        return details;
      var appended = this.char === ch;
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !this.eager) && !flags.tail;
      if (isResolved)
        details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return this._appendChar(this.char, {
        tail: true
      });
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._value)
        return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      return new ContinuousTailDetails("");
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString2(tail))
        tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append2(str, flags, tail) {
      var details = this._appendChar(str[0], flags);
      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }
      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set2(state) {
      Object.assign(this, state);
    }
  }]);
  return PatternFixedDefinition2;
}();
var _excluded$b = ["chunks"];
var ChunksTailDetails = /* @__PURE__ */ function() {
  function ChunksTailDetails2() {
    var chunks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var from2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    _classCallCheck$1(this, ChunksTailDetails2);
    this.chunks = chunks;
    this.from = from2;
  }
  _createClass$1(ChunksTailDetails2, [{
    key: "toString",
    value: function toString2() {
      return this.chunks.map(String).join("");
    }
  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk))
        return;
      if (isString2(tailChunk))
        tailChunk = new ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
      if (tailChunk instanceof ContinuousTailDetails) {
        if (extendLast) {
          lastChunk.extend(tailChunk.toString());
        } else {
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails2) {
        if (tailChunk.stop == null) {
          var firstTailChunk;
          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        }
        if (tailChunk.toString()) {
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      if (!(masked instanceof IMask.MaskedPattern)) {
        var tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }
      var details = new ChangeDetails();
      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];
        var lastBlockIter = masked._mapPosToBlock(masked.value.length);
        var stop = chunk.stop;
        var chunkBlock = void 0;
        if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails2 || masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }
          chunkBlock = chunk instanceof ChunksTailDetails2 && masked._blocks[stop];
        }
        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false;
          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted;
          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars)
            details.aggregate(masked.append(remainChars, {
              tail: true
            }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function(c2) {
          return c2.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set2(state) {
      var chunks = state.chunks, props = _objectWithoutProperties$1(state, _excluded$b);
      Object.assign(this, props);
      this.chunks = chunks.map(function(cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails2() : new ContinuousTailDetails();
        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos)
        return "";
      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      var ci = 0;
      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.unshift(chunkShiftPos);
        if (chunk.toString()) {
          if (!shiftChar)
            break;
          ++ci;
        } else {
          this.chunks.splice(ci, 1);
        }
        if (shiftChar)
          return shiftChar;
      }
      return "";
    }
  }, {
    key: "shift",
    value: function shift() {
      if (!this.chunks.length)
        return "";
      var ci = this.chunks.length - 1;
      while (0 <= ci) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shift();
        if (chunk.toString()) {
          if (!shiftChar)
            break;
          --ci;
        } else {
          this.chunks.splice(ci, 1);
        }
        if (shiftChar)
          return shiftChar;
      }
      return "";
    }
  }]);
  return ChunksTailDetails2;
}();
var PatternCursor = /* @__PURE__ */ function() {
  function PatternCursor2(masked, pos) {
    _classCallCheck$1(this, PatternCursor2);
    this.masked = masked;
    this._log = [];
    var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? {
      index: 0,
      offset: 0
    } : {
      index: this.masked._blocks.length,
      offset: 0
    }), offset = _ref.offset, index = _ref.index;
    this.offset = offset;
    this.index = index;
    this.ok = false;
  }
  _createClass$1(PatternCursor2, [{
    key: "block",
    get: function get() {
      return this.masked._blocks[this.index];
    }
  }, {
    key: "pos",
    get: function get() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    },
    set: function set2(s) {
      Object.assign(this, s);
    }
  }, {
    key: "pushState",
    value: function pushState() {
      this._log.push(this.state);
    }
  }, {
    key: "popState",
    value: function popState() {
      var s = this._log.pop();
      this.state = s;
      return s;
    }
  }, {
    key: "bindBlock",
    value: function bindBlock() {
      if (this.block)
        return;
      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }
      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.value.length;
      }
    }
  }, {
    key: "_pushLeft",
    value: function _pushLeft(fn) {
      this.pushState();
      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
        var _this$block;
        if (fn())
          return this.ok = true;
      }
      return this.ok = false;
    }
  }, {
    key: "_pushRight",
    value: function _pushRight(fn) {
      this.pushState();
      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn())
          return this.ok = true;
      }
      return this.ok = false;
    }
  }, {
    key: "pushLeftBeforeFilled",
    value: function pushLeftBeforeFilled() {
      var _this = this;
      return this._pushLeft(function() {
        if (_this.block.isFixed || !_this.block.value)
          return;
        _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
        if (_this.offset !== 0)
          return true;
      });
    }
  }, {
    key: "pushLeftBeforeInput",
    value: function pushLeftBeforeInput() {
      var _this2 = this;
      return this._pushLeft(function() {
        if (_this2.block.isFixed)
          return;
        _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushLeftBeforeRequired",
    value: function pushLeftBeforeRequired() {
      var _this3 = this;
      return this._pushLeft(function() {
        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value)
          return;
        _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeFilled",
    value: function pushRightBeforeFilled() {
      var _this4 = this;
      return this._pushRight(function() {
        if (_this4.block.isFixed || !_this4.block.value)
          return;
        _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
        if (_this4.offset !== _this4.block.value.length)
          return true;
      });
    }
  }, {
    key: "pushRightBeforeInput",
    value: function pushRightBeforeInput() {
      var _this5 = this;
      return this._pushRight(function() {
        if (_this5.block.isFixed)
          return;
        _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE);
        return true;
      });
    }
  }, {
    key: "pushRightBeforeRequired",
    value: function pushRightBeforeRequired() {
      var _this6 = this;
      return this._pushRight(function() {
        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value)
          return;
        _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
        return true;
      });
    }
  }]);
  return PatternCursor2;
}();
var MaskedRegExp = /* @__PURE__ */ function(_Masked) {
  _inherits$1(MaskedRegExp2, _Masked);
  var _super = _createSuper$1(MaskedRegExp2);
  function MaskedRegExp2() {
    _classCallCheck$1(this, MaskedRegExp2);
    return _super.apply(this, arguments);
  }
  _createClass$1(MaskedRegExp2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = function(value) {
          return value.search(opts.mask) >= 0;
        };
      _get(_getPrototypeOf$1(MaskedRegExp2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedRegExp2;
}(Masked);
IMask.MaskedRegExp = MaskedRegExp;
var _excluded$a = ["_blocks"];
var MaskedPattern = /* @__PURE__ */ function(_Masked) {
  _inherits$1(MaskedPattern2, _Masked);
  var _super = _createSuper$1(MaskedPattern2);
  function MaskedPattern2() {
    var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck$1(this, MaskedPattern2);
    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern2.DEFAULTS, opts));
  }
  _createClass$1(MaskedPattern2, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      _get(_getPrototypeOf$1(MaskedPattern2.prototype), "_update", this).call(this, opts);
      this._rebuildMask();
    }
  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;
      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs)
        return;
      var unmaskingBlock = false;
      var optionalBlock = false;
      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function() {
            var p2 = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function(bName2) {
              return p2.indexOf(bName2) === 0;
            });
            bNames.sort(function(a, b2) {
              return b2.length - a.length;
            });
            var bName = bNames[0];
            if (bName) {
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                eager: _this.eager,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));
              if (maskedBlock) {
                _this._blocks.push(maskedBlock);
                if (!_this._maskedBlocks[bName])
                  _this._maskedBlocks[bName] = [];
                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }
              i += bName.length - 1;
              return "continue";
            }
          }();
          if (_ret === "continue")
            continue;
        }
        var char2 = pattern[i];
        var isInput = char2 in defs;
        if (char2 === MaskedPattern2.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if (char2 === "{" || char2 === "}") {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }
        if (char2 === "[" || char2 === "]") {
          optionalBlock = !optionalBlock;
          continue;
        }
        if (char2 === MaskedPattern2.ESCAPE_CHAR) {
          ++i;
          char2 = pattern[i];
          if (!char2)
            break;
          isInput = false;
        }
        var def = isInput ? new PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          mask: defs[char2],
          isOptional: optionalBlock
        }) : new PatternFixedDefinition({
          char: char2,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });
        this._blocks.push(def);
      }
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf$1(MaskedPattern2.prototype), "state", this), {
        _blocks: this._blocks.map(function(b2) {
          return b2.state;
        })
      });
    },
    set: function set2(state) {
      var _blocks = state._blocks, maskedState = _objectWithoutProperties$1(state, _excluded$a);
      this._blocks.forEach(function(b2, bi) {
        return b2.state = _blocks[bi];
      });
      _set(_getPrototypeOf$1(MaskedPattern2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf$1(MaskedPattern2.prototype), "reset", this).call(this);
      this._blocks.forEach(function(b2) {
        return b2.reset();
      });
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isComplete;
      });
    }
  }, {
    key: "isFilled",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isFilled;
      });
    }
  }, {
    key: "isFixed",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isFixed;
      });
    }
  }, {
    key: "isOptional",
    get: function get() {
      return this._blocks.every(function(b2) {
        return b2.isOptional;
      });
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function(b2) {
        return b2.doCommit();
      });
      _get(_getPrototypeOf$1(MaskedPattern2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function(str, b2) {
        return str += b2.unmaskedValue;
      }, "");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf$1(MaskedPattern2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "value",
    get: function get() {
      return this._blocks.reduce(function(str, b2) {
        return str += b2.value;
      }, "");
    },
    set: function set2(value) {
      _set(_getPrototypeOf$1(MaskedPattern2.prototype), "value", value, this, true);
    }
  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return _get(_getPrototypeOf$1(MaskedPattern2.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var _this$_mapPosToBlock;
      var details = new ChangeDetails();
      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null)
        return details;
      if (this._blocks[startBlockIndex].isFilled)
        ++startBlockIndex;
      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        var d2 = this._blocks[bi]._appendEager();
        if (!d2.inserted)
          break;
        details.aggregate(d2);
      }
      return details;
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var blockIter = this._mapPosToBlock(this.value.length);
      var details = new ChangeDetails();
      if (!blockIter)
        return details;
      for (var bi = blockIter.index; ; ++bi) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        var _block = this._blocks[bi];
        if (!_block)
          break;
        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
        }));
        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted)
          break;
      }
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var chunkTail = new ChunksTailDetails();
      if (fromPos === toPos)
        return chunkTail;
      this._forEachBlocksInRange(fromPos, toPos, function(b2, bi, bFromPos, bToPos) {
        var blockChunk = b2.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails)
          blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });
      return chunkTail;
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (fromPos === toPos)
        return "";
      var input = "";
      this._forEachBlocksInRange(fromPos, toPos, function(b2, _2, fromPos2, toPos2) {
        input += b2.extractInput(fromPos2, toPos2, flags);
      });
      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;
      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex)
          stopBefore = stop;
        else
          break;
      }
      return stopBefore;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;
      var details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null)
        return details;
      var startBlockIter = this._mapPosToBlock(this.value.length);
      if (!startBlockIter)
        return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function(b2) {
        if (!b2.lazy || toBlockIndex != null) {
          var args = b2._blocks != null ? [b2._blocks.length] : [];
          var bDetails = b2._appendPlaceholder.apply(b2, args);
          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });
      return details;
    }
  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = "";
      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;
        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function(pos, b2) {
        return pos += b2.value.length;
      }, 0);
    }
  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : void 0;
      var fromBlockIter = this._mapPosToBlock(fromPos);
      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos);
        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
        if (toBlockIter && !isSameBlock) {
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          }
          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var removeDetails = _get(_getPrototypeOf$1(MaskedPattern2.prototype), "remove", this).call(this, fromPos, toPos);
      this._forEachBlocksInRange(fromPos, toPos, function(b2, _2, bFromPos, bToPos) {
        removeDetails.aggregate(b2.remove(bFromPos, bToPos));
      });
      return removeDetails;
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
      if (!this._blocks.length)
        return 0;
      var cursor2 = new PatternCursor(this, cursorPos);
      if (direction === DIRECTION.NONE) {
        if (cursor2.pushRightBeforeInput())
          return cursor2.pos;
        cursor2.popState();
        if (cursor2.pushLeftBeforeInput())
          return cursor2.pos;
        return this.value.length;
      }
      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        if (direction === DIRECTION.LEFT) {
          cursor2.pushRightBeforeFilled();
          if (cursor2.ok && cursor2.pos === cursorPos)
            return cursorPos;
          cursor2.popState();
        }
        cursor2.pushLeftBeforeInput();
        cursor2.pushLeftBeforeRequired();
        cursor2.pushLeftBeforeFilled();
        if (direction === DIRECTION.LEFT) {
          cursor2.pushRightBeforeInput();
          cursor2.pushRightBeforeRequired();
          if (cursor2.ok && cursor2.pos <= cursorPos)
            return cursor2.pos;
          cursor2.popState();
          if (cursor2.ok && cursor2.pos <= cursorPos)
            return cursor2.pos;
          cursor2.popState();
        }
        if (cursor2.ok)
          return cursor2.pos;
        if (direction === DIRECTION.FORCE_LEFT)
          return 0;
        cursor2.popState();
        if (cursor2.ok)
          return cursor2.pos;
        cursor2.popState();
        if (cursor2.ok)
          return cursor2.pos;
        return 0;
      }
      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        cursor2.pushRightBeforeInput();
        cursor2.pushRightBeforeRequired();
        if (cursor2.pushRightBeforeFilled())
          return cursor2.pos;
        if (direction === DIRECTION.FORCE_RIGHT)
          return this.value.length;
        cursor2.popState();
        if (cursor2.ok)
          return cursor2.pos;
        cursor2.popState();
        if (cursor2.ok)
          return cursor2.pos;
        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
      }
      return cursorPos;
    }
  }, {
    key: "maskedBlock",
    value: function maskedBlock(name2) {
      return this.maskedBlocks(name2)[0];
    }
  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name2) {
      var _this4 = this;
      var indices = this._maskedBlocks[name2];
      if (!indices)
        return [];
      return indices.map(function(gi) {
        return _this4._blocks[gi];
      });
    }
  }]);
  return MaskedPattern2;
}(Masked);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = PatternInputDefinition;
MaskedPattern.FixedDefinition = PatternFixedDefinition;
IMask.MaskedPattern = MaskedPattern;
var MaskedRange = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits$1(MaskedRange2, _MaskedPattern);
  var _super = _createSuper$1(MaskedRange2);
  function MaskedRange2() {
    _classCallCheck$1(this, MaskedRange2);
    return _super.apply(this, arguments);
  }
  _createClass$1(MaskedRange2, [{
    key: "_matchFrom",
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "_update",
    value: function _update(opts) {
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null)
        maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, "0");
      var toStr = String(opts.to).padStart(maxLength, "0");
      var sameCharsCount = 0;
      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }
      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
      _get(_getPrototypeOf$1(MaskedRange2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return _get(_getPrototypeOf$1(MaskedRange2.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = "";
      var maxstr = "";
      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _slicedToArray(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
      if (num) {
        minstr = "0".repeat(placeholder.length) + num;
        maxstr = "9".repeat(placeholder.length) + num;
      }
      minstr = minstr.padEnd(this.maxLength, "0");
      maxstr = maxstr.padEnd(this.maxLength, "9");
      return [minstr, maxstr];
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details;
      var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf$1(MaskedRange2.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ""), flags));
      var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      if (!this.autofix || !ch)
        return ch;
      var fromStr = String(this.from).padStart(this.maxLength, "0");
      var toStr = String(this.to).padStart(this.maxLength, "0");
      var nextVal = this.value + ch;
      if (nextVal.length > this.maxLength)
        return "";
      var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _slicedToArray(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
      if (Number(maxstr) < this.from)
        return fromStr[nextVal.length - 1];
      if (Number(minstr) > this.to) {
        if (this.autofix === "pad" && nextVal.length < this.maxLength) {
          return ["", details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }
        return toStr[nextVal.length - 1];
      }
      return ch;
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom)
        return true;
      var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _slicedToArray(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf$1(MaskedRange2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedRange2;
}(MaskedPattern);
IMask.MaskedRange = MaskedRange;
var MaskedDate = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits$1(MaskedDate2, _MaskedPattern);
  var _super = _createSuper$1(MaskedDate2);
  function MaskedDate2(opts) {
    _classCallCheck$1(this, MaskedDate2);
    return _super.call(this, Object.assign({}, MaskedDate2.DEFAULTS, opts));
  }
  _createClass$1(MaskedDate2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date)
        delete opts.mask;
      if (opts.pattern)
        opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate2.GET_DEFAULT_BLOCKS());
      if (opts.min)
        opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max)
        opts.blocks.Y.to = opts.max.getFullYear();
      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;
        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }
      Object.assign(opts.blocks, this.blocks, blocks);
      Object.keys(opts.blocks).forEach(function(bk) {
        var b2 = opts.blocks[bk];
        if (!("autofix" in b2) && "autofix" in opts)
          b2.autofix = opts.autofix;
      });
      _get(_getPrototypeOf$1(MaskedDate2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;
      var date2 = this.date;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_get2 = _get(_getPrototypeOf$1(MaskedDate2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date2 != null && (this.min == null || this.min <= date2) && (this.max == null || date2 <= this.max));
    }
  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(date2) {
      this.typedValue = date2;
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? _get(_getPrototypeOf$1(MaskedDate2.prototype), "typedValue", this) : null;
    },
    set: function set2(value) {
      _set(_getPrototypeOf$1(MaskedDate2.prototype), "typedValue", value, this, true);
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask === Date || _get(_getPrototypeOf$1(MaskedDate2.prototype), "maskEquals", this).call(this, mask);
    }
  }]);
  return MaskedDate2;
}(MaskedPattern);
MaskedDate.DEFAULTS = {
  pattern: "d{.}`m{.}`Y",
  format: function format2(date2) {
    if (!date2)
      return "";
    var day = String(date2.getDate()).padStart(2, "0");
    var month = String(date2.getMonth() + 1).padStart(2, "0");
    var year = date2.getFullYear();
    return [day, month, year].join(".");
  },
  parse: function parse3(str) {
    var _str$split = str.split("."), _str$split2 = _slicedToArray(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
    return new Date(year, month - 1, day);
  }
};
MaskedDate.GET_DEFAULT_BLOCKS = function() {
  return {
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};
IMask.MaskedDate = MaskedDate;
var MaskElement = /* @__PURE__ */ function() {
  function MaskElement2() {
    _classCallCheck$1(this, MaskElement2);
  }
  _createClass$1(MaskElement2, [{
    key: "selectionStart",
    get: function get() {
      var start;
      try {
        start = this._unsafeSelectionStart;
      } catch (e2) {
      }
      return start != null ? start : this.value.length;
    }
  }, {
    key: "selectionEnd",
    get: function get() {
      var end;
      try {
        end = this._unsafeSelectionEnd;
      } catch (e2) {
      }
      return end != null ? end : this.value.length;
    }
  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd)
        return;
      try {
        this._unsafeSelect(start, end);
      } catch (e2) {
      }
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
    }
  }]);
  return MaskElement2;
}();
IMask.MaskElement = MaskElement;
var HTMLMaskElement = /* @__PURE__ */ function(_MaskElement) {
  _inherits$1(HTMLMaskElement2, _MaskElement);
  var _super = _createSuper$1(HTMLMaskElement2);
  function HTMLMaskElement2(input) {
    var _this;
    _classCallCheck$1(this, HTMLMaskElement2);
    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  _createClass$1(HTMLMaskElement2, [{
    key: "rootElement",
    get: function get() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.input === this.rootElement.activeElement;
    }
  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set2(value) {
      this.input.value = value;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;
      Object.keys(handlers).forEach(function(event) {
        return _this2._toggleEventHandler(HTMLMaskElement2.EVENTS_MAP[event], handlers[event]);
      });
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;
      Object.keys(this._handlers).forEach(function(event) {
        return _this3._toggleEventHandler(event);
      });
    }
  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }
      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);
  return HTMLMaskElement2;
}(MaskElement);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: "keydown",
  input: "input",
  drop: "drop",
  click: "click",
  focus: "focus",
  commit: "blur"
};
IMask.HTMLMaskElement = HTMLMaskElement;
var HTMLContenteditableMaskElement = /* @__PURE__ */ function(_HTMLMaskElement) {
  _inherits$1(HTMLContenteditableMaskElement2, _HTMLMaskElement);
  var _super = _createSuper$1(HTMLContenteditableMaskElement2);
  function HTMLContenteditableMaskElement2() {
    _classCallCheck$1(this, HTMLContenteditableMaskElement2);
    return _super.apply(this, arguments);
  }
  _createClass$1(HTMLContenteditableMaskElement2, [{
    key: "_unsafeSelectionStart",
    get: function get() {
      var root2 = this.rootElement;
      var selection = root2.getSelection && root2.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }
  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root2 = this.rootElement;
      var selection = root2.getSelection && root2.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }
  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange)
        return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root2 = this.rootElement;
      var selection = root2.getSelection && root2.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.textContent;
    },
    set: function set2(value) {
      this.input.textContent = value;
    }
  }]);
  return HTMLContenteditableMaskElement2;
}(HTMLMaskElement);
IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
var _excluded$9 = ["mask"];
var InputMask = /* @__PURE__ */ function() {
  function InputMask2(el, opts) {
    _classCallCheck$1(this, InputMask2);
    this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = "";
    this._unmaskedValue = "";
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();
    this.updateValue();
    this._onChange();
  }
  _createClass$1(InputMask2, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set2(mask) {
      if (this.maskEquals(mask))
        return;
      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask
        });
        return;
      }
      var masked = createMask({
        mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      var _this$masked;
      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set2(str) {
      if (this.value === str)
        return;
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set2(str) {
      if (this.unmaskedValue === str)
        return;
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set2(val) {
      if (this.masked.typedValueEquals(val))
        return;
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el)
        this.el.unbindEvents();
    }
  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var listeners = this._listeners[ev];
      if (!listeners)
        return;
      listeners.forEach(function(l2) {
        return l2.apply(void 0, args);
      });
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set2(pos) {
      if (!this.el || !this.el.isActive)
        return;
      this.el.select(pos, pos);
      this._saveSelection();
    }
  }, {
    key: "_saveSelection",
    value: function _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
      }
      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue)
        this.el.value = newValue;
      if (isChanged)
        this._fireChangeEvents();
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask, restOpts = _objectWithoutProperties$1(opts, _excluded$9);
      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask)
        this.mask = mask;
      if (updateOpts)
        this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts)
        this.updateControl();
    }
  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null)
        return;
      this.cursorPos = cursorPos;
      this._delayUpdateCursor(cursorPos);
    }
  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;
      this._abortUpdateCursor();
      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function() {
        if (!_this.el)
          return;
        _this.cursorPos = _this._changingCursorPos;
        _this._abortUpdateCursor();
      }, 10);
    }
  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent("accept", this._inputEvent);
      if (this.masked.isComplete)
        this._fireEvent("complete", this._inputEvent);
    }
  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
    }
  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos)
        return;
      this.alignCursor();
    }
  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev])
        this._listeners[ev] = [];
      this._listeners[ev].push(handler);
      return this;
    }
  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev])
        return this;
      if (!handler) {
        delete this._listeners[ev];
        return this;
      }
      var hIndex = this._listeners[ev].indexOf(handler);
      if (hIndex >= 0)
        this._listeners[ev].splice(hIndex, 1);
      return this;
    }
  }, {
    key: "_onInput",
    value: function _onInput(e2) {
      this._inputEvent = e2;
      this._abortUpdateCursor();
      if (!this._selection)
        return this.updateValue();
      var details = new ActionDetails(
        this.el.value,
        this.cursorPos,
        this.value,
        this._selection
      );
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
        input: true,
        raw: true
      }).offset;
      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== DIRECTION.NONE)
        cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }
      this.masked.doCommit();
      this.updateControl();
      this._saveSelection();
    }
  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents();
      this._listeners.length = 0;
      delete this.el;
    }
  }]);
  return InputMask2;
}();
IMask.InputMask = InputMask;
var MaskedEnum = /* @__PURE__ */ function(_MaskedPattern) {
  _inherits$1(MaskedEnum2, _MaskedPattern);
  var _super = _createSuper$1(MaskedEnum2);
  function MaskedEnum2() {
    _classCallCheck$1(this, MaskedEnum2);
    return _super.apply(this, arguments);
  }
  _createClass$1(MaskedEnum2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.enum)
        opts.mask = "*".repeat(opts.enum[0].length);
      _get(_getPrototypeOf$1(MaskedEnum2.prototype), "_update", this).call(this, opts);
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this, _get2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.enum.some(function(e2) {
        return e2.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf$1(MaskedEnum2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedEnum2;
}(MaskedPattern);
IMask.MaskedEnum = MaskedEnum;
var MaskedNumber = /* @__PURE__ */ function(_Masked) {
  _inherits$1(MaskedNumber2, _Masked);
  var _super = _createSuper$1(MaskedNumber2);
  function MaskedNumber2(opts) {
    _classCallCheck$1(this, MaskedNumber2);
    return _super.call(this, Object.assign({}, MaskedNumber2.DEFAULTS, opts));
  }
  _createClass$1(MaskedNumber2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf$1(MaskedNumber2.prototype), "_update", this).call(this, opts);
      this._updateRegExps();
    }
  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      var start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
      var midInput = "(0|([1-9]+\\d*))?";
      var mid = "\\d*";
      var end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g");
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
    }
  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, "");
    }
  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var _get2;
      ch = ch.replace(this._mapToRadixRegExp, this.radix);
      var noSepCh = this._removeThousandsSeparators(ch);
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf$1(MaskedNumber2.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))), _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2), prepCh = _normalizePrepare2[0], details = _normalizePrepare2[1];
      if (ch && !noSepCh)
        details.skip = true;
      return [prepCh, details];
    }
  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var count = 0;
      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators)
            to += this.thousandsSeparator.length;
        }
      }
      return count;
    }
  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice2).length, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : void 0;
      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_getPrototypeOf$1(MaskedNumber2.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.thousandsSeparator)
        return _get(_getPrototypeOf$1(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
      this._value = this._removeThousandsSeparators(this.value);
      var appendDetails = _get(_getPrototypeOf$1(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos)
          return separatorPos;
      }
      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from2, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from2);
      if (separatorAroundFromPos >= 0)
        from2 = separatorAroundFromPos;
      var separatorAroundToPos = this._findSeparatorAround(to);
      if (separatorAroundToPos >= 0)
        to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from2, to];
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);
      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator)
        return cursorPos;
      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT: {
          var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT: {
          var separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
      }
      return cursorPos;
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;
      var valid = regexp.test(this._removeThousandsSeparators(this.value));
      if (valid) {
        var number2 = this.number;
        valid = valid && !isNaN(number2) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
      }
      return valid && _get(_getPrototypeOf$1(MaskedNumber2.prototype), "doValidate", this).call(this, flags);
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number2 = this.number;
        var validnum = number2;
        if (this.min != null)
          validnum = Math.max(validnum, this.min);
        if (this.max != null)
          validnum = Math.min(validnum, this.max);
        if (validnum !== number2)
          this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros)
          formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0)
          formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }
      _get(_getPrototypeOf$1(MaskedNumber2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix);
      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function(match2, sign, zeros, num) {
        return sign + num;
      });
      if (value.length && !/\d$/.test(parts[0]))
        parts[0] = parts[0] + "0";
      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, "");
        if (!parts[1].length)
          parts.length = 1;
      }
      return this._insertThousandsSeparators(parts.join(this.radix));
    }
  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value)
        return value;
      var parts = value.split(this.radix);
      if (parts.length < 2)
        parts.push("");
      parts[1] = parts[1].padEnd(this.scale, "0");
      return parts.join(this.radix);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf$1(MaskedNumber2.prototype), "unmaskedValue", unmaskedValue.replace(".", this.radix), this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set2(n2) {
      _set(_getPrototypeOf$1(MaskedNumber2.prototype), "unmaskedValue", String(n2), this, true);
    }
  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set2(number2) {
      this.typedValue = number2;
    }
  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }, {
    key: "typedValueEquals",
    value: function typedValueEquals(value) {
      return (_get(_getPrototypeOf$1(MaskedNumber2.prototype), "typedValueEquals", this).call(this, value) || MaskedNumber2.EMPTY_VALUES.includes(value) && MaskedNumber2.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === "");
    }
  }]);
  return MaskedNumber2;
}(Masked);
MaskedNumber.DEFAULTS = {
  radix: ",",
  thousandsSeparator: "",
  mapToRadix: ["."],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
MaskedNumber.EMPTY_VALUES = [].concat(_toConsumableArray(Masked.EMPTY_VALUES), [0]);
IMask.MaskedNumber = MaskedNumber;
var MaskedFunction = /* @__PURE__ */ function(_Masked) {
  _inherits$1(MaskedFunction2, _Masked);
  var _super = _createSuper$1(MaskedFunction2);
  function MaskedFunction2() {
    _classCallCheck$1(this, MaskedFunction2);
    return _super.apply(this, arguments);
  }
  _createClass$1(MaskedFunction2, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask)
        opts.validate = opts.mask;
      _get(_getPrototypeOf$1(MaskedFunction2.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedFunction2;
}(Masked);
IMask.MaskedFunction = MaskedFunction;
var _excluded$8 = ["compiledMasks", "currentMaskRef", "currentMask"];
var MaskedDynamic = /* @__PURE__ */ function(_Masked) {
  _inherits$1(MaskedDynamic2, _Masked);
  var _super = _createSuper$1(MaskedDynamic2);
  function MaskedDynamic2(opts) {
    var _this;
    _classCallCheck$1(this, MaskedDynamic2);
    _this = _super.call(this, Object.assign({}, MaskedDynamic2.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  _createClass$1(MaskedDynamic2, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "_update", this).call(this, opts);
      if ("mask" in opts) {
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function(m2) {
          return createMask(m2);
        }) : [];
      }
    }
  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var details = this._applyDispatch(ch, flags);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
      }
      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new ChangeDetails();
      var prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state;
      this.currentMask = this.doDispatch(appended, Object.assign({}, flags));
      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          this.currentMask.reset();
          if (insertValue) {
            var d2 = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d2.inserted.length - prevValueBeforeTail.length;
          }
          if (tailValue) {
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          this.currentMask.state = prevMaskState;
        }
      }
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var details = this._applyDispatch.apply(this, arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }
      return details;
    }
  }, {
    key: "currentMaskFlags",
    value: function currentMaskFlags(flags) {
      var _flags$_beforeTailSta, _flags$_beforeTailSta2;
      return Object.assign({}, flags, {
        _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
      });
    }
  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "doValidate", this).call(this, flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf$1(MaskedDynamic2.prototype), "doPrepare", this).call(this, str, flags)), _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2), s = _normalizePrepare2[0], details = _normalizePrepare2[1];
      if (this.currentMask) {
        var currentDetails;
        var _normalizePrepare3 = normalizePrepare(_get(_getPrototypeOf$1(MaskedDynamic2.prototype), "doPrepare", this).call(this, s, this.currentMaskFlags(flags)));
        var _normalizePrepare4 = _slicedToArray(_normalizePrepare3, 2);
        s = _normalizePrepare4[0];
        currentDetails = _normalizePrepare4[1];
        details = details.aggregate(currentDetails);
      }
      return [s, details];
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this$currentMask;
      (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
      this.compiledMasks.forEach(function(m2) {
        return m2.reset();
      });
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : "";
    },
    set: function set2(value) {
      _set(_getPrototypeOf$1(MaskedDynamic2.prototype), "value", value, this, true);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : "";
    },
    set: function set2(unmaskedValue) {
      _set(_getPrototypeOf$1(MaskedDynamic2.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : "";
    },
    set: function set2(value) {
      var unmaskedValue = String(value);
      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }
      this.unmaskedValue = unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      var _this$currentMask2;
      return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
    }
  }, {
    key: "isFilled",
    get: function get() {
      var _this$currentMask3;
      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
    }
  }, {
    key: "remove",
    value: function remove() {
      var details = new ChangeDetails();
      if (this.currentMask) {
        var _this$currentMask4;
        details.aggregate((_this$currentMask4 = this.currentMask).remove.apply(_this$currentMask4, arguments)).aggregate(this._applyDispatch());
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      var _this$currentMask5;
      return Object.assign({}, _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function(m2) {
          return m2.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: (_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.state
      });
    },
    set: function set2(state) {
      var compiledMasks = state.compiledMasks, currentMaskRef = state.currentMaskRef, currentMask = state.currentMask, maskedState = _objectWithoutProperties$1(state, _excluded$8);
      this.compiledMasks.forEach(function(m2, mi) {
        return m2.state = compiledMasks[mi];
      });
      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }
      _set(_getPrototypeOf$1(MaskedDynamic2.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask6;
      return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : "";
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask7, _get2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get2 = _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "extractTail", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask)
        this.currentMask.doCommit();
      _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "doCommit", this).call(this);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask8, _get3;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get3 = _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "nearestInputPos", this)).call.apply(_get3, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "overwrite", this);
    },
    set: function set2(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "eager",
    get: function get() {
      return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf$1(MaskedDynamic2.prototype), "eager", this);
    },
    set: function set2(eager) {
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return Array.isArray(mask) && this.compiledMasks.every(function(m2, mi) {
        var _mask$mi;
        return m2.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
      });
    }
  }, {
    key: "typedValueEquals",
    value: function typedValueEquals(value) {
      var _this$currentMask9;
      return Boolean((_this$currentMask9 = this.currentMask) === null || _this$currentMask9 === void 0 ? void 0 : _this$currentMask9.typedValueEquals(value));
    }
  }]);
  return MaskedDynamic2;
}(Masked);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length)
      return;
    var inputValue = masked.rawInputValue;
    var inputs = masked.compiledMasks.map(function(m2, index) {
      m2.reset();
      m2.append(inputValue, {
        raw: true
      });
      m2.append(appended, masked.currentMaskFlags(flags));
      var weight = m2.rawInputValue.length;
      return {
        weight,
        index
      };
    });
    inputs.sort(function(i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
IMask.MaskedDynamic = MaskedDynamic;
var PIPE_TYPE = {
  MASKED: "value",
  UNMASKED: "unmaskedValue",
  TYPED: "typedValue"
};
function createPipe(mask) {
  var from2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = createMask(mask);
  return function(value) {
    return masked.runIsolated(function(m2) {
      m2[from2] = value;
      return m2[to];
    });
  };
}
function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }
  return createPipe.apply(void 0, pipeArgs)(value);
}
IMask.PIPE_TYPE = PIPE_TYPE;
IMask.createPipe = createPipe;
IMask.pipe = pipe;
try {
  globalThis.IMask = IMask;
} catch (e2) {
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result2;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result2 = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result2 = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result2);
  };
}
var MASK_PROPS = {
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.string, PropTypes.instanceOf(RegExp), PropTypes.oneOf([Date, Number, IMask.Masked]), PropTypes.instanceOf(IMask.Masked)]),
  value: PropTypes.any,
  unmask: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["typed"])]),
  prepare: PropTypes.func,
  validate: PropTypes.func,
  commit: PropTypes.func,
  overwrite: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["shift"])]),
  eager: PropTypes.bool,
  onAccept: PropTypes.func,
  onComplete: PropTypes.func,
  placeholderChar: PropTypes.string,
  lazy: PropTypes.bool,
  definitions: PropTypes.object,
  blocks: PropTypes.object,
  pattern: PropTypes.string,
  format: PropTypes.func,
  parse: PropTypes.func,
  autofix: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["pad"])]),
  radix: PropTypes.string,
  thousandsSeparator: PropTypes.string,
  mapToRadix: PropTypes.arrayOf(PropTypes.string),
  scale: PropTypes.number,
  signed: PropTypes.bool,
  normalizeZeros: PropTypes.bool,
  padFractionalZeros: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]),
  dispatch: PropTypes.func,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.object
  })])
};
var MASK_PROPS_NAMES = Object.keys(MASK_PROPS);
var NON_MASK_OPTIONS_PROPS_NAMES = ["value", "unmask", "onAccept", "onComplete", "inputRef"];
var MASK_OPTIONS_PROPS_NAMES = MASK_PROPS_NAMES.filter(function(pName) {
  return NON_MASK_OPTIONS_PROPS_NAMES.indexOf(pName) < 0;
});
function IMaskMixin(ComposedComponent) {
  var MaskedComponent = /* @__PURE__ */ function(_React$Component) {
    _inherits(MaskedComponent2, _React$Component);
    var _super = _createSuper(MaskedComponent2);
    function MaskedComponent2(props) {
      var _this;
      _classCallCheck(this, MaskedComponent2);
      _this = _super.call(this, props);
      _this._inputRef = _this._inputRef.bind(_assertThisInitialized(_this));
      return _this;
    }
    _createClass(MaskedComponent2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.props.mask)
          return;
        this.initMask();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var maskOptions = this._extractMaskOptionsFromProps(props);
        if (maskOptions.mask) {
          if (this.maskRef) {
            this.maskRef.updateOptions(maskOptions);
            if ("value" in props)
              this.maskValue = props.value;
          } else {
            this.initMask(maskOptions);
          }
        } else {
          this.destroyMask();
          if ("value" in props)
            this.element.value = props.value;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.destroyMask();
      }
    }, {
      key: "_inputRef",
      value: function _inputRef(el) {
        this.element = el;
        if (this.props.inputRef) {
          if (Object.prototype.hasOwnProperty.call(this.props.inputRef, "current"))
            this.props.inputRef.current = el;
          else
            this.props.inputRef(el);
        }
      }
    }, {
      key: "initMask",
      value: function initMask() {
        var maskOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._extractMaskOptionsFromProps(this.props);
        this.maskRef = IMask(this.element, maskOptions).on("accept", this._onAccept.bind(this)).on("complete", this._onComplete.bind(this));
        if ("value" in this.props)
          this.maskValue = this.props.value;
      }
    }, {
      key: "destroyMask",
      value: function destroyMask() {
        if (this.maskRef) {
          this.maskRef.destroy();
          delete this.maskRef;
        }
      }
    }, {
      key: "_extractMaskOptionsFromProps",
      value: function _extractMaskOptionsFromProps(props) {
        var cloneProps = Object.assign({}, props);
        Object.keys(cloneProps).filter(function(prop) {
          return MASK_OPTIONS_PROPS_NAMES.indexOf(prop) < 0;
        }).forEach(function(nonMaskProp) {
          delete cloneProps[nonMaskProp];
        });
        return cloneProps;
      }
    }, {
      key: "_extractNonMaskProps",
      value: function _extractNonMaskProps(props) {
        var cloneProps = Object.assign({}, props);
        MASK_PROPS_NAMES.forEach(function(maskProp) {
          delete cloneProps[maskProp];
        });
        return cloneProps;
      }
    }, {
      key: "maskValue",
      get: function get() {
        if (this.props.unmask === "typed")
          return this.maskRef.typedValue;
        if (this.props.unmask)
          return this.maskRef.unmaskedValue;
        return this.maskRef.value;
      },
      set: function set2(value) {
        value = value == null ? "" : value;
        if (this.props.unmask === "typed")
          this.maskRef.typedValue = value;
        else if (this.props.unmask)
          this.maskRef.unmaskedValue = value;
        else
          this.maskRef.value = value;
      }
    }, {
      key: "_onAccept",
      value: function _onAccept(e2) {
        if (this.props.onAccept && this.maskRef)
          this.props.onAccept(this.maskValue, this.maskRef, e2);
      }
    }, {
      key: "_onComplete",
      value: function _onComplete(e2) {
        if (this.props.onComplete && this.maskRef)
          this.props.onComplete(this.maskValue, this.maskRef, e2);
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(ComposedComponent, Object.assign({}, this._extractNonMaskProps(this.props), {
          inputRef: this._inputRef
        }));
      }
    }]);
    return MaskedComponent2;
  }(React__default.Component);
  var nestedComponentName = ComposedComponent.displayName || ComposedComponent.name || "Component";
  MaskedComponent.displayName = "IMask(".concat(nestedComponentName, ")");
  MaskedComponent.propTypes = MASK_PROPS;
  return MaskedComponent;
}
var _excluded$7 = ["inputRef"];
var IMaskInputClass = IMaskMixin(function(_ref) {
  var inputRef = _ref.inputRef, props = _objectWithoutProperties(_ref, _excluded$7);
  return React__default.createElement("input", Object.assign({}, props, {
    ref: inputRef
  }));
});
var IMaskInputFn = function IMaskInputFn2(props, ref) {
  return React__default.createElement(IMaskInputClass, Object.assign({}, props, {
    ref
  }));
};
var IMaskInput = React__default.forwardRef(IMaskInputFn);
const Mask = React__default.forwardRef(function TextMaskCustom(props, ref) {
  const {
    onChange,
    ...other
  } = props;
  const masks = {
    "cardNumber": "0000 0000 0000 0000 000",
    "exp": "00/00",
    "cvc": "000"
  };
  const inputMask = masks[other["data-pf"]];
  if (!inputMask)
    throw new Error("No input mask");
  return /* @__PURE__ */ jsx(IMaskInput, {
    ...other,
    unmask: true,
    mask: inputMask,
    inputRef: ref,
    onAccept: (value) => onChange({
      target: {
        ...other,
        value
      }
    }),
    overwrite: true
  });
});
function getDataset(props) {
  return Object.fromEntries(
    Object.entries(
      props
    ).filter(([key]) => key.startsWith("data-"))
  );
}
function TextField2(props) {
  const datasetProps = getDataset(props);
  return /* @__PURE__ */ jsxs("div", {
    className: styles.fieldContainer,
    children: [/* @__PURE__ */ jsx(MUITextField, {
      variant: "outlined",
      fullWidth: true,
      className: styles.field,
      helperText: props.error ? props.error : void 0,
      ...props,
      InputProps: {
        inputComponent: props["data-pf"] ? Mask : void 0,
        ...props.InputProps
      },
      inputProps: {
        ...datasetProps,
        ...props.inputProps
      },
      error: Boolean(props.error)
    }), props.endAdornment && /* @__PURE__ */ jsx("span", {
      className: styles.adornment,
      children: props.endAdornment
    })]
  });
}
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsx("span", {
      className: childClassName
    })
  });
}
const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses$1 = touchRippleClasses;
const _excluded$6 = ["center", "classes", "className"];
let _ = (t2) => t2, _t, _t2, _t3, _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled$1("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled$1(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
const TouchRipple = /* @__PURE__ */ React.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$6);
  const [ripples, setRipples] = React.useState([]);
  const nextKey = React.useRef(0);
  const rippleCallback = React.useRef(null);
  React.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React.useRef(false);
  const startTimer = React.useRef(null);
  const startTimerCommit = React.useRef(null);
  const container2 = React.useRef(null);
  React.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = React.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses$1.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container2.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event != null && event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = React.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React.useCallback((event, cb) => {
    clearTimeout(startTimer.current);
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  React.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ jsx(TouchRippleRoot, _extends({
    className: clsx(touchRippleClasses$1.root, classes.root, className),
    ref: container2
  }, other, {
    children: /* @__PURE__ */ jsx(TransitionGroup$1, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
var TouchRipple$1 = TouchRipple;
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var buttonBaseClasses$1 = buttonBaseClasses;
const _excluded$5 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
const useUtilityClasses$5 = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled$1("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  margin: 0,
  borderRadius: 0,
  padding: 0,
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  WebkitAppearance: "none",
  textDecoration: "none",
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
  },
  [`&.${buttonBaseClasses$1.disabled}`]: {
    pointerEvents: "none",
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ React.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action: action2,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$5);
  const buttonRef = React.useRef(null);
  const rippleRef = React.useRef(null);
  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React.useImperativeHandle(action2, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = React.useState(false);
  React.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  React.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button2 = buttonRef.current;
    return component && component !== "button" && !(button2.tagName === "A" && button2.href);
  };
  const keydownRef = React.useRef(false);
  const handleKeyDown2 = useEventCallback((event) => {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses$5(ownerState);
  return /* @__PURE__ */ jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? /* @__PURE__ */ jsx(TouchRipple$1, _extends({
      ref: handleRippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
var ButtonBase$1 = ButtonBase;
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var buttonClasses$1 = buttonClasses;
const ButtonGroupContext = /* @__PURE__ */ React.createContext({});
var ButtonGroupContext$1 = ButtonGroupContext;
const _excluded$4 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    color: color2,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, `${variant}${capitalize(color2)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color2 === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
});
const ButtonRoot = styled$1(ButtonBase$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color)}`], styles2[`size${capitalize(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  return _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends({
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "contained" && {
      backgroundColor: (theme.vars || theme).palette.grey.A100,
      boxShadow: (theme.vars || theme).shadows[4],
      "@media (hover: none)": {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    "&:active": _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses$1.disabled}`]: _extends({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === "outlined" && {
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    }, ownerState.variant === "contained" && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === "text" && {
    padding: "6px 8px"
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
  }, ownerState.variant === "contained" && {
    color: theme.vars ? theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: (theme.vars || theme).palette.grey[300],
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, ownerState.size === "small" && ownerState.variant === "text" && {
    padding: "4px 5px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "text" && {
    padding: "8px 11px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "contained" && {
    padding: "4px 10px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "contained" && {
    padding: "8px 22px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.disabled}`]: {
    boxShadow: "none"
  }
});
const ButtonStartIcon = styled$1("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.startIcon, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = styled$1("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.endIcon, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button$1 = /* @__PURE__ */ React.forwardRef(function Button(inProps, ref) {
  const contextProps = React.useContext(ButtonGroupContext$1);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color: color2 = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$4);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses$4(ownerState);
  const startIcon = startIconProp && /* @__PURE__ */ jsx(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /* @__PURE__ */ jsx(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  return /* @__PURE__ */ jsxs(ButtonRoot, _extends({
    ownerState,
    className: clsx(contextProps.className, classes.root, className),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
var MUIButton = Button$1;
function Button2(props) {
  return /* @__PURE__ */ jsx(MUIButton, {
    variant: "contained",
    className: styles.button,
    ...props
  });
}
const SvgCreditCard = (props) => /* @__PURE__ */ React.createElement("svg", {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React.createElement("path", {
  d: "M17.5005 3.4375H2.50046C2.0862 3.43797 1.68904 3.60274 1.39612 3.89566C1.1032 4.18859 0.938425 4.58574 0.937958 5V7.55753C0.937929 7.56058 0.9375 7.56355 0.9375 7.5666C0.9375 7.56966 0.937929 7.57263 0.937958 7.57568V15C0.938425 15.4143 1.1032 15.8114 1.39612 16.1043C1.68904 16.3973 2.0862 16.562 2.50046 16.5625H17.5005C17.9147 16.562 18.3119 16.3973 18.6048 16.1043C18.8977 15.8114 19.0625 15.4143 19.063 15V5C19.0625 4.58574 18.8977 4.18859 18.6048 3.89566C18.3119 3.60274 17.9147 3.43797 17.5005 3.4375ZM17.188 5.3125V6.6291H2.81296V5.3125H17.188ZM2.81296 14.6875V8.5041H17.188V14.6875H2.81296ZM16.25 12.8125C16.25 13.0611 16.1512 13.2996 15.9754 13.4754C15.7996 13.6512 15.5611 13.75 15.3125 13.75H12.8125C12.5639 13.75 12.3254 13.6512 12.1496 13.4754C11.9738 13.2996 11.875 13.0611 11.875 12.8125C11.875 12.5639 11.9738 12.3254 12.1496 12.1496C12.3254 11.9738 12.5639 11.875 12.8125 11.875H15.3125C15.5611 11.875 15.7996 11.9738 15.9754 12.1496C16.1512 12.3254 16.25 12.5639 16.25 12.8125ZM10.625 12.8125C10.625 13.0611 10.5262 13.2996 10.3504 13.4754C10.1746 13.6512 9.93614 13.75 9.6875 13.75H8.4375C8.18886 13.75 7.9504 13.6512 7.77459 13.4754C7.59877 13.2996 7.5 13.0611 7.5 12.8125C7.5 12.5639 7.59877 12.3254 7.77459 12.1496C7.9504 11.9738 8.18886 11.875 8.4375 11.875H9.6875C9.93614 11.875 10.1746 11.9738 10.3504 12.1496C10.5262 12.3254 10.625 12.5639 10.625 12.8125Z",
  fill: "#589195"
}));
function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = /* @__PURE__ */ Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key];
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values))
    this._size++;
  return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var propertyExpr = {
  Cache,
  split,
  normalizePath,
  setter: function(path) {
    var parts = normalizePath(path);
    return setCache.get(path) || setCache.set(path, function setter(obj, value) {
      var index = 0;
      var len = parts.length;
      var data = obj;
      while (index < len - 1) {
        var part = parts[index];
        if (part === "__proto__" || part === "constructor" || part === "prototype") {
          return obj;
        }
        data = data[parts[index++]];
      }
      data[parts[index]] = value;
    });
  },
  getter: function(path, safe) {
    var parts = normalizePath(path);
    return getCache.get(path) || getCache.set(path, function getter(data) {
      var index = 0, len = parts.length;
      while (index < len) {
        if (data != null || !safe)
          data = data[parts[index++]];
        else
          return;
      }
      return data;
    });
  },
  join: function(segments) {
    return segments.reduce(function(path, part) {
      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
    }, "");
  },
  forEach: function(path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
  }
};
function normalizePath(path) {
  return pathCache.get(path) || pathCache.set(
    path,
    split(path).map(function(part) {
      return part.replace(CLEAN_QUOTES_REGEX, "$2");
    })
  );
}
function split(path) {
  return path.match(SPLIT_REGEX) || [""];
}
function forEach(parts, iter, thisArg) {
  var len = parts.length, part, idx, isArray2, isBracket;
  for (idx = 0; idx < len; idx++) {
    part = parts[idx];
    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }
      isBracket = isQuoted(part);
      isArray2 = !isBracket && /^\d+$/.test(part);
      iter.call(thisArg, part, isBracket, isArray2, idx, parts);
    }
  }
}
function isQuoted(str) {
  return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
const words = (str) => str.match(reWords) || [];
const upperFirst = (str) => str[0].toUpperCase() + str.slice(1);
const join = (str, d2) => words(str).join(d2).toLowerCase();
const camelCase = (str) => words(str).reduce(
  (acc, next2) => `${acc}${!acc ? next2.toLowerCase() : next2[0].toUpperCase() + next2.slice(1).toLowerCase()}`,
  ""
);
const pascalCase = (str) => upperFirst(camelCase(str));
const snakeCase = (str) => join(str, "_");
const kebabCase = (str) => join(str, "-");
const sentenceCase = (str) => upperFirst(join(str, " "));
const titleCase = (str) => words(str).map(upperFirst).join(" ");
var tinyCase = {
  words,
  upperFirst,
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  sentenceCase,
  titleCase
};
var toposort$2 = { exports: {} };
toposort$2.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges);
};
toposort$2.exports.array = toposort;
function toposort(nodes, edges) {
  var cursor2 = nodes.length, sorted = new Array(cursor2), visited = {}, i = cursor2, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (i--) {
    if (!visited[i])
      visit(nodes[i], i, /* @__PURE__ */ new Set());
  }
  return sorted;
  function visit(node2, i2, predecessors) {
    if (predecessors.has(node2)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node2);
      } catch (e2) {
        nodeRep = "";
      }
      throw new Error("Cyclic dependency" + nodeRep);
    }
    if (!nodesHash.has(node2)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node2));
    }
    if (visited[i2])
      return;
    visited[i2] = true;
    var outgoing = outgoingEdges.get(node2) || /* @__PURE__ */ new Set();
    outgoing = Array.from(outgoing);
    if (i2 = outgoing.length) {
      predecessors.add(node2);
      do {
        var child = outgoing[--i2];
        visit(child, nodesHash.get(child), predecessors);
      } while (i2);
      predecessors.delete(node2);
    }
    sorted[--cursor2] = node2;
  }
}
function uniqueNodes(arr) {
  var res = /* @__PURE__ */ new Set();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res);
}
function makeOutgoingEdges(arr) {
  var edges = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    if (!edges.has(edge[0]))
      edges.set(edge[0], /* @__PURE__ */ new Set());
    if (!edges.has(edge[1]))
      edges.set(edge[1], /* @__PURE__ */ new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges;
}
function makeNodesHash(arr) {
  var res = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i);
  }
  return res;
}
var toposort$1 = toposort$2.exports;
const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val)
    return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false)
    return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number")
    return printNumber(val);
  if (typeOf === "string")
    return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function")
    return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol")
    return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString.call(val).slice(8, -1);
  if (tag === "Date")
    return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error)
    return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp")
    return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result2 = printSimpleValue(value, quoteStrings);
  if (result2 !== null)
    return result2;
  return JSON.stringify(value, function(key, value2) {
    let result3 = printSimpleValue(this[key], quoteStrings);
    if (result3 !== null)
      return result3;
    return value2;
  }, 2);
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || "this";
    if (path !== params.path)
      params = Object.assign({}, params, {
        path
      });
    if (typeof message === "string")
      return message.replace(strReg, (_2, key) => printValue(params[key]));
    if (typeof message === "function")
      return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field2, type) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this.name = "ValidationError";
    this.value = value;
    this.path = field2;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ValidationError);
  }
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".";
    return type !== "mixed" ? `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. The validated value was: \`${printValue(value, true)}\`` + castMsg;
  }
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});
const isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  static fromOptions(refs, config2) {
    if (!config2.then && !config2.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = config2;
    let check = typeof is === "function" ? is : (...values2) => values2.every((value) => value === is);
    return new Condition(refs, (values2, schema) => {
      var _branch;
      let branch = check(...values2) ? then : otherwise;
      return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
    });
  }
  constructor(refs, builder) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    this.fn = builder;
  }
  resolve(base, options) {
    let values2 = this.refs.map((ref) => ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn(values2, base, options);
    if (schema === void 0 || schema === base) {
      return base;
    }
    if (!isSchema(schema))
      throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  }
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== "string")
      throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix2 = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix2.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result2 = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter)
      result2 = this.getter(result2 || {});
    if (this.map)
      result2 = this.map(result2);
    return result2;
  }
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
const isAbsent = (value) => value == null;
function createValidation(config2) {
  function validate({
    value,
    path = "",
    options,
    originalValue,
    schema
  }, panic, next2) {
    const {
      name: name2,
      test,
      params,
      message,
      skipAbsent
    } = config2;
    let {
      parent,
      context,
      abortEarly = schema.spec.abortEarly
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = Object.assign({
        value,
        originalValue,
        label: schema.spec.label,
        path: overrides.path || path,
        spec: schema.spec
      }, params, overrides.params);
      for (const key of Object.keys(nextParams))
        nextParams[key] = resolve(nextParams[key]);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name2);
      error.params = nextParams;
      return error;
    }
    const invalid = abortEarly ? panic : next2;
    let ctx = {
      path,
      parent,
      type: name2,
      from: options.from,
      createError,
      resolve,
      options,
      originalValue,
      schema
    };
    const handleResult = (validOrError) => {
      if (ValidationError.isError(validOrError))
        invalid(validOrError);
      else if (!validOrError)
        invalid(createError());
      else
        next2(null);
    };
    const handleError = (err) => {
      if (ValidationError.isError(err))
        invalid(err);
      else
        panic(err);
    };
    const shouldSkip = skipAbsent && isAbsent(value);
    if (!options.sync) {
      try {
        Promise.resolve(!shouldSkip ? test.call(ctx, value, ctx) : true).then(handleResult, handleError);
      } catch (err) {
        handleError(err);
      }
      return;
    }
    let result2;
    try {
      var _result;
      result2 = !shouldSkip ? test.call(ctx, value, ctx) : true;
      if (typeof ((_result = result2) == null ? void 0 : _result.then) === "function") {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      }
    } catch (err) {
      handleError(err);
      return;
    }
    handleResult(result2);
  }
  validate.OPTIONS = config2;
  return validate;
}
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path)
    return {
      parent,
      parentPath: path,
      schema
    };
  propertyExpr.forEach(path, (_part, isBracket, isArray2) => {
    let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    let isTuple = schema.type === "tuple";
    let idx = isArray2 ? parseInt(part, 10) : 0;
    if (schema.innerType || isTuple) {
      if (isTuple && !isArray2)
        throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = isTuple ? schema.spec.types[idx] : schema.innerType;
    }
    if (!isArray2) {
      if (!schema.fields || !schema.fields[part])
        throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet extends Set {
  describe() {
    const description = [];
    for (const item of this.values()) {
      description.push(Reference.isRef(item) ? item.describe() : item);
    }
    return description;
  }
  resolveAll(resolve) {
    let result2 = [];
    for (const item of this.values()) {
      result2.push(resolve(item));
    }
    return result2;
  }
  clone() {
    return new ReferenceSet(this.values());
  }
  merge(newItems, removeItems) {
    const next2 = this.clone();
    newItems.forEach((value) => next2.add(value));
    removeItems.forEach((value) => next2.delete(value));
    return next2;
  }
}
function clone(src, seen = /* @__PURE__ */ new Map()) {
  if (isSchema(src) || !src || typeof src !== "object")
    return src;
  if (seen.has(src))
    return seen.get(src);
  let copy2;
  if (src instanceof Date) {
    copy2 = new Date(src.getTime());
    seen.set(src, copy2);
  } else if (src instanceof RegExp) {
    copy2 = new RegExp(src);
    seen.set(src, copy2);
  } else if (Array.isArray(src)) {
    copy2 = new Array(src.length);
    seen.set(src, copy2);
    for (let i = 0; i < src.length; i++)
      copy2[i] = clone(src[i], seen);
  } else if (src instanceof Map) {
    copy2 = /* @__PURE__ */ new Map();
    seen.set(src, copy2);
    for (const [k2, v2] of src.entries())
      copy2.set(k2, clone(v2, seen));
  } else if (src instanceof Set) {
    copy2 = /* @__PURE__ */ new Set();
    seen.set(src, copy2);
    for (const v2 of src)
      copy2.add(clone(v2, seen));
  } else if (src instanceof Object) {
    copy2 = {};
    seen.set(src, copy2);
    for (const [k2, v2] of Object.entries(src))
      copy2[k2] = clone(v2, seen);
  } else {
    throw Error(`Unable to clone ${src}`);
  }
  return copy2;
}
class Schema {
  constructor(options) {
    this.type = void 0;
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this.internalTests = {};
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = /* @__PURE__ */ Object.create(null);
    this._typeCheck = void 0;
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = options.type;
    this._typeCheck = options.check;
    this.spec = Object.assign({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      optional: true,
      coerce: true
    }, options == null ? void 0 : options.spec);
    this.withMutation((s) => {
      s.nonNullable();
    });
  }
  get _type() {
    return this.type;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec)
        Object.assign(this.spec, spec);
      return this;
    }
    const next2 = Object.create(Object.getPrototypeOf(this));
    next2.type = this.type;
    next2._typeCheck = this._typeCheck;
    next2._whitelist = this._whitelist.clone();
    next2._blacklist = this._blacklist.clone();
    next2.internalTests = Object.assign({}, this.internalTests);
    next2.exclusiveTests = Object.assign({}, this.exclusiveTests);
    next2.deps = [...this.deps];
    next2.conditions = [...this.conditions];
    next2.tests = [...this.tests];
    next2.transforms = [...this.transforms];
    next2.spec = clone(Object.assign({}, this.spec, spec));
    return next2;
  }
  label(label2) {
    let next2 = this.clone();
    next2.spec.label = label2;
    return next2;
  }
  meta(...args) {
    if (args.length === 0)
      return this.spec.meta;
    let next2 = this.clone();
    next2.spec.meta = Object.assign(next2.spec.meta || {}, args[0]);
    return next2;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result2 = fn(this);
    this._mutate = before;
    return result2;
  }
  concat(schema) {
    if (!schema || schema === this)
      return this;
    if (schema.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = Object.assign({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next2) => {
      schema.tests.forEach((fn) => {
        next2.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v2) {
    if (v2 == null) {
      if (this.spec.nullable && v2 === null)
        return true;
      if (this.spec.optional && v2 === void 0)
        return true;
      return false;
    }
    return this._typeCheck(v2);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  resolveOptions(options) {
    var _options$strict, _options$abortEarly, _options$recursive;
    return Object.assign({}, options, {
      from: options.from || [],
      strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
      abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
      recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive
    });
  }
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(Object.assign({
      value
    }, options));
    let allowOptionality = options.assert === "ignore-optionality";
    let result2 = resolvedSchema._cast(value, options);
    if (options.assert !== false && !resolvedSchema.isType(result2)) {
      if (allowOptionality && isAbsent(result2)) {
        return result2;
      }
      let formattedValue = printValue(value);
      let formattedResult = printValue(result2);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema.type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result2;
  }
  _cast(rawValue, _options) {
    let value = rawValue === void 0 ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
    if (value === void 0) {
      value = this.getDefault();
    }
    return value;
  }
  _validate(_value, options = {}, panic, next2) {
    let {
      path,
      originalValue = _value,
      strict = this.spec.strict
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, Object.assign({
        assert: false
      }, options));
    }
    let initialTests = [];
    for (let test of Object.values(this.internalTests)) {
      if (test)
        initialTests.push(test);
    }
    this.runTests({
      path,
      value,
      originalValue,
      options,
      tests: initialTests
    }, panic, (initialErrors) => {
      if (initialErrors.length) {
        return next2(initialErrors, value);
      }
      this.runTests({
        path,
        value,
        originalValue,
        options,
        tests: this.tests
      }, panic, next2);
    });
  }
  runTests(runOptions, panic, next2) {
    let fired = false;
    let {
      tests,
      value,
      originalValue,
      path,
      options
    } = runOptions;
    let panicOnce = (arg) => {
      if (fired)
        return;
      fired = true;
      panic(arg, value);
    };
    let nextOnce = (arg) => {
      if (fired)
        return;
      fired = true;
      next2(arg, value);
    };
    let count = tests.length;
    let nestedErrors = [];
    if (!count)
      return nextOnce([]);
    let args = {
      value,
      originalValue,
      path,
      options,
      schema: this
    };
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      test(args, panicOnce, function finishTestRun(err) {
        if (err) {
          nestedErrors = nestedErrors.concat(err);
        }
        if (--count <= 0) {
          nextOnce(nestedErrors);
        }
      });
    }
  }
  asNestedTest({
    key,
    index,
    parent,
    parentPath,
    originalParent,
    options
  }) {
    const k2 = key != null ? key : index;
    if (k2 == null) {
      throw TypeError("Must include `key` or `index` for nested validations");
    }
    const isIndex2 = typeof k2 === "number";
    let value = parent[k2];
    const testOptions = Object.assign({}, options, {
      strict: true,
      parent,
      value,
      originalValue: originalParent[k2],
      key: void 0,
      [isIndex2 ? "index" : "key"]: k2,
      path: isIndex2 || k2.includes(".") ? `${parentPath || ""}[${value ? k2 : `"${k2}"`}]` : (parentPath ? `${parentPath}.` : "") + key
    });
    return (_2, panic, next2) => this.resolve(testOptions)._validate(value, testOptions, panic, next2);
  }
  validate(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
      if (ValidationError.isError(error))
        error.value = parsed;
      reject(error);
    }, (errors, validated) => {
      if (errors.length)
        reject(new ValidationError(errors, validated));
      else
        resolve(validated);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let result2;
    schema._validate(value, Object.assign({}, options, {
      sync: true
    }), (error, parsed) => {
      if (ValidationError.isError(error))
        error.value = parsed;
      throw error;
    }, (errors, validated) => {
      if (errors.length)
        throw new ValidationError(errors, value);
      result2 = validated;
    });
    return result2;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err))
        return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err))
        return false;
      throw err;
    }
  }
  _getDefault() {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault();
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next2 = this.clone({
      default: def
    });
    return next2;
  }
  strict(isStrict = true) {
    return this.clone({
      strict: isStrict
    });
  }
  nullability(nullable, message) {
    const next2 = this.clone({
      nullable
    });
    next2.internalTests.nullable = createValidation({
      message,
      name: "nullable",
      test(value) {
        return value === null ? this.schema.spec.nullable : true;
      }
    });
    return next2;
  }
  optionality(optional, message) {
    const next2 = this.clone({
      optional
    });
    next2.internalTests.optionality = createValidation({
      message,
      name: "optionality",
      test(value) {
        return value === void 0 ? this.schema.spec.optional : true;
      }
    });
    return next2;
  }
  optional() {
    return this.optionality(true);
  }
  defined(message = mixed.defined) {
    return this.optionality(false, message);
  }
  nullable() {
    return this.nullability(true);
  }
  nonNullable(message = mixed.notNull) {
    return this.nullability(false, message);
  }
  required(message = mixed.required) {
    return this.clone().withMutation((next2) => next2.nonNullable(message).defined(message));
  }
  notRequired() {
    return this.clone().withMutation((next2) => next2.nullable().optional());
  }
  transform(fn) {
    let next2 = this.clone();
    next2.transforms.push(fn);
    return next2;
  }
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0)
      opts.message = mixed.default;
    if (typeof opts.test !== "function")
      throw new TypeError("`test` is a required parameters");
    let next2 = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next2.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name)
      next2.exclusiveTests[opts.name] = !!opts.exclusive;
    next2.tests = next2.tests.filter((fn) => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive)
          return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test)
          return false;
      }
      return true;
    });
    next2.tests.push(validate);
    return next2;
  }
  when(keys2, options) {
    if (!Array.isArray(keys2) && typeof keys2 !== "string") {
      options = keys2;
      keys2 = ".";
    }
    let next2 = this.clone();
    let deps = toArray(keys2).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling)
        next2.deps.push(dep.key);
    });
    next2.conditions.push(typeof options === "function" ? new Condition(deps, options) : Condition.fromOptions(deps, options));
    return next2;
  }
  typeError(message) {
    let next2 = this.clone();
    next2.internalTests.typeError = createValidation({
      message,
      name: "typeError",
      test(value) {
        if (!isAbsent(value) && !this.schema._typeCheck(value))
          return this.createError({
            params: {
              type: this.schema.type
            }
          });
        return true;
      }
    });
    return next2;
  }
  oneOf(enums, message = mixed.oneOf) {
    let next2 = this.clone();
    enums.forEach((val) => {
      next2._whitelist.add(val);
      next2._blacklist.delete(val);
    });
    next2.internalTests.whiteList = createValidation({
      message,
      name: "oneOf",
      skipAbsent: true,
      test(value) {
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: Array.from(valids).join(", "),
            resolved
          }
        });
      }
    });
    return next2;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    let next2 = this.clone();
    enums.forEach((val) => {
      next2._blacklist.add(val);
      next2._whitelist.delete(val);
    });
    next2.internalTests.blacklist = createValidation({
      message,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value))
          return this.createError({
            params: {
              values: Array.from(invalids).join(", "),
              resolved
            }
          });
        return true;
      }
    });
    return next2;
  }
  strip(strip = true) {
    let next2 = this.clone();
    next2.spec.strip = strip;
    return next2;
  }
  describe(options) {
    const next2 = (options ? this.resolve(options) : this).clone();
    const {
      label: label2,
      meta,
      optional,
      nullable
    } = next2.spec;
    const description = {
      meta,
      label: label2,
      optional,
      nullable,
      default: next2.getDefault(options),
      type: next2.type,
      oneOf: next2._whitelist.describe(),
      notOneOf: next2._blacklist.describe(),
      tests: next2.tests.map((fn) => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n2, idx, list) => list.findIndex((c2) => c2.name === n2.name) === idx)
    };
    return description;
  }
}
Schema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"])
  Schema.prototype[`${method}At`] = function(path, value, options = {}) {
    const {
      parent,
      parentPath,
      schema
    } = getIn(this, path, value, options.context);
    return schema[method](parent && parent[parentPath], Object.assign({}, options, {
      parent,
      path
    }));
  };
for (const alias of ["equals", "is"])
  Schema.prototype[alias] = Schema.prototype.oneOf;
for (const alias of ["not", "nope"])
  Schema.prototype[alias] = Schema.prototype.notOneOf;
let rEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value) => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$6() {
  return new StringSchema();
}
class StringSchema extends Schema {
  constructor() {
    super({
      type: "string",
      check(value) {
        if (value instanceof String)
          value = value.valueOf();
        return typeof value === "string";
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value))
          return value;
        if (Array.isArray(value))
          return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag)
          return value;
        return strValue;
      });
    });
  }
  required(message) {
    return super.required(message).withMutation((schema) => schema.test({
      message: message || mixed.required,
      name: "required",
      skipAbsent: true,
      test: (value) => !!value.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((schema) => {
      schema.tests = schema.tests.filter((t2) => t2.OPTIONS.name !== "required");
      return schema;
    });
  }
  length(length2, message = string.length) {
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length: length2
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length2);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: "max",
      exclusive: true,
      message,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name2;
    if (options) {
      if (typeof options === "object") {
        ({
          excludeEmptyString = false,
          message,
          name: name2
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name2 || "matches",
      message: message || string.matches,
      params: {
        regex
      },
      skipAbsent: true,
      test: (value) => value === "" && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message,
      excludeEmptyString: false
    });
  }
  ensure() {
    return this.default("").transform((val) => val === null ? "" : val);
  }
  trim(message = string.trim) {
    return this.transform((val) => val != null ? val.trim() : val).test({
      message,
      name: "trim",
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      skipAbsent: true,
      test: (value) => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      skipAbsent: true,
      test: (value) => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$6.prototype = StringSchema.prototype;
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp, struct;
  if (struct = isoReg.exec(date2)) {
    for (var i = 0, k2; k2 = numericKeys[i]; ++i)
      struct[k2] = +struct[k2] || 0;
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
    if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === ""))
      timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
    else {
      if (struct[8] !== "Z" && struct[9] !== void 0) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === "+")
          minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else
    timestamp = Date.parse ? Date.parse(date2) : NaN;
  return timestamp;
}
let invalidDate = new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends Schema {
  constructor() {
    super({
      type: "date",
      check(v2) {
        return isDate(v2) && !isNaN(v2.getTime());
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value))
          return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
      });
    });
  }
  prepareParam(ref, name2) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast))
        throw new TypeError(`\`${name2}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, "min");
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    let limit = this.prepareParam(max, "max");
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
DateSchema.prototype;
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = /* @__PURE__ */ new Set();
  let excludes = new Set(excludedEdges.map(([a, b2]) => `${a}-${b2}`));
  function addNode(depPath, key) {
    let node2 = propertyExpr.split(depPath)[0];
    nodes.add(node2);
    if (!excludes.has(`${key}-${node2}`))
      edges.push([key, node2]);
  }
  for (const key of Object.keys(fields)) {
    let value = fields[key];
    nodes.add(key);
    if (Reference.isRef(value) && value.isSibling)
      addNode(value.path, key);
    else if (isSchema(value) && "deps" in value)
      value.deps.forEach((path) => addNode(path, key));
  }
  return toposort$1.array(Array.from(nodes), edges).reverse();
}
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if ((_err$path = err.path) != null && _err$path.includes(key)) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys2) {
  return (a, b2) => {
    return findIndex(keys2, a) - findIndex(keys2, b2);
  };
}
const parseJson = (value, _2, ctx) => {
  if (typeof value !== "string") {
    return value;
  }
  let parsed = value;
  try {
    parsed = JSON.parse(value);
  } catch (err) {
  }
  return ctx.isType(parsed) ? parsed : value;
};
function deepPartial(schema) {
  if ("fields" in schema) {
    const partial = {};
    for (const [key, fieldSchema] of Object.entries(schema.fields)) {
      partial[key] = deepPartial(fieldSchema);
    }
    return schema.setFields(partial);
  }
  if (schema.type === "array") {
    const nextArray = schema.optional();
    if (nextArray.innerType)
      nextArray.innerType = deepPartial(nextArray.innerType);
    return nextArray;
  }
  if (schema.type === "tuple") {
    return schema.optional().clone({
      types: schema.spec.types.map(deepPartial)
    });
  }
  if ("optional" in schema) {
    return schema.optional();
  }
  return schema;
}
const deepHas = (obj, p2) => {
  const path = [...propertyExpr.normalizePath(p2)];
  if (path.length === 1)
    return path[0] in obj;
  let last = path.pop();
  let parent = propertyExpr.getter(propertyExpr.join(path), true)(obj);
  return !!(parent && last in parent);
};
let isObject2 = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
function create$3(spec) {
  return new ObjectSchema(spec);
}
class ObjectSchema extends Schema {
  constructor(spec) {
    super({
      type: "object",
      check(value) {
        return isObject2(value) || typeof value === "function";
      }
    });
    this.fields = /* @__PURE__ */ Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);
    if (value === void 0)
      return this.getDefault();
    if (!this._typeCheck(value))
      return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = [].concat(this._nodes, Object.keys(value).filter((v2) => !this._nodes.includes(v2)));
    let intermediateValue = {};
    let innerOptions = Object.assign({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field2 = fields[prop];
      let exists = prop in value;
      if (field2) {
        let fieldValue;
        let inputValue = value[prop];
        innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
        field2 = field2.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = field2 instanceof Schema ? field2.spec : void 0;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec != null && fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ? field2.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== void 0) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, options = {}, panic, next2) {
    let {
      from: from2 = [],
      originalValue = _value,
      recursive = this.spec.recursive
    } = options;
    options.from = [{
      schema: this,
      value: originalValue
    }, ...from2];
    options.__validating = true;
    options.originalValue = originalValue;
    super._validate(_value, options, panic, (objectErrors, value) => {
      if (!recursive || !isObject2(value)) {
        next2(objectErrors, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = [];
      for (let key of this._nodes) {
        let field2 = this.fields[key];
        if (!field2 || Reference.isRef(field2)) {
          continue;
        }
        tests.push(field2.asNestedTest({
          options,
          key,
          parent: value,
          parentPath: options.path,
          originalParent: originalValue
        }));
      }
      this.runTests({
        tests,
        value,
        originalValue,
        options
      }, panic, (fieldErrors) => {
        next2(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
      });
    });
  }
  clone(spec) {
    const next2 = super.clone(spec);
    next2.fields = Object.assign({}, this.fields);
    next2._nodes = this._nodes;
    next2._excludedEdges = this._excludedEdges;
    next2._sortErrors = this._sortErrors;
    return next2;
  }
  concat(schema) {
    let next2 = super.concat(schema);
    let nextFields = next2.fields;
    for (let [field2, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field2];
      nextFields[field2] = target === void 0 ? schemaOrRef : target;
    }
    return next2.withMutation((s) => s.setFields(nextFields, this._excludedEdges));
  }
  _getDefault() {
    if ("default" in this.spec) {
      return super._getDefault();
    }
    if (!this._nodes.length) {
      return void 0;
    }
    let dft = {};
    this._nodes.forEach((key) => {
      const field2 = this.fields[key];
      dft[key] = field2 && "getDefault" in field2 ? field2.getDefault() : void 0;
    });
    return dft;
  }
  setFields(shape2, excludedEdges) {
    let next2 = this.clone();
    next2.fields = shape2;
    next2._nodes = sortFields(shape2, excludedEdges);
    next2._sortErrors = sortByKeyOrder(Object.keys(shape2));
    if (excludedEdges)
      next2._excludedEdges = excludedEdges;
    return next2;
  }
  shape(additions, excludes = []) {
    return this.clone().withMutation((next2) => {
      let edges = next2._excludedEdges;
      if (excludes.length) {
        if (!Array.isArray(excludes[0]))
          excludes = [excludes];
        edges = [...next2._excludedEdges, ...excludes];
      }
      return next2.setFields(Object.assign(next2.fields, additions), edges);
    });
  }
  partial() {
    const partial = {};
    for (const [key, schema] of Object.entries(this.fields)) {
      partial[key] = "optional" in schema && schema.optional instanceof Function ? schema.optional() : schema;
    }
    return this.setFields(partial);
  }
  deepPartial() {
    const next2 = deepPartial(this);
    return next2;
  }
  pick(keys2) {
    const picked = {};
    for (const key of keys2) {
      if (this.fields[key])
        picked[key] = this.fields[key];
    }
    return this.setFields(picked);
  }
  omit(keys2) {
    const fields = Object.assign({}, this.fields);
    for (const key of keys2) {
      delete fields[key];
    }
    return this.setFields(fields);
  }
  from(from2, to, alias) {
    let fromGetter = propertyExpr.getter(from2, true);
    return this.transform((obj) => {
      if (!obj)
        return obj;
      let newObj = obj;
      if (deepHas(obj, from2)) {
        newObj = Object.assign({}, obj);
        if (!alias)
          delete newObj[from2];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }
  json() {
    return this.transform(parseJson);
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow !== "boolean") {
      message = noAllow;
      noAllow = true;
    }
    let next2 = this.test({
      name: "noUnknown",
      exclusive: true,
      message,
      test(value) {
        if (value == null)
          return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(", ")
          }
        });
      }
    });
    next2.spec.noUnknown = noAllow;
    return next2;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn) {
    return this.transform((obj) => {
      if (!obj)
        return obj;
      const result2 = {};
      for (const key of Object.keys(obj))
        result2[fn(key)] = obj[key];
      return result2;
    });
  }
  camelCase() {
    return this.transformKeys(tinyCase.camelCase);
  }
  snakeCase() {
    return this.transformKeys(tinyCase.snakeCase);
  }
  constantCase() {
    return this.transformKeys((key) => tinyCase.snakeCase(key).toUpperCase());
  }
  describe(options) {
    let base = super.describe(options);
    base.fields = {};
    for (const [key, value] of Object.entries(this.fields)) {
      var _innerOptions;
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      base.fields[key] = value.describe(innerOptions);
    }
    return base;
  }
}
create$3.prototype = ObjectSchema.prototype;
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const _excluded$3 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled$1("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
const transformDeprecatedColors = (color2) => {
  return colorTransformations[color2] || color2;
};
const Typography = /* @__PURE__ */ React.forwardRef(function Typography2(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTypography"
  });
  const color2 = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color: color2
  }));
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$3);
  const ownerState = _extends({}, props, {
    align,
    color: color2,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component2 = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$3(ownerState);
  return /* @__PURE__ */ jsx(TypographyRoot, _extends({
    as: Component2,
    ref,
    ownerState,
    className: clsx(classes.root, className)
  }, other));
});
var Typography$1 = Typography;
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
const formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error"]);
var formControlLabelClasses$1 = formControlLabelClasses;
const _excluded$2 = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "slotProps", "value"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize(labelPlacement)}`, error && "error"],
    label: ["label", disabled && "disabled"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = styled$1("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses$1.label}`]: styles2.label
    }, styles2.root, styles2[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  [`&.${formControlLabelClasses$1.disabled}`]: {
    cursor: "default"
  }
}, ownerState.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  marginRight: -11
}, ownerState.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, ownerState.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${formControlLabelClasses$1.label}`]: {
    [`&.${formControlLabelClasses$1.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  }
}));
const FormControlLabel = /* @__PURE__ */ React.forwardRef(function FormControlLabel2(inProps, ref) {
  var _slotProps$typography;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label: labelProp,
    labelPlacement = "end",
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$2);
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (typeof disabled === "undefined" && typeof control.props.disabled !== "undefined") {
    disabled = control.props.disabled;
  }
  if (typeof disabled === "undefined" && muiFormControl) {
    disabled = muiFormControl.disabled;
  }
  const controlProps = {
    disabled
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = _extends({}, props, {
    disabled,
    labelPlacement,
    error: fcs.error
  });
  const classes = useUtilityClasses$2(ownerState);
  const typographySlotProps = (_slotProps$typography = slotProps.typography) != null ? _slotProps$typography : componentsProps.typography;
  let label2 = labelProp;
  if (label2 != null && label2.type !== Typography$1 && !disableTypography) {
    label2 = /* @__PURE__ */ jsx(Typography$1, _extends({
      component: "span"
    }, typographySlotProps, {
      className: clsx(classes.label, typographySlotProps == null ? void 0 : typographySlotProps.className),
      children: label2
    }));
  }
  return /* @__PURE__ */ jsxs(FormControlLabelRoot, _extends({
    className: clsx(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ React.cloneElement(control, controlProps), label2]
  }));
});
var FormControlLabel$1 = FormControlLabel;
function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass("PrivateSwitchBase", slot);
}
generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const _excluded$1 = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled$1(ButtonBase$1)(({
  ownerState
}) => _extends({
  padding: 9,
  borderRadius: "50%"
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}));
const SwitchBaseInput = styled$1("input")({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
const SwitchBase = /* @__PURE__ */ React.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon: icon2,
    id,
    inputProps,
    inputRef,
    name: name2,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded$1);
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxs(SwitchBaseRoot, _extends({
    component: "span",
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    tabIndex: null,
    role: void 0,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState,
    ref
  }, other, {
    children: [/* @__PURE__ */ jsx(SwitchBaseInput, _extends({
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      className: classes.input,
      disabled,
      id: hasLabelFor ? id : void 0,
      name: name2,
      onChange: handleInputChange,
      readOnly,
      ref: inputRef,
      required,
      ownerState,
      tabIndex,
      type
    }, type === "checkbox" && value === void 0 ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon2]
  }));
});
var SwitchBase$1 = SwitchBase;
var CheckBoxOutlineBlankIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank");
var CheckBoxIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox");
var IndeterminateCheckBoxIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function getCheckboxUtilityClass(slot) {
  return generateUtilityClass("MuiCheckbox", slot);
}
const checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary"]);
var checkboxClasses$1 = checkboxClasses;
const _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    indeterminate,
    color: color2
  } = ownerState;
  const slots = {
    root: ["root", indeterminate && "indeterminate", `color${capitalize(color2)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const CheckboxRoot = styled$1(SwitchBase$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.indeterminate && styles2.indeterminate, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${ownerState.color === "default" ? theme.vars.palette.action.activeChannel : theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(ownerState.color === "default" ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.color !== "default" && {
  [`&.${checkboxClasses$1.checked}, &.${checkboxClasses$1.indeterminate}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${checkboxClasses$1.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}));
const defaultCheckedIcon = /* @__PURE__ */ jsx(CheckBoxIcon, {});
const defaultIcon = /* @__PURE__ */ jsx(CheckBoxOutlineBlankIcon, {});
const defaultIndeterminateIcon = /* @__PURE__ */ jsx(IndeterminateCheckBoxIcon, {});
const Checkbox = /* @__PURE__ */ React.forwardRef(function Checkbox2(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;
  const props = useThemeProps({
    props: inProps,
    name: "MuiCheckbox"
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color: color2 = "primary",
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = "medium",
    className
  } = props, other = _objectWithoutPropertiesLoose$2(props, _excluded);
  const icon2 = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = _extends({}, props, {
    color: color2,
    indeterminate,
    size
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsx(CheckboxRoot, _extends({
    type: "checkbox",
    inputProps: _extends({
      "data-indeterminate": indeterminate
    }, inputProps),
    icon: /* @__PURE__ */ React.cloneElement(icon2, {
      fontSize: (_icon$props$fontSize = icon2.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /* @__PURE__ */ React.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState,
    ref,
    className: clsx(classes.root, className)
  }, other, {
    classes
  }));
});
var Checkbox$1 = Checkbox;
const regExForCardNumber = /^[0-9]{15,18}$/;
const regExForCvc = /^\d{3}$/;
function Form(props) {
  var _a, _b;
  return /* @__PURE__ */ jsxs("div", {
    className: styles$5.paymentForm,
    children: [/* @__PURE__ */ jsxs("div", {
      className: styles$5.paymentFormHeading,
      children: [/* @__PURE__ */ jsx("span", {
        className: styles$5.name,
        children: props.subject.name
      }), /* @__PURE__ */ jsx("span", {
        className: styles$5.priceLabelHeader,
        children: "\u041A \u043E\u043F\u043B\u0430\u0442\u0435"
      }), /* @__PURE__ */ jsx("span", {
        className: styles$5.price,
        children: props.subject.price
      })]
    }), /* @__PURE__ */ jsx(Formik, {
      initialValues: {
        cardNumber: "",
        exp: "",
        cvc: "",
        sendReceipt: true,
        receiptEmail: (_b = (_a = props.initialData) == null ? void 0 : _a.email) != null ? _b : ""
      },
      validateOnChange: false,
      validationSchema: create$3({
        cardNumber: create$6().matches(regExForCardNumber, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"),
        exp: create$6().min(4, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043A\u0430\u0440\u0442\u044B").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"),
        cvc: create$6().matches(regExForCvc, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 cvc \u043A\u043E\u0434").required("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"),
        receiptEmail: create$6().email("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail")
      }),
      onSubmit: async (values2, {
        setSubmitting,
        setFieldError
      }) => {
        setSubmitting(false);
        const checkout = new cp.Checkout({
          publicId: props.subject.publicID
        });
        const data = {
          cvv: values2.cvc,
          cardNumber: values2.cardNumber,
          expDateMonth: values2.exp.substring(0, 2),
          expDateYear: values2.exp.substring(2, 4)
        };
        const errorFields = {
          expDateYear: "exp",
          expDateMonth: "exp",
          cvv: "cvc",
          cardNumber: "cardNumber"
        };
        checkout.createPaymentCryptogram(data).then((cryptogram) => {
          console.log(cryptogram);
          props.onSubmit(cryptogram);
        }).catch((errors) => {
          console.log(errors);
          for (const [key, isError] of Object.entries(errors)) {
            if (isError) {
              setFieldError(errorFields[key], "\u041E\u0448\u0438\u0431\u043A\u0430");
            }
          }
        });
      },
      children: ({
        values: values2,
        errors,
        touched,
        handleChange,
        setFieldValue,
        setFieldTouched,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => {
        var _a2, _b2;
        const handleChangeCpField = (e2) => {
          const dataset = getDataset(e2.target);
          const fieldName = dataset["data-pf"];
          if (!fieldName)
            return;
          setFieldTouched(fieldName, true);
          setFieldValue(fieldName, e2.target.value);
        };
        return /* @__PURE__ */ jsxs("form", {
          onSubmit: handleSubmit,
          autoComplete: "off",
          children: [/* @__PURE__ */ jsx(TextField2, {
            "data-pf": "cardNumber",
            label: "\u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B",
            type: "text",
            onChange: handleChangeCpField,
            onBlur: handleBlur,
            value: values2.cardNumber,
            error: errors.cardNumber,
            endAdornment: /* @__PURE__ */ jsx(SvgCreditCard, {})
          }), /* @__PURE__ */ jsxs("div", {
            className: styles$5.additional,
            children: [/* @__PURE__ */ jsx(TextField2, {
              "data-pf": "exp",
              label: "\u041C\u0435\u0441\u044F\u0446/\u0413\u043E\u0434",
              type: "text",
              onChange: handleChangeCpField,
              onBlur: handleBlur,
              value: values2.exp,
              error: errors.exp
            }), /* @__PURE__ */ jsx(TextField2, {
              "data-pf": "cvc",
              label: "CVC",
              type: "text",
              onChange: handleChangeCpField,
              onBlur: handleBlur,
              value: values2.cvc,
              error: errors.cvc,
              endAdornment: /* @__PURE__ */ jsxs("div", {
                className: styles$5.popupHint,
                children: [/* @__PURE__ */ jsx("span", {
                  className: styles$5.trigger
                }), /* @__PURE__ */ jsx("div", {
                  className: styles$5.popup,
                  children: "\u0422\u0440\u0438 \u0446\u0438\u0444\u0440\u044B \u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u043A\u0430\u0440\u0442\u044B"
                })]
              })
            })]
          }), /* @__PURE__ */ jsx(FormControlLabel$1, {
            control: /* @__PURE__ */ jsx(Checkbox$1, {
              className: styles$5.checkbox,
              defaultChecked: true,
              name: "sendReceipt",
              value: values2.sendReceipt,
              onChange: handleChange,
              style: {
                color: props.color
              }
            }),
            label: "\u041F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043A\u0432\u0438\u0442\u0430\u043D\u0446\u0438\u044E"
          }), /* @__PURE__ */ jsx("div", {
            className: cx(styles$5.receiptEmail, {
              [styles$5.show]: values2.sendReceipt
            }),
            children: /* @__PURE__ */ jsx(TextField2, {
              name: "receiptEmail",
              label: "E-mail",
              type: "email",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values2.receiptEmail,
              error: errors.receiptEmail
            })
          }), /* @__PURE__ */ jsxs(Button2, {
            disabled: values2.sendReceipt && !values2.receiptEmail,
            onClick: () => handleSubmit(),
            type: "button",
            style: {
              backgroundColor: props.color
            },
            children: [(_b2 = (_a2 = props.labels) == null ? void 0 : _a2.pay) != null ? _b2 : "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C ", props.subject.price]
          })]
        });
      }
    }), /* @__PURE__ */ jsx("div", {
      className: styles$5.paymentSystem,
      children: /* @__PURE__ */ jsx(SvgPaymentSystems, {})
    })]
  });
}
const SvgSuccess = (props) => /* @__PURE__ */ React.createElement("svg", {
  width: 44,
  height: 44,
  viewBox: "0 0 44 44",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React.createElement("path", {
  d: "M31.0544 16.4509C31.432 16.8466 31.6371 17.3761 31.6243 17.923C31.6116 18.4698 31.3822 18.9892 30.9866 19.3669L20.9033 28.9919C20.5197 29.3582 20.0097 29.5625 19.4793 29.5625C18.9488 29.5625 18.4388 29.3582 18.0552 28.9919L13.0134 24.1794C12.817 23.9925 12.6594 23.7688 12.5496 23.5209C12.4397 23.273 12.3798 23.006 12.3733 22.7349C12.3668 22.4639 12.4138 22.1943 12.5116 21.9414C12.6094 21.6886 12.7561 21.4575 12.9433 21.2614C13.1304 21.0653 13.3545 20.908 13.6025 20.7985C13.8505 20.6891 14.1177 20.6296 14.3887 20.6235C14.6597 20.6174 14.9293 20.6648 15.182 20.7629C15.4347 20.8611 15.6656 21.0081 15.8614 21.1956L19.4792 24.6487L28.1382 16.3831C28.5339 16.0054 29.0635 15.8004 29.6103 15.8131C30.1572 15.8258 30.6766 16.0553 31.0544 16.4509ZM40.5624 22C40.5624 25.6713 39.4737 29.2602 37.434 32.3128C35.3944 35.3654 32.4953 37.7446 29.1034 39.1495C25.7116 40.5545 21.9793 40.9221 18.3785 40.2058C14.7778 39.4896 11.4702 37.7217 8.87422 35.1257C6.2782 32.5297 4.5103 29.2222 3.79406 25.6214C3.07782 22.0206 3.44542 18.2883 4.85037 14.8965C6.25532 11.5046 8.63453 8.60553 11.6871 6.56586C14.7397 4.52619 18.3286 3.43752 21.9999 3.43752C26.9213 3.44307 31.6395 5.40054 35.1194 8.88048C38.5994 12.3604 40.5568 17.0786 40.5624 22ZM36.4374 22C36.4374 19.1445 35.5906 16.3532 34.0042 13.979C32.4178 11.6047 30.163 9.75424 27.5249 8.6615C24.8868 7.56876 21.9839 7.28285 19.1833 7.83993C16.3827 8.397 13.8102 9.77204 11.791 11.7912C9.77191 13.8103 8.39687 16.3828 7.8398 19.1834C7.28273 21.984 7.56864 24.8869 8.66138 27.525C9.75412 30.1631 11.6046 32.4179 13.9788 34.0044C16.3531 35.5908 19.1444 36.4375 21.9999 36.4375C25.8276 36.4332 29.4973 34.9107 32.204 32.2041C34.9106 29.4975 36.4331 25.8277 36.4374 22Z",
  fill: "#26AF5F"
}));
const SvgFail = (props) => /* @__PURE__ */ React.createElement("svg", {
  width: 44,
  height: 44,
  viewBox: "0 0 44 44",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React.createElement("path", {
  d: "M22 3.43752C18.3287 3.43752 14.7398 4.52619 11.6872 6.56586C8.63465 8.60553 6.25545 11.5046 4.85049 14.8965C3.44554 18.2883 3.07794 22.0206 3.79418 25.6214C4.51042 29.2222 6.27833 32.5297 8.87434 35.1257C11.4704 37.7217 14.7779 39.4896 18.3786 40.2058C21.9794 40.9221 25.7117 40.5545 29.1036 39.1495C32.4954 37.7446 35.3945 35.3654 37.4342 32.3128C39.4738 29.2602 40.5625 25.6713 40.5625 22C40.5569 17.0786 38.5995 12.3604 35.1195 8.88048C31.6396 5.40054 26.9214 3.44307 22 3.43752ZM22 36.4375C19.1445 36.4375 16.3532 35.5908 13.979 34.0044C11.6047 32.4179 9.75424 30.1631 8.6615 27.525C7.56876 24.8869 7.28285 21.984 7.83992 19.1834C8.397 16.3828 9.77203 13.8103 11.7912 11.7912C13.8103 9.77204 16.3828 8.397 19.1834 7.83993C21.984 7.28285 24.8869 7.56876 27.525 8.6615C30.1631 9.75424 32.4179 11.6047 34.0044 13.979C35.5908 16.3532 36.4375 19.1445 36.4375 22C36.4332 25.8277 34.9107 29.4975 32.2041 32.2041C29.4975 34.9107 25.8277 36.4332 22 36.4375ZM30.9375 22C30.9375 22.547 30.7202 23.0716 30.3334 23.4584C29.9466 23.8452 29.422 24.0625 28.875 24.0625H15.125C14.578 24.0625 14.0534 23.8452 13.6666 23.4584C13.2798 23.0716 13.0625 22.547 13.0625 22C13.0625 21.453 13.2798 20.9284 13.6666 20.5416C14.0534 20.1548 14.578 19.9375 15.125 19.9375H28.875C29.422 19.9375 29.9466 20.1548 30.3334 20.5416C30.7202 20.9284 30.9375 21.453 30.9375 22Z",
  fill: "#E84E3C"
}));
function Result(props) {
  const handleReturn = () => {
    var _a, _b;
    if (props.result === "success")
      (_a = props.onSuccess) == null ? void 0 : _a.call(props);
    if (props.result === "fail")
      (_b = props.onFailed) == null ? void 0 : _b.call(props);
    props.onReturn();
  };
  return /* @__PURE__ */ jsxs("div", {
    className: styles$5.resultScreen,
    children: [/* @__PURE__ */ jsxs("div", {
      className: styles$5.info,
      children: [/* @__PURE__ */ jsx("span", {
        className: styles$5.name,
        children: props.subject.name
      }), /* @__PURE__ */ jsx("span", {
        className: styles$5.price,
        children: props.subject.price
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: styles$5.result,
      children: [props.result === "loading" && /* @__PURE__ */ jsx(Spinner, {}), props.result === "success" && /* @__PURE__ */ jsxs("div", {
        className: styles$5.resultMessage,
        children: [/* @__PURE__ */ jsx(SvgSuccess, {}), /* @__PURE__ */ jsx("span", {
          children: "\u041F\u043B\u0430\u0442\u0435\u0436 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D"
        })]
      }), props.result === "fail" && /* @__PURE__ */ jsxs("div", {
        className: styles$5.resultMessage,
        children: [/* @__PURE__ */ jsx(SvgFail, {}), /* @__PURE__ */ jsx("span", {
          children: "\u041D\u0435 \u0441\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u043E"
        }), /* @__PURE__ */ jsx("span", {
          className: styles$5.hint,
          children: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0432\u0430\u0448\u0438\u043C \u0431\u0430\u043D\u043A\u043E\u043C \u0438\u043B\u0438 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0439"
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: styles$5.action,
      children: /* @__PURE__ */ jsx(Button2, {
        disabled: props.result === "loading",
        fullWidth: true,
        onClick: handleReturn,
        children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D"
      })
    })]
  });
}
const Checkout = React__default.forwardRef((props, ref) => {
  const [active2, setActive] = React__default.useState(false);
  const [state, setState] = React__default.useState("loading_script");
  const [initialData, setInitialData] = React__default.useState();
  React__default.useImperativeHandle(ref, () => ({
    initialize(initialData2) {
      setActive(true);
      setInitialData(initialData2);
    }
  }));
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.cloudpayments.ru/checkout.js";
    const eventLoadPromise = new Promise((resolve) => script.addEventListener("load", resolve));
    document.body.appendChild(script);
    const intervalFallbackPromise = new Promise((resolve) => {
      const interval = setInterval(() => {
        if ("cp" in window) {
          resolve();
          clearInterval(interval);
        }
      }, 100);
    });
    return Promise.race([eventLoadPromise, intervalFallbackPromise]);
  };
  React__default.useEffect(() => {
    if (active2) {
      document.querySelector("html").classList.add(styles$5.lockedBody);
      document.body.classList.add(styles$5.lockedBody);
      setState("loading_script");
      loadScript().then(() => {
        setState("awaiting_input");
      });
    } else {
      document.querySelector("html").classList.remove(styles$5.lockedBody);
      document.body.classList.remove(styles$5.lockedBody);
    }
  }, [active2]);
  const closeDialog = () => {
    var _a;
    setActive(false);
    (_a = props.onCancel) == null ? void 0 : _a.call(props);
  };
  const submitForm = async (cryptogram) => {
    setState("payment_processing");
    try {
      const isSuccess = await props.onRequest(cryptogram);
      setState(isSuccess ? "payment_success" : "payment_failed");
    } catch (e2) {
      setState("payment_failed");
      throw e2;
    }
  };
  const paymentResults = {
    payment_processing: "loading",
    payment_success: "success",
    payment_failed: "fail"
  };
  return /* @__PURE__ */ jsx("div", {
    className: cx(styles$5.background, props.wrapClassName, {
      [styles$5.active]: active2
    }),
    children: /* @__PURE__ */ jsxs("div", {
      className: cx(styles$5.container, {
        loading_script: styles$5.loadingScreen,
        awaiting_input: styles$5.formScreen,
        payment_processing: styles$5.paymentLoading,
        payment_success: styles$5.paymentSuccess,
        payment_failed: styles$5.paymentFailed
      }[state]),
      children: [/* @__PURE__ */ jsx(Header, {
        ...props,
        onClose: closeDialog
      }), /* @__PURE__ */ jsx("div", {
        className: cx(styles$5.loading, {
          [styles$5.visible]: state === "loading_script"
        }),
        children: /* @__PURE__ */ jsx(Spinner, {})
      }), state === "awaiting_input" && /* @__PURE__ */ jsx(Form, {
        ...props,
        initialData,
        onSubmit: submitForm
      }), ["payment_processing", "payment_success", "payment_failed"].includes(state) && /* @__PURE__ */ jsx(Result, {
        ...props,
        result: paymentResults[state],
        onReturn: () => setActive(false)
      })]
    })
  });
});
Checkout.displayName = "Checkout";
export { Checkout as default };

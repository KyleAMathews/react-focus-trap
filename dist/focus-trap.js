!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var o=t("object"==typeof exports?require("react"):e.react);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,function(e){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";var r=o(1),s=o(2);e.exports=s.createClass({displayName:"exports",mixins:[r],propTypes:{active:s.PropTypes.bool,onExit:s.PropTypes.func.isRequired,role:s.PropTypes.string.isRequired},getDefaultProps:function(){return{active:!0,element:"section",role:"dialog"}},getBackdrop:function(){return s.createElement("div",{className:"focus-trap-backdrop","aria-hidden":!0,onClick:this.props.onExit})},getInner:function(){var e=this.props,t=e.element,o=e.children;return s.createElement(t,{className:"focus-trap-inner"},o)},render:function(){var e=this.props,t=e.active,o=e.role;return t?s.createElement("div",{className:"focus-trap",tabIndex:"0",role:o,onKeyUp:this._onKeyUp},this.getBackdrop(),this.getInner()):null},_onKeyUp:function(e){"Escape"===e.key&&this.props.onExit()}})},function(e,t,o){"use strict";e.exports={_pushFocus:function(){this.setState({previousFocus:document.activeElement}),this._focus()},_popFocus:function(){this.state.previousFocus&&(this.state.previousFocus.focus(),this._clearTrap())},_focus:function(){var e=this.getDOMNode();e&&e.focus()},_trapFocus:function(){this._focusTimer=setTimeout(this._focus,10)},_clearTrap:function(){clearTimeout(this._focusTimer)},componentDidMount:function(){var e=this.getDOMNode();e&&(e.addEventListener("focusin",this._clearTrap),e.addEventListener("focusout",this._trapFocus)),this._pushFocus()},componentWillUnmount:function(){var e=this.getDOMNode();this._popFocus(),e&&(e.removeEventListener("focusin",this._clearTrap),e.removeEventListener("focusout",this._trapFocus))}}},function(t,o,r){t.exports=e}])});
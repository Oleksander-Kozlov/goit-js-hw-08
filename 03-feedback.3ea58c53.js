!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),v=Object.prototype.toString,d=Math.max,g=Math.min,b=function(){return m.Date.now()};function p(e,t,n){var r,a,o,u,f,l,c=0,s=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=a;return r=a=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(S,t),s?p(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=o}function S(){var e=b();if(T(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return m?g(n,o-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=a=void 0,u)}function w(){var e=b(),n=T(e);if(r=arguments,a=this,l=e,n){if(void 0===f)return O(l);if(m)return f=setTimeout(S,t),p(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,o=(m="maxWait"in n)?d(j(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=a=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):o.test(t)?NaN:+t}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:r,maxWait:t,trailing:a})};var O=document.querySelector(".feedback-form"),T=O.email,S=O.message;if(O.addEventListener("input",e(t)((function(e){var t={email:T.value.trim(),message:e.currentTarget.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500,{trailing:!1})),JSON.parse(localStorage.getItem("feedback-form-state"))){var h=JSON.parse(localStorage.getItem("feedback-form-state"));T.value=Object.values(h)[0],S.value=Object.values(h)[1]}O.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(""===n.value.trim()||""===r.value.trim())return alert("Шановний(а), будь ласка, обов'язково заповніть всі поля!");localStorage.removeItem("feedback-form-state"),console.log("{email: ".concat(e.currentTarget.elements.email.value.trim(),", message: ").concat(e.currentTarget.elements.message.value.trim(),"}")),T.value="",S.value=""}))}();
//# sourceMappingURL=03-feedback.3ea58c53.js.map

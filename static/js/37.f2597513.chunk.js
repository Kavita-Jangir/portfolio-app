(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{238:function(t,e,n){"use strict";var r;function a(t,e){return r=e,t}function u(t,e){var n,r,l,c=t.next();if("<"!=c||!t.eat("!")){if("<"==c&&t.eat("?"))return e.tokenize=(r="meta",l="?>",function(t,e){for(;!t.eol();){if(t.match(l)){e.tokenize=u;break}t.next()}return r}),a("meta",c);if("#"==c&&t.eatWhile(/[\w]/))return a("atom","tag");if("|"==c)return a("keyword","separator");if(c.match(/[\(\)\[\]\-\.,\+\?>]/))return a(null,c);if(c.match(/[\[\]]/))return a("rule",c);if('"'==c||"'"==c)return e.tokenize=(n=c,function(t,e){for(var r,i=!1;null!=(r=t.next());){if(r==n&&!i){e.tokenize=u;break}i=!i&&"\\"==r}return a("string","tag")}),e.tokenize(t,e);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var o=t.current();return null!==o.substr(o.length-1,o.length).match(/\?|\+/)&&t.backUp(1),a("tag","tag")}return"%"==c||"*"==c?a("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),a(null,null))}return t.eatWhile(/[\-]/)?(e.tokenize=i,i(t,e)):t.eatWhile(/[\w]/)?a("keyword","doindent"):void 0}function i(t,e){for(var n,r=0;null!=(n=t.next());){if(r>=2&&">"==n){e.tokenize=u;break}r="-"==n?r+1:0}return a("comment","comment")}n.r(e),n.d(e,"dtd",function(){return l});var l={name:"dtd",startState:function(){return{tokenize:u,baseIndent:0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),a=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===r||"["==r?e.stack.push("rule"):"endtag"===r?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==r||">"==r&&"rule"==a?e.stack.pop():"["==r&&e.stack.push("["),n},indent:function(t,e,n){var a=t.stack.length;return"]"===e.charAt(0)?a--:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==r&&e.length>1||("doindent"==r?a--:">"==r&&e.length>1||"tag"==r&&">"!==e||("tag"==r&&"rule"==t.stack[t.stack.length-1]?a--:"tag"==r?a++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===r?a--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"!==e.substr(0,1)&&">"===e.substr(0,1)?a-=1:">"===e||(a-=1)))),null!=r&&"]"!=r||a--),t.baseIndent+a*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}}}]);
//# sourceMappingURL=37.f2597513.chunk.js.map
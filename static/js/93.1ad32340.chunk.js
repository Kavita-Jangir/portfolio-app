(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{300:function(e,t,r){"use strict";r.r(t),r.d(t,"tiddlyWiki",function(){return y});var n={},i={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},a=/[\w_\-]/i,o=/^\-\-\-\-+$/,u=/^\/\*\*\*$/,c=/^\*\*\*\/$/,f=/^<<<$/,m=/^\/\/\{\{\{$/,l=/^\/\/\}\}\}$/,k=/^<!--\{\{\{-->$/,s=/^<!--\}\}\}-->$/,h=/^\{\{\{$/,d=/^\}\}\}$/,p=/.*?\}\}\}/;function b(e,t,r){return t.tokenize=r,r(e,t)}function w(e,t){var r=e.sol(),i=e.peek();if(t.block=!1,r&&/[<\/\*{}\-]/.test(i)){if(e.match(h))return t.block=!0,b(e,t,z);if(e.match(f))return"quote";if(e.match(u)||e.match(c))return"comment";if(e.match(m)||e.match(l)||e.match(k)||e.match(s))return"comment";if(e.match(o))return"contentSeparator"}if(e.next(),r&&/[\/\*!#;:>|]/.test(i)){if("!"==i)return e.skipToEnd(),"header";if("*"==i)return e.eatWhile("*"),"comment";if("#"==i)return e.eatWhile("#"),"comment";if(";"==i)return e.eatWhile(";"),"comment";if(":"==i)return e.eatWhile(":"),"comment";if(">"==i)return e.eatWhile(">"),"quote";if("|"==i)return"header"}if("{"==i&&e.match("{{"))return b(e,t,z);if(/[hf]/i.test(i)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==i)return"string";if("~"==i)return"brace";if(/[\[\]]/.test(i)&&e.match(i))return"brace";if("@"==i)return e.eatWhile(a),"link";if(/\d/.test(i))return e.eatWhile(/\d/),"number";if("/"==i){if(e.eat("%"))return b(e,t,$);if(e.eat("/"))return b(e,t,W)}if("_"==i&&e.eat("_"))return b(e,t,g);if("-"==i&&e.eat("-")){if(" "!=e.peek())return b(e,t,x);if(" "==e.peek())return"brace"}return"'"==i&&e.eat("'")?b(e,t,v):"<"==i&&e.eat("<")?b(e,t,_):(e.eatWhile(/[\w\$_]/),n.propertyIsEnumerable(e.current())?"keyword":null)}function $(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=w;break}n="%"==r}return"comment"}function v(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=w;break}n="'"==r}return"strong"}function z(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(p)?(t.tokenize=w,"comment"):r&&e.sol()&&e.match(d)?(t.tokenize=w,"comment"):(e.next(),"comment")}function W(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=w;break}n="/"==r}return"emphasis"}function g(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=w;break}n="_"==r}return"link"}function x(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=w;break}n="-"==r}return"deleted"}function _(e,t){if("<<"==e.current())return"meta";var r=e.next();return r?">"==r&&">"==e.peek()?(e.next(),t.tokenize=w,"meta"):(e.eatWhile(/[\w\$_]/),i.propertyIsEnumerable(e.current())?"keyword":null):(t.tokenize=w,null)}var y={name:"tiddlywiki",startState:function(){return{tokenize:w}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}}]);
//# sourceMappingURL=93.1ad32340.chunk.js.map
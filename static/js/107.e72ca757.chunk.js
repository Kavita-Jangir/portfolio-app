(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{314:function(t,i,e){"use strict";e.r(i),e.d(i,"yaml",function(){return r});var n=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i"),r={name:"yaml",token:function(t,i){var e=t.peek(),r=i.escaped;if(i.escaped=!1,"#"==e&&(0==t.pos||/\s/.test(t.string.charAt(t.pos-1))))return t.skipToEnd(),"comment";if(t.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(i.literal&&t.indentation()>i.keyCol)return t.skipToEnd(),"string";if(i.literal&&(i.literal=!1),t.sol()){if(i.keyCol=0,i.pair=!1,i.pairStart=!1,t.match("---"))return"def";if(t.match("..."))return"def";if(t.match(/^\s*-\s+/))return"meta"}if(t.match(/^(\{|\}|\[|\])/))return"{"==e?i.inlinePairs++:"}"==e?i.inlinePairs--:"["==e?i.inlineList++:i.inlineList--,"meta";if(i.inlineList>0&&!r&&","==e)return t.next(),"meta";if(i.inlinePairs>0&&!r&&","==e)return i.keyCol=0,i.pair=!1,i.pairStart=!1,t.next(),"meta";if(i.pairStart){if(t.match(/^\s*(\||\>)\s*/))return i.literal=!0,"meta";if(t.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable";if(0==i.inlinePairs&&t.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(i.inlinePairs>0&&t.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(t.match(n))return"keyword"}return!i.pair&&t.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(i.pair=!0,i.keyCol=t.indentation(),"atom"):i.pair&&t.match(/^:\s*/)?(i.pairStart=!0,"meta"):(i.pairStart=!1,i.escaped="\\"==e,t.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=107.e72ca757.chunk.js.map
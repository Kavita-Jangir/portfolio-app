(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{251:function(i,l,e){"use strict";function a(i){var l=[],e="",a={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},n={};function t(i,l){for(var e,a=!1;null!=(e=i.next());){if("/"===e&&a){l.tokenize=null;break}a="*"===e}return"comment"}return"x86"===i?(e="#",n.al="variable",n.ah="variable",n.ax="variable",n.eax="variableName.special",n.rax="variableName.special",n.bl="variable",n.bh="variable",n.bx="variable",n.ebx="variableName.special",n.rbx="variableName.special",n.cl="variable",n.ch="variable",n.cx="variable",n.ecx="variableName.special",n.rcx="variableName.special",n.dl="variable",n.dh="variable",n.dx="variable",n.edx="variableName.special",n.rdx="variableName.special",n.si="variable",n.esi="variableName.special",n.rsi="variableName.special",n.di="variable",n.edi="variableName.special",n.rdi="variableName.special",n.sp="variable",n.esp="variableName.special",n.rsp="variableName.special",n.bp="variable",n.ebp="variableName.special",n.rbp="variableName.special",n.ip="variable",n.eip="variableName.special",n.rip="variableName.special",n.cs="keyword",n.ds="keyword",n.ss="keyword",n.es="keyword",n.fs="keyword",n.gs="keyword"):"arm"!==i&&"armv6"!==i||(e="@",a.syntax="builtin",n.r0="variable",n.r1="variable",n.r2="variable",n.r3="variable",n.r4="variable",n.r5="variable",n.r6="variable",n.r7="variable",n.r8="variable",n.r9="variable",n.r10="variable",n.r11="variable",n.r12="variable",n.sp="variableName.special",n.lr="variableName.special",n.pc="variableName.special",n.r13=n.sp,n.r14=n.lr,n.r15=n.pc,l.push(function(i,l){if("#"===i)return l.eatWhile(/\w/),"number"})),{name:"gas",startState:function(){return{tokenize:null}},token:function(i,b){if(b.tokenize)return b.tokenize(i,b);if(i.eatSpace())return null;var r,u,s=i.next();if("/"===s&&i.eat("*"))return b.tokenize=t,t(i,b);if(s===e)return i.skipToEnd(),"comment";if('"'===s)return function(i,l){for(var e,a=!1;null!=(e=i.next());){if(e===l&&!a)return!1;a=!a&&"\\"===e}}(i,'"'),"string";if("."===s)return i.eatWhile(/\w/),u=i.current().toLowerCase(),(r=a[u])||null;if("="===s)return i.eatWhile(/\w/),"tag";if("{"===s)return"bracket";if("}"===s)return"bracket";if(/\d/.test(s))return"0"===s&&i.eat("x")?(i.eatWhile(/[0-9a-fA-F]/),"number"):(i.eatWhile(/\d/),"number");if(/\w/.test(s))return i.eatWhile(/\w/),i.eat(":")?"tag":(u=i.current().toLowerCase(),(r=n[u])||null);for(var c=0;c<l.length;c++)if(r=l[c](s,i,b))return r},languageData:{commentTokens:{line:e,block:{open:"/*",close:"*/"}}}}}e.r(l),e.d(l,"gas",function(){return n}),e.d(l,"gasArm",function(){return t});var n=a("x86"),t=a("arm")}}]);
//# sourceMappingURL=47.7df6c422.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"asterisk",function(){return o});var a=["exten","same","include","ignorepat","switch"],i=["#include","#exec"],r=["addqueuemember","adsiprog","aelsub","agentlogin","agentmonitoroutgoing","agi","alarmreceiver","amd","answer","authenticate","background","backgrounddetect","bridge","busy","callcompletioncancel","callcompletionrequest","celgenuserevent","changemonitor","chanisavail","channelredirect","chanspy","clearhash","confbridge","congestion","continuewhile","controlplayback","dahdiacceptr2call","dahdibarge","dahdiras","dahdiscan","dahdisendcallreroutingfacility","dahdisendkeypadfacility","datetime","dbdel","dbdeltree","deadagi","dial","dictate","directory","disa","dumpchan","eagi","echo","endwhile","exec","execif","execiftime","exitwhile","extenspy","externalivr","festival","flash","followme","forkcdr","getcpeid","gosub","gosubif","goto","gotoif","gotoiftime","hangup","iax2provision","ices","importvar","incomplete","ivrdemo","jabberjoin","jabberleave","jabbersend","jabbersendgroup","jabberstatus","jack","log","macro","macroexclusive","macroexit","macroif","mailboxexists","meetme","meetmeadmin","meetmechanneladmin","meetmecount","milliwatt","minivmaccmess","minivmdelete","minivmgreet","minivmmwi","minivmnotify","minivmrecord","mixmonitor","monitor","morsecode","mp3player","mset","musiconhold","nbscat","nocdr","noop","odbc","odbc","odbcfinish","originate","ospauth","ospfinish","osplookup","ospnext","page","park","parkandannounce","parkedcall","pausemonitor","pausequeuemember","pickup","pickupchan","playback","playtones","privacymanager","proceeding","progress","queue","queuelog","raiseexception","read","readexten","readfile","receivefax","receivefax","receivefax","record","removequeuemember","resetcdr","retrydial","return","ringing","sayalpha","saycountedadj","saycountednoun","saycountpl","saydigits","saynumber","sayphonetic","sayunixtime","senddtmf","sendfax","sendfax","sendfax","sendimage","sendtext","sendurl","set","setamaflags","setcallerpres","setmusiconhold","sipaddheader","sipdtmfmode","sipremoveheader","skel","slastation","slatrunk","sms","softhangup","speechactivategrammar","speechbackground","speechcreate","speechdeactivategrammar","speechdestroy","speechloadgrammar","speechprocessingsound","speechstart","speechunloadgrammar","stackpop","startmusiconhold","stopmixmonitor","stopmonitor","stopmusiconhold","stopplaytones","system","testclient","testserver","transfer","tryexec","trysystem","unpausemonitor","unpausequeuemember","userevent","verbose","vmauthenticate","vmsayname","voicemail","voicemailmain","wait","waitexten","waitfornoise","waitforring","waitforsilence","waitmusiconhold","waituntil","while","zapateller"];var o={name:"asterisk",startState:function(){return{blockComment:!1,extenStart:!1,extenSame:!1,extenInclude:!1,extenExten:!1,extenPriority:!1,extenApplication:!1}},token:function(e,t){var n="";return e.eatSpace()?null:t.extenStart?(e.eatWhile(/[^\s]/),n=e.current(),/^=>?$/.test(n)?(t.extenExten=!0,t.extenStart=!1,"strong"):(t.extenStart=!1,e.skipToEnd(),"error")):t.extenExten?(t.extenExten=!1,t.extenPriority=!0,e.eatWhile(/[^,]/),t.extenInclude&&(e.skipToEnd(),t.extenPriority=!1,t.extenInclude=!1),t.extenSame&&(t.extenPriority=!1,t.extenSame=!1,t.extenApplication=!0),"tag"):t.extenPriority?(t.extenPriority=!1,t.extenApplication=!0,e.next(),t.extenSame?null:(e.eatWhile(/[^,]/),"number")):t.extenApplication?(e.eatWhile(/,/),","===(n=e.current())?null:(e.eatWhile(/\w/),n=e.current().toLowerCase(),t.extenApplication=!1,-1!==r.indexOf(n)?"def":null)):function(e,t){var n="",r=e.next();if(t.blockComment)return"-"==r&&e.match("-;",!0)?t.blockComment=!1:e.skipTo("--;")?(e.next(),e.next(),e.next(),t.blockComment=!1):e.skipToEnd(),"comment";if(";"==r)return e.match("--",!0)&&!e.match("-",!1)?(t.blockComment=!0,"comment"):(e.skipToEnd(),"comment");if("["==r)return e.skipTo("]"),e.eat("]"),"header";if('"'==r)return e.skipTo('"'),"string";if("'"==r)return e.skipTo("'"),"string.special";if("#"==r&&(e.eatWhile(/\w/),n=e.current(),-1!==i.indexOf(n)))return e.skipToEnd(),"strong";if("$"==r&&"{"==e.peek())return e.skipTo("}"),e.eat("}"),"variableName.special";if(e.eatWhile(/\w/),n=e.current(),-1!==a.indexOf(n)){switch(t.extenStart=!0,n){case"same":t.extenSame=!0;break;case"include":case"switch":case"ignorepat":t.extenInclude=!0}return"atom"}}(e,t)},languageData:{commentTokens:{line:";",block:{open:";--",close:"--;"}}}}}}]);
//# sourceMappingURL=27.6bed26f4.chunk.js.map
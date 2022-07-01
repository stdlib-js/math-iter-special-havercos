// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterHavercos=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&f&&f.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,g=h;var _=function(r){return g.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,N=h;var P=_,T=function(r){var t,n,e;if(null==r)return N.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[S]=n:delete r[S],e},F=j()?T:P,I=Boolean.prototype.toString;var x=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},H=j();var V=function(r){return"object"==typeof r&&(r instanceof Boolean||(H?G(r):"[object Boolean]"===x(r)))},B=m,L=V;var M=s,k=function(r){return B(r)||L(r)},W=V;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;s(ar,"REGEXP",fr());var cr=ar,lr=F;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=F,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var hr=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},_r=function(r){return hr(r).toLowerCase()},Ar=ir()?_r:gr;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Nr=Number,Pr=Nr.prototype.toString;var Tr=F,Fr=Nr,Ir=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Fr||(xr?Ir(r):"[object Number]"===Tr(r)))},Hr=Sr,Vr=Gr;var Br=s,Lr=function(r){return Hr(r)||Vr(r)},Mr=Gr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=F,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,ft=O;var at=s,ct=Or,lt=Ur,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(ft(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,f;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return at(u={},"next",a),at(u,"return",c),yt&&ct(t[yt])&&at(u,yt,l),u;function a(){var r;return f?{done:!0}:(r=t.next()).done?(f=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},st=bt,dt=F,mt="function"==typeof Uint32Array;var wt="function"==typeof Uint32Array?Uint32Array:null,jt=function(r){return mt&&r instanceof Uint32Array||"[object Uint32Array]"===dt(r)},ht=wt;var gt=function(){var r,t;if("function"!=typeof ht)return!1;try{t=new ht(t=[1,3.14,-3.14,4294967296,4294967297]),r=jt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var _t="function"==typeof Uint32Array?Uint32Array:void 0,At=function(){throw new Error("not implemented")},Ot=gt()?_t:At,Et=F,Ut="function"==typeof Float64Array;var St="function"==typeof Float64Array?Float64Array:null,Nt=function(r){return Ut&&r instanceof Float64Array||"[object Float64Array]"===Et(r)},Pt=St;var Tt=function(){var r,t;if("function"!=typeof Pt)return!1;try{t=new Pt([1,3.14,-3.14,NaN]),r=Nt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Ft="function"==typeof Float64Array?Float64Array:void 0,It=function(){throw new Error("not implemented")},xt=Tt()?Ft:It,Gt=F,Ht="function"==typeof Uint8Array;var Vt="function"==typeof Uint8Array?Uint8Array:null,Bt=function(r){return Ht&&r instanceof Uint8Array||"[object Uint8Array]"===Gt(r)},Lt=Vt;var Mt=function(){var r,t;if("function"!=typeof Lt)return!1;try{t=new Lt(t=[1,3.14,-3.14,256,257]),r=Bt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var kt="function"==typeof Uint8Array?Uint8Array:void 0,Wt=function(){throw new Error("not implemented")},Ct=Mt()?kt:Wt,Rt=F,Xt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null,zt=function(r){return Xt&&r instanceof Uint16Array||"[object Uint16Array]"===Rt(r)},Dt=Yt;var qt=function(){var r,t;if("function"!=typeof Dt)return!1;try{t=new Dt(t=[1,3.14,-3.14,65536,65537]),r=zt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Jt,Kt="function"==typeof Uint16Array?Uint16Array:void 0,Qt=function(){throw new Error("not implemented")},Zt={uint16:qt()?Kt:Qt,uint8:Ct};(Jt=new Zt.uint16(1))[0]=4660;var $t=52===new Zt.uint8(Jt.buffer)[0],rn=Ot,tn=!0===$t?1:0,nn=new xt(1),en=new rn(nn.buffer);var on=function(r){return nn[0]=r,en[tn]};var un=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},fn=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var an=function(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*un(u),e+=o*o*fn(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))},cn=-.16666666666666632;var ln=function(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(cn+o*n):r-(o*(.5*t-e*n)-t-e*cn)},vn=Ot,yn=!0===$t?0:1,pn=new xt(1),bn=new vn(pn.buffer);var sn,dn,mn=function(r){return pn[0]=r,bn[yn]};!0===$t?(sn=1,dn=0):(sn=0,dn=1);var wn=Ot,jn={HIGH:sn,LOW:dn},hn=new xt(1),gn=new wn(hn.buffer),_n=jn.HIGH,An=jn.LOW;var On=function(r,t){return gn[_n]=r,gn[An]=t,hn[0]},En=On,Un=Math.floor,Sn=Number.POSITIVE_INFINITY,Nn=Nr.NEGATIVE_INFINITY;var Pn=function(r){return r!=r},Tn=Sn,Fn=Nn;var In,xn,Gn=function(r){return r===Tn||r===Fn};!0===$t?(In=1,xn=0):(In=0,xn=1);var Hn=Ot,Vn={HIGH:In,LOW:xn},Bn=new xt(1),Ln=new Hn(Bn.buffer),Mn=Vn.HIGH,kn=Vn.LOW;var Wn=function(r,t){return Bn[0]=t,r[0]=Ln[Mn],r[1]=Ln[kn],r};var Cn=function(r,t){return 1===arguments.length?Wn([0,0],r):Wn(r,t)},Rn=Cn,Xn=on,Yn=En,zn=[0,0];var Dn=Gn,qn=Pn,Jn=function(r){return Math.abs(r)};var Kn=function(r,t){return qn(t)||Dn(t)?(r[0]=t,r[1]=0,r):0!==t&&Jn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Qn=function(r,t){return 1===arguments.length?Kn([0,0],r):Kn(r,t)},Zn=on;var $n=function(r){var t=Zn(r);return(t=(2146435072&t)>>>20)-1023|0},re=Sn,te=Nn,ne=Pn,ee=Gn,oe=function(r,t){var n,e;return Rn(zn,r),n=zn[0],n&=2147483647,e=Xn(t),Yn(n|=e&=2147483648,zn[1])},ue=Qn,ie=$n,fe=Cn,ae=En,ce=[0,0],le=[0,0];var ve=function(r,t){var n,e;return 0===t||0===r||ne(r)||ee(r)?r:(ue(ce,r),t+=ce[1],(t+=ie(r=ce[0]))<-1074?oe(0,r):t>1023?r<0?te:re:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,fe(le,r),n=le[0],n&=2148532223,e*ae(n|=t+1023<<20,le[1])))};var ye=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var pe=Un,be=ve,se=function(r){return ye(0,r)},de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],me=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],we=16777216,je=5.960464477539063e-8,he=se(20),ge=se(20),_e=se(20),Ae=se(20);function Oe(r,t,n,e,o,u,i,f,a){var c,l,v,y,p,b,s,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=je*m|0,Ae[p]=m-we*l|0,m=e[d-1]+l,d-=1;if(m=be(m,o),m-=8*pe(.125*m),m-=s=0|m,v=0,o>0?(s+=p=Ae[n-1]>>24-o,Ae[n-1]-=p<<24-o,v=Ae[n-1]>>23-o):0===o?v=Ae[n-1]>>23:m>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<n;p++)d=Ae[p],0===c?0!==d&&(c=1,Ae[p]=16777216-d):Ae[p]=16777215-d;if(o>0)switch(o){case 1:Ae[n-1]&=8388607;break;case 2:Ae[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=be(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=Ae[p];if(0===d){for(b=1;0===Ae[u-b];b++);for(p=n+1;p<=n+b;p++){for(a[f+p]=de[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return Oe(r,t,n+=b,e,o,u,i,f,a)}}if(0===m)for(n-=1,o-=24;0===Ae[n];)n-=1,o-=24;else(m=be(m,-o))>=we?(l=je*m|0,Ae[n]=m-we*l|0,o+=24,Ae[n+=1]=l):Ae[n]=0|m;for(l=be(1,o),p=n;p>=0;p--)e[p]=l*Ae[p],l*=je;for(p=n;p>=0;p--){for(l=0,b=0;b<=y&&b<=n-p;b++)l+=me[b]*e[p+b];_e[n-p]=l}for(l=0,p=n;p>=0;p--)l+=_e[p];for(t[0]=0===v?l:-l,l=_e[0]-l,p=1;p<=n;p++)l+=_e[p];return t[1]=0===v?l:-l,7&s}var Ee=function(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)he[a]=c<0?0:de[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*he[i+(a-c)];ge[a]=o}return 4,Oe(r,t,4,ge,f,4,u,i,he)},Ue=Math.round,Se=on;var Ne=on,Pe=mn,Te=En,Fe=Ee,Ie=function(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Ue(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Se(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Se(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},xe=1.5707963267341256,Ge=6077100506506192e-26,He=2*Ge,Ve=3*Ge,Be=4*Ge,Le=[0,0,0],Me=[0,0];var ke=function(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Ne(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ie(r,o,t):o<=1073928572?r>0?(a=r-xe,t[0]=a-Ge,t[1]=a-t[0]-Ge,1):(a=r+xe,t[0]=a+Ge,t[1]=a-t[0]+Ge,-1):r>0?(a=r-2*xe,t[0]=a-He,t[1]=a-t[0]-He,2):(a=r+2*xe,t[0]=a+He,t[1]=a-t[0]+He,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ie(r,o,t):r>0?(a=r-3*xe,t[0]=a-Ve,t[1]=a-t[0]-Ve,3):(a=r+3*xe,t[0]=a+Ve,t[1]=a-t[0]+Ve,-3):1075388923===o?Ie(r,o,t):r>0?(a=r-4*xe,t[0]=a-Be,t[1]=a-t[0]-Be,4):(a=r+4*xe,t[0]=a+Be,t[1]=a-t[0]+Be,-4);if(o<1094263291)return Ie(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Pe(r),a=Te(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Le[i]=0|a,a=16777216*(a-Le[i]);for(Le[2]=a,u=3;0===Le[u-1];)u-=1;return f=Fe(Le,Me,e,u),r<0?(t[0]=-Me[0],t[1]=-Me[1],-f):(t[0]=Me[0],t[1]=Me[1],f)},We=on,Ce=an,Re=ln,Xe=ke,Ye=[0,0];var ze=function(r){var t;if(t=We(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Ce(r,0);if(t>=2146435072)return NaN;switch(3&Xe(r,Ye)){case 0:return Ce(Ye[0],Ye[1]);case 1:return-Re(Ye[0],Ye[1]);case 2:return-Ce(Ye[0],Ye[1]);default:return Re(Ye[0],Ye[1])}};var De=function(r){return(1+ze(r))/2};return function(r){return st(r,De)}}));
//# sourceMappingURL=browser.js.map

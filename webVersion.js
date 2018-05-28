(function(c,d){typeof exports==='object'&&typeof module!=='undefined'?d(exports):typeof define==='function'&&define.amd?define(['exports'],d):d(c.R={});})(this,function(e){'use strict';function add(x,y){if(y===void 0){return g=>add(x,g);}return x+y;}function addIndex(h){return function(j,...rest){let k=0;const newFn=(...args)=>j.apply(null,[...args,k++]);return h.apply(null,[newFn,...rest]);};}function adjust(l,m,n){if(m===void 0){return(q,r)=>adjust(l,q,r);}else if(n===void 0){return s=>adjust(l,m,s);}const t=n.concat();return t.map((u,v)=>{if(v===m){return l(n[m]);}return u;});}function filterObject(w,z){const A={};for(const B in z){if(w(z[B],B)){A[B]=z[B];}}return A;}function filter(C,D){if(D===void 0){return E=>filter(C,E);}if(D.length===void 0){return filterObject(C,D);}let G=-1,H=0;const I=D.length,J=[];while(++G<I){const K=D[G];if(C(K)){J[H++]=K;}}return J;}function all(L,M){if(M===void 0){return N=>all(L,N);}return filter(L,M).length===M.length;}function any(O,P){if(P===void 0){return Q=>any(O,Q);}let R=0;while(R<P.length){if(O(P[R])){return!0;}R++;}return!1;}function allPass(S,x){if(arguments.length===1){return U=>allPass(S,U);}return!any(V=>!V(x),S);}function anyPass(W,x){if(arguments.length===1){return X=>anyPass(W,X);}return any(Y=>Y(x))(W);}function always(x){return()=>x;}function append(x,Z){if(Z===void 0){return a1=>append(x,a1);}if(typeof Z==='string'){return`${Z}${x}`;}const b1=Z.concat();b1.push(x);return b1;}function both(x,y){if(y===void 0){return c1=>both(x,c1);}return d1=>x(d1)&&y(d1);}function complement(fn){return f1=>!fn(f1);}function compose(...fns){return(...args)=>{const g1=fns.slice();if(g1.length>0){const fn=g1.pop();let i1=fn(...args);while(g1.length>0){i1=g1.pop()(i1);}return i1;}return void 0;};}function concat(x,y){if(y===void 0){return j1=>concat(x,j1);}return typeof x==='string'?`${x}${y}`:[...x,...y];}function type(a){const k1=typeof a;if(a===null){return'Null';}else if(a===void 0){return'Undefined';}else if(k1==='boolean'){return'Boolean';}else if(k1==='number'){return'Number';}else if(k1==='string'){return'String';}else if(Array.isArray(a)){return'Array';}else if(a instanceof RegExp){return'RegExp';}const l1=a.toString();if(l1.startsWith('async')){return'Async';}else if(l1==='[object Promise]'){return'Promise';}else if(l1.includes('function')||l1.includes('=>')){return'Function';}return'Object';}function equals(a,b){if(arguments.length===1){return m1=>equals(a,m1);}if(a===b){return!0;}const n1=type(a);if(n1!==type(b)){return!1;}if(n1==='Array'){const o1=Array.from(a),p1=Array.from(b);if(o1.toString()!==p1.toString()){return!1;}let q1=!0;o1.forEach((r1,s1)=>{if(q1){if(r1!==p1[s1]&&!equals(r1,p1[s1])){q1=!1;}}});return q1;}if(n1==='Object'){const t1=Object.keys(a);if(t1.length!==Object.keys(b).length){return!1;}let u1=!0;t1.forEach(v1=>{if(u1){const w1=a[v1],x1=b[v1];if(w1!==x1&&!equals(w1,x1)){u1=!1;}}});return u1;}return!1;}function contains(x,y1){if(y1===void 0){return z1=>contains(x,z1);}let A1=-1,B1=!1;while(++A1<y1.length&&!B1){if(equals(y1[A1],x)){B1=!0;}}return B1;}function curry(f,a=[]){return(...p)=>(o=>o.length>=f.length?f(...o):curry(f,o))([...a,...p]);}var dec=x=>x-1;function defaultTo(C1,D1){if(arguments.length===1){return E1=>defaultTo(C1,E1);}return D1===void 0||D1===null||Number.isNaN(D1)===!0?C1:D1;}function omit(F1,G1){if(arguments.length===1){return H1=>omit(F1,H1);}if(G1===null||G1===void 0){return void 0;}const I1=typeof F1==='string'?F1=F1.split(','):F1,J1={};for(const K1 in G1){if(!I1.includes(K1)){J1[K1]=G1[K1];}}return J1;}function dissoc(L1,M1){if(arguments.length===1){return N1=>dissoc(L1,N1);}if(M1===null||M1===void 0){return void 0;}const O1={};for(const P1 in M1){if(P1!==`${L1}`){O1[P1]=M1[P1];}}return O1;}function divide(x,y){if(y===void 0){return Q1=>divide(x,Q1);}return x/y;}function drop(R1,x){if(x===void 0){return S1=>drop(R1,S1);}return x.slice(R1);}function dropLast(T1,x){if(x===void 0){return U1=>dropLast(T1,U1);}return x.slice(0,-T1);}function either(x,y){if(y===void 0){return V1=>either(x,V1);}return W1=>x(W1)||y(W1);}function endsWith(x,y){if(y===void 0){return X1=>endsWith(x,X1);}return y.endsWith(x);}var inc=x=>x+1;function F(){return!1;}function find(fn,Z1){if(Z1===void 0){return a2=>find(fn,a2);}return Z1.find(fn);}function findIndex(fn,c2){if(c2===void 0){return d2=>findIndex(fn,d2);}const e2=c2.length;let f2=-1;while(++f2<e2){if(fn(c2[f2])){return f2;}}return-1;}function flatten(g2,h2){h2=h2===void 0?[]:h2;for(let i=0;i<g2.length;i++){if(Array.isArray(g2[i])){flatten(g2[i],h2);}else{h2.push(g2[i]);}}return h2;}function flipExport(fn){return(...input)=>{if(input.length===1){return j2=>fn(j2,input[0]);}else if(input.length===2){return fn(input[1],input[0]);}return void 0;};}function flip(fn,...input){return flipExport(fn);}function mapObject(fn,m2){const n2={};for(const o2 in m2){n2[o2]=fn(m2[o2],o2);}return n2;}function map(fn,q2){if(q2===void 0){return r2=>map(fn,r2);}if(q2.length===void 0){return mapObject(fn,q2);}let s2=-1;const t2=q2.length,u2=Array(t2);while(++s2<t2){u2[s2]=fn(q2[s2]);}return u2;}function forEach(fn,w2){if(w2===void 0){return x2=>forEach(fn,x2);}map(fn,w2);return w2;}function groupBy(fn,z2){if(z2===void 0){return A2=>groupBy(fn,A2);}const B2={};for(let i=0;i<z2.length;i++){const C2=z2[i],D2=fn(C2);if(!B2[D2])B2[D2]=[];B2[D2].push(C2);}return B2;}function has(E2,F2){if(F2===void 0){return G2=>has(E2,G2);}return F2[E2]!==void 0;}function head(a){if(typeof a==='string'){return a[0]||'';}return a[0];}function identity(x){return x;}function ifElse(H2,I2,J2){if(I2===void 0){return(K2,L2)=>ifElse(H2,K2,L2);}else if(J2===void 0){return M2=>ifElse(H2,I2,M2);}return N2=>{const O2=typeof H2==='boolean'?H2:H2(N2);if(O2===!0){return I2(N2);}return J2(N2);};}function is(P2,x){if(x===void 0){return Q2=>is(P2,Q2);}return x instanceof P2||x.constructor===P2;}function isNil(x){return x===void 0||x===null;}function includes(x,y){if(y===void 0){return R2=>includes(x,R2);}return y.includes(x);}function indexBy(fn,T2){if(T2===void 0){return U2=>indexBy(fn,U2);}const V2={};for(let i=0;i<T2.length;i++){const W2=T2[i];V2[fn(W2)]=W2;}return V2;}function indexOf(x,X2){if(X2===void 0){return Y2=>indexOf(x,Y2);}let Z2=-1;const a3=X2.length;while(++Z2<a3){if(X2[Z2]===x){return Z2;}}return-1;}function baseSlice(b3,c3,d3){let e3=-1,f3=b3.length;d3=d3>f3?f3:d3;if(d3<0){d3+=f3;}f3=c3>d3?0:d3-c3>>>0;c3>>>=0;const g3=Array(f3);while(++e3<f3){g3[e3]=b3[e3+c3];}return g3;}function init(a){if(typeof a==='string'){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function join(h3,i3){if(i3===void 0){return j3=>join(h3,j3);}return i3.join(h3);}function lastIndexOf(x,k3){if(k3===void 0){return l3=>lastIndexOf(x,l3);}let m3=-1;k3.map((n3,o3)=>{if(equals(n3,x)){m3=o3;}});return m3;}function last(a){if(typeof a==='string'){return a[a.length-1]||'';}return a[a.length-1];}function length(x){return x.length;}function match(p3,x){if(x===void 0){return q3=>match(p3,q3);}const r3=x.match(p3);return r3===null?[]:r3;}function merge(s3,t3){if(t3===void 0){return u3=>merge(s3,u3);}return Object.assign({},s3,t3);}function modulo(x,y){if(y===void 0){return v3=>modulo(x,v3);}return x%y;}function multiply(x,y){if(y===void 0){return w3=>multiply(x,w3);}return x*y;}function none(fn,y3){if(y3===void 0){return z3=>none(fn,z3);}return y3.filter(fn).length===0;}function not(x){return!x;}function partialCurry(fn,B3={}){return C3=>{if(type(fn)==='Async'||type(fn)==='Promise'){return new Promise((D3,E3)=>{fn(merge(C3,B3)).then(D3).catch(E3);});}return fn(merge(C3,B3));};}function path(F3,G3){if(arguments.length===1){return H3=>path(F3,H3);}if(G3===null||G3===void 0){return void 0;}let I3=G3,J3=0;const K3=typeof F3==='string'?F3.split('.'):F3;while(J3<K3.length){if(I3===null||I3===void 0){return void 0;}I3=I3[K3[J3]];J3++;}return I3;}function pathOr(L3,M3,N3){return defaultTo(L3,path(M3,N3));}var O3=curry(pathOr);function pick(P3,Q3){if(arguments.length===1){return R3=>pick(P3,R3);}if(Q3===null||Q3===void 0){return void 0;}const S3=typeof P3==='string'?P3.split(','):P3,T3={};let U3=0;while(U3<S3.length){if(S3[U3]in Q3){T3[S3[U3]]=Q3[S3[U3]];}U3++;}return T3;}function pickAll(V3,W3){if(arguments.length===1){return X3=>pickAll(V3,X3);}if(W3===null||W3===void 0){return void 0;}const Y3=typeof V3==='string'?V3.split(','):V3,Z3={};let a4=0;while(a4<Y3.length){if(Y3[a4]in W3){Z3[Y3[a4]]=W3[Y3[a4]];}else{Z3[Y3[a4]]=void 0;}a4++;}return Z3;}function pipe(...fns){return compose(...fns.reverse());}function pluck(b4,c4){if(c4===void 0){return d4=>pluck(b4,d4);}const e4=[];map(f4=>{if(!(f4[b4]===void 0)){e4.push(f4[b4]);}},c4);return e4;}function prepend(x,g4){if(g4===void 0){return h4=>prepend(x,h4);}if(typeof g4==='string'){return`${x}${g4}`;}const i4=g4.concat();i4.unshift(x);return i4;}function prop(j4,k4){if(k4===void 0){return l4=>prop(j4,l4);}return k4[j4];}function propEq(m4,x,n4){if(x===void 0){return(o4,p4)=>propEq(m4,o4,p4);}else if(n4===void 0){return q4=>propEq(m4,x,q4);}return n4[m4]===x;}function range(r4,s4){if(s4===void 0){return t4=>range(r4,t4);}const u4=[];for(let i=r4;i<s4;i++){u4.push(i);}return u4;}function reduce(fn,w4,x4){if(w4===void 0){return(y4,z4)=>reduce(fn,y4,z4);}else if(x4===void 0){return A4=>reduce(fn,w4,A4);}return x4.reduce(fn,w4);}function reject(fn,C4){if(C4===void 0){return D4=>reject(fn,D4);}return filter(x=>!fn(x),C4);}function repeat(x,E4){if(E4===void 0){return F4=>repeat(x,F4);}const G4=Array(E4);return G4.fill(x);}function replace(H4,I4,J4){if(I4===void 0){return(K4,L4)=>replace(H4,K4,L4);}else if(J4===void 0){return M4=>replace(H4,I4,M4);}return J4.replace(H4,I4);}function reverse(N4){const O4=N4.concat();return O4.reverse();}function sort(fn,Q4){if(Q4===void 0){return R4=>sort(fn,R4);}const S4=Q4.concat();return S4.sort(fn);}function sortBy(fn,U4){if(U4===void 0){return V4=>sortBy(fn,V4);}const W4=U4.concat();return W4.sort((a,b)=>{const X4=fn(a),Y4=fn(b);return X4<Y4?-1:X4>Y4?1:0;});}function split(Z4,a5){if(a5===void 0){return b5=>split(Z4,b5);}return a5.split(Z4);}function splitEvery(c5,x){if(x===void 0){return d5=>splitEvery(c5,d5);}const e5=c5>1?c5:1,f5=[];let g5=0;while(g5<x.length){f5.push(x.slice(g5,g5+=e5));}return f5;}function startsWith(x,y){if(y===void 0){return h5=>startsWith(x,h5);}return y.startsWith(x);}function subtract(x,y){if(y===void 0){return i5=>subtract(x,i5);}return x-y;}function T(){return!0;}function tap(fn,x){if(x===void 0){return k5=>tap(fn,k5);}fn(x);return x;}function tail(l5){return drop(1,l5);}function take(m5,x){if(x===void 0){return n5=>take(m5,n5);}if(typeof x==='string'){return x.slice(0,m5);}return baseSlice(x,0,m5);}function takeLast(o5,x){if(x===void 0){return p5=>takeLast(o5,p5);}const q5=x.length;let r5=o5>q5?q5:o5;if(typeof x==='string'){return x.slice(q5-r5);}r5=q5-r5;return baseSlice(x,r5,q5);}function test(s5,t5){if(t5===void 0){return u5=>test(s5,u5);}return t5.search(s5)!==-1;}function times(fn,w5){if(w5===void 0){return x5=>times(fn,x5);}return map(fn,range(0,w5));}function toLower(x){return x.toLowerCase();}function toUpper(x){return x.toUpperCase();}function toString(x){return x.toString();}function trim(y5){return y5.trim();}function uniq(z5){let A5=-1;const B5=[];while(++A5<z5.length){const C5=z5[A5];if(!contains(C5,B5)){B5.push(C5);}}return B5;}function uniqWith(fn,E5){if(arguments.length===1){return F5=>uniqWith(fn,F5);}let G5=-1;const H5=[];while(++G5<E5.length){const I5=E5[G5],J5=any(K5=>fn(I5,K5),H5);if(!J5){H5.push(I5);}}return H5;}function update(L5,M5,N5){if(M5===void 0){return(O5,P5)=>update(L5,O5,P5);}else if(N5===void 0){return Q5=>update(L5,M5,Q5);}const R5=N5.concat();return R5.fill(M5,L5,L5+1);}function values(S5){const T5=[];for(const U5 in S5){T5.push(S5[U5]);}return T5;}function without(V5,W5){return reduce((X5,Y5)=>!contains(Y5,V5)?X5.concat(Y5):X5,[],W5);}function zip(x,y){if(y===void 0){return Z5=>zip(x,Z5);}return addIndex(reduce)((a6,b6,c6)=>y[c6]?a6.concat([[b6,y[c6]]]):a6,[],x);}e.add=add;e.addIndex=addIndex;e.adjust=adjust;e.all=all;e.allPass=allPass;e.anyPass=anyPass;e.always=always;e.any=any;e.append=append;e.both=both;e.complement=complement;e.compose=compose;e.concat=concat;e.contains=contains;e.curry=curry;e.dec=dec;e.defaultTo=defaultTo;e.dissoc=dissoc;e.divide=divide;e.drop=drop;e.dropLast=dropLast;e.either=either;e.endsWith=endsWith;e.inc=inc;e.equals=equals;e.F=F;e.filter=filter;e.find=find;e.findIndex=findIndex;e.flatten=flatten;e.flip=flip;e.forEach=forEach;e.groupBy=groupBy;e.has=has;e.head=head;e.identity=identity;e.ifElse=ifElse;e.is=is;e.isNil=isNil;e.includes=includes;e.indexBy=indexBy;e.indexOf=indexOf;e.init=init;e.join=join;e.lastIndexOf=lastIndexOf;e.last=last;e.length=length;e.map=map;e.match=match;e.merge=merge;e.modulo=modulo;e.multiply=multiply;e.none=none;e.not=not;e.omit=omit;e.partialCurry=partialCurry;e.path=path;e.pathOr=O3;e.pick=pick;e.pickAll=pickAll;e.pipe=pipe;e.pluck=pluck;e.prepend=prepend;e.prop=prop;e.propEq=propEq;e.range=range;e.reduce=reduce;e.reject=reject;e.repeat=repeat;e.replace=replace;e.reverse=reverse;e.sort=sort;e.sortBy=sortBy;e.split=split;e.splitEvery=splitEvery;e.startsWith=startsWith;e.subtract=subtract;e.T=T;e.tap=tap;e.tail=tail;e.take=take;e.takeLast=takeLast;e.test=test;e.times=times;e.toLower=toLower;e.toUpper=toUpper;e.toString=toString;e.trim=trim;e.type=type;e.uniq=uniq;e.uniqWith=uniqWith;e.update=update;e.values=values;e.without=without;e.zip=zip;Object.defineProperty(e,'__esModule',{value:!0});});
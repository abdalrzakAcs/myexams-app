((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,N,O,P,Q,H,C={adh:function adh(d){this.a=d},
IX(d){var x
if(d==null)x=""
else x=A.b.u(typeof d=="string"?d:B.f(d))
return x},
cZ1(d){var x
if(typeof d=="number")x=A.k.bz(d)
else{x=B.cj(C.IX(d),null)
if(x==null)x=0}return x},
IV(d){return y.f.b(d)?J.tf(d,new C.c1H(),y.N,y.z):A.af},
c2p(d){var x,w,v=B.a([],y.s),u=J.aB(y.j.b(d)?d:A.fA)
for(;u.A();){x=u.gJ(u)
if(x==null)w=""
else w=A.b.u(typeof x=="string"?x:B.f(x))
v.push(w)}A.c.kq(v,new C.c2q())
return v},
cwk(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=C.IV(d)
if(C.IX(k.h(0,"id")).length!==0)C.IX(k.h(0,"id"))
x=C.IX(k.h(0,"title"))
w=C.cZ1(k.h(0,"page"))
v=C.IX(k.h(0,"note"))
u=y.s
t=B.a([],u)
s=k.h(0,"cols")
r=y.j
s=J.aB(r.b(s)?s:A.fA)
for(;s.A();){q=s.gJ(s)
if(q==null)p=""
else p=A.b.u(typeof q=="string"?q:B.f(q))
t.push(p)}s=B.a([],y.E)
p=k.h(0,"rows")
p=J.aB(r.b(p)?p:A.fA)
for(;p.A();){o=p.gJ(p)
if(r.b(o)){n=B.a([],u)
for(m=J.aB(o);m.A();){q=m.gJ(m)
if(q==null)l=""
else l=A.b.u(typeof q=="string"?q:B.f(q))
n.push(l)}}else{if(o==null)n=""
else n=A.b.u(typeof o=="string"?o:B.f(o))
n=B.a([n],u)}s.push(n)}return new C.Ob(x,v,w,t,s)},
cTq(d7,d8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=null,c9="title",d0="id",d1="page",d2=C.IV(d7),d3=C.IV(d2.h(0,"meta")),d4=B.a([],y.J),d5=d2.h(0,"units"),d6=y.j
d5=d6.b(d5)?d5:A.fA
for(x=J.t(d5),w=y.f,v=y.Y,u=y.q,t=y.v,s=y.B,r=0;r<x.gC(d5);r=k){q=C.IV(x.h(d5,r))
if(q.U(0,"n")){p=q.h(0,"n")
if(typeof p=="number"){p=A.k.bz(p)
o=p}else{if(p==null)p=""
else p=A.b.u(typeof p=="string"?p:B.f(p))
p=B.cj(p,c8)
if(p==null)p=0
o=p}}else o=r+1
p=q.h(0,c9)
if(p==null)n=""
else n=A.b.u(typeof p=="string"?p:B.f(p))
m=B.a([],s)
l=q.h(0,"lessons")
l=d6.b(l)?l:A.fA
for(p=J.t(l),k=r+1,j="u"+k+"_l",i=0;i<p.gC(l);){h=C.IV(p.h(l,i))
g=h.h(0,c9)
if(g==null)f=""
else f=A.b.u(typeof g=="string"?g:B.f(g))
e=B.a([],t)
d=h.h(0,"laws")
d=d6.b(d)?d:A.fA
for(g=J.t(d),++i,a0=j+i+"_",a1=0;a1<g.gC(d);++a1){a2=C.IV(g.h(d,a1))
a3=a2.h(0,"alt")
a4=a2.h(0,d0)
if(a4==null)a4=""
else a4=A.b.u(typeof a4=="string"?a4:B.f(a4))
if(a4.length===0)a4=a0+(a1+1)
else{a4=a2.h(0,d0)
if(a4==null)a4=""
else a4=A.b.u(typeof a4=="string"?a4:B.f(a4))}a5=a2.h(0,"name")
if(a5==null)a5=""
else a5=A.b.u(typeof a5=="string"?a5:B.f(a5))
a6=a2.h(0,"tex")
if(a6==null)a6=""
else a6=A.b.u(typeof a6=="string"?a6:B.f(a6))
a7=B.a([],u)
if(typeof a3=="string"&&A.b.u(a3).length!==0)a7.push(new C.uD("",A.b.u(a3)))
a8=J.aB(d6.b(a3)?a3:A.fA)
for(;a8.A();){a9=a8.gJ(a8)
if(w.b(a9)){b0=J.t(a9)
b1=b0.h(a9,"label")
if(b1==null)b1=""
else b1=A.b.u(typeof b1=="string"?b1:B.f(b1))
b0=b0.h(a9,"tex")
if(b0==null)b0=""
else b0=A.b.u(typeof b0=="string"?b0:B.f(b0))
a7.push(new C.uD(b1,b0))}else{b0=a9==null
if(b0)b1=""
else b1=A.b.u(typeof a9=="string"?a9:B.f(a9))
if(b1.length!==0){if(b0)b0=""
else b0=A.b.u(typeof a9=="string"?a9:B.f(a9))
a7.push(new C.uD("",b0))}}}a7.$flags&1&&B.ax(a7,16)
A.c.wK(a7,new C.b9I(),!0)
a8=B.a([],v)
b0=a2.h(0,"syms")
b0=J.aB(d6.b(b0)?b0:A.fA)
for(;b0.A();){b2=b0.gJ(b0)
if(w.b(b2)){b1=J.t(b2)
b3=b1.h(b2,"s")
if(b3==null)b3=""
else b3=A.b.u(typeof b3=="string"?b3:B.f(b3))
b4=b1.h(b2,"m")
if(b4==null)b4=""
else b4=A.b.u(typeof b4=="string"?b4:B.f(b4))
b1=b1.h(b2,"u")
if(b1==null)b1=""
else b1=A.b.u(typeof b1=="string"?b1:B.f(b1))
a8.push(new C.xv(b3,b4,b1))}else{if(b2==null)b1=""
else b1=A.b.u(typeof b2=="string"?b2:B.f(b2))
a8.push(new C.xv(b1,"",""))}}a8.$flags&1&&B.ax(a8,16)
A.c.wK(a8,new C.b9J(),!0)
b0=a2.h(0,"say")
if(b0==null)b0=""
else b0=A.b.u(typeof b0=="string"?b0:B.f(b0))
b1=a2.h(0,"use")
if(b1==null)b1=""
else b1=A.b.u(typeof b1=="string"?b1:B.f(b1))
b3=a2.h(0,"warn")
if(b3==null)b3=""
else b3=A.b.u(typeof b3=="string"?b3:B.f(b3))
b4=a2.h(0,d1)
if(typeof b4=="number")b4=A.k.bz(b4)
else{if(b4==null)b4=""
else b4=A.b.u(typeof b4=="string"?b4:B.f(b4))
b4=B.cj(b4,c8)
if(b4==null)b4=0}if(b4>0){b4=a2.h(0,d1)
if(typeof b4=="number")b4=A.k.bz(b4)
else{if(b4==null)b4=""
else b4=A.b.u(typeof b4=="string"?b4:B.f(b4))
b4=B.cj(b4,c8)
if(b4==null)b4=0}}else{b4=h.h(0,d1)
if(typeof b4=="number")b4=A.k.bz(b4)
else{if(b4==null)b4=""
else b4=A.b.u(typeof b4=="string"?b4:B.f(b4))
b4=B.cj(b4,c8)
if(b4==null)b4=0}}b5=a2.h(0,"kind")
if(b5==null)b5=""
else b5=A.b.u(typeof b5=="string"?b5:B.f(b5))
e.push(new C.lG(a4,a5,a6,b0,b1,b3,b5,a7,a8,b4,r,o,n,f))}if(h.U(0,"n")){g=h.h(0,"n")
if(typeof g=="number")A.k.bz(g)
else{if(g==null)g=""
else g=A.b.u(typeof g=="string"?g:B.f(g))
B.cj(g,c8)}}g=h.h(0,d1)
if(typeof g=="number")g=A.k.bz(g)
else{if(g==null)g=""
else g=A.b.u(typeof g=="string"?g:B.f(g))
g=B.cj(g,c8)
if(g==null)g=0}m.push(new C.O9(g,f,e))}d4.push(new C.al8(r,o,n,m))}b6=d2.h(0,"tables")
b6=d6.b(b6)?b6:A.fA
x=y.t
v=B.a([],x)
for(u=J.t(b6),b7=0;b7<u.gC(b6);b7=b8){b8=b7+1
v.push(C.cwk(u.h(b6,b7),"t"+b8))}A.c.kq(v,new C.b9K())
b9=d2.h(0,"problems")
b9=d6.b(b9)?b9:A.fA
c0=B.a([],y.d)
for(u=J.t(b9),t=y.K,b7=0;b7<u.gC(b9);b7=b8){c1=C.IV(u.h(b9,b7))
c2=c1.h(0,"tables")
c2=d6.b(c2)?c2:A.fA
s=c1.h(0,d0)
if(s==null)s=""
else s=A.b.u(typeof s=="string"?s:B.f(s))
if(s.length===0)s="p"+(b7+1)
else{s=c1.h(0,d0)
if(s==null)s=""
else s=A.b.u(typeof s=="string"?s:B.f(s))}p=c1.h(0,c9)
if(p==null)p=""
else p=A.b.u(typeof p=="string"?p:B.f(p))
j=c1.h(0,d1)
if(typeof j=="number")j=A.k.bz(j)
else{if(j==null)j=""
else j=A.b.u(typeof j=="string"?j:B.f(j))
j=B.cj(j,c8)
if(j==null)j=0}g=c1.h(0,"text")
if(g==null)g=""
else g=A.b.u(typeof g=="string"?g:B.f(g))
a0=C.c2p(c1.h(0,"asks"))
a4=B.a([],x)
for(a5=J.t(c2),b8=b7+1,a6="p"+b8+"_t",a1=0;a1<a5.gC(c2);a1=c3){c3=a1+1
a4.push(C.cwk(a5.h(c2,a1),a6+c3))}a4.$flags&1&&B.ax(a4,16)
A.c.wK(a4,new C.b9L(),!0)
a5=B.a([],t)
a6=c1.h(0,"steps")
a6=J.aB(d6.b(a6)?a6:A.fA)
for(;a6.A();){b2=a6.gJ(a6)
if(w.b(b2)){a7=J.t(b2)
a8=a7.h(b2,"h")
if(a8==null)a8=""
else a8=A.b.u(typeof a8=="string"?a8:B.f(a8))
b0=a7.h(b2,"t")
if(b0==null)b0=""
else b0=A.b.u(typeof b0=="string"?b0:B.f(b0))
a7=a7.h(b2,"tex")
if(a7==null)a7=""
else a7=A.b.u(typeof a7=="string"?a7:B.f(a7))
a5.push(new C.GX(a8,b0,a7))}else{if(b2==null)a7=""
else a7=A.b.u(typeof b2=="string"?b2:B.f(b2))
a5.push(new C.GX("",a7,""))}}a5.$flags&1&&B.ax(a5,16)
A.c.wK(a5,new C.b9M(),!0)
a6=C.c2p(c1.h(0,"answers"))
a7=C.c2p(c1.h(0,"laws"))
a8=c1.h(0,"unit")
if(typeof a8=="number")a8=A.k.bz(a8)
else{if(a8==null)a8=""
else a8=A.b.u(typeof a8=="string"?a8:B.f(a8))
a8=B.cj(a8,c8)
if(a8==null)a8=0}c0.push(new C.al5(s,p,g,j,b7,a8,a0,a6,a7,a4,a5))}c4=d2.h(0,"questions")
c4=d6.b(c4)?c4:A.fA
c5=B.a([],y.W)
for(x=J.t(c4),w=y.s,b7=0;b7<x.gC(c4);++b7){a2=C.IV(x.h(c4,b7))
u=a2.h(0,"q")
if(u==null)c6=""
else c6=A.b.u(typeof u=="string"?u:B.f(u))
if(c6.length===0)continue
c7=a2.h(0,"a")
u=a2.h(0,d0)
if(u==null)u=""
else u=A.b.u(typeof u=="string"?u:B.f(u))
if(u.length===0)u="q"+(b7+1)
else{u=a2.h(0,d0)
if(u==null)u=""
else u=A.b.u(typeof u=="string"?u:B.f(u))}t=c5.length
s=a2.h(0,"unit")
if(typeof s=="number")s=A.k.bz(s)
else{if(s==null)s=""
else s=A.b.u(typeof s=="string"?s:B.f(s))
s=B.cj(s,c8)
if(s==null)s=0}p=d6.b(c7)
if(p)j=C.c2p(c7)
else{j=B.a([],w)
g=c7==null
if(g)a0=""
else a0=A.b.u(typeof c7=="string"?c7:B.f(c7))
if(a0.length!==0){if(g)g=""
else g=A.b.u(typeof c7=="string"?c7:B.f(c7))
j.push(g)}}g=a2.h(0,d1)
if(typeof g=="number")g=A.k.bz(g)
else{if(g==null)g=""
else g=A.b.u(typeof g=="string"?g:B.f(g))
g=B.cj(g,c8)
if(g==null)g=0}a0=a2.h(0,"src")
if(a0==null)a0=""
else a0=A.b.u(typeof a0=="string"?a0:B.f(a0))
c5.push(new C.BK(u,c6,a0,t,s,g,j,p))}d6=C.IX(d3.h(0,c9)).length===0?d8.e:C.IX(d3.h(0,c9))
return new C.pP(d6,C.IX(d3.h(0,"source")),d4,v,c0,c5,d8)},
cwi(d){var x=d.a,w=$.cmQ.h(0,x)
if(w==null){w=$.te().IU(x).be(0,new C.b9Y(d),y.b).f7(new C.b9Z(d))
$.cmQ.q(0,x,w)
x=w}else x=w
return x},
aD5(d){var x,w=B.aI("[\u0623\u0625\u0622]",!0,!1,!1)
w=B.b2(d.toLowerCase(),w,"\u0627")
w=B.b2(w,"\u0629","\u0647")
w=B.b2(w,"\u0649","\u064a")
x=B.aI("[\u064b-\u0652\u0640]",!0,!1,!1)
return B.b2(w,x,"")},
d5R(d){var x=A.b.l5(C.aD5(A.b.u(d)),B.aI("\\s+",!0,!1,!1)),w=B.a8(x).i("aw<1>")
x=B.X(new B.aw(x,new C.cj5(),w),w.i("T.E"))
return x},
d5M(d,e){var x,w,v,u,t,s,r,q,p="[\\\\{}_^\\s$]"
if(e.length===0)return!1
x=d.gye()
w=d.c
v=w.length===0&&d.d.length!==0?d.d:""
u=d.x
t=C.aD5(d.b+" "+d.at+" "+d.as+" "+x+" "+v+" "+new B.ad(u,new C.cj1(),B.a8(u).i("ad<1,e>")).aE(0," "))
v=B.aV(y.N)
for(x=u.length,s=0;s<u.length;u.length===x||(0,B.S)(u),++s){r=u[s]
q=B.aI(p,!0,!1,!1)
v.F(0,B.b2(r.a.toLowerCase(),q,""))}x=d.w
x=new B.ad(x,new C.cj2(),B.a8(x).i("ad<1,e>")).aE(0," ")
u=v.aE(0," ")
q=B.aI(p,!0,!1,!1)
return A.c.d6(e,new C.cj3(t,v,B.b2((w+" "+x+" "+u).toLowerCase(),q,"")))},
d5T(d,e){var x,w,v
if(e.length===0)return!1
x=d.f
w=d.b+" "+d.c+" "+A.c.aE(d.e," ")+" "+new B.ad(x,new C.cj7(),B.a8(x).i("ad<1,e>")).aE(0," ")
v=C.aD5(w)
x=B.aI("[\\\\{}_^\\s$]",!0,!1,!1)
return A.c.d6(e,new C.cj8(v,B.b2(w.toLowerCase(),x,"")))},
d5P(d,e){if(e.length===0)return!1
return A.c.d6(e,A.b.gn8(C.aD5(d.b+" "+d.c+" "+A.c.aE(d.r," "))))},
d5S(d,e){var x,w,v
if(e.length===0)return!1
x=d.b
w=C.aD5(x)
v=B.aI("[\\\\{}_^\\s$]",!0,!1,!1)
return A.c.d6(e,new C.cj6(w,B.b2(x.toLowerCase(),v,"")))},
c1H:function c1H(){},
c2q:function c2q(){},
xv:function xv(d,e,f){this.a=d
this.b=e
this.c=f},
uD:function uD(d,e){this.a=d
this.b=e},
lG:function lG(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q},
O9:function O9(d,e,f){this.b=d
this.c=e
this.d=f},
al8:function al8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ba5:function ba5(){},
Ob:function Ob(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
ba4:function ba4(){},
ba3:function ba3(){},
GX:function GX(d,e,f){this.a=d
this.b=e
this.c=f},
al5:function al5(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
BK:function BK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
pP:function pP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.y=_.x=_.w=$},
b9N:function b9N(d){this.a=d},
b9I:function b9I(){},
b9J:function b9J(){},
b9K:function b9K(){},
b9L:function b9L(){},
b9M:function b9M(){},
b9Y:function b9Y(d){this.a=d},
b9Z:function b9Z(d){this.a=d},
cj5:function cj5(){},
cj1:function cj1(){},
cj2:function cj2(){},
cj3:function cj3(d,e,f){this.a=d
this.b=e
this.c=f},
cj7:function cj7(){},
cj8:function cj8(d,e){this.a=d
this.b=e},
cj6:function cj6(d,e){this.a=d
this.b=e},
cp9(d,e){var x,w,v=null,u=e.gl_(0)
u=B.v(v,v,A.f,v,v,new B.z(v,v,v,B.u(4),v,u,A.j),v,22,v,v,v,v,v,4)
x=d.b
if(x.length===0)x="\u062c\u062f\u0648\u0644"
w=y.p
x=B.a([u,A.R,B.a_(C.hx(x,B.w(v,v,A.aC,v,v,v,v,v,16.5,v,A.n,v,1.4,v,v,v,v,v,v),v,v),1,v)],w)
u=d.d
if(u>0)A.c.t(x,B.a([A.O,C.aD6(u,!1)],w))
return new B.Q(D.aRe,B.K(x,A.i,A.e,A.h,0,v,v),v)},
cTr(d){var x,w,v=B.aI("\\([^)]*\\)",!0,!1,!1)
v=B.b2(d,v,"")
x=B.aI("\\$[^$]*\\$",!0,!1,!1)
v=B.b2(v,x,"")
x=B.aI("[\u060c,:]\\s*$",!0,!1,!1)
v=A.b.l5(A.b.u(A.c.gS(A.b.l5(B.b2(v,x,""),B.aI("[\u060c,]",!0,!1,!1)))),B.aI("\\s+",!0,!1,!1))
x=B.a8(v).i("aw<1>")
w=B.X(new B.aw(v,new C.b9O(),x),x.i("T.E"))
return w.length<=3?A.c.aE(w," "):B.dM(w,0,B.fs(3,"count",y.S),B.a8(w).c).aE(0," ")+"\u2026"},
cyJ(d,e,f,g){var x,w,v=null,u=y.p,t=B.a([],u),s=d.a
if(s.length!==0){x=A.d.N(0.7)
w=B.u(999)
A.c.t(t,B.a([B.v(v,C.hx(s,B.w(v,v,e.c,v,v,v,v,v,12,v,A.n,v,1.4,v,v,v,v,v,v),v,v),A.f,v,D.ano,new B.z(x,v,v,w,v,v,A.j),v,v,v,v,E.Ow,v,v,v),A.O],u))}t.push(new B.d6(1,A.b4,C.cj0(d.b,A.r,g,f),v))
return B.K(t,A.i,A.aT,A.h,0,v,v)},
cwj(d){var x,w,v,u,t,s,r,q,p
for(x=$.cIv().kF(0,d),x=new B.oA(x.a,x.b,x.c),w=y.F,v=0,u=0;x.A();){t=x.d
s=(t==null?w.a(t):t).b
r=s.index
q=s[1]
q.toString
p=B.aI("\\\\[a-zA-Z]+",!0,!1,!1)
q=B.b2(q,p,"\u2022")
p=B.aI("[{}^_\\s\\\\]",!0,!1,!1)
v+=(r-u)*6.8+B.b2(q,p,"").length*8
u=r+s[0].length}return v+(d.length-u)*6.8},
y5:function y5(d,e){this.a=d
this.b=e},
GV:function GV(d,e){this.d=d
this.a=e},
a6c:function a6c(d,e,f){var _=this
_.e=_.d=null
_.f=0
_.r=d
_.w=""
_.x=e
_.y=f
_.z=-1
_.c=_.a=null},
bT0:function bT0(d){this.a=d},
bT1:function bT1(d){this.a=d},
bT_:function bT_(d,e){this.a=d
this.b=e},
bT2:function bT2(d){this.a=d},
bSZ:function bSZ(d,e){this.a=d
this.b=e},
bSU:function bSU(d){this.a=d},
bSV:function bSV(){},
bSW:function bSW(d){this.a=d},
bTc:function bTc(d){this.a=d},
bTb:function bTb(d,e){this.a=d
this.b=e},
bTd:function bTd(d){this.a=d},
bTa:function bTa(d){this.a=d},
bTg:function bTg(d){this.a=d},
bTf:function bTf(d,e){this.a=d
this.b=e},
bTe:function bTe(d,e){this.a=d
this.b=e},
bSY:function bSY(){},
bSX:function bSX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTm:function bTm(d,e){this.a=d
this.b=e},
bTl:function bTl(d,e){this.a=d
this.b=e},
bT7:function bT7(){},
bT8:function bT8(d){this.a=d},
bT9:function bT9(d){this.a=d},
bT6:function bT6(d,e){this.a=d
this.b=e},
bT5:function bT5(d,e){this.a=d
this.b=e},
bTk:function bTk(d,e,f){this.a=d
this.b=e
this.c=f},
bTj:function bTj(d,e,f){this.a=d
this.b=e
this.c=f},
bTh:function bTh(){},
bTi:function bTi(){},
bT4:function bT4(d,e){this.a=d
this.b=e},
bT3:function bT3(d,e){this.a=d
this.b=e},
O7:function O7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b9P:function b9P(d,e){this.a=d
this.b=e},
b9O:function b9O(){},
a_a:function a_a(d,e,f){this.c=d
this.d=e
this.a=f},
b9S:function b9S(d){this.a=d},
b9T:function b9T(d){this.a=d},
b9R:function b9R(d,e,f){this.a=d
this.b=e
this.c=f},
b9Q:function b9Q(d,e){this.a=d
this.b=e},
b9U:function b9U(d){this.a=d},
Oc:function Oc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba2:function ba2(){},
ba1:function ba1(d){this.a=d},
ba_:function ba_(){},
ba0:function ba0(d,e){this.a=d
this.b=e},
Oa:function Oa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9W:function b9W(d,e,f){this.a=d
this.b=e
this.c=f},
al6:function al6(d,e,f){this.c=d
this.d=e
this.a=f},
b9X:function b9X(d){this.a=d},
al7:function al7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
D0(d){return B.a([new B.aH(0,A.G,A.aC.N(d),A.c_,22)],y.V)},
cp8(d,e){return B.a2(d,!1).bl(B.ch(new C.cj4(e),null,y.H))},
d5N(d,e){return new C.al4(d,e,null)},
cp7(d,e,f){var x,w=null,v=B.u(14)
$.aG()
x=A.d.N(0.18)
return B.cd(!0,w,B.cM(v,B.oW(B.bS(!1,A.K,!0,w,B.aN(!1,w,!0,B.aF(B.aq(d,A.d,w,22),44,44),w,!0,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,x,0,w,w,w,w,w,A.al),new B.l6(10,10,w)),A.X),!0,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,A.ad,w)},
lY(d,e){var x=null,w=B.a([A.Cl,A.O,B.a_(B.d(d,x,x,x,B.w(x,x,A.aC,x,x,x,x,x,19,x,A.n,x,1.3,x,x,x,x,x,x),x,x),1,x)],y.p)
if(e!=null)w.push(e)
return new B.Q(E.Oo,B.K(w,A.i,A.e,A.h,0,x,x),x)},
aD6(d,e){var x=null,w=e?A.d.N(0.18):A.aG,v=B.u(999)
return B.v(x,B.d("\u0635 "+d,x,x,x,B.w(x,x,e?A.d:A.b3,x,x,x,x,x,11.5,x,A.x,x,1.4,x,x,x,x,x,x),x,x),A.f,x,x,new B.z(w,x,x,v,x,x,A.j),x,x,x,x,E.uY,x,x,x)},
cCb(d,e,f,g){var x=null,w=B.u(999),v=y.p,u=B.a([],v)
A.c.t(u,B.a([B.aq(g,f,x,13),A.fd],v))
u.push(new B.d6(1,A.b4,B.d(d,x,x,x,B.w(x,x,f,x,x,x,x,x,11.5,x,A.n,x,1.3,x,x,x,x,x,x),x,x),x))
return B.v(x,B.K(u,A.i,A.e,A.B,0,x,x),A.f,x,x,new B.z(e,x,x,w,x,x,A.j),x,x,x,x,Q.ki,x,x,x)},
aD4(d,e){var x=null
return B.v(x,d,A.f,x,x,new B.z(A.d,x,x,B.u(22),C.D0(0.05),x,A.j),x,x,x,x,e,x,x,x)},
cpa(d,e,f,g,h,i,j){var x=null,w=B.bh(d,x,y.w).w.r.b+10,v=h==null?D.bq_:h,u=j.gl_(0),t=v.a,s=v.b
return B.qC(B.v(x,B.bv(A.a3,B.a([B.eA(0,B.dE(x,x,x,new C.GW(x),A.ah),0),B.cw(x,B.dE(x,x,x,i.$2(g,0.2),A.ah),v.d-s,x,t,x,w+s,v.c-t),new B.Q(new B.O(16,w,16,e),B.b7(new B.d2(D.tm,f,x),x,x),x)],y.p),A.o,A.a8,x),A.f,x,x,new B.z(x,x,x,x,x,u,A.j),x,x,x,x,x,x,x,x),A.X,new C.al9(x))},
cZO(d,e,f,g){var x=f==null?e.b:f,w=e.r,v=B.bN(S.Fl(d,T.dE,new C.c1J(d,e),e.uK(x,(w==null?14:w)*1.02,A.u)),A.az)
return isFinite(g)?new B.d2(new B.aC(0,g,0,1/0),B.fk(A.r,v,A.f,A.be),null):v},
hx(d,e,f,g){var x,w,v,u,t=null
if(!A.b.n(d,"$")){x=$.aDi()
if(!x.b.test(d)){x=$.aDm()
x=!x.b.test(d)}else x=!0
w=x?A.P:A.az
return B.d(d,g,g==null?t:A.L,t,e,A.cn,w)}v=B.cd(t,t,new B.eb(new C.cja(d,e,f),t),!1,t,t,!0,t,!1,t,t,t,t,t,t,t,t,t,B.qo(d,$.cqt(),new C.cjb(),t),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,A.ad,t)
if(g==null)return v
x=e.r
if(x==null)x=14
u=e.as
if(u==null)u=1.6
return new B.d2(new B.aC(0,1/0,0,x*u*g+2),B.vL(B.eh(v,t,t,A.re,!1,A.S),A.o,t),t)},
cj0(d,e,f,g){return new B.cn(e,null,null,B.fk(A.r,G.hU(d,f,g),A.f,A.be),null)},
cp6(d,e,f){var x,w,v=A.b.u(d),u=B.aI("^\\$[^$]+\\$$",!0,!1,!1)
if(u.b.test(v)){u=A.b.Z(v,1,v.length-1)
x=e.r
if(x==null)x=13
w=f==null?e.b:f
if(w==null)w=A.aC
return B.fk(A.b7,G.hU(u,w,x*1.12),A.f,A.be)}return C.hx(v,e,f,null)},
cj4:function cj4(d){this.a=d},
al4:function al4(d,e,f){this.b=d
this.c=e
this.a=f},
b9V:function b9V(){},
GW:function GW(d){this.a=d},
al9:function al9(d){this.a=d},
c1J:function c1J(d,e){this.a=d
this.b=e},
cja:function cja(d,e,f){this.a=d
this.b=e
this.c=f},
cj9:function cj9(d){this.a=d},
cjb:function cjb(){},
d5O(d,e){return d},
d5Q(d,e){return 1}},D,R,S,T,K,G,E,L,M,F,I,U,V
J=c[1]
B=c[0]
A=c[2]
N=c[88]
O=c[83]
P=c[89]
Q=c[84]
H=c[68]
C=a.updateHolder(c[39],C)
D=c[14]
R=c[41]
S=c[43]
T=c[90]
K=c[64]
G=c[42]
E=c[73]
L=c[53]
M=c[12]
F=c[129]
I=c[81]
U=c[77]
V=c[134]
C.adh.prototype={
RE(d,e){return this.a},
RB(d,e){return this.a},
k(d){return"FixedColumnWidth("+B.ke(this.a)+")"}}
C.xv.prototype={}
C.uD.prototype={}
C.lG.prototype={
gye(){var x,w=this.r
$label0$0:{if("grouped"===w){x="\u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629"
break $label0$0}if("ungrouped"===w){x="\u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u063a\u064a\u0631 \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629"
break $label0$0}if("both"===w){x="\u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629 \u0648\u063a\u064a\u0631 \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629"
break $label0$0}if("base"===w){x="\u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629"
break $label0$0}if("rel"===w){x="\u0627\u0644\u0627\u0631\u062a\u064a\u0627\u0628 \u0627\u0644\u0646\u0633\u0628\u064a"
break $label0$0}if("abs"===w){x="\u0627\u0644\u0627\u0631\u062a\u064a\u0627\u0628 \u0627\u0644\u0645\u0637\u0644\u0642"
break $label0$0}if("final"===w){x="\u0627\u0644\u0646\u062a\u064a\u062c\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064a\u0629"
break $label0$0}if("device"===w){x="\u0627\u0631\u062a\u064a\u0627\u0628 \u0627\u0644\u062c\u0647\u0627\u0632"
break $label0$0}x=""
break $label0$0}return x}}
C.O9.prototype={}
C.al8.prototype={
gPZ(d){return A.c.ef(this.d,0,new C.ba5())}}
C.Ob.prototype={
gj2(d){return A.c.ef(this.f,this.e.length,new C.ba4())},
gab(d){return this.f.length===0&&A.c.d6(this.e,new C.ba3())}}
C.GX.prototype={}
C.al5.prototype={
gvb(d){var x=this.b
return x.length===0?"\u0645\u0633\u0623\u0644\u0629 "+(this.e+1):x}}
C.BK.prototype={
ga6_(){var x,w=this.c
$label0$0:{if("exam"===w){x="\u062f\u0648\u0631\u0627\u062a"
break $label0$0}if("model"===w){x="\u0646\u0645\u0648\u0630\u062c"
break $label0$0}x=""
break $label0$0}return x}}
C.pP.prototype={
gvc(){var x,w,v,u,t,s,r,q=this,p=q.w
if(p===$){x=B.a([],y.v)
for(w=q.c,v=w.length,u=0;u<w.length;w.length===v||(0,B.S)(w),++u)for(t=w[u].d,s=t.length,r=0;r<t.length;t.length===s||(0,B.S)(t),++r)A.c.t(x,t[r].d)
q.w!==$&&B.b5()
q.w=x
p=x}return p},
gbdm(){var x,w,v,u,t,s=this,r=s.x
if(r===$){x=B.P(y.N,y.x)
for(w=s.gvc(),v=w.length,u=0;u<w.length;w.length===v||(0,B.S)(w),++u){t=w[u]
x.q(0,t.a,t)}s.x!==$&&B.b5()
s.x=x
r=x}return r},
gazX(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.y
if(m===$){x=B.aV(y.N)
for(w=n.gvc(),v=w.length,u=0;u<w.length;w.length===v||(0,B.S)(w),++u)for(t=w[u].x,s=t.length,r=0;r<t.length;t.length===s||(0,B.S)(t),++r){q=t[r]
p=B.aI("\\s+",!0,!1,!1)
x.F(0,B.b2(q.a,p,""))}o=x.a
n.y!==$&&B.b5()
n.y=o
m=o}return m},
bgx(d){var x,w,v,u,t=B.a([],y.d)
for(x=this.e,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
if(A.c.n(u.x,d))t.push(u)}return t},
bdn(d){var x,w,v,u,t,s=B.a([],y.v)
for(x=d.x,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
t=this.gbdm()
if(t.h(0,u)!=null){t=t.h(0,u)
t.toString
s.push(t)}}return s},
T0(d){var x,w,v,u
for(x=this.c,w=x.length,v=0;v<w;++v){u=x[v]
if(u.b===d)return u}return null},
bdu(d){var x,w,v=d.z,u=this.c,t=u.length
if(v>=t)return null
for(v=u[v].d,u=v.length,x=0;x<v.length;v.length===u||(0,B.S)(v),++x){w=v[x]
if(A.c.dt(w.d,new C.b9N(d)))return w}return null}}
C.y5.prototype={
L(){return"_Tab."+this.b}}
C.GV.prototype={
P(){return new C.a6c(D.alc,new B.c7(A.aD,$.aJ()),B.aV(y.N))}}
C.a6c.prototype={
a1(){var x=this
x.ag()
x.a.toString
x.d=null
x.ahn()},
ahn(){var x=this
x.p(new C.bT0(x))
C.cwi(x.a.d).dR(0,new C.bT1(x),new C.bT2(x),y.P)},
l(){var x=this.x
x.cx$=$.aJ()
x.CW$=0
this.ac()},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r==null)x=t.e!=null?t.aHX():B.b7(B.DA(s,F.dC[A.m.am(Math.abs(0),5)].a,s,s,s,s,s,s,s,s),s,s)
else{x=t.b0w(d,r)
w=y.p
v=B.a([],w)
if(A.b.u(t.w).length===0)v.push(t.b0u(d,r))
else v.push(t.b0y(d,r))
u=r.b
if(u.length!==0)v.push(new B.Q(D.aRd,B.K(B.a([D.bj4,A.de,B.a_(B.d("\u0627\u0644\u0645\u0635\u062f\u0631: "+u,s,s,s,B.w(s,s,A.bi,s,s,s,s,s,12,s,A.u,s,1.7,s,s,s,s,s,s),s,s),1,s)],w),A.q,A.e,A.h,0,s,s),s))
x=B.dP(B.a([x,B.b7(new B.d2(D.tm,new B.Q(E.NV,B.G(v,A.H,s,A.e,A.h),s),s),s,s)],w),A.o,s,s,A.ac,s,s,A.S,!1)}return B.cs(s,I.nw,x,s,s,s)},
aHX(){var x=null
return B.b7(new B.Q(A.kj,B.G(B.a([B.d("\u0645\u0627 \u0642\u062f\u0631\u0646\u0627 \u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0642\u0648\u0627\u0646\u064a\u0646.",x,x,x,B.w(x,x,A.b3,x,x,x,x,x,15,x,A.x,x,1.5,x,x,x,x,x,x),x,x),A.Q,B.c5(!1,B.d("\u062c\u0631\u0651\u0628 \u0645\u0631\u0629 \u062a\u0627\u0646\u064a\u0629",x,x,x,B.w(x,x,F.dC[A.m.am(Math.abs(0),5)].c,x,x,x,x,x,14,x,A.n,x,1.5,x,x,x,x,x,x),x,x),x,x,x,x,x,x,this.gb0x(),x,x),B.c5(!1,B.d("\u0631\u062c\u0648\u0639",x,x,x,B.w(x,x,A.bi,x,x,x,x,x,13.5,x,A.x,x,1.5,x,x,x,x,x,x),x,x),x,x,x,x,x,x,new C.bSU(this),x,x)],y.p),A.i,x,A.e,A.B),x),x,x)},
b0w(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=e.f,l=e.e,k=y.Z
k=B.bbq(new B.aw(B.a([new B.a6(e.gvc().length,"\u0642\u0627\u0646\u0648\u0646"),new B.a6(e.d.length,"\u062c\u062f\u0648\u0644"),new B.a6(m.length,"\u0633\u0624\u0627\u0644 \u0646\u0638\u0631\u064a"),new B.a6(l.length,"\u0645\u0633\u0623\u0644\u0629 \u0645\u062d\u0644\u0648\u0644\u0629"),new B.a6(e.gazX(),"\u0631\u0645\u0632 \u0645\u0634\u0631\u0648\u062d")],y.G),new C.bSV(),k),3,k.i("T.E"))
x=B.X(k,B.L(k).i("T.E"))
w=e.r
k=F.dC[A.m.am(Math.abs(0),5)]
v=e.c
v=v.length===0?"":A.c.gS(v).c
v=w.Q.$2(0,v)
u=y.p
t=B.K(B.a([C.cp7(A.d8,new C.bSW(d),"\u0631\u062c\u0648\u0639"),B.a_(B.d(w.c,1,A.L,n,B.w(n,n,A.d.N(0.92),n,n,n,n,n,14.5,n,A.n,n,1.5,n,n,n,n,n,n),A.W,n),1,n),L.rK],u),A.i,A.e,A.h,0,n,n)
s=B.d(w.d,n,n,n,B.w(n,n,A.d,n,n,n,n,n,31,n,A.a6,n,1.25,n,n,n,n,n,n),n,n)
r=B.a(["\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0644\u062e\u0635 \u0648\u062c\u062f\u0627\u0648\u0644\u0647 \u0628\u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f\u060c \u0645\u0639 \u0645\u0639\u0646\u0649 \u0643\u0644 \u0631\u0645\u0632."],y.s)
m=m.length!==0
if(m&&l.length!==0)r.push("\u0648\u0623\u0633\u0626\u0644\u062a\u0647 \u0627\u0644\u0646\u0638\u0631\u064a\u0629 \u0648\u0645\u0633\u0627\u0626\u0644\u0647 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629.")
else if(m)r.push("\u0648\u0623\u0633\u0626\u0644\u062a\u0647 \u0627\u0644\u0646\u0638\u0631\u064a\u0629 \u0628\u0623\u062c\u0648\u0628\u062a\u0647\u0627.")
else if(l.length!==0)r.push("\u0648\u0645\u0633\u0627\u0626\u0644\u0647 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629 \u062e\u0637\u0648\u0629 \u062e\u0637\u0648\u0629.")
m=B.a([t,A.bc,s,A.a7,B.d(A.c.aE(r,"\n"),n,n,n,B.w(n,n,A.d.N(0.9),n,n,n,n,n,14,n,A.u,n,1.7,n,n,n,n,n,n),n,n)],u)
if(x.length!==0){l=B.a([],u)
for(q=0;q<x.length;++q){t=B.a([],u)
if(q>0)t.push(A.O)
s=x[q]
r=A.d.N(0.15)
p=new B.b0(16,16)
o=new B.be(A.d.N(0.22),1,A.V,-1)
t.push(new B.cV(1,A.aP,B.v(n,B.G(B.a([B.d(""+s.a,n,n,n,B.w(n,n,A.d,n,n,n,n,n,20,n,A.a6,n,1.2,n,n,n,n,n,n),n,n),B.d(s.b,1,A.L,n,B.w(n,n,A.d.N(0.85),n,n,n,n,n,11.5,n,A.x,n,1.3,n,n,n,n,n,n),n,n)],u),A.i,n,A.e,A.h),A.f,n,n,new B.z(r,n,new B.dC(o,o,o,o),new B.bA(p,p,p,p),n,n,A.j),n,n,n,n,H.nL,n,n,n),n))
A.c.t(l,t)}A.c.t(m,B.a([A.ai,B.K(l,A.i,A.e,A.h,0,n,n)],u))}m.push(A.ai)
m.push(this.b0z(w))
return C.cpa(d,58,B.G(m,A.H,n,A.e,A.h),v,n,w.z,k)},
b0z(d){var x,w,v,u,t=this,s=null,r=B.u(18)
$.aG()
x=A.d.N(0.16)
w=B.ag(A.d.N(0.28),1)
v=B.u(18)
u=B.w(s,s,A.d,s,s,s,s,s,s,s,A.u,s,s,s,s,s,s,s,s)
u=B.a([L.vD,A.R,B.a_(B.d3(s,A.U,!1,s,!0,A.o,s,B.d5(),t.x,A.d,s,s,s,s,2,B.i0(s,A.fL,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.w(s,s,A.d.N(0.85),s,s,s,s,s,s,s,A.z,s,s,s,s,s,s,s,s),d.r,s,s,s,s,s,s,s,s,s,!0,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s),A.J,!0,s,!0,s,!1,s,A.aB,s,s,s,D.bMt,s,s,s,s,s,1,s,s,!1,"\u2022",s,new C.bTc(t),s,s,s,!1,s,s,!1,s,!0,s,A.ae,s,s,s,s,s,s,s,s,s,s,s,u,!0,A.aA,s,A.aH,s,s,s,s),1,s)],y.p)
if(t.w.length!==0)u.push(B.cd(!0,s,B.aN(!1,s,!0,D.bjr,s,!0,s,s,s,s,s,s,s,s,s,s,new C.bTd(t),s,s,s,s,s,s,s),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,"\u0627\u0645\u0633\u062d \u0627\u0644\u0628\u062d\u062b",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,A.ad,s))
return B.cd(s,s,B.cM(r,B.oW(B.v(s,B.K(u,A.i,A.e,A.h,0,s,s),A.f,s,s,new B.z(x,s,w,v,s,s,A.j),s,52,s,s,A.fu,s,s,s),new B.l6(16,16,s)),A.X),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,A.ad,s)},
b0u(d,e){var x,w,v,u=this,t=null,s=B.a([],y.A)
if(e.gvc().length!==0)s.push(D.alc)
if(e.d.length!==0)s.push(D.bQ_)
if(e.f.length!==0)s.push(D.bQ0)
if(e.e.length!==0)s.push(D.bQ1)
if(s.length===0)return new B.Q(D.aP4,B.d("\u0644\u0633\u0627 \u0645\u0627 \u0641\u064a \u0642\u0648\u0627\u0646\u064a\u0646 \u0628\u0647\u0627\u0644\u0645\u0644\u0641.",t,t,t,B.w(t,t,A.b3,t,t,t,t,t,14,t,A.x,t,1.5,t,t,t,t,t,t),A.W,t),t)
x=A.c.n(s,u.r)?u.r:A.c.gS(s)
w=y.p
v=B.a([],w)
if(s.length>1)A.c.t(v,B.a([A.a7,u.b19(e,s,x)],w))
switch(x.a){case 0:s=u.aPV(d,e)
break
case 1:s=u.b1b(e)
break
case 2:s=u.aXk(e)
break
case 3:s=u.aWu(e)
break
default:s=t}A.c.t(v,s)
return B.G(v,A.H,t,A.e,A.h)},
b19(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=F.dC[A.m.am(Math.abs(0),5)],h=new C.bTg(a1),g=a2.length>3,f=B.u(20),e=C.D0(0.05),d=y.p,a0=B.a([],d)
for(x=a2.length,w=y.O,v=i.a,u=i.b,t=y.X,s=y.V,r=0;r<a2.length;a2.length===x||(0,B.S)(a2),++r){q=a2[r]
p=q===a3
o=p?new B.bB(A.bN,A.cl,A.Z,B.a([v,u],t),j,j):j
n=new B.b0(15,15)
m=p?B.a([new B.aH(0,A.G,v.N(0.28),A.kx,12)],s):j
l=B.a([],d)
if(g){k=h.$1(q).a
l.push(new B.kn(A.be,A.r,A.f,B.d(k,1,j,j,B.w(j,j,p?A.d:A.aC,j,j,j,j,j,13.5,j,A.n,j,1.35,j,j,j,j,j,j),j,j),j))}else{k=h.$1(q).a
l.push(B.d(k,1,A.L,j,B.w(j,j,p?A.d:A.aC,j,j,j,j,j,13.5,j,A.n,j,1.35,j,j,j,j,j,j),j,j))}k=h.$1(q).b
l.push(B.d(""+k,j,j,j,B.w(j,j,p?A.d.N(0.85):A.bi,j,j,j,j,j,11.5,j,A.n,j,1.3,j,j,j,j,j,j),j,j))
o=B.c8(A.bm,B.fi(j,B.G(l,A.i,j,A.e,A.h),A.f,j,A.a1,new B.z(j,j,j,new B.bA(n,n,n,n),m,o,A.j),A.K,j,j,j,j,D.aRj,j,j),A.J,!1,new B.cv("stats-tab-"+q.b,w),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.bTf(this,q),j,j,j,j,j,j,!1,A.ag)
a0.push(new B.cV(1,A.aP,new B.rt(new B.NF(j,j,j,j,j,p,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.ad,j),!0,!1,j,!1,!1,o,j),j))}return B.v(j,B.K(a0,A.i,A.e,A.h,0,j,j),A.f,j,j,new B.z(A.d,j,j,f,e,j,A.j),j,j,j,j,A.nR,j,j,j)},
aPV(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.c,f=A.m.b8(this.f,0,g.length-1),e=g[f],d=a3.r,a0=y.p,a1=B.a([C.lY(g.length>1?d.x:d.w,h),B.aF(B.pq(A.f,new C.bSX(this,g,f,d),g.length,D.bMx,h,h,A.b8,new C.bSY(),!1),118,h)],a0)
if(e.gPZ(0)===0)a1.push(new B.Q(D.aP3,B.d("\u0645\u0627 \u0641\u064a \u0642\u0648\u0627\u0646\u064a\u0646 \u0628"+d.y+".",h,h,h,B.w(h,h,A.b3,h,h,h,h,h,14,h,A.x,h,1.5,h,h,h,h,h,h),A.W,h),h))
for(x=e.d,w=x.length,v=Math.abs(e.a),u=y.X,t=e.c,s=t.length===0,r=d.w+" "+e.b,q=0,p=0;p<x.length;x.length===w||(0,B.S)(x),++p){o=x[p]
n=o.d
if(n.length!==0){m=F.dC[A.m.am(v,5)]
l=new B.b0(4,4)
l=B.v(h,h,A.f,h,h,new B.z(h,h,h,new B.bA(l,l,l,l),h,new B.bB(A.bN,A.cl,A.Z,B.a([m.a,m.b],u),h,h),A.j),h,22,h,h,h,h,h,4)
k=o.c
if(k.length===0)k=s?r:t
k=B.a([l,A.R,new B.cV(1,A.aP,C.hx(k,B.w(h,h,A.aC,h,h,h,h,h,17,h,A.n,h,1.35,h,h,h,h,h,h),h,h),h),B.d(""+n.length+" \u0642\u0627\u0646\u0648\u0646",h,h,h,B.w(h,h,A.bi,h,h,h,h,h,12,h,A.x,h,1.5,h,h,h,h,h,h),h,h)],a0)
l=o.b
if(l>0){j=new B.b0(999,999)
A.c.t(k,B.a([A.O,B.v(h,B.d("\u0635 "+l,h,h,h,B.w(h,h,A.b3,h,h,h,h,h,11.5,h,A.x,h,1.4,h,h,h,h,h,h),h,h),A.f,h,h,new B.z(A.aG,h,h,new B.bA(j,j,j,j),h,h,A.j),h,h,h,h,E.uY,h,h,h)],a0))}l=B.a([new B.Q(E.Op,B.K(k,A.i,A.e,A.h,0,h,h),h)],a0)
for(k=n.length,i=0;i<n.length;n.length===k||(0,B.S)(n),++i){++q
l.push(new C.O7(n[i],a3,q,!1,h))}A.c.t(a1,l)}}return a1},
b0A(d,e,f){var x,w,v,u=null,t=d.a,s=F.dC[A.m.am(Math.abs(t),5)],r=e?s.gl_(0):u,q=e?u:A.d,p=B.u(22),o=e?B.a([new B.aH(0,A.G,s.a.N(0.32),A.c_,18)],y.V):C.D0(0.05),n=y.p,m=B.a([],n)
if(e)A.c.t(m,B.a([B.eA(0,B.dE(u,u,u,new C.GW(u),A.ah),0),B.cw(u,B.dE(u,u,u,f.z.$2(f.Q.$2(t,d.c),0.3),A.ah),32,u,10,u,12,72)],n))
x=e?A.d.N(0.22):s.d
w=B.u(10)
v=""+d.b
x=B.v(A.r,B.d(v,u,u,u,B.w(u,u,e?A.d:s.c,u,u,u,u,u,15,u,A.a6,u,1.2,u,u,u,u,u,u),u,u),A.f,u,u,new B.z(x,u,u,w,u,u,A.j),u,30,u,u,u,u,u,30)
w=d.c
if(w.length===0)w=f.w+" "+v
w=B.d(w,2,A.L,u,B.w(u,u,e?A.d:A.aC,u,u,u,u,u,13,u,A.n,u,1.35,u,u,u,u,u,u),u,u)
v=d.gPZ(0)
m.push(new B.Q(A.d7,B.G(B.a([x,A.bn,w,B.d(""+v+" \u0642\u0627\u0646\u0648\u0646",u,u,u,B.w(u,u,e?A.d.N(0.85):A.bi,u,u,u,u,u,11.5,u,A.x,u,1.4,u,u,u,u,u,u),u,u)],n),A.q,u,A.e,A.h),u))
return B.cd(!0,u,B.c8(u,B.fi(u,B.bv(A.a3,m,A.o,A.a8,u),A.X,u,A.a1,new B.z(q,u,u,p,o,r,A.j),A.eC,u,u,u,u,u,u,156),A.J,!1,new B.cv("stats-unit-"+t,y.O),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.bTm(this,d),u,u,u,u,u,u,!1,A.ag),!0,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,A.ad,u)},
b1b(d){var x,w,v,u,t,s,r=y.p,q=B.a([],r)
for(x=d.d,w=x.length,v=Math.abs(0),u=0;u<x.length;x.length===w||(0,B.S)(x),++u){t=x[u]
s=A.m.am(v,5)
A.c.t(q,B.a([C.cp9(t,F.dC[s]),new C.Oc(t,F.dC[s],!0,null)],r))}return q},
aXh(d,e){var x
if(e===0)return"\u0639\u0627\u0645\u0629"
x=d.T0(e)
return x==null||x.c.length===0?d.r.w+" "+e:x.c},
aXk(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.aV(y.S)
for(x=d.f,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v)i.F(0,x[v].e)
u=B.X(i,i.$ti.c)
A.c.cY(u,new C.bT7())
t=A.c.n(u,k.z)?k.z:-1
i=B.a([],y.W)
for(w=x.length,s=t===-1,r=!s,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){q=x[v]
if(!r||q.e===t)i.push(q)}w=y.p
r=B.a([C.lY("\u0623\u0633\u0626\u0644\u0629 \u0646\u0638\u0631\u064a\u0629 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641",k.b1S(i,i.length!==0&&A.c.d6(i,new C.bT8(k))))],w)
if(u.length>1){w=B.a([k.afg("\u0627\u0644\u0643\u0644",x.length,-1,s,F.dC[A.m.am(Math.abs(0),5)])],w)
for(s=u.length,p=B.a8(x).i("aw<1>"),v=0;v<u.length;u.length===s||(0,B.S)(u),++v){o=u[v]
n=k.aXh(d,o)
m=new B.aw(x,new C.bT9(o),p).gC(0)
l=d.T0(o)
l=l==null?j:l.a
w.push(k.afg(n,m,o,t===o,F.dC[A.m.am(Math.abs(l==null?0:l),5)]))}r.push(B.aF(B.dP(w,A.f,j,D.bMv,j,j,j,A.b8,!1),42,j))}r.push(A.T)
for(x=i.length,v=0;v<i.length;i.length===x||(0,B.S)(i),++v)r.push(k.ahp(d,i[v]))
return r},
ahp(d,e){return new C.al7(e,d,this.y.n(0,e.a),new C.bT6(this,e),null)},
b1S(d,e){var x,w,v,u,t,s,r=null
if(d.length===0)return A.oT
x=F.dC[A.m.am(Math.abs(0),5)]
w=e?"\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0643\u0644":"\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0643\u0644"
v=B.u(999)
u=B.u(999)
t=e?A.w5:A.w4
s=x.c
return B.cd(!0,r,B.bS(!1,A.K,!0,v,B.aN(!1,u,!0,new B.Q(A.AR,B.K(B.a([B.aq(t,s,r,15),A.as,B.d(w,r,r,r,B.w(r,r,s,r,r,r,r,r,12.5,r,A.n,r,1.3,r,r,r,r,r,r),r,r)],y.p),A.i,A.e,A.B,0,r,r),r),r,!0,r,r,r,r,D.bME,r,r,r,r,r,new C.bTk(this,e,d),r,r,r,r,r,r,r),A.f,x.d,0,r,r,r,r,r,A.al),!0,r,r,!0,r,!1,r,r,r,r,r,r,r,r,r,w,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.ad,r)},
afg(d,e,f,g,h){var x=null,w=""+e,v=g?h.gl_(0):x,u=g?x:A.d,t=B.u(999),s=g?B.a([new B.aH(0,A.G,h.a.N(0.28),A.kx,12)],y.V):C.D0(0.05),r=B.d(d,x,x,x,B.w(x,x,g?A.d:A.aC,x,x,x,x,x,13,x,A.n,x,1.3,x,x,x,x,x,x),x,x)
return new B.Q(D.aOF,B.cd(!0,x,B.c8(A.bm,B.fi(A.r,B.K(B.a([r,A.as,B.d(w,x,x,x,B.w(x,x,g?A.d.N(0.85):A.bi,x,x,x,x,x,12,x,A.n,x,1.3,x,x,x,x,x,x),x,x)],y.p),A.i,A.e,A.B,0,x,x),A.f,x,A.a1,new B.z(u,x,x,t,s,v,A.j),A.K,x,x,x,x,A.fu,x,x),A.J,!1,new B.cv("stats-qunit-"+f,y.O),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bT4(this,f),x,x,x,x,x,x,!1,A.ag),!0,x,x,!0,x,!1,x,x,x,x,x,x,x,x,x,d+" "+w,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,A.ad,x),x)},
aWu(d){var x,w,v,u=B.a([C.lY("\u0645\u0633\u0627\u0626\u0644 \u0645\u062d\u0644\u0648\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641",null)],y.p)
for(x=d.e,w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v)u.push(new C.Oa(x[v],d,!1,null))
return u},
b0y(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=C.d5R(this.w),i=B.a([],y.v)
for(x=e.gvc(),w=x.length,v=0;v<x.length;x.length===w||(0,B.S)(x),++v){u=x[v]
if(C.d5M(u,j))i.push(u)}x=B.a([],y.t)
for(w=e.d,t=w.length,v=0;v<w.length;w.length===t||(0,B.S)(w),++v){s=w[v]
if(C.d5T(s,j))x.push(s)}w=B.a([],y.d)
for(t=e.e,r=t.length,v=0;v<t.length;t.length===r||(0,B.S)(t),++v){q=t[v]
if(C.d5P(q,j))w.push(q)}t=B.a([],y.W)
for(r=e.f,p=r.length,v=0;v<r.length;r.length===p||(0,B.S)(r),++v){u=r[v]
if(C.d5S(u,j))t.push(u)}o=i.length===0&&x.length===0&&w.length===0&&t.length===0
r=y.p
p=B.a([],r)
if(o)p.push(C.lY("\u0645\u0627 \u0644\u0642\u064a\u0646\u0627 \u0634\u064a \u0628\u0647\u0627\u0644\u0627\u0633\u0645",k))
n=i.length
if(n!==0){n=B.a([C.lY("\u0644\u0642\u064a\u0646\u0627 "+n+" \u0642\u0627\u0646\u0648\u0646",k)],r)
for(m=i.length,v=0;v<i.length;i.length===m||(0,B.S)(i),++v)n.push(new C.O7(i[v],e,k,!0,k))
A.c.t(p,n)}if(x.length!==0){i=B.a([C.lY("\u0628\u0627\u0644\u062c\u062f\u0627\u0648\u0644",k)],r)
for(n=x.length,m=Math.abs(0),v=0;v<x.length;x.length===n||(0,B.S)(x),++v){s=x[v]
l=A.m.am(m,5)
A.c.t(i,B.a([C.cp9(s,F.dC[l]),new C.Oc(s,F.dC[l],!0,k)],r))}A.c.t(p,i)}if(t.length!==0){i=B.a([C.lY("\u0628\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0646\u0638\u0631\u064a\u0629",k)],r)
for(x=t.length,v=0;v<t.length;t.length===x||(0,B.S)(t),++v)i.push(this.ahp(e,t[v]))
A.c.t(p,i)}if(w.length!==0){i=B.a([C.lY("\u0628\u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629",k)],r)
for(x=w.length,v=0;v<w.length;w.length===x||(0,B.S)(w),++v)i.push(new C.Oa(w[v],e,!1,k))
A.c.t(p,i)}return B.G(p,A.H,k,A.e,A.h)}}
C.O7.prototype={
B(a1){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=F.dC[A.m.am(Math.abs(k.z),5)],i=B.u(22),h=C.D0(0.05),g=B.u(22),f=B.u(22),e=y.p,d=B.a([],e),a0=m.e
if(a0!=null){x=B.u(9)
A.c.t(d,B.a([B.v(A.r,B.d(B.f(a0),l,l,l,B.w(l,l,j.c,l,l,l,l,l,12.5,l,A.a6,l,1.2,l,l,l,l,l,l),l,l),A.f,l,l,new B.z(j.d,l,l,x,l,l,A.j),l,26,l,l,l,l,l,26),A.R],e))}a0=B.a([],e)
if(m.d.r.ax&&k.gye().length!==0)a0.push(B.d(k.gye(),l,l,l,B.w(l,l,j.c,l,l,l,l,l,11.5,l,A.n,l,1.4,l,l,l,l,l,l),l,l))
x=k.b
if(x.length===0)x="\u0642\u0627\u0646\u0648\u0646"
a0.push(C.hx(x,B.w(l,l,A.aC,l,l,l,l,l,15,l,A.n,l,1.4,l,l,l,l,l,l),l,l))
if(m.f&&k.at.length!==0)a0.push(C.hx(k.at,B.w(l,l,A.bi,l,l,l,l,l,11.5,l,A.x,l,1.4,l,l,l,l,l,l),l,l))
d.push(B.a_(B.G(a0,A.q,l,A.e,A.h),1,l))
d.push(A.O)
a0=j.c
d.push(B.aq(A.da,a0,l,18))
d=B.K(d,A.i,A.e,A.h,0,l,l)
x=B.u(16)
w=B.a([],e)
v=k.c
if(v.length!==0)w.push(C.cj0(v,A.r,A.aC,21))
else w.push(C.hx(k.d,B.w(l,l,A.aC,l,l,l,l,l,15,l,A.x,l,1.85,l,l,l,l,l,l),l,l))
for(v=k.w,u=v.length,t=0;t<v.length;v.length===u||(0,B.S)(v),++t)A.c.t(w,B.a([A.Q,C.cyJ(v[t],j,16,A.b3)],e))
d=B.a([d,A.x7,B.v(l,B.G(w,A.i,l,A.e,A.h),A.f,l,l,new B.z(j.d,l,l,x,l,l,A.j),l,l,l,l,E.NK,l,l,l)],e)
x=k.x
if(x.length!==0){w=B.a([],e)
for(v=B.dM(x,0,B.fs(3,"count",y.S),B.a8(x).c),u=v.$ti,v=new B.c6(v,v.gC(0),u.i("c6<ar.E>")),u=u.i("ar.E");v.A();){s=v.d
if(s==null)s=u.a(s)
r=new B.b0(10,10)
q=new B.be(E.lE,1,A.V,-1)
p=B.a([],e)
o=s.a
n=o.length!==0
if(n)p.push(new B.cn(A.r,l,l,new B.kn(A.be,A.r,A.f,G.hU(o,a0,13),l),l))
if(n&&s.b.length!==0)p.push(A.as)
s=s.b
if(s.length!==0)p.push(new B.d6(1,A.b4,B.d(C.cTr(s),1,A.L,l,B.w(l,l,A.b3,l,l,l,l,l,12,l,A.x,l,1.4,l,l,l,l,l,l),l,l),l))
w.push(B.v(l,B.K(p,A.i,A.e,A.B,0,l,l),A.f,l,l,new B.z(A.cb,l,new B.dC(q,q,q,q),new B.bA(r,r,r,r),l,l,A.j),l,l,l,l,H.lS,l,l,l))}a0=x.length
if(a0>3){x=B.u(10)
w.push(B.v(l,B.d("+"+(a0-3),l,l,l,B.w(l,l,A.bi,l,l,l,l,l,12,l,A.n,l,1.4,l,l,l,l,l,l),l,l),A.f,l,l,new B.z(A.cb,l,l,x,l,l,A.j),l,l,l,l,H.lS,l,l,l))}A.c.t(d,B.a([A.Q,B.e3(A.aZ,w,A.bs,6,6,l)],e))}return new B.Q(A.cV,B.v(l,B.bS(!1,A.K,!0,g,B.aN(!1,f,!0,new B.Q(E.AT,B.G(d,A.H,l,A.e,A.h),l),l,!0,l,l,l,l,l,l,l,l,l,l,new C.b9P(m,a1),l,l,l,l,l,l,l),A.f,A.E,0,l,l,l,l,l,A.al),A.f,l,l,new B.z(A.d,l,l,i,h,l,A.j),l,l,l,l,l,l,l,l),new B.cv("stats-law-"+k.a,y.O))}}
C.a_a.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=F.dC[A.m.am(Math.abs(k.z),5)],i=m.d,h=i.bgx(k.a),g=m.b0v(0,d,j),f=y.p,e=B.a([],f)
if(i.r.ay)A.c.t(e,m.aDN(d,j))
x=k.x
if(x.length!==0){w=C.lY("\u0634\u0648 \u0628\u062a\u0639\u0646\u064a \u0627\u0644\u0631\u0645\u0648\u0632",l)
v=B.a([],f)
for(u=j.c,t=j.d,s=0;r=x.length,s<r;++s){q=x[s]
r=s===r-1?l:E.HQ
p=new B.b0(14,14)
o=q.a
o=o.length===0?A.oT:new B.kn(A.be,A.r,A.f,new B.cn(A.r,l,l,new B.kn(A.be,A.r,A.f,G.hU(o,u,19),l),l),l)
p=B.v(A.r,o,A.f,l,D.anA,new B.z(t,l,l,new B.bA(p,p,p,p),l,l,A.j),l,46,l,l,A.ia,l,l,l)
o=q.b
if(o.length===0)o="\u2014"
o=B.a([p,A.aK,new B.cV(1,A.aP,C.hx(o,B.w(l,l,A.aC,l,l,l,l,l,14.5,l,A.x,l,1.6,l,l,l,l,l,l),l,l),l)],f)
q=q.c
if(q.length!==0){p=new B.b0(10,10)
A.c.t(o,B.a([A.O,B.v(l,C.hx(q,B.w(l,l,A.b3,l,l,l,l,l,13,l,A.x,l,1.5,l,l,l,l,l,l),l,l),A.f,l,D.ant,new B.z(A.aG,l,l,new B.bA(p,p,p,p),l,l,A.j),l,l,l,l,A.hs,l,l,l)],f))}v.push(B.v(l,B.K(o,A.i,A.e,A.h,0,l,l),A.f,l,l,new B.z(l,l,r,l,l,l,A.j),l,l,l,l,A.uW,l,l,l))}A.c.t(e,B.a([w,C.aD4(B.G(v,A.i,l,A.e,A.h),O.v1)],f))}x=k.c.length===0
if((x&&k.d.length!==0?"":k.d).length!==0||k.e.length!==0||k.f.length!==0){w=C.lY("\u0627\u0644\u0634\u0631\u062d",l)
v=B.a([],f)
if((x&&k.d.length!==0?"":k.d).length!==0){u=x&&k.d.length!==0?"":k.d
v.push(C.hx(u,B.w(l,l,A.aC,l,l,l,l,l,15,l,A.u,l,1.85,l,l,l,l,l,l),l,l))}u=k.e
t=u.length!==0
if(t){r=B.a([],f)
if((x&&k.d.length!==0?"":k.d).length!==0)r.push(A.T)
r.push(m.adJ(E.r1,"\u0645\u0646\u0633\u062a\u0639\u0645\u0644\u0647",u,j.d,l,j.c,A.b3))
A.c.t(v,r)}u=k.f
if(u.length!==0){r=B.a([],f)
if((x&&k.d.length!==0?"":k.d).length!==0||t)r.push(A.Q)
r.push(m.adJ(N.D9,"\u0645\u0644\u0627\u062d\u0638\u0629",u,A.ef,A.nl,A.fn,A.i2))
A.c.t(v,r)}A.c.t(e,B.a([w,C.aD4(B.G(v,A.H,l,A.e,A.h),A.bq)],f))}if(h.length!==0){x=B.a([C.lY("\u0628\u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629",l)],f)
for(w=h.length,n=0;n<h.length;h.length===w||(0,B.S)(h),++n)x.push(new C.Oa(h[n],i,!0,l))
A.c.t(e,x)}k=k.y
if(k>0){i=i.b
i=i.length===0?"":" \xb7 "+i
e.push(new B.Q(D.aRc,B.K(B.a([D.Q0,A.de,B.a_(B.d("\u0645\u0646 \u0627\u0644\u0645\u0644\u062e\u0635\u060c \u0635\u0641\u062d\u0629 "+k+i,l,l,l,B.w(l,l,A.bi,l,l,l,l,l,12,l,A.u,l,1.7,l,l,l,l,l,l),l,l),1,l)],f),A.i,A.e,A.h,0,l,l),l))}return B.cs(l,I.nw,B.dP(B.a([g,B.b7(new B.d2(D.tm,new B.Q(E.AU,B.G(e,A.H,l,A.e,A.h),l),l),l,l)],f),A.o,l,l,A.ac,l,l,A.S,!1),l,l,l)},
aDN(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=this.c,a6=this.d.bdu(a5)
if(a6==null||a6.d.length<2)return A.qK
x=new C.b9S(a6)
w=a6.c
w=w.length===0?"\u0642\u0648\u0627\u0646\u064a\u0646 \u0647\u0627\u0644\u062f\u0631\u0633":"\u0642\u0648\u0627\u0646\u064a\u0646 \xab"+w+"\xbb"
w=C.hx(w,B.w(a4,a4,A.bi,a4,a4,a4,a4,a4,12.5,a4,A.n,a4,1.5,a4,a4,a4,a4,a4,a4),a4,a4)
v=y.p
u=B.a([],v)
for(t=a6.d,s=t.length,r=a8.c,a5=a5.a,q=y.O,p=a8.a,o=a8.b,n=y.X,m=y.V,l=0;l<t.length;t.length===s||(0,B.S)(t),++l){k=t[l]
j=k.a
i=j===a5
h=x.$1(k)
g=i?a4:new C.b9R(this,a7,k)
f=i?new B.bB(A.bN,A.cl,A.Z,B.a([p,o],n),a4,a4):a4
e=i?a4:A.d
d=new B.b0(999,999)
if(i)a0=a4
else{a1=new B.be(E.lE,1,A.V,-1)
a0=new B.dC(a1,a1,a1,a1)}a2=i?B.a([new B.aH(0,A.G,p.N(0.25),A.bE,10)],m):a4
a3=x.$1(k)
j=B.c8(A.bm,B.v(a4,C.hx(a3,B.w(a4,a4,i?A.d:r,a4,a4,a4,a4,a4,12.5,a4,A.n,a4,1.4,a4,a4,a4,a4,a4,a4),a4,a4),A.f,a4,a4,new B.z(e,a4,a0,new B.bA(d,d,d,d),a2,f,A.j),a4,a4,a4,a4,A.v0,a4,a4,a4),A.J,!1,new B.cv("stats-chain-"+j,q),a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,g,a4,a4,a4,a4,a4,a4,!1,A.ag)
u.push(new B.rt(new B.NF(a4,a4,a4,a4,a4,i,!0,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,h,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,A.ad,a4),!0,!1,a4,!0,!1,j,a4))}return B.a([new B.Q(D.aRb,w,a4),B.e3(A.aZ,u,A.bs,8,8,a4)],v)},
b0v(d,e,f){var x,w,v,u,t=null,s=this.d.r,r=this.c,q=s.Q.$2(r.z,r.as),p=y.p,o=B.a([C.cp7(A.d8,new C.b9U(e),"\u0631\u062c\u0648\u0639"),A.bn],p),n=r.y
if(n>0)o.push(C.aD6(n,!0))
o=B.K(o,A.i,A.e,A.h,0,t,t)
n=B.a([s.w+" "+r.Q],y.s)
x=r.at
if(x.length!==0)n.push(x)
n=B.d(A.c.aE(n," \xb7 "),t,t,t,B.w(t,t,A.d.N(0.8),t,t,t,t,t,12.5,t,A.x,t,1.5,t,t,t,t,t,t),t,t)
x=r.b
if(x.length===0)x="\u0642\u0627\u0646\u0648\u0646"
x=B.a([o,A.au,n,C.hx(x,B.w(t,t,A.d,t,t,t,t,t,24,t,A.a6,t,1.35,t,t,t,t,t,t),A.d,t)],p)
if(r.gye().length!==0)A.c.t(x,B.a([A.a2,new B.cn(A.b7,t,t,C.cCb(r.gye(),A.d.N(0.18),A.d,s.at),t)],p))
x.push(A.ai)
o=B.u(22)
n=B.a([new B.aH(0,A.G,A.p.N(0.12),A.c_,20)],y.V)
w=B.a([],p)
v=r.c
if(v.length!==0)w.push(C.cj0(v,A.r,A.aC,29))
else{v=r.d
if(v.length===0)v="\u2014"
w.push(C.hx(v,B.w(t,t,A.aC,t,t,t,t,t,17,t,A.x,t,1.9,t,t,t,t,t,t),t,t))}for(r=r.w,v=r.length,u=0;u<r.length;r.length===v||(0,B.S)(r),++u)A.c.t(w,B.a([A.au,E.Nm,A.au,C.cyJ(r[u],f,22,A.aC)],p))
x.push(B.v(t,B.G(w,A.i,t,A.e,A.h),A.f,t,t,new B.z(A.d,t,t,o,n,t,A.j),t,t,t,t,K.v4,t,t,t))
return C.cpa(e,64,B.G(x,A.H,t,A.e,A.h),q,D.bpX,s.z,f)},
adJ(d,e,f,g,h,i,j){var x=null,w=B.u(14),v=h==null?x:B.ag(h,1),u=y.p
return B.v(x,B.K(B.a([new B.Q(A.f1,B.aq(d,i,x,17),x),A.eL,B.a_(B.G(B.a([B.d(e,x,x,x,B.w(x,x,i,x,x,x,x,x,12.5,x,A.n,x,1.5,x,x,x,x,x,x),x,x),C.hx(f,B.w(x,x,j,x,x,x,x,x,13.5,x,A.u,x,1.7,x,x,x,x,x,x),x,x)],u),A.q,x,A.e,A.h),1,x)],u),A.q,A.e,A.h,0,x,x),A.f,x,x,new B.z(g,x,v,w,x,x,A.j),x,x,x,x,A.ht,x,x,x)}}
C.Oc.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=y.w,p=B.bh(d,A.e3,q).w.a.a<720
if(s.e&&p){q=B.a([],y.p)
for(x=s.c,w=x.f,v=w.length,u=0;u<w.length;w.length===v||(0,B.S)(w),++u)q.push(s.aYV(w[u]))
x=x.c
if(x.length!==0)q.push(s.aho(x))
return B.G(q,A.H,r,A.e,A.h)}x=s.c
w=A.c.ef(s.ajw(x.gj2(0)),0,new C.ba2())
q=B.bh(d,A.e3,q).w
v=y.p
t=B.a([],v)
if(w>q.a.a-32)t.push(new B.Q(D.aR9,B.K(B.a([D.aYk,A.as,B.a_(B.d("\u0627\u0633\u062d\u0628 \u0627\u0644\u062c\u062f\u0648\u0644 \u0644\u062a\u0634\u0648\u0641 \u0643\u0644 \u0627\u0644\u0623\u0639\u0645\u062f\u0629 ("+x.gj2(0)+" \u0639\u0645\u0648\u062f)",1,A.L,r,B.w(r,r,A.bi,r,r,r,r,r,11.5,r,A.x,r,1.5,r,r,r,r,r,r),r,r),1,r)],v),A.i,A.e,A.h,0,r,r),r))
q=B.u(18)
w=C.D0(0.05)
t.push(B.v(r,B.eh(s.aKB(),r,r,r,!1,A.b8),A.X,r,r,new B.z(A.d,r,r,q,w,r,A.j),r,r,r,A.c9,r,r,r,r))
q=x.c
if(q.length!==0)t.push(s.aho(q))
return B.G(t,A.H,r,A.e,A.h)},
aYV(d){var x,w,v,u,t,s,r,q,p=null,o=J.t(d),n=o.gab(d)?"":J.RZ(o.gS(d)),m=B.aI("^\\$[^$]+\\$$",!0,!1,!1),l=m.b.test(n)
m=this.c
x=m.gj2(0)
w=y.p
v=B.a([],w)
for(m=m.e,u=1;u<x;++u)if(u<o.gC(d)&&A.b.u(o.h(d,u)).length!==0){t=B.a([],w)
if(u<m.length&&A.b.u(m[u]).length!==0)A.c.t(t,B.a([new B.bY(100,p,C.hx(m[u],B.w(p,p,A.bi,p,p,p,p,p,11.5,p,A.n,p,1.9,p,p,p,p,p,p),p,p),p),A.as],w))
t.push(new B.cV(1,A.aP,C.cp6(o.h(d,u),B.w(p,p,A.aC,p,p,p,p,p,13.5,p,A.u,p,1.75,p,p,p,p,p,p),p),p))
v.push(new B.Q(A.qj,B.K(t,A.q,A.e,A.h,0,p,p),p))}o=B.u(18)
t=C.D0(0.05)
s=B.a([],w)
r=n.length
if(r!==0){q=this.d
w=B.a([],w)
if(m.length!==0&&A.b.u(A.c.gS(m)).length!==0)w.push(C.hx(A.c.gS(m),B.w(p,p,A.bi,p,p,p,p,p,11,p,A.n,p,1.5,p,p,p,p,p,p),p,p))
w.push(l?C.cj0(A.b.Z(n,1,r-1),A.r,A.aC,19):C.hx(n,B.w(p,p,q.c,p,p,p,p,p,14.5,p,A.n,p,1.5,p,p,p,p,p,p),p,p))
s.push(B.v(p,B.G(w,A.H,p,A.e,A.h),A.f,q.d,p,p,p,p,p,p,A.d7,p,p,p))}if(v.length!==0)s.push(new B.Q(E.NS,B.G(v,A.i,p,A.e,A.h),p))
return B.v(p,B.G(s,A.H,p,A.e,A.h),A.X,p,p,new B.z(A.d,p,p,o,t,p,A.j),p,p,p,A.c9,p,p,p,p)},
ajw(d){var x,w,v,u,t=B.a([],y.n)
for(x=this.c,w=x.f,x=x.e,v=0;v<d;++v){u=v<x.length?Math.min(C.cwj(x[v]),120):0
t.push(A.k.b8(Math.max(u,A.c.ef(w,0,new C.ba1(v)))+26,64,250))}return t},
aKB(){var x,w,v,u,t,s,r,q,p=this.c,o=p.gj2(0)
if(o===0)return A.oT
x=p.e
w=A.c.dt(x,new C.ba_())
v=this.ajw(o)
u=new C.ba0(this,o)
t=B.P(y.S,y.l)
for(s=0;s<o;++s)t.q(0,s,new C.adh(v[s]))
r=B.a([],y.T)
if(w)r.push(u.$2$head(x,!0))
for(p=p.f,q=0;q<p.length;++q)r.push(u.$2$odd(p[q],(q&1)===1))
return G.cwx(D.by_,r,t,E.apN,E.Fh)},
aho(d){var x=null
return new B.Q(D.aR0,B.K(B.a([D.bjv,A.O,B.a_(C.hx(d,B.w(x,x,A.b3,x,x,x,x,x,12.5,x,A.u,x,1.7,x,x,x,x,x,x),x,x),1,x)],y.p),A.q,A.e,A.h,0,x,x),x)}}
C.Oa.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o=null,n=F.dC[A.m.am(Math.abs(0),5)],m=this.c,l=B.a([],y.s),k=m.z.length
if(k!==0)l.push(""+k+" \u062e\u0637\u0648\u0629")
k=m.y.length
if(k!==0)l.push(""+k+" \u062c\u062f\u0648\u0644")
k=m.w.length
if(k!==0)l.push(""+k+" \u0646\u0627\u062a\u062c")
x=A.c.aE(l," \xb7 ")
l=B.u(22)
k=C.D0(0.05)
w=B.u(22)
v=B.u(22)
u=B.u(11)
t=n.c
u=B.v(A.r,B.d(""+(m.e+1),o,o,o,B.w(o,o,t,o,o,o,o,o,14,o,A.a6,o,1.2,o,o,o,o,o,o),o,o),A.f,o,o,new B.z(n.d,o,o,u,o,o,A.j),o,34,o,o,o,o,o,34)
s=y.p
r=B.a([C.hx(m.gvb(0),B.w(o,o,A.aC,o,o,o,o,o,15,o,A.n,o,1.45,o,o,o,o,o,o),o,o)],s)
if(!this.e&&m.c.length!==0)A.c.t(r,B.a([A.cG,C.hx(m.c,B.w(o,o,A.b3,o,o,o,o,o,13,o,A.u,o,1.65,o,o,o,o,o,o),o,2)],s))
q=x.length===0
if(!q||m.d>0){p=B.a([],s)
q=!q
if(q)p.push(new B.d6(1,A.b4,B.d(x,o,o,o,B.w(o,o,A.bi,o,o,o,o,o,11.5,o,A.x,o,1.4,o,o,o,o,o,o),o,o),o))
if(q&&m.d>0)p.push(A.O)
q=m.d
if(q>0)p.push(C.aD6(q,!1))
A.c.t(r,B.a([A.a7,B.K(p,A.i,A.e,A.h,0,o,o)],s))}return new B.Q(A.cV,B.v(o,B.bS(!1,A.K,!0,w,B.aN(!1,v,!0,new B.Q(A.qn,B.K(B.a([u,U.mE,B.a_(B.G(r,A.q,o,A.e,A.h),1,o),A.as,new B.Q(H.qi,B.aq(A.da,t,o,18),o)],s),A.q,A.e,A.h,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,new C.b9W(this,d,m),o,o,o,o,o,o,o),A.f,A.E,0,o,o,o,o,o,A.al),A.f,o,o,new B.z(A.d,o,o,l,k,o,A.j),o,o,o,o,o,o,o,o),new B.cv("stats-problem-"+m.a,y.O))}}
C.al6.prototype={
B(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=F.dC[A.m.am(Math.abs(0),5)],g=this.c,f=this.d,e=f.bdn(g),d=f.r,a0=g.f,a1=f.T0(a0)
a1=a1==null?i:a1.c
if(a1==null)a1=""
a1=d.as.$2(a0,a1)
a0=y.p
x=B.a([C.cp7(A.d8,new C.b9X(a2),"\u0631\u062c\u0648\u0639"),A.bn],a0)
w=g.d
if(w>0)x.push(C.aD6(w,!0))
d=C.cpa(a2,60,B.G(B.a([B.K(x,A.i,A.e,A.h,0,i,i),A.au,B.d("\u0645\u0633\u0623\u0644\u0629 \u0645\u062d\u0644\u0648\u0644\u0629 "+(g.e+1)+" \u0645\u0646 "+f.e.length,i,i,i,B.w(i,i,A.d.N(0.8),i,i,i,i,i,12.5,i,A.x,i,1.5,i,i,i,i,i,i),i,i),C.hx(g.gvb(0),B.w(i,i,A.d,i,i,i,i,i,24,i,A.a6,i,1.35,i,i,i,i,i,i),A.d,i)],a0),A.H,i,A.e,A.h),a1,D.bpW,d.z,h)
a1=B.a([],a0)
x=g.c
if(x.length!==0)A.c.t(a1,B.a([C.lY("\u0646\u0635 \u0627\u0644\u0645\u0633\u0623\u0644\u0629",i),C.aD4(C.hx(x,B.w(i,i,A.aC,i,i,i,i,i,15,i,A.u,i,1.9,i,i,i,i,i,i),i,i),A.bq)],a0))
x=g.r
if(x.length!==0){w=C.lY("\u0627\u0644\u0645\u0637\u0644\u0648\u0628",i)
v=B.a([],a0)
for(u=h.d,t=h.c,s=0;s<x.length;s=q){r=new B.b0(8,8)
q=s+1
v.push(new B.Q(A.qj,B.K(B.a([B.v(A.r,B.d(""+q,i,i,i,B.w(i,i,t,i,i,i,i,i,12,i,A.a6,i,1.2,i,i,i,i,i,i),i,i),A.f,i,i,new B.z(u,i,i,new B.bA(r,r,r,r),i,i,A.j),i,24,i,A.f1,i,i,i,24),A.R,new B.cV(1,A.aP,C.hx(x[s],B.w(i,i,A.aC,i,i,i,i,i,14.5,i,A.u,i,1.8,i,i,i,i,i,i),i,i),i)],a0),A.q,A.e,A.h,0,i,i),i))}A.c.t(a1,B.a([w,C.aD4(B.G(v,A.i,i,A.e,A.h),A.hv)],a0))}x=g.y
w=x.length
if(w!==0){v=B.a([C.lY(w>1?"\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u062d\u0644":"\u062c\u062f\u0648\u0644 \u0627\u0644\u062d\u0644",i)],a0)
for(w=x.length,p=0;p<x.length;x.length===w||(0,B.S)(x),++p){o=x[p]
u=B.a([],a0)
if(o.b.length!==0)u.push(C.cp9(o,h))
u.push(new C.Oc(o,h,!1,i))
A.c.t(v,u)}A.c.t(a1,v)}x=g.z
if(x.length!==0){w=C.lY("\u0627\u0644\u062d\u0644 \u062e\u0637\u0648\u0629 \u062e\u0637\u0648\u0629",i)
v=B.a([],a0)
for(u=h.d,t=h.c,s=0;r=x.length,s<r;s=q){q=s+1
n=x[s]
r=s===r-1
m=B.a([],a0)
if(!r)m.push(new B.Xh(13,30,i,0,i,B.v(i,i,A.f,E.lE,i,i,i,i,i,i,i,i,i,2),i))
r=r?8:18
l=new B.b0(10,10)
l=B.v(A.r,B.d(""+q,i,i,i,B.w(i,i,t,i,i,i,i,i,13,i,A.a6,i,1.2,i,i,i,i,i,i),i,i),A.f,i,i,new B.z(u,i,i,new B.bA(l,l,l,l),i,i,A.j),i,28,i,i,i,i,i,28)
k=B.a([],a0)
j=n.a
if(j.length!==0)k.push(C.hx(j,B.w(i,i,A.b3,i,i,i,i,i,13.5,i,A.n,i,2,i,i,i,i,i,i),i,i))
j=n.b
if(j.length!==0)k.push(C.hx(j,B.w(i,i,A.aC,i,i,i,i,i,14.5,i,A.u,i,1.85,i,i,i,i,i,i),i,i))
n=n.c
if(n.length!==0){j=new B.b0(12,12)
k.push(new B.Q(A.qj,B.v(i,new B.cn(A.aL,i,i,new B.kn(A.be,A.r,A.f,G.hU(n,A.aC,18),i),i),A.f,i,i,new B.z(u,i,i,new B.bA(j,j,j,j),i,i,A.j),i,i,i,i,A.dz,i,i,i),i))}m.push(new B.Q(new B.O(0,0,0,r),B.K(B.a([l,A.aK,new B.cV(1,A.aP,B.G(k,A.H,i,A.e,A.h),i)],a0),A.q,A.e,A.h,0,i,i),i))
v.push(new B.iW(A.a3,i,A.a8,A.o,m,i))}A.c.t(a1,B.a([w,C.aD4(B.G(v,A.i,i,A.e,A.h),A.NQ)],a0))}x=g.w
if(x.length!==0)A.c.t(a1,B.a([C.lY("\u0627\u0644\u0646\u0648\u0627\u062a\u062c",i),this.aBr(x,h)],a0))
if(e.length!==0){x=B.a([C.lY("\u0627\u0644\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0633\u062a\u0639\u0645\u0644\u0629",i)],a0)
for(w=e.length,p=0;p<e.length;e.length===w||(0,B.S)(e),++p)x.push(new C.O7(e[p],f,i,!1,i))
A.c.t(a1,x)}return B.cs(i,I.nw,B.dP(B.a([d,B.b7(new B.d2(D.tm,new B.Q(E.AU,B.G(a1,A.H,i,A.e,A.h),i),i),i,i)],a0),A.o,i,i,A.ac,i,i,A.S,!1),i,i,i)},
aBr(d,e){var x,w,v=null,u=e.gl_(0),t=B.u(22),s=B.a([new B.aH(0,A.G,e.a.N(0.3),A.c_,18)],y.V),r=B.eA(0,B.dE(v,v,v,new C.GW(v),A.ah),0),q=y.p,p=B.a([],q)
for(x=0;x<d.length;++x){w=B.a([],q)
if(x>0)w.push(new B.mS(18,v,v,v,A.d.N(0.22),v))
w.push(C.cp6(d[x],B.w(v,v,A.d,v,v,v,v,v,16.5,v,A.n,v,1.7,v,v,v,v,v,v),A.d))
A.c.t(p,w)}return B.v(v,B.bv(A.a3,B.a([r,new B.Q(A.lP,B.G(p,A.H,v,A.e,A.h),v)],q),A.o,A.a8,v),A.X,v,v,new B.z(v,v,v,t,s,u,A.j),v,v,v,v,v,v,v,v)}}
C.al7.prototype={
B(a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.c,a5=a2.d.T0(a4.e)
a5=a5==null?a3:a5.a
x=F.dC[A.m.am(Math.abs(a5==null?0:a5),5)]
w=a4.c==="exam"?D.bpE:D.bpJ
v=a3
u=a3
t=w.b
s=w.c
u=s
v=t
a5=B.u(22)
r=a2.e
q=B.ag(r?x.a.N(0.35):A.E,1.2)
p=C.D0(0.05)
o=B.u(22)
n=B.u(22)
m=x.d
l=B.u(9)
k=x.c
j=y.p
l=B.K(B.a([B.v(A.r,B.d(""+(a4.d+1),a3,a3,a3,B.w(a3,a3,k,a3,a3,a3,a3,a3,12.5,a3,A.a6,a3,1.2,a3,a3,a3,a3,a3,a3),a3,a3),A.f,a3,a3,new B.z(m,a3,a3,l,a3,a3,A.j),a3,28,a3,a3,a3,a3,a3,28),A.R,B.a_(C.hx(a4.b,B.w(a3,a3,A.aC,a3,a3,a3,a3,a3,15,a3,A.n,a3,1.6,a3,a3,a3,a3,a3,a3),a3,a3),1,a3)],j),A.q,A.e,A.h,0,a3,a3)
i=B.a([],j)
if(a4.ga6_().length!==0)i.push(C.cCb(a4.ga6_(),w.a,v,u))
h=a4.f
if(h>0)i.push(C.aD6(h,!1))
i=B.a_(B.e3(A.aZ,i,A.bs,6,6,a3),1,a3)
h=r?a3:x.gl_(0)
g=r?m:a3
f=B.u(999)
e=r?A.w5:A.w4
e=B.aq(e,r?k:A.d,a3,15)
d=r?"\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u062c\u0648\u0627\u0628":"\u0627\u0643\u0634\u0641 \u0627\u0644\u062c\u0648\u0627\u0628"
i=B.K(B.a([i,A.O,B.v(a3,B.K(B.a([e,A.as,B.d(d,a3,a3,a3,B.w(a3,a3,r?k:A.d,a3,a3,a3,a3,a3,12.5,a3,A.n,a3,1.3,a3,a3,a3,a3,a3,a3),a3,a3)],j),A.i,A.e,A.B,0,a3,a3),A.f,a3,a3,new B.z(g,a3,a3,f,a3,h,A.j),a3,a3,a3,a3,A.qk,a3,a3,a3)],j),A.i,A.e,A.h,0,a3,a3)
if(!r)r=V.EP
else{r=B.u(16)
k=B.a([B.K(B.a([B.aq(A.WN,k,a3,15),A.as,B.d("\u0627\u0644\u062c\u0648\u0627\u0628 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641",a3,a3,a3,B.w(a3,a3,k,a3,a3,a3,a3,a3,12.5,a3,A.n,a3,1.5,a3,a3,a3,a3,a3,a3),a3,a3)],j),A.i,A.e,A.h,0,a3,a3),A.ak],j)
h=a4.r
g=h.length
if(g===0)k.push(C.hx("\u2014",B.w(a3,a3,A.aC,a3,a3,a3,a3,a3,14.5,a3,A.u,a3,1.85,a3,a3,a3,a3,a3,a3),a3,a3))
else if(a4.w&&g>1)for(f=x.a,a0=0;a0<h.length;h.length===g||(0,B.S)(h),++a0){a1=h[a0]
k.push(new B.Q(K.lN,B.K(B.a([B.v(a3,a3,A.f,a3,a3,new B.z(f,a3,a3,a3,a3,a3,A.ao),a3,6,a3,A.f0,a3,a3,a3,6),A.eL,new B.cV(1,A.aP,C.hx(a1,B.w(a3,a3,A.aC,a3,a3,a3,a3,a3,14.5,a3,A.u,a3,1.85,a3,a3,a3,a3,a3,a3),a3,a3),a3)],j),A.q,A.e,A.h,0,a3,a3),a3))}else k.push(C.hx(A.c.aE(h,"\n"),B.w(a3,a3,A.aC,a3,a3,a3,a3,a3,14.5,a3,A.u,a3,1.85,a3,a3,a3,a3,a3,a3),a3,a3))
r=new B.Q(A.f0,B.v(a3,B.G(k,A.H,a3,A.e,A.h),A.f,a3,a3,new B.z(m,a3,a3,r,a3,a3,A.j),a3,a3,a3,a3,E.NN,a3,a3,a3),a3)}return new B.Q(A.cV,B.fi(a3,B.bS(!1,A.K,!0,o,B.aN(!1,n,!0,new B.Q(E.AT,B.G(B.a([l,A.Q,i,B.yw(A.bA,r,A.a1,A.eC,a3)],j),A.H,a3,A.e,A.h),a3),a3,!0,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a2.f,a3,a3,a3,a3,a3,a3,a3),A.f,A.E,0,a3,a3,a3,a3,a3,A.al),A.f,a3,A.a1,new B.z(A.d,a3,q,a5,p,a3,A.j),A.K,a3,a3,a3,a3,a3,a3,a3),new B.cv("stats-question-"+a4.a,y.O))}}
C.al4.prototype={
aw(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=$.aG(),b0=B.aS(),b1=this.c
b0.r=A.d.N(b1).gv(0)
b0.b=A.bk
b0.c=1.6
b0.d=A.du
b0.e=A.rN
x=B.aS()
x.r=A.d.N(Math.min(1,b1*1.3)).gv(0)
switch(A.m.am(this.b,5)){case 1:w=b3.b
v=w*0.88
u=w*0.12
t=new C.b9V()
s=B.cG(a9.w)
for(a9=b3.a,w=s.e,r=v-u,q=0;q<=a9;q+=2){p=v-r*t.$1(q/a9)
if(q===0){o=new B.ew(q,p)
w.push(o)
n=s.d
if(n!=null)o.dS(n)}else{o=new B.cg(q,p)
w.push(o)
n=s.d
if(n!=null)o.dS(n)}}b2.dP(s,b0)
w=b2.a
w.eG(new B.F(0,v),new B.F(a9,v),b0)
o=a9*0.5
w.eG(new B.F(o,v),new B.F(o,u),b0)
$.aG()
m=B.aS()
m.r=A.d.N(b1*0.55).gv(0)
m.b=A.bk
m.c=1.2
for(b1=[0.34,0.66],n=w.a,l=0;l<2;++l){k=b1[l]
j=a9*k
i=t.$1(k)
h=m.cF()
n.drawLine.apply(n,[j,v,j,v-r*i,h])
h.delete()}w.cM(new B.F(o,u),3,x)
break
case 2:g=new B.Qo()
g.Lp(11)
for(a9=b3.a,b1=b3.b,w=b2.a,r=w.a,f=0;f<13;++f){o=g.vk()
h=x.cF()
r.drawCircle(a9*(0.06+0.88*f/12),b1*(0.82-0.64*f/12)+(o-0.5)*b1*0.26,2.4,h)
h.delete()}w.eG(new B.F(0,b1*0.9),new B.F(a9,b1*0.1),b0)
break
case 3:a9=b3.a*0.5
b1=b3.b*0.5
e=new B.F(a9,b1)
d=b3.ghi()*0.46
w=b2.a
w.cM(e,d,b0)
for(r=[0.07,0.2,0.4,0.17,0.16],o=w.a,a0=-1.5707963267948966,l=0;l<5;++l){k=r[l]
n=Math.cos(a0)
j=Math.sin(a0)
h=b0.cF()
o.drawLine.apply(o,[a9,b1,a9+n*d,b1+j*d,h])
h.delete()
a0+=k*2*3.141592653589793}w.cM(e,3,x)
break
case 4:a9=b3.b
a1=a9*0.5
a2=a9*0.42
a9=b3.a
a3=a9*0.3
a4=a9*0.48
a5=a9*0.7
b1=a2/2
w=a1-b1
b1=a1+b1
r=b2.a
r.cG(new B.ae(a3,w,a5,b1),b0)
r.eG(new B.F(a4,w),new B.F(a4,b1),b0)
b1=a9*0.04
r.eG(new B.F(b1,a1),new B.F(a3,a1),b0)
a9*=0.96
r.eG(new B.F(a5,a1),new B.F(a9,a1),b0)
for(a9=[b1,a9],b1=a2*0.28,w=a1-b1,b1=a1+b1,r=r.a,l=0;l<2;++l){q=a9[l]
h=b0.cF()
r.drawLine.apply(r,[q,w,q,b1,h])
h.delete()}break
default:w=b3.b
v=w*0.92
a6=b3.a/6
a7=B.cG(a9.w)
for(a9=a7.e,w=v-w*0.06,r=b2.a.a,o=a6/2,f=0;f<6;f=a8){u=v-w*D.Rq[f]
n=f*a6
a8=f+1
h=b0.cF()
r.drawRect(B.fh(new B.ae(n+1.5,u,a8*a6-1.5,v)),h)
h.delete()
n+=o
if(f===0){n=new B.ew(n,u)
a9.push(n)
j=a7.d
if(j!=null)n.dS(j)}else{n=new B.cg(n,u)
a9.push(n)
j=a7.d
if(j!=null)n.dS(j)}}b0.r=A.d.N(b1*1.2).gv(0)
b2.dP(a7,b0)
for(f=0;f<6;++f){a9=D.Rq[f]
h=x.cF()
r.drawCircle(f*a6+o,v-w*a9,2.6,h)
h.delete()}}},
cX(d){return d.b!==this.b||d.c!==this.c}}
C.GW.prototype={
aw(d,e){var x,w,v=$.aG(),u=B.aS()
u.r=A.d.N(0.1).gv(0)
v=B.cG(v.w)
v.ad(new B.ew(0,0))
x=e.a
v.ad(new B.cg(x*0.2,0))
w=e.b
v.ad(new B.cg(x*0.11,w))
v.ad(new B.cg(0,w))
v.ad(new B.kl())
d.dP(v,u)},
cX(d){return!1}}
C.al9.prototype={
mL(d){var x,w=d.b,v=B.cG($.aG().w),u=w-46
v.ad(new B.cg(0,u))
x=d.a
v.ad(new B.kw(x*0.25,w-4,x*0.5,w-26))
v.ad(new B.kw(x*0.75,u,x,w-12))
v.ad(new B.cg(x,0))
v.ad(new B.kl())
return v},
nR(d){return!1}}
var z=a.updateTypes(["V(lG)","V(Ob)","V(BK)","e(BK)","y(y,e)","y(y,O9)","V(uD)","V(xv)","V(GX)","pP(e)","e(xv)","e(uD)","~()","bG(pP)","+(e,y)(y5)","e(lG)","kA(H<e>{head:V,odd:V})","aA(o_)","lk(y,Y)"])
C.c1H.prototype={
$2(d,e){return new B.b4(B.f(d),e,y.I)},
$S:987}
C.c2q.prototype={
$1(d){return d.length===0},
$S:6}
C.ba5.prototype={
$2(d,e){return d+e.d.length},
$S:z+5}
C.ba4.prototype={
$2(d,e){var x=J.t(e)
return x.gC(e)>d?x.gC(e):d},
$S:314}
C.ba3.prototype={
$1(d){return d.length===0},
$S:6}
C.b9N.prototype={
$1(d){var x=this.a
return d===x||d.a===x.a},
$S:z+0}
C.b9I.prototype={
$1(d){return d.b.length===0},
$S:z+6}
C.b9J.prototype={
$1(d){return d.a.length===0&&d.b.length===0},
$S:z+7}
C.b9K.prototype={
$1(d){return d.gab(0)},
$S:z+1}
C.b9L.prototype={
$1(d){return d.gab(0)},
$S:z+1}
C.b9M.prototype={
$1(d){return d.a.length===0&&d.b.length===0&&d.c.length===0},
$S:z+8}
C.b9Y.prototype={
$1(d){return C.cTq(A.b1.lq(0,d,null),this.a)},
$S:z+9}
C.b9Z.prototype={
$1(d){$.cmQ.M(0,this.a.a)
throw B.m(d)},
$S:254}
C.cj5.prototype={
$1(d){return d.length!==0},
$S:6}
C.cj1.prototype={
$1(d){return d.b+" "+d.c},
$S:z+10}
C.cj2.prototype={
$1(d){return d.b},
$S:z+11}
C.cj3.prototype={
$1(d){var x,w
if(A.b.n(this.a,d))return!0
x=B.aI("[\\\\{}_^\\s$]",!0,!1,!1)
w=B.b2(d.toLowerCase(),x,"")
x=w.length
if(x===0)return!1
if(!this.b.n(0,w))x=x>=2&&A.b.n(this.c,w)
else x=!0
return x},
$S:6}
C.cj7.prototype={
$1(d){return J.Jf(d," ")},
$S:989}
C.cj8.prototype={
$1(d){var x=B.aI("[\\\\{}_^\\s$]",!0,!1,!1),w=B.b2(d.toLowerCase(),x,"")
if(!A.b.n(this.a,d))x=w.length>=2&&A.b.n(this.b,w)
else x=!0
return x},
$S:6}
C.cj6.prototype={
$1(d){var x=B.aI("[\\\\{}_^\\s$]",!0,!1,!1),w=B.b2(d.toLowerCase(),x,"")
if(!A.b.n(this.a,d))x=w.length>=2&&A.b.n(this.b,w)
else x=!0
return x},
$S:6}
C.bT0.prototype={
$0(){return this.a.e=null},
$S:0}
C.bT1.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.bT_(x,d))},
$S:z+13}
C.bT_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bT2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.bSZ(x,d))},
$S:55}
C.bSZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bSU.prototype={
$0(){var x=this.a.c
x.toString
return B.a2(x,!1).fm()},
$S:0}
C.bSV.prototype={
$1(d){return d.a>0},
$S:990}
C.bSW.prototype={
$0(){return B.a2(this.a,!1).fm()},
$S:0}
C.bTc.prototype={
$1(d){var x=this.a
return x.p(new C.bTb(x,d))},
$S:8}
C.bTb.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.bTd.prototype={
$0(){var x=this.a
return x.p(new C.bTa(x))},
$S:0}
C.bTa.prototype={
$0(){var x=this.a
x.w=""
x.x.jH(0,A.l8)},
$S:0}
C.bTg.prototype={
$1(d){var x,w=this
switch(d.a){case 0:x=new B.a6("\u0627\u0644\u0642\u0648\u0627\u0646\u064a\u0646",w.a.gvc().length)
break
case 1:x=new B.a6("\u0627\u0644\u062c\u062f\u0627\u0648\u0644",w.a.d.length)
break
case 2:x=new B.a6("\u0623\u0633\u0626\u0644\u0629 \u0646\u0638\u0631\u064a\u0629",w.a.f.length)
break
case 3:x=new B.a6("\u0645\u0633\u0627\u0626\u0644 \u0645\u062d\u0644\u0648\u0644\u0629",w.a.e.length)
break
default:x=null}return x},
$S:z+14}
C.bTf.prototype={
$0(){var x=this.a
return x.p(new C.bTe(x,this.b))},
$S:0}
C.bTe.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bSY.prototype={
$2(d,e){return A.R},
$S:51}
C.bSX.prototype={
$2(d,e){var x=this
return x.a.b0A(x.b[e],e===x.c,x.d)},
$S:63}
C.bTm.prototype={
$0(){var x=this.a
return x.p(new C.bTl(x,this.b))},
$S:0}
C.bTl.prototype={
$0(){return this.a.f=this.b.a},
$S:0}
C.bT7.prototype={
$2(d,e){var x=1073741824,w=d===0?x:d
return A.m.aR(w,e===0?x:e)},
$S:92}
C.bT8.prototype={
$1(d){return this.a.y.n(0,d.a)},
$S:z+2}
C.bT9.prototype={
$1(d){return d.e===this.a},
$S:z+2}
C.bT6.prototype={
$0(){var x=this.a
return x.p(new C.bT5(x,this.b))},
$S:0}
C.bT5.prototype={
$0(){var x=this.a.y,w=this.b.a
return x.n(0,w)?x.M(0,w):x.F(0,w)},
$S:0}
C.bTk.prototype={
$0(){var x=this.a
return x.p(new C.bTj(x,this.b,this.c))},
$S:0}
C.bTj.prototype={
$0(){var x=this.c,w=B.a8(x),v=this.a.y
if(this.b)v.JN(new B.ad(x,new C.bTh(),w.i("ad<1,ac?>")))
else v.t(0,new B.ad(x,new C.bTi(),w.i("ad<1,e>")))},
$S:0}
C.bTh.prototype={
$1(d){return d.a},
$S:z+3}
C.bTi.prototype={
$1(d){return d.a},
$S:z+3}
C.bT4.prototype={
$0(){var x=this.a
return x.p(new C.bT3(x,this.b))},
$S:0}
C.bT3.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.b9P.prototype={
$0(){var x=this.a
return C.cp8(this.b,new C.a_a(x.c,x.d,null))},
$S:0}
C.b9O.prototype={
$1(d){return d.length!==0},
$S:6}
C.b9S.prototype={
$1(d){var x,w,v=d.gye()
if(v.length!==0){x=this.a.d
w=new B.aw(x,new C.b9T(v),B.a8(x).i("aw<1>")).gC(0)>1}else w=!0
if(w){x=d.b
if(x.length===0)x="\u0642\u0627\u0646\u0648\u0646"}else x=v
return x},
$S:z+15}
C.b9T.prototype={
$1(d){return d.gye()===this.a},
$S:z+0}
C.b9R.prototype={
$0(){return B.a2(this.b,!1).So(B.ch(new C.b9Q(this.a,this.c),null,y.H))},
$S:0}
C.b9Q.prototype={
$1(d){return M.cjc(new C.a_a(this.b,this.a.d,null))},
$S:15}
C.b9U.prototype={
$0(){return B.a2(this.a,!1).fm()},
$S:0}
C.ba2.prototype={
$2(d,e){return d+e},
$S:99}
C.ba1.prototype={
$2(d,e){var x=this.a,w=J.t(e)
return x<w.gC(e)?Math.max(d,C.cwj(w.h(e,x))):d},
$S:991}
C.ba_.prototype={
$1(d){return A.b.u(d).length!==0},
$S:6}
C.ba0.prototype={
$3$head$odd(d,e,f){var x,w,v,u,t,s,r=null
if(e)x=this.a.d.d
else x=f?D.aJI:r
w=B.a([],y.p)
for(v=this.b,u=this.a.d.c,t=0;t<v;++t){s=t<d.length?d[t]:""
w.push(new B.Q(H.ql,C.cp6(s,e?B.w(r,r,u,r,r,r,r,r,12.5,r,A.n,r,1.5,r,r,r,r,r,r):B.w(r,r,A.aC,r,r,r,r,r,12.5,r,A.u,r,1.6,r,r,r,r,r,r),r),r))}return new G.kA(new B.z(x,r,r,r,r,r,A.j),w)},
$1(d){return this.$3$head$odd(d,!1,!1)},
$2$head(d,e){return this.$3$head$odd(d,e,!1)},
$2$odd(d,e){return this.$3$head$odd(d,!1,e)},
$S:z+16}
C.b9W.prototype={
$0(){return C.cp8(this.b,new C.al6(this.c,this.a.d,null))},
$S:0}
C.b9X.prototype={
$0(){return B.a2(this.a,!1).fm()},
$S:0}
C.cj4.prototype={
$1(d){return M.cjc(this.a)},
$S:15}
C.b9V.prototype={
$1(d){return Math.exp(-Math.pow((d-0.5)/0.16,2)/2)},
$S:2}
C.c1J.prototype={
$1(d){var x=null
return B.d(this.a,x,x,x,this.b,x,A.az)},
$S:z+17}
C.cja.prototype={
$2(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a8.b,a2=B.a([],y.s),a3=B.qo(this.a,$.cqt(),new C.cj9(a2),a0),a4=B.aI("\ue000(\\d+)\ue001",!0,!1,!1),a5=y.p,a6=B.a([],a5)
for(x=a3.split("\n"),w=x.length,v=this.b,u=this.c,t=y.F,s=isFinite(a1),r=0;r<x.length;x.length===w||(0,B.S)(x),++r){q=x[r]
if(a6.length!==0)a6.push(new B.bY(s?a1:0,0,a0,a0))
for(p=A.b.l5(q,B.aI("[ \\t]+",!0,!1,!1)),o=p.length,n=0;n<p.length;p.length===o||(0,B.S)(p),++n){m=p[n]
l=m.length
if(l===0)continue
if(!B.iz(m,"\ue000",0)){l=$.aDi()
if(!l.b.test(m)){l=$.aDm()
l=!l.b.test(m)}else l=!0
a6.push(B.d(m,a0,a0,a0,v,a0,l?A.P:A.az))
continue}k=B.a([],a5)
for(j=a4.kF(0,m),j=new B.oA(j.a,j.b,j.c),i=0;j.A();){h=j.d
g=(h==null?t.a(h):h).b
f=g.index
if(f>i){e=A.b.Z(m,i,f)
d=$.aDi()
if(!d.b.test(e)){d=$.aDm()
d=!d.b.test(e)}else d=!0
k.push(B.d(e,a0,a0,a0,v,a0,d?A.P:A.az))}d=g[1]
d.toString
k.push(C.cZO(a2[B.dA(d,a0)],v,u,a1))
i=f+g[0].length}if(i<l){e=A.b.bp(m,i)
l=$.aDi()
if(!l.b.test(e)){l=$.aDm()
l=!l.b.test(e)}else l=!0
k.push(B.d(e,a0,a0,a0,v,a0,l?A.P:A.az))}a6.push(k.length===1?A.c.gS(k):B.K(k,A.i,A.e,A.B,0,a0,A.P))}}a5=v.r
return B.e3(A.aZ,a6,A.lb,0,(a5==null?14:a5)*0.28,A.P)},
$S:290}
C.cj9.prototype={
$1(d){var x=this.a,w=d.cm(1)
w.toString
x.push(w)
return"\ue000"+(x.length-1)+"\ue001"},
$S:59}
C.cjb.prototype={
$1(d){var x,w=d.cm(1)
w.toString
x=B.aI("\\\\[a-zA-Z]+|[{}^_\\\\]",!0,!1,!1)
return B.b2(w,x," ")},
$S:59};(function installTearOffs(){var x=a._instance_0u,w=a._static_2
x(C.a6c.prototype,"gb0x","ahn",12)
w(C,"d5W","d5N",18)
w(C,"d5U","d5O",4)
w(C,"d5V","d5Q",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.adh,G.uH)
w(B.hl,[C.c1H,C.ba5,C.ba4,C.bSY,C.bSX,C.bT7,C.ba2,C.ba1,C.cja])
w(B.fj,[C.c2q,C.ba3,C.b9N,C.b9I,C.b9J,C.b9K,C.b9L,C.b9M,C.b9Y,C.b9Z,C.cj5,C.cj1,C.cj2,C.cj3,C.cj7,C.cj8,C.cj6,C.bT1,C.bT2,C.bSV,C.bTc,C.bTg,C.bT8,C.bT9,C.bTh,C.bTi,C.b9O,C.b9S,C.b9T,C.b9Q,C.ba_,C.ba0,C.cj4,C.b9V,C.c1J,C.cj9,C.cjb])
w(B.ac,[C.xv,C.uD,C.lG,C.O9,C.al8,C.Ob,C.GX,C.al5,C.BK,C.pP])
x(C.y5,B.jl)
x(C.GV,B.a1)
x(C.a6c,B.a9)
w(B.h_,[C.bT0,C.bT_,C.bSZ,C.bSU,C.bSW,C.bTb,C.bTd,C.bTa,C.bTf,C.bTe,C.bTm,C.bTl,C.bT6,C.bT5,C.bTk,C.bTj,C.bT4,C.bT3,C.b9P,C.b9R,C.b9U,C.b9W,C.b9X])
w(B.a3,[C.O7,C.a_a,C.Oc,C.Oa,C.al6,C.al7])
w(B.lk,[C.al4,C.GW])
x(C.al9,B.z1)})()
B.hu(b.typeUniverse,JSON.parse('{"adh":{"uH":[]},"GV":{"a1":[],"i":[]},"a6c":{"a9":["GV"]},"O7":{"a3":[],"i":[]},"a_a":{"a3":[],"i":[]},"Oc":{"a3":[],"i":[]},"Oa":{"a3":[],"i":[]},"al6":{"a3":[],"i":[]},"al7":{"a3":[],"i":[]},"al4":{"b_":[]},"GW":{"b_":[]},"al9":{"b_":[]}}'))
var y=(function rtii(){var x=B.af
return{V:x("J<aH>"),X:x("J<C>"),E:x("J<H<e>>"),G:x("J<+(y,e)>"),q:x("J<uD>"),v:x("J<lG>"),B:x("J<O9>"),d:x("J<al5>"),W:x("J<BK>"),K:x("J<GX>"),Y:x("J<xv>"),t:x("J<Ob>"),J:x("J<al8>"),s:x("J<e>"),T:x("J<kA>"),p:x("J<i>"),A:x("J<y5>"),n:x("J<Y>"),j:x("H<@>"),I:x("b4<e,@>"),f:x("aj<@,@>"),w:x("hM"),P:x("bG"),F:x("up"),b:x("pP"),x:x("lG"),N:x("e"),l:x("uH"),O:x("cv<e>"),Z:x("aw<+(y,e)>"),z:x("@"),S:x("y"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.tm=new B.aC(0,820,0,1/0)
D.ano=new B.aC(0,150,0,1/0)
D.ant=new B.aC(0,110,0,1/0)
D.anA=new B.aC(48,140,0,1/0)
D.aJI=new B.C(1,0.9803921568627451,0.984313725490196,0.9921568627450981,A.l)
D.aOF=new B.dW(0,0,8,0)
D.aP3=new B.O(0,24,0,0)
D.aP4=new B.O(0,30,0,0)
D.aR0=new B.O(2,0,2,10)
D.aR9=new B.O(4,0,4,6)
D.aRb=new B.O(4,18,4,8)
D.aRc=new B.O(4,20,4,0)
D.aRd=new B.O(4,22,4,0)
D.aRe=new B.O(4,22,4,10)
D.aRj=new B.O(4,8,4,8)
D.Q0=new B.ak(A.d9,14,A.bi,null,null)
D.bcC=new B.bF(62460,"Lucide","lucide_icons",!1)
D.aYk=new B.ak(D.bcC,14,A.bi,null,null)
D.Rq=x([0.28,0.55,0.92,0.64,0.38,0.18],y.n)
D.bj4=new B.Q(A.f1,D.Q0,null)
D.bjr=new B.Q(A.v8,E.Q9,null)
D.bjv=new B.Q(P.ND,E.Qb,null)
D.bpE=new B.ep(A.ef,A.fn,A.WF)
D.bcl=new B.bF(61980,"Lucide","lucide_icons",!1)
D.bpJ=new B.ep(F.Mw,F.LR,D.bcl)
D.bpW=new B.ae(70,4,220,44)
D.bpX=new B.ae(78,4,228,42)
D.bq_=new B.ae(-12,34,138,118)
D.a3V=new R.al3("assets/study/stats/stats_laws.json","stats2","\u0627\u0644\u0625\u062d\u0635\u0627\u0621 \u0627\u0644\u0632\u0631\u0627\u0639\u064a \xb7 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0625\u062d\u0635\u0627\u0621","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0625\u062d\u0635\u0627\u0621","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0625\u062d\u0635\u0627\u0621 \u0627\u0644\u0632\u0631\u0627\u0639\u064a","\u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0631\u0645\u0632\u2026 \u0645\u062b\u0644\u0627\u064b: \u0627\u0644\u0648\u0633\u064a\u0637","\u0627\u0644\u0648\u062d\u062f\u0629","\u0627\u0644\u0648\u062d\u062f\u0627\u062a","\u0647\u0627\u0644\u0648\u062d\u062f\u0629",C.d5W(),C.d5U(),C.d5V(),A.WG,!1,!1)
D.by_=new G.a_x(E.yJ,E.yJ)
D.bMt=new B.cv("stats-search",y.O)
D.bMv=new B.cv("stats-qunits",y.O)
D.bMx=new B.cv("stats-units",y.O)
D.bME=new B.cv("stats-q-all",y.O)
D.alc=new C.y5(0,"laws")
D.bQ_=new C.y5(1,"tables")
D.bQ0=new C.y5(2,"questions")
D.bQ1=new C.y5(3,"problems")})();(function staticFields(){$.cmQ=B.P(y.N,B.af("ap<pP>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dgy","cIv",()=>B.aI("\\$([^$]+)\\$",!0,!1,!1))
x($,"ddT","aDi",()=>B.aI("[\u0600-\u06ff\u0750-\u077f\ufb50-\ufdff\ufe70-\ufeff]",!0,!1,!1))
x($,"df9","aDm",()=>B.aI("[A-Za-z0-9\u0660-\u0669]",!0,!1,!1))
x($,"dfY","cqt",()=>B.aI("\\$([^$]+)\\$",!0,!1,!1))})()};
(a=>{a["DdMBFFYU7Eqz9hmQOlIIKyg66wg="]=a.current})($__dart_deferred_initializers__);
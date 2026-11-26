((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,M,N,O,H,C={adg:function adg(d){this.a=d},
IQ(d){var x
if(d==null)x=""
else x=B.b.u(typeof d=="string"?d:A.f(d))
return x},
cYC(d){var x
if(typeof d=="number")x=B.k.bB(d)
else{x=A.ct(C.IQ(d),null)
if(x==null)x=0}return x},
Rl(d){return y.f.b(d)?J.td(d,new C.c1i(),y.N,y.z):B.ae},
cnW(d){var x,w,v=A.a([],y.s),u=J.aC(y.j.b(d)?d:B.h4)
for(;u.A();){x=u.gI(u)
if(x==null)w=""
else w=B.b.u(typeof x=="string"?x:A.f(x))
v.push(w)}B.c.kq(v,new C.c21())
return v},
cvX(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=C.Rl(d)
if(C.IQ(k.h(0,"id")).length!==0)C.IQ(k.h(0,"id"))
x=C.IQ(k.h(0,"title"))
w=C.cYC(k.h(0,"page"))
v=C.IQ(k.h(0,"note"))
u=y.s
t=A.a([],u)
s=k.h(0,"cols")
r=y.j
s=J.aC(r.b(s)?s:B.h4)
for(;s.A();){q=s.gI(s)
if(q==null)p=""
else p=B.b.u(typeof q=="string"?q:A.f(q))
t.push(p)}s=A.a([],y.E)
p=k.h(0,"rows")
p=J.aC(r.b(p)?p:B.h4)
for(;p.A();){o=p.gI(p)
if(r.b(o)){n=A.a([],u)
for(m=J.aC(o);m.A();){q=m.gI(m)
if(q==null)l=""
else l=B.b.u(typeof q=="string"?q:A.f(q))
n.push(l)}}else{if(o==null)n=""
else n=B.b.u(typeof o=="string"?o:A.f(o))
n=A.a([n],u)}s.push(n)}return new C.O6(x,v,w,t,s)},
cT1(d3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5="title",c6="id",c7="page",c8=C.Rl(d3),c9=C.Rl(c8.h(0,"meta")),d0=A.a([],y.J),d1=c8.h(0,"units"),d2=y.j
d1=d2.b(d1)?d1:B.h4
for(x=J.t(d1),w=y.f,v=y.X,u=y.q,t=y.v,s=y.B,r=0;r<x.gC(d1);r=k){q=C.Rl(x.h(d1,r))
if(q.V(0,"n")){p=q.h(0,"n")
if(typeof p=="number"){p=B.k.bB(p)
o=p}else{if(p==null)p=""
else p=B.b.u(typeof p=="string"?p:A.f(p))
p=A.ct(p,c4)
if(p==null)p=0
o=p}}else o=r+1
p=q.h(0,c5)
if(p==null)n=""
else n=B.b.u(typeof p=="string"?p:A.f(p))
m=A.a([],s)
l=q.h(0,"lessons")
l=d2.b(l)?l:B.h4
for(p=J.t(l),k=r+1,j="u"+k+"_l",i=0;i<p.gC(l);){h=C.Rl(p.h(l,i))
g=h.h(0,c5)
if(g==null)f=""
else f=B.b.u(typeof g=="string"?g:A.f(g))
e=A.a([],t)
d=h.h(0,"laws")
d=d2.b(d)?d:B.h4
for(g=J.t(d),++i,a0=j+i+"_",a1=0;a1<g.gC(d);++a1){a2=C.Rl(g.h(d,a1))
a3=a2.h(0,"alt")
a4=a2.h(0,c6)
if(a4==null)a4=""
else a4=B.b.u(typeof a4=="string"?a4:A.f(a4))
if(a4.length===0)a4=a0+(a1+1)
else{a4=a2.h(0,c6)
if(a4==null)a4=""
else a4=B.b.u(typeof a4=="string"?a4:A.f(a4))}a5=a2.h(0,"name")
if(a5==null)a5=""
else a5=B.b.u(typeof a5=="string"?a5:A.f(a5))
a6=a2.h(0,"tex")
if(a6==null)a6=""
else a6=B.b.u(typeof a6=="string"?a6:A.f(a6))
a7=A.a([],u)
if(typeof a3=="string"&&B.b.u(a3).length!==0)a7.push(new C.uC("",B.b.u(a3)))
a8=J.aC(d2.b(a3)?a3:B.h4)
for(;a8.A();){a9=a8.gI(a8)
if(w.b(a9)){b0=J.t(a9)
b1=b0.h(a9,"label")
if(b1==null)b1=""
else b1=B.b.u(typeof b1=="string"?b1:A.f(b1))
b0=b0.h(a9,"tex")
if(b0==null)b0=""
else b0=B.b.u(typeof b0=="string"?b0:A.f(b0))
a7.push(new C.uC(b1,b0))}else{b0=a9==null
if(b0)b1=""
else b1=B.b.u(typeof a9=="string"?a9:A.f(a9))
if(b1.length!==0){if(b0)b0=""
else b0=B.b.u(typeof a9=="string"?a9:A.f(a9))
a7.push(new C.uC("",b0))}}}a7.$flags&1&&A.ax(a7,16)
B.c.wJ(a7,new C.b9B(),!0)
a8=A.a([],v)
b0=a2.h(0,"syms")
b0=J.aC(d2.b(b0)?b0:B.h4)
for(;b0.A();){b2=b0.gI(b0)
if(w.b(b2)){b1=J.t(b2)
b3=b1.h(b2,"s")
if(b3==null)b3=""
else b3=B.b.u(typeof b3=="string"?b3:A.f(b3))
b4=b1.h(b2,"m")
if(b4==null)b4=""
else b4=B.b.u(typeof b4=="string"?b4:A.f(b4))
b1=b1.h(b2,"u")
if(b1==null)b1=""
else b1=B.b.u(typeof b1=="string"?b1:A.f(b1))
a8.push(new C.xu(b3,b4,b1))}else{if(b2==null)b1=""
else b1=B.b.u(typeof b2=="string"?b2:A.f(b2))
a8.push(new C.xu(b1,"",""))}}a8.$flags&1&&A.ax(a8,16)
B.c.wJ(a8,new C.b9C(),!0)
b0=a2.h(0,"say")
if(b0==null)b0=""
else b0=B.b.u(typeof b0=="string"?b0:A.f(b0))
b1=a2.h(0,"use")
if(b1==null)b1=""
else b1=B.b.u(typeof b1=="string"?b1:A.f(b1))
b3=a2.h(0,"warn")
if(b3==null)b3=""
else b3=B.b.u(typeof b3=="string"?b3:A.f(b3))
b4=a2.h(0,c7)
if(typeof b4=="number")b4=B.k.bB(b4)
else{if(b4==null)b4=""
else b4=B.b.u(typeof b4=="string"?b4:A.f(b4))
b4=A.ct(b4,c4)
if(b4==null)b4=0}if(b4>0){b4=a2.h(0,c7)
if(typeof b4=="number")b4=B.k.bB(b4)
else{if(b4==null)b4=""
else b4=B.b.u(typeof b4=="string"?b4:A.f(b4))
b4=A.ct(b4,c4)
if(b4==null)b4=0}}else{b4=h.h(0,c7)
if(typeof b4=="number")b4=B.k.bB(b4)
else{if(b4==null)b4=""
else b4=B.b.u(typeof b4=="string"?b4:A.f(b4))
b4=A.ct(b4,c4)
if(b4==null)b4=0}}b5=a2.h(0,"kind")
if(b5==null)b5=""
else b5=B.b.u(typeof b5=="string"?b5:A.f(b5))
e.push(new C.rs(a4,a5,a6,b0,b1,b3,b5,a7,a8,b4,r,o,n,f))}if(h.V(0,"n")){g=h.h(0,"n")
if(typeof g=="number")B.k.bB(g)
else{if(g==null)g=""
else g=B.b.u(typeof g=="string"?g:A.f(g))
A.ct(g,c4)}}g=h.h(0,c7)
if(typeof g=="number")g=B.k.bB(g)
else{if(g==null)g=""
else g=B.b.u(typeof g=="string"?g:A.f(g))
g=A.ct(g,c4)
if(g==null)g=0}m.push(new C.O3(g,f,e))}d0.push(new C.al3(r,o,n,m))}b6=c8.h(0,"tables")
b6=d2.b(b6)?b6:B.h4
x=y.t
v=A.a([],x)
for(u=J.t(b6),b7=0;b7<u.gC(b6);b7=b8){b8=b7+1
v.push(C.cvX(u.h(b6,b7),"t"+b8))}B.c.kq(v,new C.b9D())
b9=c8.h(0,"problems")
b9=d2.b(b9)?b9:B.h4
c0=A.a([],y.d)
for(u=J.t(b9),t=y.K,b7=0;b7<u.gC(b9);b7=b8){c1=C.Rl(u.h(b9,b7))
c2=c1.h(0,"tables")
c2=d2.b(c2)?c2:B.h4
s=c1.h(0,c6)
if(s==null)s=""
else s=B.b.u(typeof s=="string"?s:A.f(s))
if(s.length===0)s="p"+(b7+1)
else{s=c1.h(0,c6)
if(s==null)s=""
else s=B.b.u(typeof s=="string"?s:A.f(s))}p=c1.h(0,c5)
if(p==null)p=""
else p=B.b.u(typeof p=="string"?p:A.f(p))
j=c1.h(0,c7)
if(typeof j=="number")j=B.k.bB(j)
else{if(j==null)j=""
else j=B.b.u(typeof j=="string"?j:A.f(j))
j=A.ct(j,c4)
if(j==null)j=0}g=c1.h(0,"text")
if(g==null)g=""
else g=B.b.u(typeof g=="string"?g:A.f(g))
a0=C.cnW(c1.h(0,"asks"))
a4=A.a([],x)
for(a5=J.t(c2),b8=b7+1,a6="p"+b8+"_t",a1=0;a1<a5.gC(c2);a1=c3){c3=a1+1
a4.push(C.cvX(a5.h(c2,a1),a6+c3))}a4.$flags&1&&A.ax(a4,16)
B.c.wJ(a4,new C.b9E(),!0)
a5=A.a([],t)
a6=c1.h(0,"steps")
a6=J.aC(d2.b(a6)?a6:B.h4)
for(;a6.A();){b2=a6.gI(a6)
if(w.b(b2)){a7=J.t(b2)
a8=a7.h(b2,"h")
if(a8==null)a8=""
else a8=B.b.u(typeof a8=="string"?a8:A.f(a8))
b0=a7.h(b2,"t")
if(b0==null)b0=""
else b0=B.b.u(typeof b0=="string"?b0:A.f(b0))
a7=a7.h(b2,"tex")
if(a7==null)a7=""
else a7=B.b.u(typeof a7=="string"?a7:A.f(a7))
a5.push(new C.GS(a8,b0,a7))}else{if(b2==null)a7=""
else a7=B.b.u(typeof b2=="string"?b2:A.f(b2))
a5.push(new C.GS("",a7,""))}}a5.$flags&1&&A.ax(a5,16)
B.c.wJ(a5,new C.b9F(),!0)
c0.push(new C.al1(s,p,g,j,b7,a0,C.cnW(c1.h(0,"answers")),C.cnW(c1.h(0,"laws")),a4,a5))}d2=C.IQ(c9.h(0,c5)).length===0?"\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0625\u062d\u0635\u0627\u0621":C.IQ(c9.h(0,c5))
return new C.rr(d2,C.IQ(c9.h(0,"source")),d0,v,c0)},
cvV(){var x=$.cmr
return x==null?$.cmr=$.tc().IT("assets/study/stats/stats_laws.json").bc(0,new C.b9M(),y.b).f1(new C.b9N()):x},
ciG(d){var x,w=A.aJ("[\u0623\u0625\u0622]",!0,!1,!1)
w=A.b2(d.toLowerCase(),w,"\u0627")
w=A.b2(w,"\u0629","\u0647")
w=A.b2(w,"\u0649","\u064a")
x=A.aJ("[\u064b-\u0652\u0640]",!0,!1,!1)
return A.b2(w,x,"")},
d5h(d){var x=B.b.l4(C.ciG(B.b.u(d)),A.aJ("\\s+",!0,!1,!1)),w=A.a9(x).i("aw<1>")
x=A.X(new A.aw(x,new C.ciJ(),w),w.i("S.E"))
return x},
d5f(d,e){var x,w,v,u,t,s,r,q,p="[\\\\{}_^\\s$]"
if(e.length===0)return!1
x=d.ga2s()
w=d.c
v=w.length===0&&d.d.length!==0?d.d:""
u=d.x
t=C.ciG(d.b+" "+d.at+" "+d.as+" "+x+" "+v+" "+new A.ad(u,new C.ciD(),A.a9(u).i("ad<1,e>")).aF(0," "))
v=A.aY(y.N)
for(x=u.length,s=0;s<u.length;u.length===x||(0,A.T)(u),++s){r=u[s]
q=A.aJ(p,!0,!1,!1)
v.F(0,A.b2(r.a.toLowerCase(),q,""))}x=d.w
x=new A.ad(x,new C.ciE(),A.a9(x).i("ad<1,e>")).aF(0," ")
u=v.aF(0," ")
q=A.aJ(p,!0,!1,!1)
return B.c.dj(e,new C.ciF(t,v,A.b2((w+" "+x+" "+u).toLowerCase(),q,"")))},
d5i(d,e){var x,w,v
if(e.length===0)return!1
x=d.f
w=d.b+" "+d.c+" "+B.c.aF(d.e," ")+" "+new A.ad(x,new C.ciK(),A.a9(x).i("ad<1,e>")).aF(0," ")
v=C.ciG(w)
x=A.aJ("[\\\\{}_^\\s$]",!0,!1,!1)
return B.c.dj(e,new C.ciL(v,A.b2(w.toLowerCase(),x,"")))},
d5g(d,e){if(e.length===0)return!1
return B.c.dj(e,B.b.gn7(C.ciG(d.b+" "+d.c+" "+B.c.aF(d.f," "))))},
c1i:function c1i(){},
c21:function c21(){},
xu:function xu(d,e,f){this.a=d
this.b=e
this.c=f},
uC:function uC(d,e){this.a=d
this.b=e},
rs:function rs(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
O3:function O3(d,e,f){this.b=d
this.c=e
this.d=f},
al3:function al3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b9U:function b9U(){},
O6:function O6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h},
b9T:function b9T(){},
b9S:function b9S(){},
GS:function GS(d,e,f){this.a=d
this.b=e
this.c=f},
al1:function al1(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
rr:function rr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.w=_.r=_.f=$},
b9B:function b9B(){},
b9C:function b9C(){},
b9D:function b9D(){},
b9E:function b9E(){},
b9F:function b9F(){},
b9M:function b9M(){},
b9N:function b9N(){},
ciJ:function ciJ(){},
ciD:function ciD(){},
ciE:function ciE(){},
ciF:function ciF(d,e,f){this.a=d
this.b=e
this.c=f},
ciK:function ciK(){},
ciL:function ciL(d,e){this.a=d
this.b=e},
coM(d,e){var x,w,v=null,u=e.gmL(0)
u=A.v(v,v,B.f,v,v,new A.z(v,v,v,A.u(4),v,u,B.j),v,22,v,v,v,v,v,4)
x=d.b
if(x.length===0)x="\u062c\u062f\u0648\u0644"
w=y.p
x=A.a([u,B.R,A.a_(C.iO(x,A.x(v,v,B.aI,v,v,v,v,v,16.5,v,B.n,v,1.4,v,v,v,v,v,v),v,v),1,v)],w)
u=d.d
if(u>0)B.c.t(x,A.a([B.O,C.ciH(u,!1)],w))
return new A.Q(D.aR6,A.K(x,B.i,B.e,B.h,0,v,v),v)},
cT2(d){var x,w,v=A.aJ("\\([^)]*\\)",!0,!1,!1)
v=A.b2(d,v,"")
x=A.aJ("\\$[^$]*\\$",!0,!1,!1)
v=A.b2(v,x,"")
x=A.aJ("[\u060c,:]\\s*$",!0,!1,!1)
v=B.b.l4(B.b.u(B.c.gT(B.b.l4(A.b2(v,x,""),A.aJ("[\u060c,]",!0,!1,!1)))),A.aJ("\\s+",!0,!1,!1))
x=A.a9(v).i("aw<1>")
w=A.X(new A.aw(v,new C.b9G(),x),x.i("S.E"))
return w.length<=3?B.c.aF(w," "):A.dM(w,0,A.fq(3,"count",y.S),A.a9(w).c).aF(0," ")+"\u2026"},
cyl(d,e,f,g){var x,w,v=null,u=y.p,t=A.a([],u),s=d.a
if(s.length!==0){x=B.d.N(0.7)
w=A.u(999)
B.c.t(t,A.a([A.v(v,C.iO(s,A.x(v,v,e.c,v,v,v,v,v,12,v,B.n,v,1.4,v,v,v,v,v,v),v,v),B.f,v,D.anh,new A.z(x,v,v,w,v,v,B.j),v,v,v,v,E.Op,v,v,v),B.O],u))}t.push(new A.d6(1,B.b3,C.ciC(d.b,B.q,g,f),v))
return A.K(t,B.i,B.aT,B.h,0,v,v)},
cvW(d){var x,w,v,u,t,s,r,q,p
for(x=$.cI6().kF(0,d),x=new A.ow(x.a,x.b,x.c),w=y.F,v=0,u=0;x.A();){t=x.d
s=(t==null?w.a(t):t).b
r=s.index
q=s[1]
q.toString
p=A.aJ("\\\\[a-zA-Z]+",!0,!1,!1)
q=A.b2(q,p,"\u2022")
p=A.aJ("[{}^_\\s\\\\]",!0,!1,!1)
v+=(r-u)*6.8+A.b2(q,p,"").length*8
u=r+s[0].length}return v+(d.length-u)*6.8},
CE:function CE(d,e){this.a=d
this.b=e},
O2:function O2(d){this.a=d},
a6b:function a6b(d,e){var _=this
_.e=_.d=null
_.f=0
_.r=d
_.w=""
_.x=e
_.c=_.a=null},
bSO:function bSO(d){this.a=d},
bSP:function bSP(d){this.a=d},
bSN:function bSN(d,e){this.a=d
this.b=e},
bSQ:function bSQ(d){this.a=d},
bSM:function bSM(d,e){this.a=d
this.b=e},
bSH:function bSH(d){this.a=d},
bSI:function bSI(){},
bSJ:function bSJ(d){this.a=d},
bST:function bST(d){this.a=d},
bSS:function bSS(d,e){this.a=d
this.b=e},
bSU:function bSU(d){this.a=d},
bSR:function bSR(d){this.a=d},
bSX:function bSX(d){this.a=d},
bSW:function bSW(d,e){this.a=d
this.b=e},
bSV:function bSV(d,e){this.a=d
this.b=e},
bSL:function bSL(){},
bSK:function bSK(d,e,f){this.a=d
this.b=e
this.c=f},
bSZ:function bSZ(d,e){this.a=d
this.b=e},
bSY:function bSY(d,e){this.a=d
this.b=e},
O1:function O1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b9H:function b9H(d,e){this.a=d
this.b=e},
b9G:function b9G(){},
al0:function al0(d,e,f){this.c=d
this.d=e
this.a=f},
b9I:function b9I(d){this.a=d},
O7:function O7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9R:function b9R(){},
b9Q:function b9Q(d){this.a=d},
b9O:function b9O(){},
b9P:function b9P(d,e){this.a=d
this.b=e},
O5:function O5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9K:function b9K(d,e,f){this.a=d
this.b=e
this.c=f},
al2:function al2(d,e,f){this.c=d
this.d=e
this.a=f},
b9L:function b9L(d){this.a=d},
RF(d){return A.a([new A.aG(0,B.G,B.aI.N(d),B.c_,22)],y.V)},
coL(d,e){return A.a2(d,!1).bk(A.ch(new C.ciI(e),null,y.H))},
coK(d,e,f){var x,w=null,v=A.u(14)
$.aH()
x=B.d.N(0.18)
return A.cf(!0,w,A.cL(v,A.oR(A.bX(!1,B.K,!0,w,A.aN(!1,w,!0,A.aF(A.ar(d,B.d,w,22),44,44),w,!0,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),B.f,x,0,w,w,w,w,w,B.al),new A.l6(10,10,w)),B.X),!0,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,B.af,w)},
nG(d){var x=null,w=A.a([B.Ch,B.O,A.a_(A.d(d,x,x,x,A.x(x,x,B.aI,x,x,x,x,x,19,x,B.n,x,1.3,x,x,x,x,x,x),x,x),1,x)],y.p)
return new A.Q(E.Oh,A.K(w,B.i,B.e,B.h,0,x,x),x)},
ciH(d,e){var x=null,w=e?B.d.N(0.18):B.aF,v=A.u(999)
return A.v(x,A.d("\u0635 "+d,x,x,x,A.x(x,x,e?B.d:B.b2,x,x,x,x,x,11.5,x,B.x,x,1.4,x,x,x,x,x,x),x,x),B.f,x,x,new A.z(w,x,x,v,x,x,B.j),x,x,x,x,E.uV,x,x,x)},
aD_(d,e){var x=null
return A.v(x,d,B.f,x,x,new A.z(B.d,x,x,A.u(22),C.RF(0.05),x,B.j),x,x,x,x,e,x,x,x)},
coN(d,e,f,g,h,i){var x=null,w=A.bh(d,x,y.w).w.r.b+10,v=h==null?D.bpN:h,u=i.gmL(0),t=v.a,s=v.b
return A.qw(A.v(x,A.bv(B.a2,A.a([A.ex(0,A.dD(x,x,x,new C.GR(x),B.ag),0),A.cu(x,A.dD(x,x,x,new C.O4(g,0.2,x),B.ag),v.d-s,x,t,x,w+s,v.c-t),new A.Q(new A.O(16,w,16,e),A.b7(new A.d2(D.tj,f,x),x,x),x)],y.p),B.r,B.a8,x),B.f,x,x,new A.z(x,x,x,x,x,u,B.j),x,x,x,x,x,x,x,x),B.X,new C.al4(x))},
cZn(d,e,f,g){var x=f==null?e.b:f,w=e.r,v=A.bN(Q.Fi(d,R.dC,new C.c1k(d,e),e.uK(x,(w==null?14:w)*1.02,B.u)),B.az)
return isFinite(g)?new A.d2(new A.aB(0,g,0,1/0),A.fi(B.q,v,B.f,B.bh),null):v},
iO(d,e,f,g){var x,w,v,u,t=null
if(!B.b.n(d,"$")){x=$.aDb()
if(!x.b.test(d)){x=$.aDf()
x=!x.b.test(d)}else x=!0
w=x?B.P:B.az
return A.d(d,g,g==null?t:B.L,t,e,B.cm,w)}v=A.cf(t,t,new A.ea(new C.ciN(d,e,f),t),!1,t,t,!0,t,!1,t,t,t,t,t,t,t,t,t,A.qi(d,$.cq5(),new C.ciO(),t),t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.af,t)
if(g==null)return v
x=e.r
if(x==null)x=14
u=e.as
if(u==null)u=1.6
return new A.d2(new A.aB(0,1/0,0,x*u*g+2),A.vK(A.eg(v,t,t,B.rb,!1,B.S),B.r,t),t)},
ciC(d,e,f,g){return new A.cl(e,null,null,A.fi(B.q,G.hT(d,f,g),B.f,B.bh),null)},
coJ(d,e,f){var x,w,v=B.b.u(d),u=A.aJ("^\\$[^$]+\\$$",!0,!1,!1)
if(u.b.test(v)){u=B.b.Z(v,1,v.length-1)
x=e.r
if(x==null)x=13
w=f==null?e.b:f
if(w==null)w=B.aI
return A.fi(B.b7,G.hT(u,w,x*1.12),B.f,B.bh)}return C.iO(v,e,f,null)},
ciI:function ciI(d){this.a=d},
O4:function O4(d,e,f){this.b=d
this.c=e
this.a=f},
b9J:function b9J(){},
GR:function GR(d){this.a=d},
al4:function al4(d){this.a=d},
c1k:function c1k(d,e){this.a=d
this.b=e},
ciN:function ciN(d,e,f){this.a=d
this.b=e
this.c=f},
ciM:function ciM(d){this.a=d},
ciO:function ciO(){}},D,P,Q,R,G,E,K,S,F,I,T
J=c[1]
A=c[0]
B=c[2]
L=c[81]
M=c[76]
N=c[82]
O=c[77]
H=c[62]
C=a.updateHolder(c[29],C)
D=c[122]
P=c[60]
Q=c[36]
R=c[83]
G=c[32]
E=c[67]
K=c[46]
S=c[11]
F=c[100]
I=c[74]
T=c[70]
C.adg.prototype={
RC(d,e){return this.a},
Rz(d,e){return this.a},
k(d){return"FixedColumnWidth("+A.ke(this.a)+")"}}
C.xu.prototype={}
C.uC.prototype={}
C.rs.prototype={
ga2s(){var x,w=this.r
$label0$0:{if("grouped"===w){x="\u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629"
break $label0$0}if("ungrouped"===w){x="\u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u063a\u064a\u0631 \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629"
break $label0$0}if("both"===w){x="\u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629 \u0648\u063a\u064a\u0631 \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a\u0629"
break $label0$0}x=""
break $label0$0}return x}}
C.O3.prototype={}
C.al3.prototype={
gPX(d){return B.c.eg(this.d,0,new C.b9U())}}
C.O6.prototype={
gj2(d){return B.c.eg(this.f,this.e.length,new C.b9T())},
gab(d){return this.f.length===0&&B.c.dj(this.e,new C.b9S())}}
C.GS.prototype={}
C.al1.prototype={
gva(d){var x=this.b
return x.length===0?"\u0645\u0633\u0623\u0644\u0629 "+(this.e+1):x}}
C.rr.prototype={
gvb(){var x,w,v,u,t,s,r,q=this,p=q.f
if(p===$){x=A.a([],y.v)
for(w=q.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.T)(w),++u)for(t=w[u].d,s=t.length,r=0;r<t.length;t.length===s||(0,A.T)(t),++r)B.c.t(x,t[r].d)
q.f!==$&&A.b5()
q.f=x
p=x}return p},
gbd7(){var x,w,v,u,t,s=this,r=s.r
if(r===$){x=A.P(y.N,y.x)
for(w=s.gvb(),v=w.length,u=0;u<w.length;w.length===v||(0,A.T)(w),++u){t=w[u]
x.q(0,t.a,t)}s.r!==$&&A.b5()
s.r=x
r=x}return r},
gazS(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.w
if(m===$){x=A.aY(y.N)
for(w=n.gvb(),v=w.length,u=0;u<w.length;w.length===v||(0,A.T)(w),++u)for(t=w[u].x,s=t.length,r=0;r<t.length;t.length===s||(0,A.T)(t),++r){q=t[r]
p=A.aJ("\\s+",!0,!1,!1)
x.F(0,A.b2(q.a,p,""))}o=x.a
n.w!==$&&A.b5()
n.w=o
m=o}return m},
bgh(d){var x,w,v,u,t=A.a([],y.d)
for(x=this.e,w=x.length,v=0;v<x.length;x.length===w||(0,A.T)(x),++v){u=x[v]
if(B.c.n(u.w,d))t.push(u)}return t},
bd8(d){var x,w,v,u,t,s=A.a([],y.v)
for(x=d.w,w=x.length,v=0;v<x.length;x.length===w||(0,A.T)(x),++v){u=x[v]
t=this.gbd7()
if(t.h(0,u)!=null){t=t.h(0,u)
t.toString
s.push(t)}}return s}}
C.CE.prototype={
L(){return"_Tab."+this.b}}
C.O2.prototype={
R(){return new C.a6b(D.al5,new A.c7(B.aC,$.aI()))}}
C.a6b.prototype={
a0(){var x=this
x.ag()
x.a.toString
x.d=null
x.ahj()},
ahj(){var x=this
x.p(new C.bSO(x))
C.cvV().dR(0,new C.bSP(x),new C.bSQ(x),y.P)},
l(){var x=this.x
x.R8$=$.aI()
x.p4$=0
this.ac()},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r==null)x=t.e!=null?t.b0h():A.b7(A.Dy(s,F.eG[B.m.ap(Math.abs(0),5)].a,s,s,s,s,s,s,s,s),s,s)
else{x=t.b0j(d,r)
w=y.p
v=A.a([],w)
if(B.b.u(t.w).length===0)v.push(t.b0g(d,r))
else v.push(t.b0l(d,r))
u=r.b
if(u.length!==0)v.push(new A.Q(D.aR5,A.K(A.a([D.biX,B.de,A.a_(A.d("\u0627\u0644\u0645\u0635\u062f\u0631: "+u,s,s,s,A.x(s,s,B.bm,s,s,s,s,s,12,s,B.u,s,1.7,s,s,s,s,s,s),s,s),1,s)],w),B.p,B.e,B.h,0,s,s),s))
x=A.dS(A.a([x,A.b7(new A.d2(D.tj,new A.Q(E.NO,A.G(v,B.H,s,B.e,B.h),s),s),s,s)],w),s,B.ac,s,s,B.S,!1)}return A.cq(s,I.nv,x,s,s,s)},
b0h(){var x=null
return A.b7(new A.Q(B.kj,A.G(A.a([A.d("\u0645\u0627 \u0642\u062f\u0631\u0646\u0627 \u0646\u062d\u0645\u0651\u0644 \u0627\u0644\u0642\u0648\u0627\u0646\u064a\u0646.",x,x,x,A.x(x,x,B.b2,x,x,x,x,x,15,x,B.x,x,1.5,x,x,x,x,x,x),x,x),B.Q,A.c5(!1,A.d("\u062c\u0631\u0651\u0628 \u0645\u0631\u0629 \u062a\u0627\u0646\u064a\u0629",x,x,x,A.x(x,x,F.eG[B.m.ap(Math.abs(0),5)].c,x,x,x,x,x,14,x,B.n,x,1.5,x,x,x,x,x,x),x,x),x,x,x,x,x,x,this.gb0k(),x,x),A.c5(!1,A.d("\u0631\u062c\u0648\u0639",x,x,x,A.x(x,x,B.bm,x,x,x,x,x,13.5,x,B.x,x,1.5,x,x,x,x,x,x),x,x),x,x,x,x,x,x,new C.bSH(this),x,x)],y.p),B.i,x,B.e,B.D),x),x,x)},
b0j(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=e.e,m=y.Y
m=A.bbe(new A.aw(A.a([new A.a7(e.gvb().length,"\u0642\u0627\u0646\u0648\u0646"),new A.a7(e.d.length,"\u062c\u062f\u0648\u0644"),new A.a7(n.length,"\u0645\u0633\u0623\u0644\u0629 \u0645\u062d\u0644\u0648\u0644\u0629"),new A.a7(e.gazS(),"\u0631\u0645\u0632 \u0645\u0634\u0631\u0648\u062d")],y.G),new C.bSI(),m),3,m.i("S.E"))
x=A.X(m,A.L(m).i("S.E"))
m=F.eG[B.m.ap(Math.abs(0),5)]
w=y.p
v=A.K(A.a([C.coK(B.d8,new C.bSJ(d),"\u0631\u062c\u0648\u0639"),A.a_(A.d("\u0627\u0644\u0625\u062d\u0635\u0627\u0621 \u0627\u0644\u0632\u0631\u0627\u0639\u064a \xb7 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629",1,B.L,o,A.x(o,o,B.d.N(0.92),o,o,o,o,o,14.5,o,B.n,o,1.5,o,o,o,o,o,o),B.V,o),1,o),K.rH],w),B.i,B.e,B.h,0,o,o)
u=A.d("\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0625\u062d\u0635\u0627\u0621",o,o,o,A.x(o,o,B.d,o,o,o,o,o,31,o,B.a6,o,1.25,o,o,o,o,o,o),o,o)
n=n.length===0?"\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0644\u062e\u0635 \u0648\u062c\u062f\u0627\u0648\u0644\u0647 \u0628\u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f\u060c \u0645\u0639 \u0645\u0639\u0646\u0649 \u0643\u0644 \u0631\u0645\u0632.":"\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0644\u062e\u0635 \u0648\u062c\u062f\u0627\u0648\u0644\u0647 \u0628\u0645\u0643\u0627\u0646 \u0648\u0627\u062d\u062f\u060c \u0645\u0639 \u0645\u0639\u0646\u0649 \u0643\u0644 \u0631\u0645\u0632.\n\u0648\u0645\u0633\u0627\u0626\u0644\u0647 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629 \u062e\u0637\u0648\u0629 \u062e\u0637\u0648\u0629."
n=A.a([v,B.bc,u,B.a7,A.d(n,o,o,o,A.x(o,o,B.d.N(0.9),o,o,o,o,o,14,o,B.u,o,1.7,o,o,o,o,o,o),o,o)],w)
if(x.length!==0){v=A.a([],w)
for(t=0;t<x.length;++t){u=A.a([],w)
if(t>0)u.push(B.O)
s=x[t]
r=B.d.N(0.15)
q=new A.b4(16,16)
p=new A.bg(B.d.N(0.22),1,B.W,-1)
u.push(new A.cU(1,B.aS,A.v(o,A.G(A.a([A.d(""+s.a,o,o,o,A.x(o,o,B.d,o,o,o,o,o,20,o,B.a6,o,1.2,o,o,o,o,o,o),o,o),A.d(s.b,1,B.L,o,A.x(o,o,B.d.N(0.85),o,o,o,o,o,11.5,o,B.x,o,1.3,o,o,o,o,o,o),o,o)],w),B.i,o,B.e,B.h),B.f,o,o,new A.z(r,o,new A.dK(p,p,p,p),new A.bB(q,q,q,q),o,o,B.j),o,o,o,o,H.nL,o,o,o),o))
B.c.t(v,u)}B.c.t(n,A.a([B.ai,A.K(v,B.i,B.e,B.h,0,o,o)],w))}n.push(B.ai)
n.push(this.b0m())
return C.coN(d,58,A.G(n,B.H,o,B.e,B.h),0,o,m)},
b0m(){var x,w,v,u,t=this,s=null,r=A.u(18)
$.aH()
x=B.d.N(0.16)
w=A.ah(B.d.N(0.28),1)
v=A.u(18)
u=A.x(s,s,B.d,s,s,s,s,s,s,s,B.u,s,s,s,s,s,s,s,s)
u=A.a([K.vA,B.R,A.a_(A.d3(s,B.T,!1,s,!0,B.r,s,A.d5(),t.x,B.d,s,s,s,s,2,A.i_(s,B.fH,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,A.x(s,s,B.d.N(0.85),s,s,s,s,s,s,s,B.z,s,s,s,s,s,s,s,s),"\u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0631\u0645\u0632\u2026 \u0645\u062b\u0644\u0627\u064b: \u0627\u0644\u0648\u0633\u064a\u0637",s,s,s,s,s,s,s,s,s,!0,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.J,!0,s,!0,s,!1,s,B.aB,s,s,s,D.bMe,s,s,s,s,s,1,s,s,!1,"\u2022",s,new C.bST(t),s,s,s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,u,!0,B.aA,s,B.aG,s,s,s,s),1,s)],y.p)
if(t.w.length!==0)u.push(A.cf(!0,s,A.aN(!1,s,!0,D.bjj,s,!0,s,s,s,s,s,s,s,s,s,new C.bSU(t),s,s,s,s,s,s,s),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,"\u0627\u0645\u0633\u062d \u0627\u0644\u0628\u062d\u062b",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.af,s))
return A.cf(s,s,A.cL(r,A.oR(A.v(s,A.K(u,B.i,B.e,B.h,0,s,s),B.f,s,s,new A.z(x,s,w,v,s,s,B.j),s,52,s,s,B.fT,s,s,s),new A.l6(16,16,s)),B.X),!0,s,s,!1,s,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.af,s)},
b0g(d,e){var x,w,v,u=this,t=null,s=A.a([],y.A)
if(e.gvb().length!==0)s.push(D.al5)
if(e.d.length!==0)s.push(D.bPK)
if(e.e.length!==0)s.push(D.bPL)
if(s.length===0)return new A.Q(D.aOX,A.d("\u0644\u0633\u0627 \u0645\u0627 \u0641\u064a \u0642\u0648\u0627\u0646\u064a\u0646 \u0628\u0647\u0627\u0644\u0645\u0644\u0641.",t,t,t,A.x(t,t,B.b2,t,t,t,t,t,14,t,B.x,t,1.5,t,t,t,t,t,t),B.V,t),t)
x=B.c.n(s,u.r)?u.r:B.c.gT(s)
w=y.p
v=A.a([],w)
if(s.length>1)B.c.t(v,A.a([B.a7,u.b0X(e,s,x)],w))
switch(x.a){case 0:s=u.aPK(d,e)
break
case 1:s=u.b0Z(e)
break
case 2:s=u.aWh(e)
break
default:s=t}B.c.t(v,s)
return A.G(v,B.H,t,B.e,B.h)},
b0X(a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=F.eG[B.m.ap(Math.abs(0),5)],h=new C.bSX(a0),g=A.u(20),f=C.RF(0.05),e=y.p,d=A.a([],e)
for(x=a1.length,w=y.O,v=i.a,u=i.b,t=y.W,s=y.V,r=0;r<a1.length;a1.length===x||(0,A.T)(a1),++r){q=a1[r]
p=q===a2
o=p?new A.bD(B.bR,B.co,B.Z,A.a([v,u],t),j,j):j
n=new A.b4(15,15)
m=p?A.a([new A.aG(0,B.G,v.N(0.28),B.ml,12)],s):j
l=h.$1(q).a
l=A.d(l,1,B.L,j,A.x(j,j,p?B.d:B.aI,j,j,j,j,j,13.5,j,B.n,j,1.35,j,j,j,j,j,j),j,j)
k=h.$1(q).b
o=A.ca(B.bs,A.fD(j,A.G(A.a([l,A.d(""+k,j,j,j,A.x(j,j,p?B.d.N(0.85):B.bm,j,j,j,j,j,11.5,j,B.n,j,1.3,j,j,j,j,j,j),j,j)],e),B.i,j,B.e,B.h),B.f,j,B.a3,new A.z(j,j,j,new A.bB(n,n,n,n),m,o,B.j),B.K,j,j,j,j,D.aRb,j,j),B.J,!1,new A.cD("stats-tab-"+q.b,w),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.bSW(this,q),j,j,j,j,j,j,!1,B.ah)
d.push(new A.cU(1,B.aS,new A.uv(new A.Zs(j,j,j,j,j,p,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.af,j),!0,!1,j,!1,!1,o,j),j))}return A.v(j,A.K(d,B.i,B.e,B.h,0,j,j),B.f,j,j,new A.z(B.d,j,j,g,f,j,B.j),j,j,j,j,B.nR,j,j,j)},
aPK(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a2.c,f=B.m.b7(this.f,0,g.length-1),e=g[f],d=y.p,a0=A.a([C.nG(g.length>1?"\u0627\u0644\u0648\u062d\u062f\u0627\u062a":"\u0627\u0644\u0648\u062d\u062f\u0629"),A.aF(A.pl(B.f,new C.bSK(this,g,f),g.length,D.bMh,h,h,B.b9,new C.bSL(),!1),118,h)],d)
if(e.gPX(0)===0)a0.push(new A.Q(D.aOW,A.d("\u0645\u0627 \u0641\u064a \u0642\u0648\u0627\u0646\u064a\u0646 \u0628\u0647\u0627\u0644\u0648\u062d\u062f\u0629.",h,h,h,A.x(h,h,B.b2,h,h,h,h,h,14,h,B.x,h,1.5,h,h,h,h,h,h),B.V,h),h))
for(x=e.d,w=x.length,v=Math.abs(e.a),u=y.W,t=e.c,s=t.length===0,r="\u0627\u0644\u0648\u062d\u062f\u0629 "+e.b,q=0,p=0;p<x.length;x.length===w||(0,A.T)(x),++p){o=x[p]
n=o.d
if(n.length!==0){m=F.eG[B.m.ap(v,5)]
l=new A.b4(4,4)
l=A.v(h,h,B.f,h,h,new A.z(h,h,h,new A.bB(l,l,l,l),h,new A.bD(B.bR,B.co,B.Z,A.a([m.a,m.b],u),h,h),B.j),h,22,h,h,h,h,h,4)
k=o.c
if(k.length===0)k=s?r:t
k=A.a([l,B.R,new A.cU(1,B.aS,C.iO(k,A.x(h,h,B.aI,h,h,h,h,h,17,h,B.n,h,1.35,h,h,h,h,h,h),h,h),h),A.d(""+n.length+" \u0642\u0627\u0646\u0648\u0646",h,h,h,A.x(h,h,B.bm,h,h,h,h,h,12,h,B.x,h,1.5,h,h,h,h,h,h),h,h)],d)
l=o.b
if(l>0){j=new A.b4(999,999)
B.c.t(k,A.a([B.O,A.v(h,A.d("\u0635 "+l,h,h,h,A.x(h,h,B.b2,h,h,h,h,h,11.5,h,B.x,h,1.4,h,h,h,h,h,h),h,h),B.f,h,h,new A.z(B.aF,h,h,new A.bB(j,j,j,j),h,h,B.j),h,h,h,h,E.uV,h,h,h)],d))}l=A.a([new A.Q(E.Oi,A.K(k,B.i,B.e,B.h,0,h,h),h)],d)
for(k=n.length,i=0;i<n.length;n.length===k||(0,A.T)(n),++i){++q
l.push(new C.O1(n[i],a2,q,!1,h))}B.c.t(a0,l)}}return a0},
b0n(d,e){var x,w,v,u=null,t=d.a,s=F.eG[B.m.ap(Math.abs(t),5)],r=e?s.gmL(0):u,q=e?u:B.d,p=A.u(22),o=e?A.a([new A.aG(0,B.G,s.a.N(0.32),B.c_,18)],y.V):C.RF(0.05),n=y.p,m=A.a([],n)
if(e)B.c.t(m,A.a([A.ex(0,A.dD(u,u,u,new C.GR(u),B.ag),0),A.cu(u,A.dD(u,u,u,new C.O4(t,0.3,u),B.ag),32,u,10,u,12,72)],n))
x=e?B.d.N(0.22):s.d
w=A.u(10)
v=""+d.b
x=A.v(B.q,A.d(v,u,u,u,A.x(u,u,e?B.d:s.c,u,u,u,u,u,15,u,B.a6,u,1.2,u,u,u,u,u,u),u,u),B.f,u,u,new A.z(x,u,u,w,u,u,B.j),u,30,u,u,u,u,u,30)
w=d.c
if(w.length===0)w="\u0627\u0644\u0648\u062d\u062f\u0629 "+v
w=A.d(w,2,B.L,u,A.x(u,u,e?B.d:B.aI,u,u,u,u,u,13,u,B.n,u,1.35,u,u,u,u,u,u),u,u)
v=d.gPX(0)
m.push(new A.Q(B.d7,A.G(A.a([x,B.bk,w,A.d(""+v+" \u0642\u0627\u0646\u0648\u0646",u,u,u,A.x(u,u,e?B.d.N(0.85):B.bm,u,u,u,u,u,11.5,u,B.x,u,1.4,u,u,u,u,u,u),u,u)],n),B.p,u,B.e,B.h),u))
return A.cf(!0,u,A.ca(u,A.fD(u,A.bv(B.a2,m,B.r,B.a8,u),B.X,u,B.a3,new A.z(q,u,u,p,o,r,B.j),B.eY,u,u,u,u,u,u,156),B.J,!1,new A.cD("stats-unit-"+t,y.O),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.bSZ(this,d),u,u,u,u,u,u,!1,B.ah),!0,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,B.af,u)},
b0Z(d){var x,w,v,u,t,s,r=y.p,q=A.a([],r)
for(x=d.d,w=x.length,v=Math.abs(0),u=0;u<x.length;x.length===w||(0,A.T)(x),++u){t=x[u]
s=B.m.ap(v,5)
B.c.t(q,A.a([C.coM(t,F.eG[s]),new C.O7(t,F.eG[s],!0,null)],r))}return q},
aWh(d){var x,w,v,u=A.a([C.nG("\u0645\u0633\u0627\u0626\u0644 \u0645\u062d\u0644\u0648\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641")],y.p)
for(x=d.e,w=x.length,v=0;v<x.length;x.length===w||(0,A.T)(x),++v)u.push(new C.O5(x[v],d,!1,null))
return u},
b0l(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.d5h(this.w),j=A.a([],y.v)
for(x=e.gvb(),w=x.length,v=0;v<x.length;x.length===w||(0,A.T)(x),++v){u=x[v]
if(C.d5f(u,k))j.push(u)}x=A.a([],y.t)
for(w=e.d,t=w.length,v=0;v<w.length;w.length===t||(0,A.T)(w),++v){s=w[v]
if(C.d5i(s,k))x.push(s)}w=A.a([],y.d)
for(t=e.e,r=t.length,v=0;v<t.length;t.length===r||(0,A.T)(t),++v){q=t[v]
if(C.d5g(q,k))w.push(q)}p=j.length===0&&x.length===0&&w.length===0
t=y.p
r=A.a([],t)
if(p)r.push(C.nG("\u0645\u0627 \u0644\u0642\u064a\u0646\u0627 \u0634\u064a \u0628\u0647\u0627\u0644\u0627\u0633\u0645"))
o=j.length
if(o!==0){o=A.a([C.nG("\u0644\u0642\u064a\u0646\u0627 "+o+" \u0642\u0627\u0646\u0648\u0646")],t)
for(n=j.length,v=0;v<j.length;j.length===n||(0,A.T)(j),++v)o.push(new C.O1(j[v],e,l,!0,l))
B.c.t(r,o)}if(x.length!==0){j=A.a([C.nG("\u0628\u0627\u0644\u062c\u062f\u0627\u0648\u0644")],t)
for(o=x.length,n=Math.abs(0),v=0;v<x.length;x.length===o||(0,A.T)(x),++v){s=x[v]
m=B.m.ap(n,5)
B.c.t(j,A.a([C.coM(s,F.eG[m]),new C.O7(s,F.eG[m],!0,l)],t))}B.c.t(r,j)}if(w.length!==0){j=A.a([C.nG("\u0628\u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629")],t)
for(x=w.length,v=0;v<w.length;w.length===x||(0,A.T)(w),++v)j.push(new C.O5(w[v],e,!1,l))
B.c.t(r,j)}return A.G(r,B.H,l,B.e,B.h)}}
C.O1.prototype={
B(a1){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.c,j=F.eG[B.m.ap(Math.abs(k.z),5)],i=A.u(22),h=C.RF(0.05),g=A.u(22),f=A.u(22),e=y.p,d=A.a([],e),a0=m.e
if(a0!=null){x=A.u(9)
B.c.t(d,A.a([A.v(B.q,A.d(A.f(a0),l,l,l,A.x(l,l,j.c,l,l,l,l,l,12.5,l,B.a6,l,1.2,l,l,l,l,l,l),l,l),B.f,l,l,new A.z(j.d,l,l,x,l,l,B.j),l,26,l,l,l,l,l,26),B.R],e))}a0=k.b
if(a0.length===0)a0="\u0642\u0627\u0646\u0648\u0646"
a0=A.a([C.iO(a0,A.x(l,l,B.aI,l,l,l,l,l,15,l,B.n,l,1.4,l,l,l,l,l,l),l,l)],e)
if(m.f&&k.at.length!==0)a0.push(C.iO(k.at,A.x(l,l,B.bm,l,l,l,l,l,11.5,l,B.x,l,1.4,l,l,l,l,l,l),l,l))
d.push(A.a_(A.G(a0,B.p,l,B.e,B.h),1,l))
d.push(B.O)
a0=j.c
d.push(A.ar(B.da,a0,l,18))
d=A.K(d,B.i,B.e,B.h,0,l,l)
x=A.u(16)
w=A.a([],e)
v=k.c
if(v.length!==0)w.push(C.ciC(v,B.q,B.aI,21))
else w.push(C.iO(k.d,A.x(l,l,B.aI,l,l,l,l,l,15,l,B.x,l,1.85,l,l,l,l,l,l),l,l))
for(v=k.w,u=v.length,t=0;t<v.length;v.length===u||(0,A.T)(v),++t)B.c.t(w,A.a([B.Q,C.cyl(v[t],j,16,B.b2)],e))
d=A.a([d,B.x3,A.v(l,A.G(w,B.i,l,B.e,B.h),B.f,l,l,new A.z(j.d,l,l,x,l,l,B.j),l,l,l,l,E.NC,l,l,l)],e)
x=k.x
if(x.length!==0){w=A.a([],e)
for(v=A.dM(x,0,A.fq(3,"count",y.S),A.a9(x).c),u=v.$ti,v=new A.c6(v,v.gC(0),u.i("c6<aq.E>")),u=u.i("aq.E");v.A();){s=v.d
if(s==null)s=u.a(s)
r=new A.b4(10,10)
q=new A.bg(E.nk,1,B.W,-1)
p=A.a([],e)
o=s.a
n=o.length!==0
if(n)p.push(new A.cl(B.q,l,l,new A.kK(B.bh,B.q,B.f,G.hT(o,a0,13),l),l))
if(n&&s.b.length!==0)p.push(B.ay)
s=s.b
if(s.length!==0)p.push(new A.d6(1,B.b3,A.d(C.cT2(s),1,B.L,l,A.x(l,l,B.b2,l,l,l,l,l,12,l,B.x,l,1.4,l,l,l,l,l,l),l,l),l))
w.push(A.v(l,A.K(p,B.i,B.e,B.D,0,l,l),B.f,l,l,new A.z(B.cb,l,new A.dK(q,q,q,q),new A.bB(r,r,r,r),l,l,B.j),l,l,l,l,H.lP,l,l,l))}a0=x.length
if(a0>3){x=A.u(10)
w.push(A.v(l,A.d("+"+(a0-3),l,l,l,A.x(l,l,B.bm,l,l,l,l,l,12,l,B.n,l,1.4,l,l,l,l,l,l),l,l),B.f,l,l,new A.z(B.cb,l,l,x,l,l,B.j),l,l,l,l,H.lP,l,l,l))}B.c.t(d,A.a([B.Q,A.ei(B.b4,w,B.bv,6,6,l)],e))}return new A.Q(B.d6,A.v(l,A.bX(!1,B.K,!0,g,A.aN(!1,f,!0,new A.Q(E.NI,A.G(d,B.H,l,B.e,B.h),l),l,!0,l,l,l,l,l,l,l,l,l,new C.b9H(m,a1),l,l,l,l,l,l,l),B.f,B.E,0,l,l,l,l,l,B.al),B.f,l,l,new A.z(B.d,l,l,i,h,l,B.j),l,l,l,l,l,l,l,l),new A.cD("stats-law-"+k.a,y.O))}}
C.al0.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.c,k=F.eG[B.m.ap(Math.abs(l.z),5)],j=n.d,i=j.bgh(l.a),h=n.b0i(0,d,k),g=y.p,f=A.a([],g),e=l.x
if(e.length!==0){x=C.nG("\u0634\u0648 \u0628\u062a\u0639\u0646\u064a \u0627\u0644\u0631\u0645\u0648\u0632")
w=A.a([],g)
for(v=k.c,u=k.d,t=0;s=e.length,t<s;++t){r=e[t]
s=t===s-1?m:E.HK
q=new A.b4(14,14)
p=r.a
p=p.length===0?B.rI:new A.kK(B.bh,B.q,B.f,new A.cl(B.q,m,m,new A.kK(B.bh,B.q,B.f,G.hT(p,v,19),m),m),m)
q=A.v(B.q,p,B.f,m,D.ant,new A.z(u,m,m,new A.bB(q,q,q,q),m,m,B.j),m,46,m,m,B.ia,m,m,m)
p=r.b
if(p.length===0)p="\u2014"
p=A.a([q,B.aK,new A.cU(1,B.aS,C.iO(p,A.x(m,m,B.aI,m,m,m,m,m,14.5,m,B.x,m,1.6,m,m,m,m,m,m),m,m),m)],g)
r=r.c
if(r.length!==0){q=new A.b4(10,10)
B.c.t(p,A.a([B.O,A.v(m,C.iO(r,A.x(m,m,B.b2,m,m,m,m,m,13,m,B.x,m,1.5,m,m,m,m,m,m),m,m),B.f,m,D.anm,new A.z(B.aF,m,m,new A.bB(q,q,q,q),m,m,B.j),m,m,m,m,B.hs,m,m,m)],g))}w.push(A.v(m,A.K(p,B.i,B.e,B.h,0,m,m),B.f,m,m,new A.z(m,m,s,m,m,m,B.j),m,m,m,m,B.uT,m,m,m))}B.c.t(f,A.a([x,C.aD_(A.G(w,B.i,m,B.e,B.h),M.uZ)],g))}e=l.c.length===0
if((e&&l.d.length!==0?"":l.d).length!==0||l.e.length!==0||l.f.length!==0){x=C.nG("\u0627\u0644\u0634\u0631\u062d")
w=A.a([],g)
if((e&&l.d.length!==0?"":l.d).length!==0){v=e&&l.d.length!==0?"":l.d
w.push(C.iO(v,A.x(m,m,B.aI,m,m,m,m,m,15,m,B.u,m,1.85,m,m,m,m,m,m),m,m))}v=l.e
u=v.length!==0
if(u){s=A.a([],g)
if((e&&l.d.length!==0?"":l.d).length!==0)s.push(B.U)
s.push(n.adG(E.qZ,"\u0645\u0646\u0633\u062a\u0639\u0645\u0644\u0647",v,k.d,m,k.c,B.b2))
B.c.t(w,s)}v=l.f
if(v.length!==0){s=A.a([],g)
if((e&&l.d.length!==0?"":l.d).length!==0||u)s.push(B.Q)
s.push(n.adG(L.D5,"\u0645\u0644\u0627\u062d\u0638\u0629",v,B.ev,B.nj,B.fM,B.i2))
B.c.t(w,s)}B.c.t(f,A.a([x,C.aD_(A.G(w,B.H,m,B.e,B.h),B.bo)],g))}if(i.length!==0){e=A.a([C.nG("\u0628\u0627\u0644\u0645\u0633\u0627\u0626\u0644 \u0627\u0644\u0645\u062d\u0644\u0648\u0644\u0629")],g)
for(x=i.length,o=0;o<i.length;i.length===x||(0,A.T)(i),++o)e.push(new C.O5(i[o],j,!0,m))
B.c.t(f,e)}l=l.y
if(l>0){j=j.b
j=j.length===0?"":" \xb7 "+j
f.push(new A.Q(D.aR4,A.K(A.a([D.PU,B.de,A.a_(A.d("\u0645\u0646 \u0627\u0644\u0645\u0644\u062e\u0635\u060c \u0635\u0641\u062d\u0629 "+l+j,m,m,m,A.x(m,m,B.bm,m,m,m,m,m,12,m,B.u,m,1.7,m,m,m,m,m,m),m,m),1,m)],g),B.i,B.e,B.h,0,m,m),m))}return A.cq(m,I.nv,A.dS(A.a([h,A.b7(new A.d2(D.tj,new A.Q(E.AQ,A.G(f,B.H,m,B.e,B.h),m),m),m,m)],g),m,B.ac,m,m,B.S,!1),m,m,m)},
b0i(d,e,f){var x,w,v,u,t,s=null,r=this.c,q=y.p,p=A.a([C.coK(B.d8,new C.b9I(e),"\u0631\u062c\u0648\u0639"),B.bk],q),o=r.y
if(o>0)p.push(C.ciH(o,!0))
p=A.K(p,B.i,B.e,B.h,0,s,s)
o=A.a(["\u0627\u0644\u0648\u062d\u062f\u0629 "+r.Q],y.s)
x=r.at
if(x.length!==0)o.push(x)
o=A.d(B.c.aF(o," \xb7 "),s,s,s,A.x(s,s,B.d.N(0.8),s,s,s,s,s,12.5,s,B.x,s,1.5,s,s,s,s,s,s),s,s)
x=r.b
if(x.length===0)x="\u0642\u0627\u0646\u0648\u0646"
x=A.a([p,B.at,o,C.iO(x,A.x(s,s,B.d,s,s,s,s,s,24,s,B.a6,s,1.35,s,s,s,s,s,s),B.d,s)],q)
if(r.ga2s().length!==0){p=r.ga2s()
o=B.d.N(0.18)
w=A.u(999)
v=A.a([],q)
B.c.t(v,A.a([A.ar(B.Wy,B.d,s,13),B.fb],q))
v.push(new A.d6(1,B.b3,A.d(p,s,s,s,A.x(s,s,B.d,s,s,s,s,s,11.5,s,B.n,s,1.3,s,s,s,s,s,s),s,s),s))
B.c.t(x,A.a([B.a1,new A.cl(B.b7,s,s,A.v(s,A.K(v,B.i,B.e,B.D,0,s,s),B.f,s,s,new A.z(o,s,s,w,s,s,B.j),s,s,s,s,O.ki,s,s,s),s)],q))}x.push(B.ai)
p=A.u(22)
o=A.a([new A.aG(0,B.G,B.o.N(0.12),B.c_,20)],y.V)
w=A.a([],q)
v=r.c
if(v.length!==0)w.push(C.ciC(v,B.q,B.aI,29))
else{v=r.d
if(v.length===0)v="\u2014"
w.push(C.iO(v,A.x(s,s,B.aI,s,s,s,s,s,17,s,B.x,s,1.9,s,s,s,s,s,s),s,s))}for(v=r.w,u=v.length,t=0;t<v.length;v.length===u||(0,A.T)(v),++t)B.c.t(w,A.a([B.at,E.Ne,B.at,C.cyl(v[t],f,22,B.aI)],q))
x.push(A.v(s,A.G(w,B.i,s,B.e,B.h),B.f,s,s,new A.z(B.d,s,s,p,o,s,B.j),s,s,s,s,P.v1,s,s,s))
return C.coN(e,64,A.G(x,B.H,s,B.e,B.h),r.z,D.bpK,f)},
adG(d,e,f,g,h,i,j){var x=null,w=A.u(14),v=h==null?x:A.ah(h,1),u=y.p
return A.v(x,A.K(A.a([new A.Q(B.f_,A.ar(d,i,x,17),x),B.fc,A.a_(A.G(A.a([A.d(e,x,x,x,A.x(x,x,i,x,x,x,x,x,12.5,x,B.n,x,1.5,x,x,x,x,x,x),x,x),C.iO(f,A.x(x,x,j,x,x,x,x,x,13.5,x,B.u,x,1.7,x,x,x,x,x,x),x,x)],u),B.p,x,B.e,B.h),1,x)],u),B.p,B.e,B.h,0,x,x),B.f,x,x,new A.z(g,x,v,w,x,x,B.j),x,x,x,x,B.ht,x,x,x)}}
C.O7.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=y.w,p=A.bh(d,B.e2,q).w.a.a<720
if(s.e&&p){q=A.a([],y.p)
for(x=s.c,w=x.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.T)(w),++u)q.push(s.aYG(w[u]))
x=x.c
if(x.length!==0)q.push(s.ahk(x))
return A.G(q,B.H,r,B.e,B.h)}x=s.c
w=B.c.eg(s.ajr(x.gj2(0)),0,new C.b9R())
q=A.bh(d,B.e2,q).w
v=y.p
t=A.a([],v)
if(w>q.a.a-32)t.push(new A.Q(D.aR2,A.K(A.a([D.aYc,B.ay,A.a_(A.d("\u0627\u0633\u062d\u0628 \u0627\u0644\u062c\u062f\u0648\u0644 \u0644\u062a\u0634\u0648\u0641 \u0643\u0644 \u0627\u0644\u0623\u0639\u0645\u062f\u0629 ("+x.gj2(0)+" \u0639\u0645\u0648\u062f)",1,B.L,r,A.x(r,r,B.bm,r,r,r,r,r,11.5,r,B.x,r,1.5,r,r,r,r,r,r),r,r),1,r)],v),B.i,B.e,B.h,0,r,r),r))
q=A.u(18)
w=C.RF(0.05)
t.push(A.v(r,A.eg(s.aKr(),r,r,r,!1,B.b9),B.X,r,r,new A.z(B.d,r,r,q,w,r,B.j),r,r,r,B.c9,r,r,r,r))
q=x.c
if(q.length!==0)t.push(s.ahk(q))
return A.G(t,B.H,r,B.e,B.h)},
aYG(d){var x,w,v,u,t,s,r,q,p=null,o=J.t(d),n=o.gab(d)?"":J.RW(o.gT(d)),m=A.aJ("^\\$[^$]+\\$$",!0,!1,!1),l=m.b.test(n)
m=this.c
x=m.gj2(0)
w=y.p
v=A.a([],w)
for(m=m.e,u=1;u<x;++u)if(u<o.gC(d)&&B.b.u(o.h(d,u)).length!==0){t=A.a([],w)
if(u<m.length&&B.b.u(m[u]).length!==0)B.c.t(t,A.a([new A.bY(100,p,C.iO(m[u],A.x(p,p,B.bm,p,p,p,p,p,11.5,p,B.n,p,1.9,p,p,p,p,p,p),p,p),p),B.ay],w))
t.push(new A.cU(1,B.aS,C.coJ(o.h(d,u),A.x(p,p,B.aI,p,p,p,p,p,13.5,p,B.u,p,1.75,p,p,p,p,p,p),p),p))
v.push(new A.Q(B.qi,A.K(t,B.p,B.e,B.h,0,p,p),p))}o=A.u(18)
t=C.RF(0.05)
s=A.a([],w)
r=n.length
if(r!==0){q=this.d
w=A.a([],w)
if(m.length!==0&&B.b.u(B.c.gT(m)).length!==0)w.push(C.iO(B.c.gT(m),A.x(p,p,B.bm,p,p,p,p,p,11,p,B.n,p,1.5,p,p,p,p,p,p),p,p))
w.push(l?C.ciC(B.b.Z(n,1,r-1),B.q,B.aI,19):C.iO(n,A.x(p,p,q.c,p,p,p,p,p,14.5,p,B.n,p,1.5,p,p,p,p,p,p),p,p))
s.push(A.v(p,A.G(w,B.H,p,B.e,B.h),B.f,q.d,p,p,p,p,p,p,B.d7,p,p,p))}if(v.length!==0)s.push(new A.Q(E.NL,A.G(v,B.i,p,B.e,B.h),p))
return A.v(p,A.G(s,B.H,p,B.e,B.h),B.X,p,p,new A.z(B.d,p,p,o,t,p,B.j),p,p,p,B.c9,p,p,p,p)},
ajr(d){var x,w,v,u,t=A.a([],y.n)
for(x=this.c,w=x.f,x=x.e,v=0;v<d;++v){u=v<x.length?Math.min(C.cvW(x[v]),120):0
t.push(B.k.b7(Math.max(u,B.c.eg(w,0,new C.b9Q(v)))+26,64,250))}return t},
aKr(){var x,w,v,u,t,s,r,q,p=this.c,o=p.gj2(0)
if(o===0)return B.rI
x=p.e
w=B.c.dC(x,new C.b9O())
v=this.ajr(o)
u=new C.b9P(this,o)
t=A.P(y.S,y.l)
for(s=0;s<o;++s)t.q(0,s,new C.adg(v[s]))
r=A.a([],y.T)
if(w)r.push(u.$2$head(x,!0))
for(p=p.f,q=0;q<p.length;++q)r.push(u.$2$odd(p[q],(q&1)===1))
return G.cw9(D.bxL,r,t,E.apE,E.Fb)},
ahk(d){var x=null
return new A.Q(D.aQU,A.K(A.a([D.bjn,B.O,A.a_(C.iO(d,A.x(x,x,B.b2,x,x,x,x,x,12.5,x,B.u,x,1.7,x,x,x,x,x,x),x,x),1,x)],y.p),B.p,B.e,B.h,0,x,x),x)}}
C.O5.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o=null,n=F.eG[B.m.ap(Math.abs(0),5)],m=this.c,l=A.a([],y.s),k=m.y.length
if(k!==0)l.push(""+k+" \u062e\u0637\u0648\u0629")
k=m.x.length
if(k!==0)l.push(""+k+" \u062c\u062f\u0648\u0644")
k=m.r.length
if(k!==0)l.push(""+k+" \u0646\u0627\u062a\u062c")
x=B.c.aF(l," \xb7 ")
l=A.u(22)
k=C.RF(0.05)
w=A.u(22)
v=A.u(22)
u=A.u(11)
t=n.c
u=A.v(B.q,A.d(""+(m.e+1),o,o,o,A.x(o,o,t,o,o,o,o,o,14,o,B.a6,o,1.2,o,o,o,o,o,o),o,o),B.f,o,o,new A.z(n.d,o,o,u,o,o,B.j),o,34,o,o,o,o,o,34)
s=y.p
r=A.a([C.iO(m.gva(0),A.x(o,o,B.aI,o,o,o,o,o,15,o,B.n,o,1.45,o,o,o,o,o,o),o,o)],s)
if(!this.e&&m.c.length!==0)B.c.t(r,A.a([B.cG,C.iO(m.c,A.x(o,o,B.b2,o,o,o,o,o,13,o,B.u,o,1.65,o,o,o,o,o,o),o,2)],s))
q=x.length===0
if(!q||m.d>0){p=A.a([],s)
q=!q
if(q)p.push(new A.d6(1,B.b3,A.d(x,o,o,o,A.x(o,o,B.bm,o,o,o,o,o,11.5,o,B.x,o,1.4,o,o,o,o,o,o),o,o),o))
if(q&&m.d>0)p.push(B.O)
q=m.d
if(q>0)p.push(C.ciH(q,!1))
B.c.t(r,A.a([B.a7,A.K(p,B.i,B.e,B.h,0,o,o)],s))}return new A.Q(B.d6,A.v(o,A.bX(!1,B.K,!0,w,A.aN(!1,v,!0,new A.Q(B.ql,A.K(A.a([u,T.mC,A.a_(A.G(r,B.p,o,B.e,B.h),1,o),B.ay,new A.Q(H.qh,A.ar(B.da,t,o,18),o)],s),B.p,B.e,B.h,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,new C.b9K(this,d,m),o,o,o,o,o,o,o),B.f,B.E,0,o,o,o,o,o,B.al),B.f,o,o,new A.z(B.d,o,o,l,k,o,B.j),o,o,o,o,o,o,o,o),new A.cD("stats-problem-"+m.a,y.O))}}
C.al2.prototype={
B(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=F.eG[B.m.ap(Math.abs(0),5)],g=this.c,f=this.d,e=f.bd8(g),d=y.p,a0=A.a([C.coK(B.d8,new C.b9L(a2),"\u0631\u062c\u0648\u0639"),B.bk],d),a1=g.d
if(a1>0)a0.push(C.ciH(a1,!0))
a0=C.coN(a2,60,A.G(A.a([A.K(a0,B.i,B.e,B.h,0,i,i),B.at,A.d("\u0645\u0633\u0623\u0644\u0629 \u0645\u062d\u0644\u0648\u0644\u0629 "+(g.e+1)+" \u0645\u0646 "+f.e.length,i,i,i,A.x(i,i,B.d.N(0.8),i,i,i,i,i,12.5,i,B.x,i,1.5,i,i,i,i,i,i),i,i),C.iO(g.gva(0),A.x(i,i,B.d,i,i,i,i,i,24,i,B.a6,i,1.35,i,i,i,i,i,i),B.d,i)],d),B.H,i,B.e,B.h),1,D.bpJ,h)
a1=A.a([],d)
x=g.c
if(x.length!==0)B.c.t(a1,A.a([C.nG("\u0646\u0635 \u0627\u0644\u0645\u0633\u0623\u0644\u0629"),C.aD_(C.iO(x,A.x(i,i,B.aI,i,i,i,i,i,15,i,B.u,i,1.9,i,i,i,i,i,i),i,i),B.bo)],d))
x=g.f
if(x.length!==0){w=C.nG("\u0627\u0644\u0645\u0637\u0644\u0648\u0628")
v=A.a([],d)
for(u=h.d,t=h.c,s=0;s<x.length;s=q){r=new A.b4(8,8)
q=s+1
v.push(new A.Q(B.qi,A.K(A.a([A.v(B.q,A.d(""+q,i,i,i,A.x(i,i,t,i,i,i,i,i,12,i,B.a6,i,1.2,i,i,i,i,i,i),i,i),B.f,i,i,new A.z(u,i,i,new A.bB(r,r,r,r),i,i,B.j),i,24,i,B.f_,i,i,i,24),B.R,new A.cU(1,B.aS,C.iO(x[s],A.x(i,i,B.aI,i,i,i,i,i,14.5,i,B.u,i,1.8,i,i,i,i,i,i),i,i),i)],d),B.p,B.e,B.h,0,i,i),i))}B.c.t(a1,A.a([w,C.aD_(A.G(v,B.i,i,B.e,B.h),B.hv)],d))}x=g.x
w=x.length
if(w!==0){v=A.a([C.nG(w>1?"\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u062d\u0644":"\u062c\u062f\u0648\u0644 \u0627\u0644\u062d\u0644")],d)
for(w=x.length,p=0;p<x.length;x.length===w||(0,A.T)(x),++p){o=x[p]
u=A.a([],d)
if(o.b.length!==0)u.push(C.coM(o,h))
u.push(new C.O7(o,h,!1,i))
B.c.t(v,u)}B.c.t(a1,v)}x=g.y
if(x.length!==0){w=C.nG("\u0627\u0644\u062d\u0644 \u062e\u0637\u0648\u0629 \u062e\u0637\u0648\u0629")
v=A.a([],d)
for(u=h.d,t=h.c,s=0;r=x.length,s<r;s=q){q=s+1
n=x[s]
r=s===r-1
m=A.a([],d)
if(!r)m.push(new A.Xf(13,30,i,0,i,A.v(i,i,B.f,E.nk,i,i,i,i,i,i,i,i,i,2),i))
r=r?8:18
l=new A.b4(10,10)
l=A.v(B.q,A.d(""+q,i,i,i,A.x(i,i,t,i,i,i,i,i,13,i,B.a6,i,1.2,i,i,i,i,i,i),i,i),B.f,i,i,new A.z(u,i,i,new A.bB(l,l,l,l),i,i,B.j),i,28,i,i,i,i,i,28)
k=A.a([],d)
j=n.a
if(j.length!==0)k.push(C.iO(j,A.x(i,i,B.b2,i,i,i,i,i,13.5,i,B.n,i,2,i,i,i,i,i,i),i,i))
j=n.b
if(j.length!==0)k.push(C.iO(j,A.x(i,i,B.aI,i,i,i,i,i,14.5,i,B.u,i,1.85,i,i,i,i,i,i),i,i))
n=n.c
if(n.length!==0){j=new A.b4(12,12)
k.push(new A.Q(B.qi,A.v(i,new A.cl(B.aL,i,i,new A.kK(B.bh,B.q,B.f,G.hT(n,B.aI,18),i),i),B.f,i,i,new A.z(u,i,i,new A.bB(j,j,j,j),i,i,B.j),i,i,i,i,B.dy,i,i,i),i))}m.push(new A.Q(new A.O(0,0,0,r),A.K(A.a([l,B.aK,new A.cU(1,B.aS,A.G(k,B.H,i,B.e,B.h),i)],d),B.p,B.e,B.h,0,i,i),i))
v.push(new A.iW(B.a2,i,B.a8,B.r,m,i))}B.c.t(a1,A.a([w,C.aD_(A.G(v,B.i,i,B.e,B.h),B.NJ)],d))}x=g.r
if(x.length!==0)B.c.t(a1,A.a([C.nG("\u0627\u0644\u0646\u0648\u0627\u062a\u062c"),this.aBl(x,h)],d))
if(e.length!==0){x=A.a([C.nG("\u0627\u0644\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0633\u062a\u0639\u0645\u0644\u0629")],d)
for(w=e.length,p=0;p<e.length;e.length===w||(0,A.T)(e),++p)x.push(new C.O1(e[p],f,i,!1,i))
B.c.t(a1,x)}return A.cq(i,I.nv,A.dS(A.a([a0,A.b7(new A.d2(D.tj,new A.Q(E.AQ,A.G(a1,B.H,i,B.e,B.h),i),i),i,i)],d),i,B.ac,i,i,B.S,!1),i,i,i)},
aBl(d,e){var x,w,v=null,u=e.gmL(0),t=A.u(22),s=A.a([new A.aG(0,B.G,e.a.N(0.3),B.c_,18)],y.V),r=A.ex(0,A.dD(v,v,v,new C.GR(v),B.ag),0),q=y.p,p=A.a([],q)
for(x=0;x<d.length;++x){w=A.a([],q)
if(x>0)w.push(new A.mN(18,v,v,v,B.d.N(0.22),v))
w.push(C.coJ(d[x],A.x(v,v,B.d,v,v,v,v,v,16.5,v,B.n,v,1.7,v,v,v,v,v,v),B.d))
B.c.t(p,w)}return A.v(v,A.bv(B.a2,A.a([r,new A.Q(B.lM,A.G(p,B.H,v,B.e,B.h),v)],q),B.r,B.a8,v),B.X,v,v,new A.z(v,v,v,t,s,u,B.j),v,v,v,v,v,v,v,v)}}
C.O4.prototype={
aw(b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=$.aH(),b0=A.aU(),b1=this.c
b0.r=B.d.N(b1).gv(0)
b0.b=B.bp
b0.c=1.6
b0.d=B.dZ
b0.e=B.x6
x=A.aU()
x.r=B.d.N(Math.min(1,b1*1.3)).gv(0)
switch(B.m.ap(this.b,5)){case 1:w=b3.b
v=w*0.88
u=w*0.12
t=new C.b9J()
s=A.d0(a9.w)
for(a9=b3.a,w=s.e,r=v-u,q=0;q<=a9;q+=2){p=v-r*t.$1(q/a9)
if(q===0){o=new A.fw(q,p)
w.push(o)
n=s.d
if(n!=null)o.e9(n)}else{o=new A.cI(q,p)
w.push(o)
n=s.d
if(n!=null)o.e9(n)}}b2.eD(s,b0)
w=b2.a
w.iw(new A.F(0,v),new A.F(a9,v),b0)
o=a9*0.5
w.iw(new A.F(o,v),new A.F(o,u),b0)
$.aH()
m=A.aU()
m.r=B.d.N(b1*0.55).gv(0)
m.b=B.bp
m.c=1.2
for(b1=[0.34,0.66],n=w.a,l=0;l<2;++l){k=b1[l]
j=a9*k
i=t.$1(k)
h=m.dk()
n.drawLine.apply(n,[j,v,j,v-r*i,h])
h.delete()}w.cY(new A.F(o,u),3,x)
break
case 2:g=new A.Qj()
g.Ln(11)
for(a9=b3.a,b1=b3.b,w=b2.a,r=w.a,f=0;f<13;++f){o=g.vj()
h=x.dk()
r.drawCircle(a9*(0.06+0.88*f/12),b1*(0.82-0.64*f/12)+(o-0.5)*b1*0.26,2.4,h)
h.delete()}w.iw(new A.F(0,b1*0.9),new A.F(a9,b1*0.1),b0)
break
case 3:a9=b3.a*0.5
b1=b3.b*0.5
e=new A.F(a9,b1)
d=b3.ghf()*0.46
w=b2.a
w.cY(e,d,b0)
for(r=[0.07,0.2,0.4,0.17,0.16],o=w.a,a0=-1.5707963267948966,l=0;l<5;++l){k=r[l]
n=Math.cos(a0)
j=Math.sin(a0)
h=b0.dk()
o.drawLine.apply(o,[a9,b1,a9+n*d,b1+j*d,h])
h.delete()
a0+=k*2*3.141592653589793}w.cY(e,3,x)
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
r.cE(new A.ae(a3,w,a5,b1),b0)
r.iw(new A.F(a4,w),new A.F(a4,b1),b0)
b1=a9*0.04
r.iw(new A.F(b1,a1),new A.F(a3,a1),b0)
a9*=0.96
r.iw(new A.F(a5,a1),new A.F(a9,a1),b0)
for(a9=[b1,a9],b1=a2*0.28,w=a1-b1,b1=a1+b1,r=r.a,l=0;l<2;++l){q=a9[l]
h=b0.dk()
r.drawLine.apply(r,[q,w,q,b1,h])
h.delete()}break
default:w=b3.b
v=w*0.92
a6=b3.a/6
a7=A.d0(a9.w)
for(a9=a7.e,w=v-w*0.06,r=b2.a.a,o=a6/2,f=0;f<6;f=a8){u=v-w*D.Rj[f]
n=f*a6
a8=f+1
h=b0.dk()
r.drawRect(A.fg(new A.ae(n+1.5,u,a8*a6-1.5,v)),h)
h.delete()
n+=o
if(f===0){n=new A.fw(n,u)
a9.push(n)
j=a7.d
if(j!=null)n.e9(j)}else{n=new A.cI(n,u)
a9.push(n)
j=a7.d
if(j!=null)n.e9(j)}}b0.r=B.d.N(b1*1.2).gv(0)
b2.eD(a7,b0)
for(f=0;f<6;++f){a9=D.Rj[f]
h=x.dk()
r.drawCircle(f*a6+o,v-w*a9,2.6,h)
h.delete()}}},
d0(d){return d.b!==this.b||d.c!==this.c}}
C.GR.prototype={
aw(d,e){var x,w,v=$.aH(),u=A.aU()
u.r=B.d.N(0.1).gv(0)
v=A.d0(v.w)
v.aq(new A.fw(0,0))
x=e.a
v.aq(new A.cI(x*0.2,0))
w=e.b
v.aq(new A.cI(x*0.11,w))
v.aq(new A.cI(0,w))
v.aq(new A.kH())
d.eD(v,u)},
d0(d){return!1}}
C.al4.prototype={
mJ(d){var x,w=d.b,v=A.d0($.aH().w),u=w-46
v.aq(new A.cI(0,u))
x=d.a
v.aq(new A.kV(x*0.25,w-4,x*0.5,w-26))
v.aq(new A.kV(x*0.75,u,x,w-12))
v.aq(new A.cI(x,0))
v.aq(new A.kH())
return v},
nQ(d){return!1}}
var z=a.updateTypes(["V(O6)","A(A,O3)","V(uC)","V(xu)","V(GS)","rr(e)","e(xu)","e(uC)","~()","bF(rr)","+(e,A)(CE)","kx(H<e>{head:V,odd:V})","aA(nW)"])
C.c1i.prototype={
$2(d,e){return new A.b3(A.f(d),e,y.I)},
$S:987}
C.c21.prototype={
$1(d){return d.length===0},
$S:7}
C.b9U.prototype={
$2(d,e){return d+e.d.length},
$S:z+1}
C.b9T.prototype={
$2(d,e){var x=J.t(e)
return x.gC(e)>d?x.gC(e):d},
$S:314}
C.b9S.prototype={
$1(d){return d.length===0},
$S:7}
C.b9B.prototype={
$1(d){return d.b.length===0},
$S:z+2}
C.b9C.prototype={
$1(d){return d.a.length===0&&d.b.length===0},
$S:z+3}
C.b9D.prototype={
$1(d){return d.gab(0)},
$S:z+0}
C.b9E.prototype={
$1(d){return d.gab(0)},
$S:z+0}
C.b9F.prototype={
$1(d){return d.a.length===0&&d.b.length===0&&d.c.length===0},
$S:z+4}
C.b9M.prototype={
$1(d){return C.cT1(B.b0.lp(0,d,null))},
$S:z+5}
C.b9N.prototype={
$1(d){$.cmr=null
throw A.m(d)},
$S:254}
C.ciJ.prototype={
$1(d){return d.length!==0},
$S:7}
C.ciD.prototype={
$1(d){return d.b+" "+d.c},
$S:z+6}
C.ciE.prototype={
$1(d){return d.b},
$S:z+7}
C.ciF.prototype={
$1(d){var x,w
if(B.b.n(this.a,d))return!0
x=A.aJ("[\\\\{}_^\\s$]",!0,!1,!1)
w=A.b2(d.toLowerCase(),x,"")
x=w.length
if(x===0)return!1
if(!this.b.n(0,w))x=x>=2&&B.b.n(this.c,w)
else x=!0
return x},
$S:7}
C.ciK.prototype={
$1(d){return J.J9(d," ")},
$S:989}
C.ciL.prototype={
$1(d){var x=A.aJ("[\\\\{}_^\\s$]",!0,!1,!1),w=A.b2(d.toLowerCase(),x,"")
if(!B.b.n(this.a,d))x=w.length>=2&&B.b.n(this.b,w)
else x=!0
return x},
$S:7}
C.bSO.prototype={
$0(){return this.a.e=null},
$S:0}
C.bSP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.bSN(x,d))},
$S:z+9}
C.bSN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bSQ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new C.bSM(x,d))},
$S:55}
C.bSM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bSH.prototype={
$0(){var x=this.a.c
x.toString
return A.a2(x,!1).fh()},
$S:0}
C.bSI.prototype={
$1(d){return d.a>0},
$S:990}
C.bSJ.prototype={
$0(){return A.a2(this.a,!1).fh()},
$S:0}
C.bST.prototype={
$1(d){var x=this.a
return x.p(new C.bSS(x,d))},
$S:8}
C.bSS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.bSU.prototype={
$0(){var x=this.a
return x.p(new C.bSR(x))},
$S:0}
C.bSR.prototype={
$0(){var x=this.a
x.w=""
x.x.jH(0,B.l7)},
$S:0}
C.bSX.prototype={
$1(d){var x
switch(d.a){case 0:x=new A.a7("\u0627\u0644\u0642\u0648\u0627\u0646\u064a\u0646",this.a.gvb().length)
break
case 1:x=new A.a7("\u0627\u0644\u062c\u062f\u0627\u0648\u0644",this.a.d.length)
break
case 2:x=new A.a7("\u0645\u0633\u0627\u0626\u0644 \u0645\u062d\u0644\u0648\u0644\u0629",this.a.e.length)
break
default:x=null}return x},
$S:z+10}
C.bSW.prototype={
$0(){var x=this.a
return x.p(new C.bSV(x,this.b))},
$S:0}
C.bSV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bSL.prototype={
$2(d,e){return B.R},
$S:50}
C.bSK.prototype={
$2(d,e){return this.a.b0n(this.b[e],e===this.c)},
$S:61}
C.bSZ.prototype={
$0(){var x=this.a
return x.p(new C.bSY(x,this.b))},
$S:0}
C.bSY.prototype={
$0(){return this.a.f=this.b.a},
$S:0}
C.b9H.prototype={
$0(){var x=this.a
return C.coL(this.b,new C.al0(x.c,x.d,null))},
$S:0}
C.b9G.prototype={
$1(d){return d.length!==0},
$S:7}
C.b9I.prototype={
$0(){return A.a2(this.a,!1).fh()},
$S:0}
C.b9R.prototype={
$2(d,e){return d+e},
$S:98}
C.b9Q.prototype={
$2(d,e){var x=this.a,w=J.t(e)
return x<w.gC(e)?Math.max(d,C.cvW(w.h(e,x))):d},
$S:991}
C.b9O.prototype={
$1(d){return B.b.u(d).length!==0},
$S:7}
C.b9P.prototype={
$3$head$odd(d,e,f){var x,w,v,u,t,s,r=null
if(e)x=this.a.d.d
else x=f?D.aJA:r
w=A.a([],y.p)
for(v=this.b,u=this.a.d.c,t=0;t<v;++t){s=t<d.length?d[t]:""
w.push(new A.Q(H.qj,C.coJ(s,e?A.x(r,r,u,r,r,r,r,r,12.5,r,B.n,r,1.5,r,r,r,r,r,r):A.x(r,r,B.aI,r,r,r,r,r,12.5,r,B.u,r,1.6,r,r,r,r,r,r),r),r))}return new G.kx(new A.z(x,r,r,r,r,r,B.j),w)},
$1(d){return this.$3$head$odd(d,!1,!1)},
$2$head(d,e){return this.$3$head$odd(d,e,!1)},
$2$odd(d,e){return this.$3$head$odd(d,!1,e)},
$S:z+11}
C.b9K.prototype={
$0(){return C.coL(this.b,new C.al2(this.c,this.a.d,null))},
$S:0}
C.b9L.prototype={
$0(){return A.a2(this.a,!1).fh()},
$S:0}
C.ciI.prototype={
$1(d){return S.cBN(this.a)},
$S:17}
C.b9J.prototype={
$1(d){return Math.exp(-Math.pow((d-0.5)/0.16,2)/2)},
$S:2}
C.c1k.prototype={
$1(d){var x=null
return A.d(this.a,x,x,x,this.b,x,B.az)},
$S:z+12}
C.ciN.prototype={
$2(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a8.b,a2=A.a([],y.s),a3=A.qi(this.a,$.cq5(),new C.ciM(a2),a0),a4=A.aJ("\ue000(\\d+)\ue001",!0,!1,!1),a5=y.p,a6=A.a([],a5)
for(x=a3.split("\n"),w=x.length,v=this.b,u=this.c,t=y.F,s=isFinite(a1),r=0;r<x.length;x.length===w||(0,A.T)(x),++r){q=x[r]
if(a6.length!==0)a6.push(new A.bY(s?a1:0,0,a0,a0))
for(p=B.b.l4(q,A.aJ("[ \\t]+",!0,!1,!1)),o=p.length,n=0;n<p.length;p.length===o||(0,A.T)(p),++n){m=p[n]
l=m.length
if(l===0)continue
if(!A.iy(m,"\ue000",0)){l=$.aDb()
if(!l.b.test(m)){l=$.aDf()
l=!l.b.test(m)}else l=!0
a6.push(A.d(m,a0,a0,a0,v,a0,l?B.P:B.az))
continue}k=A.a([],a5)
for(j=a4.kF(0,m),j=new A.ow(j.a,j.b,j.c),i=0;j.A();){h=j.d
g=(h==null?t.a(h):h).b
f=g.index
if(f>i){e=B.b.Z(m,i,f)
d=$.aDb()
if(!d.b.test(e)){d=$.aDf()
d=!d.b.test(e)}else d=!0
k.push(A.d(e,a0,a0,a0,v,a0,d?B.P:B.az))}d=g[1]
d.toString
k.push(C.cZn(a2[A.dA(d,a0)],v,u,a1))
i=f+g[0].length}if(i<l){e=B.b.bo(m,i)
l=$.aDb()
if(!l.b.test(e)){l=$.aDf()
l=!l.b.test(e)}else l=!0
k.push(A.d(e,a0,a0,a0,v,a0,l?B.P:B.az))}a6.push(k.length===1?B.c.gT(k):A.K(k,B.i,B.e,B.D,0,a0,B.P))}}a5=v.r
return A.ei(B.b4,a6,B.la,0,(a5==null?14:a5)*0.28,B.P)},
$S:290}
C.ciM.prototype={
$1(d){var x=this.a,w=d.cm(1)
w.toString
x.push(w)
return"\ue000"+(x.length-1)+"\ue001"},
$S:62}
C.ciO.prototype={
$1(d){var x,w=d.cm(1)
w.toString
x=A.aJ("\\\\[a-zA-Z]+|[{}^_\\\\]",!0,!1,!1)
return A.b2(w,x," ")},
$S:62};(function installTearOffs(){var x=a._instance_0u
x(C.a6b.prototype,"gb0k","ahj",8)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.adg,G.uG)
w(A.hk,[C.c1i,C.b9U,C.b9T,C.bSL,C.bSK,C.b9R,C.b9Q,C.ciN])
w(A.fh,[C.c21,C.b9S,C.b9B,C.b9C,C.b9D,C.b9E,C.b9F,C.b9M,C.b9N,C.ciJ,C.ciD,C.ciE,C.ciF,C.ciK,C.ciL,C.bSP,C.bSQ,C.bSI,C.bST,C.bSX,C.b9G,C.b9O,C.b9P,C.ciI,C.b9J,C.c1k,C.ciM,C.ciO])
w(A.ac,[C.xu,C.uC,C.rs,C.O3,C.al3,C.O6,C.GS,C.al1,C.rr])
x(C.CE,A.jl)
x(C.O2,A.a1)
x(C.a6b,A.a8)
w(A.fZ,[C.bSO,C.bSN,C.bSM,C.bSH,C.bSJ,C.bSS,C.bSU,C.bSR,C.bSW,C.bSV,C.bSZ,C.bSY,C.b9H,C.b9I,C.b9K,C.b9L])
w(A.a3,[C.O1,C.al0,C.O7,C.O5,C.al2])
w(A.qC,[C.O4,C.GR])
x(C.al4,A.yZ)})()
A.hF(b.typeUniverse,JSON.parse('{"adg":{"uG":[]},"O2":{"a1":[],"i":[]},"a6b":{"a8":["O2"]},"O1":{"a3":[],"i":[]},"al0":{"a3":[],"i":[]},"O7":{"a3":[],"i":[]},"O5":{"a3":[],"i":[]},"al2":{"a3":[],"i":[]},"O4":{"b_":[]},"GR":{"b_":[]},"al4":{"b_":[]}}'))
var y=(function rtii(){var x=A.af
return{V:x("J<aG>"),W:x("J<C>"),E:x("J<H<e>>"),G:x("J<+(A,e)>"),q:x("J<uC>"),v:x("J<rs>"),B:x("J<O3>"),d:x("J<al1>"),K:x("J<GS>"),X:x("J<xu>"),t:x("J<O6>"),J:x("J<al3>"),s:x("J<e>"),T:x("J<kx>"),p:x("J<i>"),A:x("J<CE>"),n:x("J<Y>"),j:x("H<@>"),I:x("b3<e,@>"),f:x("aj<@,@>"),w:x("hL"),P:x("bF"),F:x("un"),b:x("rr"),x:x("rs"),N:x("e"),l:x("uG"),O:x("cD<e>"),Y:x("aw<+(A,e)>"),z:x("@"),S:x("A"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.tj=new A.aB(0,820,0,1/0)
D.anh=new A.aB(0,150,0,1/0)
D.anm=new A.aB(0,110,0,1/0)
D.ant=new A.aB(48,140,0,1/0)
D.aJA=new A.C(1,0.9803921568627451,0.984313725490196,0.9921568627450981,B.l)
D.aOW=new A.O(0,24,0,0)
D.aOX=new A.O(0,30,0,0)
D.aQU=new A.O(2,0,2,10)
D.aR2=new A.O(4,0,4,6)
D.aR4=new A.O(4,20,4,0)
D.aR5=new A.O(4,22,4,0)
D.aR6=new A.O(4,22,4,10)
D.aRb=new A.O(4,8,4,8)
D.PU=new A.ak(B.d9,14,B.bm,null,null)
D.bcv=new A.bH(62460,"Lucide","lucide_icons",!1)
D.aYc=new A.ak(D.bcv,14,B.bm,null,null)
D.Rj=x([0.28,0.55,0.92,0.64,0.38,0.18],y.n)
D.biX=new A.Q(B.f_,D.PU,null)
D.bjj=new A.Q(B.v5,E.Q2,null)
D.bjn=new A.Q(N.Nv,E.Q4,null)
D.bpJ=new A.ae(70,4,220,44)
D.bpK=new A.ae(78,4,228,42)
D.bpN=new A.ae(-12,34,138,118)
D.bxL=new G.a_v(E.yG,E.yG)
D.bMe=new A.cD("stats-search",y.O)
D.bMh=new A.cD("stats-units",y.O)
D.al5=new C.CE(0,"laws")
D.bPK=new C.CE(1,"tables")
D.bPL=new C.CE(2,"problems")})();(function staticFields(){$.cmr=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dfU","cI6",()=>A.aJ("\\$([^$]+)\\$",!0,!1,!1))
x($,"dde","aDb",()=>A.aJ("[\u0600-\u06ff\u0750-\u077f\ufb50-\ufdff\ufe70-\ufeff]",!0,!1,!1))
x($,"dev","aDf",()=>A.aJ("[A-Za-z0-9\u0660-\u0669]",!0,!1,!1))
x($,"dfj","cq5",()=>A.aJ("\\$([^$]+)\\$",!0,!1,!1))})()};
(a=>{a["acEGQo6mZltdA9QEcDXw/PwSNKw="]=a.current})($__dart_deferred_initializers__);
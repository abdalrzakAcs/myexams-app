((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
cBQ(d,e){if(C.b.n(e,"\u0646\u0648\u0627\u0633"))return 0
if(C.b.n(e,"\u0642\u0646\u0648\u064a")||C.b.n(e,"\u0627\u0644\u0642\u062f\u0645"))return 1
if(C.b.n(e,"\u062a\u0648\u062a\u0631")||C.b.n(e,"\u0634\u0639\u0631\u064a"))return 2
if(C.b.n(e,"\u0631\u0637\u0648\u0628"))return 3
if(C.b.n(e,"\u0643\u062b\u0627\u0641"))return 4
return C.m.am(Math.abs(d),5)},
d4J(d,e){return new B.agL(d,e,null)},
agM(d,e){var y=d.a,x=d.b,w=Math.min(y,x*e)
return A.Gf(new A.F(y/2,x/2),Math.min(x,w/e),w)},
agL:function agL(d,e,f){this.b=d
this.c=e
this.a=f},
d_k(d,e){return e.length===0?0:B.cBQ(d-1,e)}},D
J=c[1]
A=c[0]
C=c[2]
E=c[41]
B=a.updateHolder(c[35],B)
D=c[9]
B.agL.prototype={
aw(d,e){var y,x,w,v,u=this
$.aG()
y=A.aS()
x=u.c
y.r=C.d.N(x).gv(0)
y.b=C.bk
y.c=1.6
y.d=C.du
y.e=C.rN
w=A.aS()
w.r=C.d.N(x*0.6).gv(0)
w.b=C.bk
w.c=1.1
w.d=C.du
v=A.aS()
v.r=C.d.N(Math.min(1,x*1.3)).gv(0)
switch(C.m.am(u.b,5)){case 1:u.aDx(d,B.agM(e,3.4),y,w)
break
case 2:u.aDI(d,B.agM(e,2),y,w,v)
break
case 3:u.aOR(d,B.agM(e,1.6),y,w,v)
break
case 4:u.aCz(d,B.agM(e,1.25),y,w,v)
break
default:u.aVt(d,B.agM(e,1.4),y,w,v)}},
aVt(d,e,f,g,h){var y,x,w,v,u,t,s,r,q,p,o=e.c,n=e.a,m=o-n,l=e.b,k=e.d-l,j=l+k*0.08,i=m*0.14
o-=i
y=d.a
y.eG(new A.F(n+i,j),new A.F(o,j),f)
for(x=n+m*0.18,n=m*0.09,i=m*0.05,w=y.a;x<o;x+=n){v=g.cF()
w.drawLine.apply(w,[x,j,x+i,l,v])
v.delete()}o=e.gbB().a
u=new A.F(o,j)
t=k*0.72
s=Math.max(2.5,k*0.085)
for(n=k*0.09,o+=0,l=k*0.045,r=0;r<t;r+=n){i=Math.min(t,r+l)
v=g.cF()
w.drawLine.apply(w,[o,j+r,o,j+i,v])
v.delete()}q=u.a_(0,new A.F(t*Math.sin(0.4537856055185257),t*Math.cos(0.4537856055185257)))
p=u.a_(0,new A.F(-t*Math.sin(0.4537856055185257),t*Math.cos(0.4537856055185257)))
y.eG(u,q,g)
y.cM(q,s,g)
y.eG(u,p,f)
y.cM(p,s,f)
y.cM(p,s*0.38,h)
y.uS(A.lz(u,t),1.117010721276371,0.9075712110370514,!1,g)
y.uS(A.lz(u,t*0.28),1.5707963267948966,0.4537856055185257,!1,g)
y.cM(u,2.2,h)},
aDx(d,e,f,a0){var y,x,w,v,u,t,s,r,q,p=e.a,o=e.c-p,n=e.b,m=e.d-n,l=o*0.05,k=p+l,j=n+m*0.24,i=n+m*0.44,h=m*0.03,g=d.a
g.em(A.mq(new A.ae(k,j,p+o*0.98,i),new A.b0(h,h)),f)
for(y=g.a,x=p+o*0.95,w=p+o*0.16,v=0;v<=36;++v){u=w+v*o*0.022
if(u>x)break
t=C.m.am(v,5)===0?0.31:0.37
s=a0.cF()
y.drawLine.apply(y,[u,i,u,n+m*t,s])
s.delete()}x=$.aG().w
w=A.cG(x)
w.ad(new A.ew(k,i))
k=o*0.09
t=n+m*0.97
w.ad(new A.cg(p+k,t))
r=p+o*0.14
w.ad(new A.cg(r,t))
w.ad(new A.cg(r,i))
d.dP(w,f)
x=A.cG(x)
x.ad(new A.ew(p+o*0.1,j))
h=n+h
x.ad(new A.cg(p+o*0.135,h))
w=o*0.15
x.ad(new A.cg(p+w,j))
d.dP(x,f)
q=p+o*0.44
p=n+m*0.17
x=n+m*0.51
j=m*0.04
g.em(A.mq(new A.ae(q,p,q+o*0.21,x),new A.b0(j,j)),f)
for(j=q+o*0.02,v=0;v<=10;++v){u=j+v*o*0.017
i=C.m.am(v,5)===0?0.42:0.46
s=a0.cF()
y.drawLine.apply(y,[u,x,u,n+m*i,s])
s.delete()}j=$.aG().w
i=A.cG(j)
i.ad(new A.ew(q,x))
i.ad(new A.cg(q,t))
i.ad(new A.cg(q+l,t))
i.ad(new A.cg(q+k,x))
d.dP(i,f)
j=A.cG(j)
j.ad(new A.ew(q,p))
j.ad(new A.cg(q+o*0.012,h))
j.ad(new A.cg(q+o*0.035,p))
d.dP(j,f)
w=q+w
g.cM(new A.F(w,n+m*0.1),m*0.055,a0)
g.eG(new A.F(w,n+m*0.155),new A.F(w,p),a0)},
aDI(a4,a5,a6,a7,a8){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a5.a,f=a5.c-g,e=a5.b,d=a5.d-e,a0=$.aG().w,a1=A.cG(a0),a2=f*0.03,a3=e+d*0.3
a1.ad(new A.ew(g+a2,a3))
y=e+d*0.96
a1.ad(new A.cg(g+f*0.05,y))
a1.ad(new A.cg(g+f*0.55,y))
a1.ad(new A.cg(g+f*0.57,a3))
a4.dP(a1,a6)
a1=e+d*0.62
y=a4.a
y.eG(new A.F(g+f*0.045,a1),new A.F(g+f*0.555,a1),a7)
for(a1=[new A.ep(g+f*0.22,f*0.016,0.26),new A.ep(g+f*0.38,a2,0.42)],x=y.a,w=e+d*0.04,v=e+d*0.86,u=0;u<2;++u){t=a1[u]
s=t.a
r=t.b
q=t.c
t=s-r
p=a6.cF()
x.drawLine.apply(x,[t,w,t,v,p])
p.delete()
o=s+r
p=a6.cF()
x.drawLine.apply(x,[o,w,o,v,p])
p.delete()
n=A.cG(a0)
m=e+d*q
t=new A.ew(t,m)
l=n.e
l.push(t)
k=n.d
if(k!=null)t.dS(k)
t=new A.kw(s,e+d*(q+0.07),o,m)
l.push(t)
o=n.d
if(o!=null)t.dS(o)
t=n.geW()
p=a7.cF()
t=t.a
t===$&&A.b()
t=t.a
t.toString
x.drawPath(t,p)
p.delete()}j=g+f*0.8
g=j-a2
a1=e+d*0
y.eG(new A.F(g,a1),new A.F(g,a3),a6)
a2=j+a2
y.eG(new A.F(a2,a1),new A.F(a2,a3),a6)
a1=f*0.008
x=e+d*0.42
y.eG(new A.F(g,a3),new A.F(j-a1,x),a6)
y.eG(new A.F(a2,a3),new A.F(j+a1,x),a6)
y.cM(new A.F(j,e+d*0.46),Math.max(1.4,d*0.03),a8)
i=d*0.1
h=e+d*0.8
a0=A.cG(a0)
e=h-i*1.9
a0.ad(new A.ew(j,e))
y=i*0.25
x=h-i*1.3
a1=j+i
a3=h-i*0.75
a0.ad(new A.nS(j+y,x,a1,a3,a1,h))
a1=j-i
a0.a_G(new A.F(a1,h),!0,new A.b0(i,i))
a0.ad(new A.nS(a1,a3,j-y,x,j,e))
a4.dP(a0,a6)},
aOR(a6,a7,a8,a9,b0){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a7.a,a0=a7.c-d,a1=a7.b,a2=a7.d-a1,a3=a2*0.11,a4=Math.max(4,a3),a5=Math.max(3,a3)
a3=a1+a2*0.03
y=a6.a
y.eG(new A.F(d+a0*0.16,a3),new A.F(d+a0*0.84,a3),a9)
for(a3=[new A.a6(d+a0*0.36,0.3),new A.a6(d+a0*0.64,0.46)],x=a1+a2*0.14,w=a1+a2*0.7,v=a2*0.09,u=a4/2,t=a0*0.06,y=y.a,s=a1+a2*0.07,r=a1+a2*0.84,q=r-a5*0.7,p=a5*0.45,o=r-a5*0.5,n=0;n<2;++n){m=a3[n]
l=m.a
k=l+u
j=A.mq(new A.ae(l-u,s,k,q),new A.b0(u,u))
i=a8.cF()
y.drawRRect(A.qq(j),i)
i.delete()
i=a8.cF()
y.drawCircle(l,r,a5,i)
i.delete()
i=b0.cF()
y.drawCircle(l,r,p,i)
i.delete()
i=a8.cF()
y.drawLine.apply(y,[l,o,l,a1+a2*m.b,i])
i.delete()
for(m=k+2,k+=t,h=x;h<w;h+=v){i=a9.cF()
y.drawLine.apply(y,[m,h,k,h,i])
i.delete()}}g=d+a0*0.86
f=a1+a2*0.78
e=Math.max(2,a2*0.06)
d=A.cG($.aG().w)
a1=f-e*1.9
d.ad(new A.ew(g,a1))
a3=e*0.25
y=f-e*1.3
w=g+e
v=f-e*0.75
d.ad(new A.nS(g+a3,y,w,v,w,f))
w=g-e
d.a_G(new A.F(w,f),!0,new A.b0(e,e))
d.ad(new A.nS(w,v,g-a3,y,g,a1))
a6.dP(d,a9)},
aCz(d,e,f,g,a0){var y,x,w,v,u,t,s,r,q,p,o=e.c-e.a,n=e.b,m=e.d-n,l=e.gbB().a,k=A.cG($.aG().w),j=o*0.08,i=l-j,h=n+m*0.3
k.ad(new A.ew(i,h))
y=n+m*0.4
x=o*0.36
w=l-x
v=n+m*0.42
u=n+m*0.68
k.ad(new A.nS(i,y,w,v,w,u))
i=n+m*0.86
t=o*0.26
s=n+m*0.96
r=o*0.14
k.ad(new A.nS(w,i,l-t,s,l-r,s))
k.ad(new A.cg(l+r,s))
x=l+x
k.ad(new A.nS(l+t,s,x,i,x,u))
j=l+j
k.ad(new A.nS(x,v,j,y,j,h))
d.dP(k,f)
j=o*0.11
y=n+m*0.02
v=m*0.03
x=d.a
x.em(A.mq(new A.ae(l-j,y,l+j,h),new A.b0(v,v)),f)
x.eG(new A.F(l,y),new A.F(l,h),g)
h=x.a
J.bz(h.save())
k.ad(new A.kl())
y=k.geW().a
y===$&&A.b()
y=y.a
y.toString
h.clipPath(y,$.oP(),!0)
y=o*0.4
v=n+m*0.62
x.eG(new A.F(l-y,v),new A.F(l+y,v),g)
for(j=[D.bp_,D.bnO,D.bpr],i=m*0.025,q=0;q<3;++q){y=j[q]
x=Math.max(1.2,i)
p=a0.cF()
h.drawCircle(l+o*y.a,n+m*y.b,x,p)
p.delete()}h.restore()},
cX(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["y(y,e)","lk(y,Y)"]);(function installTearOffs(){var y=a._static_2
y(B,"d4M","cBQ",0)
y(B,"d4L","d4J",1)
y(B,"d4K","d_k",0)})();(function inheritance(){var y=a.inherit
y(B.agL,A.lk)})()
A.hu(b.typeUniverse,JSON.parse('{"agL":{"b_":[]}}'));(function constants(){D.bcK=new A.bF(62614,"Lucide","lucide_icons",!1)
D.F0=new E.al3("assets/study/phys1/phys1_laws.json","phys1","\u0641\u064a\u0632\u064a\u0627\u0621 \xb7 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0623\u0648\u0644\u0649","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0641\u064a\u0632\u064a\u0627\u0621","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0641\u064a\u0632\u064a\u0627\u0621","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0641\u064a\u0632\u064a\u0627\u0621","\u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0631\u0645\u0632\u2026 \u0645\u062b\u0644\u0627\u064b: \u0627\u0644\u0646\u0648\u0627\u0633","\u0627\u0644\u062a\u062c\u0631\u0628\u0629","\u0627\u0644\u062a\u062c\u0627\u0631\u0628","\u0647\u0627\u0644\u062a\u062c\u0631\u0628\u0629",B.d4L(),B.d4M(),B.d4K(),D.bcK,!0,!0)
D.apF=D.F0
D.bnO=new A.a6(0.1,0.72)
D.bp_=new A.a6(-0.12,0.78)
D.bpr=new A.a6(0.02,0.86)})()};
(a=>{a["zXq/nYVWgqHj7o1cO1M9Ep3eqhA="]=a.current})($__dart_deferred_initializers__);
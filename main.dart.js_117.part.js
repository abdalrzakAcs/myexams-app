((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cCU(d,e){var x=new B.cjY(e)
if(x.$1(C.b1w))return 2
if(x.$1(C.b1x))return 7
if(x.$1(C.b2U))return 5
if(x.$1(C.b6E))return 0
if(x.$1(C.b6I))return 1
if(x.$1(C.b9T))return 8
if(x.$1(C.baY))return 3
if(x.$1(C.baQ))return 11
if(x.$1(C.b15))return 4
if(x.$1(C.b5t))return 10
if(x.$1(C.baT))return 6
if(x.$1(C.b9I))return 9
return D.m.ai(Math.abs(d),12)},
d71(d,e){return new B.alC(d,e,null)},
rA(d,e){var x=d.a,w=d.b,v=Math.min(x,w*e)
return A.xg(new A.z(x/2,w/2),Math.min(w,v/e),v)},
cx2(d,e,f,g,h,i){var x=e.a,w=d.a
w.bs(e,new A.z(x-f,g),h)
w.bs(e,new A.z(x+f,g),h)
w.bs(e,new A.z(x+f*0.12,g),i)},
cx1(d,e,f,g,h,i,j){var x,w,v,u,t=d.a
t.c9(new A.a7(e,f,e+h,g),i)
x=(g-f)/9
for(w=e+h*0.5,t=t.a,v=0;v<9;v+=2){u=j.bp()
t.drawRect(A.fa(new A.a7(e,f+x*v,w,f+x*(v+1))),u)
u.delete()}},
H5(d,e,f,g){var x,w,v,u,t,s,r,q,p,o=f.a0(0,e).gdr()
if(o<1)return
x=f.a0(0,e).ek(0,o)
for(w=x.a,v=x.b,u=e.a,t=e.b,s=d.a.a,r=0;r<o;r+=6.5){q=Math.min(o,r+3.5)
p=g.bp()
s.drawLine.apply(s,[u+w*r,t+v*r,u+w*q,t+v*q,p])
p.delete()}},
cjY:function cjY(d){this.a=d},
alC:function alC(d,e,f){this.b=d
this.c=e
this.a=f},
bb8:function bb8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d03(d,e){return e.length===0?0:B.cCU(d-1,e)}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[42],B)
C=c[11]
E=c[53]
B.alC.prototype={
aw(b0,b1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this
if(b1.a<2||b1.b<2)return
x=$.ay()
w=A.aP()
v=a9.c
w.r=D.d.N(v).gv(0)
w.b=D.ba
w.c=1.6
w.d=D.cH
w.e=D.mK
u=A.aP()
u.r=D.d.N(v*0.6).gv(0)
u.b=D.ba
u.c=1.1
u.d=D.cH
t=A.aP()
t.r=D.d.N(Math.min(1,v*1.3)).gv(0)
s=A.aP()
s.r=D.d.N(v*0.45).gv(0)
switch(D.m.ai(a9.b,12)){case 1:a9.b1A(b0,B.rA(b1,1.6),w,u,t,s)
break
case 2:v=B.rA(b1,1.25)
r=v.a
q=v.c-r
p=v.b
o=v.d-p
r+=q*0.42
n=new A.z(r,p+o*0.62)
v=o*0.06
p+=v
m=b0.a
m.bs(n,new A.z(r,p),w)
x=x.w
l=A.c2(x)
k=q*0.05
j=p+o*0.09
l.R(new A.cT(r-k,j))
l.R(new A.bp(r,p))
l.R(new A.bp(r+k,j))
b0.c8(l,w)
i=r+q*0.09
h=p+o*0.02
x=A.c2(x)
p=h+o*0.1
x.R(new A.cT(i,p))
x.R(new A.bp(i,h))
k=i+k
x.R(new A.bp(k,p))
x.R(new A.bp(k,h))
b0.c8(x,u)
g=o*0.5
f=n.a_(0,new A.z(Math.sin(2.1816615649929116)*g*1.25,-Math.cos(2.1816615649929116)*g))
m.bs(n,f,w)
x=Math.max(1.6,o*0.025)
m.by(n,x,t)
m.by(f,x,t)
e=o*0.2
m.nf(A.jg(n,e),-1.5707963267948966,2.1816615649929116,!1,u)
d=n.a_(0,new A.z(Math.sin(2.1816615649929116)*e,-Math.cos(2.1816615649929116)*e))
x=Math.cos(2.1816615649929116)
k=Math.sin(2.1816615649929116)
a0=new A.z(x,k)
a1=new A.z(-k,x)
m.bs(d,d.a0(0,a0.a9(0,v)).a_(0,a1.a9(0,v).a9(0,0.6)),u)
m.bs(d,d.a0(0,a0.a9(0,v)).a0(0,a1.a9(0,v).a9(0,0.6)),u)
break
case 3:a9.b1F(b0,B.rA(b1,1.9),w,u,t)
break
case 4:a9.aQt(b0,B.rA(b1,2.6),w,u,s)
break
case 5:a9.aFi(b0,B.rA(b1,1.5),w,u,t)
break
case 6:a9.aWV(b0,B.rA(b1,1.9),w,u,t)
break
case 7:a9.b1j(b0,B.rA(b1,1.4),w,u,t)
break
case 8:v=B.rA(b1,1.6)
r=v.a
q=v.c-r
p=v.b
o=v.d-p
a2=p+o*0.8
v=r+q*0.06
a3=new A.z(v,a2)
f=new A.z(r+q*0.94,a2)
r+=q*0.56
a4=new A.z(r,p+o*0.08)
p=b0.a
p.bs(a3,f,w)
B.H5(b0,a4,new A.z(r,a2-o*0.18),w)
m=Math.max(1.8,o*0.03)
p.by(a3,m,t)
p.by(f,m,t)
p.by(a4,Math.max(1.8,o*0.035),t)
a5=o*0.1
x=x.w
p=A.c2(x)
m=r+a5
p.R(new A.cT(m,a2))
l=a2-a5
p.R(new A.bp(m,l))
p.R(new A.bp(r,l))
b0.c8(p,u)
a6=A.c2(x)
x=q*0.07
p=a2-o*0.16
a6.R(new A.cT(r-x,p))
a6.R(new A.bp(r+x,p))
a6.R(new A.bp(r,a2-o*0.3))
a6.R(new A.jy())
b0.c8(a6,w)
p=a2-o*0.23
B.H5(b0,new A.z(v+q*0.04,p),new A.z(r-q*0.035,p),u)
break
case 9:a9.b1k(b0,B.rA(b1,2.3),w,u,s)
break
case 10:a9.aZs(b0,B.rA(b1,1.5),w,u,t)
break
case 11:a9.aI8(b0,B.rA(b1,1.9),w,u,t)
break
default:x=B.rA(b1,1.5)
v=x.a
q=x.c-v
r=x.d
x=x.b
o=r-x
p=v+q*0.3
m=x+o*0.44
B.cx2(b0,new A.z(p,m),q*0.17,r,w,u)
l=v+q*0.16
k=v+q*0.44
j=x+o*0.42
a7=o*0.03
a8=b0.a
a8.dn(A.iH(new A.a7(l,x+o*0.3,k,j),new A.aQ(a7,a7)),w)
a8.c9(new A.a7(v+q*0.11,x+o*0.325,l,x+o*0.395),u)
a8.c9(new A.a7(k,x+o*0.29,v+q*0.48,x+o*0.43),u)
a8.dn(A.iH(new A.a7(v+q*0.24,x+o*0.22,v+q*0.36,x+o*0.28),new A.aQ(a7,a7)),u)
a8.by(new A.z(p,x+o*0.25),Math.max(1.2,o*0.018),t)
a8.bs(new A.z(p,j),new A.z(p,m),w)
m=x+o*0.36
p=v+q*0.8
B.H5(b0,new A.z(v+q*0.5,m),new A.z(p,m),u)
B.cx1(b0,p,x+o*0.04,r,q*0.08,w,s)}},
b1A(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o=e.a,n=e.c-o,m=e.d,l=e.b,k=m-l,j=o+n*0.26
B.cx2(d,new A.z(j,l+k*0.52),n*0.15,m,f,g)
x=n*0.09
w=l+k*0.5
v=d.a
v.bs(new A.z(j-x,w),new A.z(j+x,w),f)
x=n*0.07
u=j-x
t=l+k*0.22
v.bs(new A.z(u,w),new A.z(u,t),f)
u=j+x
v.bs(new A.z(u,w),new A.z(u,t),f)
t=l+k*0.28
s=new A.z(j,t)
v.by(s,k*0.11,g)
u=k*0.02
v.by(s,Math.max(1.2,u),h)
w=v.a
J.bA(w.save())
w.translate(j,t)
v.a45(0,-0.12)
t=k*0.03
v.dn(A.iH(new A.a7(-n*0.13,-k*0.045,n*0.13,k*0.045),new A.aQ(t,t)),f)
w.restore()
r=o+n*0.84
for(o=[C.bol,C.boj,C.bnV],v=j+n*0.14,q=0;q<3;++q){t=o[q]
B.H5(d,new A.z(v,l+k*t.a),new A.z(r,l+k*t.b),g)}for(o=[0.1,0.3,0.5],v=r-n*0.02,q=0;q<3;++q){t=l+k*o[q]
p=f.bp()
w.drawLine.apply(w,[v,t,r,t,p])
p.delete()}B.cx1(d,r,l+u,m,x,f,i)},
b1F(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.c-m,k=e.b,j=e.d-k,i=m+l*0.2
k+=j*0.5
x=new A.z(i,k)
w=j*0.34
v=d.a
v.by(x,w,f)
v.by(x,w*0.4,g)
v.by(x,Math.max(1.4,j*0.025),h)
u=-w
t=u*0.72
s=x.a_(0,new A.z(t,t))
u*=0.3
v.bs(x.a_(0,new A.z(u,u)),s,g)
u=j*0.04
v.by(s,Math.max(1.6,u),f)
r=k+w-j*0.02
q=r+j*0.1
k=m+l*0.96
v.bs(new A.z(i,r),new A.z(k,r),f)
v.bs(new A.z(i+w*0.3,q),new A.z(k,q),f)
v.bs(new A.z(k,r-u),new A.z(k,q+j*0.03),f)
for(p=i+w*0.5,m+=l*0.94,k=l*0.035,v=v.a,o=0;p<m;p+=k,++o){i=D.m.ai(o,5)===0?0.08:0.04
n=g.bp()
v.drawLine.apply(v,[p,r,p,r+j*i,n])
n.delete()}},
aQt(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.c-n,l=e.b,k=e.d-l,j=l+k*0.38,i=l+k*0.62,h=n+m*0.04,g=n+m*0.26,f=n+m*0.96
n=d.a
n.c9(new A.a7(h,j,f,i),a0)
x=(f-g)/4
for(l=n.a,w=j-k*0.14,v=(j+i)/2,u=0;u<4;++u){t=g+x*u
if((u&1)===0){s=a2.bp()
l.drawRect(A.fa(new A.a7(t,j,t+x,v)),s)
s.delete()}s=(u===0?a0:a1).bp()
l.drawLine.apply(l,[t,w,t,i,s])
s.delete()}n.bs(new A.z(f,w),new A.z(f,j),a1)
r=(g-h)/10
for(q=i-j,u=1;u<10;++u){p=h+r*u
o=u===5?0.7:0.45
s=a1.bp()
l.drawLine.apply(l,[p,j,p,j+q*o,s])
s.delete()}n.c9(new A.a7(h,v,g,i),a2)
n.bs(new A.z(h,w),new A.z(h,j),a1)
for(n=i+k*0.1,u=0;u<=4;++u){w=g+x*u
s=a1.bp()
l.drawLine.apply(l,[w,i,w,n,s])
s.delete()}},
aFi(d,e,f,g,h){var x,w,v=e.a,u=e.c-v,t=e.b,s=e.d-t,r=new B.bb8(v,t,s,u)
d.c8(r.$2(0.22,0.14),g)
d.c8(r.$2(0.5,0.16),f)
d.c8(r.$2(0.78,0.14),g)
x=new A.z(v+u*0.24,t+s*0.8)
w=new A.z(v+u*0.7,t+s*0.24)
B.H5(d,x,w,f)
t=Math.max(1.8,s*0.035)
v=d.a
v.by(x,t,h)
v.by(w,t,h)},
aWV(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n=e.a,m=e.c-n,l=e.b,k=e.d-l
n+=m/2
l+=k*0.92
x=new A.z(n,l)
w=Math.min(m*0.46,k*0.86)
v=d.a
v.nf(A.jg(x,w),3.141592653589793,3.141592653589793,!1,f)
v.nf(A.jg(x,w*0.62),3.141592653589793,3.141592653589793,!1,g)
v.bs(new A.z(n-w,l),new A.z(n+w,l),f)
for(u=v.a,t=0;t<=180;t+=10){s=3.141592653589793+t*3.141592653589793/180
r=Math.cos(s)*w
q=Math.sin(s)*w
p=D.m.ai(t,30)===0?0.84:0.91
o=g.bp()
u.drawLine.apply(u,[n+r,l+q,n+r*p,l+q*p,o])
o.delete()}v.bs(x,x.a_(0,new A.z(Math.cos(5.410520681182422),Math.sin(5.410520681182422)).a9(0,w).a9(0,0.98)),f)
v.nf(A.jg(x,w*0.3),-0.8726646259971648,0.8726646259971648,!1,g)
v.by(x,Math.max(1.6,k*0.03),h)},
b1j(d,e,f,g,h){var x,w,v,u,t,s,r,q=e.a,p=e.c-q,o=e.b,n=e.d-o,m=q+p*0.1,l=o+n*0.9,k=q+p*0.96,j=o+n*0.06
for(q=d.a,o=q.a,x=k-m,w=0;w<=4;++w){v=m+x*w/4
u=(w===0?f:g).bp()
o.drawLine.apply(o,[v,l,v,j,u])
u.delete()}for(t=j-l,w=0;w<=3;++w){s=l+t*w/3
u=(w===0?f:g).bp()
o.drawLine.apply(o,[m,s,k,s,u])
u.delete()}o=m+x*0.62
t=l+t*0.55
r=new A.z(o,t)
B.H5(d,r,new A.z(o,l),f)
B.H5(d,r,new A.z(m,t),f)
q.by(r,Math.max(2,n*0.04),h)
q.by(r,Math.max(3.5,n*0.075),g)},
b1k(d,e,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.c-k,i=e.b,h=e.d-i,g=i+h*0.55,f=d.a
f.bs(new A.z(k+j*0.03,g),new A.z(k+j*0.27,g),a0)
for(x=[0.03,0.27],w=h*0.12,v=g-w,w=g+w,u=f.a,t=0;t<2;++t){s=k+j*x[t]
r=a0.bp()
u.drawLine.apply(u,[s,v,s,w,r])
r.delete()}for(x=g-h*0.06,q=1;q<6;++q){p=k+j*(0.03+0.24*q/6)
r=a1.bp()
u.drawLine.apply(u,[p,g,p,x,r])
r.delete()}x=k+j*0.37
w=i+h*0.25
v=h*0.6
u=x+v
v=w+v
o=new A.a7(x,w,u,v)
f.c9(o,a0)
f.c9(new A.a7(x,w,x+(u-x)/2,w+(v-w)/2),a2)
f.bs(new A.z(o.gbz().a,w),new A.z(o.gbz().a,v),a1)
f.bs(new A.z(x,o.gbz().b),new A.z(u,o.gbz().b),a1)
n=h*0.48
m=h*0.2
k=k+j*0.97-n-m
i+=h*0.3
u=k+n
x=i+n
f.c9(new A.a7(k,i,u,x),a0)
f=$.ay().w
v=A.c2(f)
v.R(new A.cT(k,i))
w=k+m
s=i-m
v.R(new A.bp(w,s))
l=u+m
v.R(new A.bp(l,s))
v.R(new A.bp(u,i))
v.R(new A.cT(l,s))
v.R(new A.bp(l,x-m))
v.R(new A.bp(u,x))
d.c8(v,a0)
f=A.c2(f)
f.R(new A.cT(k,i))
f.R(new A.bp(w,s))
f.R(new A.bp(l,s))
f.R(new A.bp(u,i))
f.R(new A.jy())
d.c8(f,a2)},
aZs(d,e,f,g,a0){var x,w,v,u,t,s,r,q,p=e.a,o=e.c-p,n=e.b,m=e.d-n,l=p+o*0.04,k=n+m*0.3,j=p+o*0.96,i=n+m*0.96,h=d.a
h.c9(new A.a7(l,k,j,i),f)
for(x=[0.35,0.66],w=h.a,v=0;v<2;++v){u=p+o*x[v]
t=g.bp()
w.drawLine.apply(w,[u,k,u,i,t])
t.delete()}x=A.c2($.ay().w)
i-=k
x.R(new A.cT(l,k+i*0.7))
w=j-l
x.R(new A.jB(l+w*0.3,k+i*0.4,l+w*0.55,k+i*0.95,j,k+i*0.55))
d.c8(x,g)
x=n+m*0.74
s=new A.z(p+o*0.3,x)
r=new A.z(p+o*0.7,x)
x=Math.max(1.8,m*0.03)
h.by(s,x,a0)
h.by(r,x,a0)
p+=o*0.5
n+=m*0.06
q=new A.z(p,n)
h.bs(q,s,f)
h.bs(q,r,f)
x=m*0.04
h.by(q,Math.max(2,x),f)
h.bs(new A.z(p,n-x),new A.z(p,n-m*0.1),f)},
aI8(d,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=a0.a,j=a0.c-k,i=a0.b,h=a0.d-i,g=i+h*0.86,f=k+j*0.5,e=d.a
e.bs(new A.z(k+j*0.02,g),new A.z(k+j*0.98,g),a1)
x=A.c2($.ay().w)
k+=j*0.04
x.R(new A.cT(k,g))
for(w=j*0.92,v=j*0.16,u=h*0.74,t=x.e,s=1;s<=40;++s){r=k+w*s/40
q=(r-f)/v
p=new A.bp(r,g-u*Math.exp(-q*q/2))
t.push(p)
o=x.d
if(o!=null)p.dg(o)}d.c8(x,a1)
B.H5(d,new A.z(f,g),new A.z(f,i+h*0.06),a2)
for(k=[-1,1],e=e.a,n=0;n<2;++n){r=f+k[n]*j*0.16
i=Math.exp(-0.5)
m=a2.bp()
e.drawLine.apply(e,[r,g,r,g-u*i,m])
m.delete()}for(k=[-0.2,-0.11,-0.06,-0.02,0.03,0.07,0.13,0.22],i=g+h*0.07,w=h*0.022,n=0;n<8;++n){l=k[n]
v=Math.max(1.2,w)
m=a3.bp()
e.drawCircle(f+j*l,i,v,m)
m.delete()}},
cV(d){return d.b!==this.b||d.c!==this.c}}
var z=a.updateTypes(["y(y,e)","iS(y,Y)"])
B.cjY.prototype={
$1(d){return D.c.df(d,D.b.glq(this.a))},
$S:176}
B.bb8.prototype={
$2(d,e){var x,w=this,v=A.c2($.ay().w),u=w.a,t=w.b,s=w.c,r=t+s*d
v.R(new A.cT(u,r))
x=w.d
v.R(new A.jB(u+x*0.25,t+s*(d-e),u+x*0.45,t+s*(d+e),u+x*0.62,r))
v.R(new A.jB(u+x*0.78,t+s*(d-e*0.8),u+x*0.9,t+s*(d+e*0.4),u+x,t+s*(d-e*0.2)))
return v},
$S:1031};(function installTearOffs(){var x=a._static_2
x(B,"d74","cCU",0)
x(B,"d73","d71",1)
x(B,"d72","d03",0)})();(function inheritance(){var x=a.inherit
x(B.cjY,A.fc)
x(B.alC,A.iS)
x(B.bb8,A.hi)})()
A.hd(b.typeUniverse,JSON.parse('{"alC":{"b_":[]}}'))
var y={d:A.af("K<e>")};(function constants(){var x=a.makeConstList
C.bd0=new A.bB(62025,"Lucide","lucide_icons",!1)
C.F5=new E.Of("assets/study/survey2/survey2_laws.json","survey2","\u0627\u0644\u0645\u0633\u0627\u062d\u0629 \u0648\u0627\u0644\u0645\u0646\u0634\u0622\u062a \u0627\u0644\u0632\u0631\u0627\u0639\u064a\u0629 \xb7 \u0633\u0646\u0629 \u062b\u0627\u0646\u064a\u0629","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0633\u0627\u062d\u0629","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0633\u0627\u062d\u0629","\u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0645\u0633\u0627\u062d\u0629","\u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 \u0627\u0644\u0631\u0645\u0632\u2026 \u0645\u062b\u0644\u0627\u064b: \u0627\u0644\u0645\u064a\u0644","\u0627\u0644\u0645\u0648\u0636\u0648\u0639","\u0627\u0644\u0645\u0648\u0627\u0636\u064a\u0639","\u0647\u0627\u0644\u0645\u0648\u0636\u0648\u0639",B.d73(),B.d74(),B.d72(),C.bd0,!1,!1)
C.apR=C.F5
C.b15=x(["\u0627\u0644\u0645\u0642\u064a\u0627\u0633 \u0627\u0644\u0637\u0648\u0644\u064a","\u0637\u0648\u0644\u064a"],y.d)
C.b1w=x(["\u0633\u0645\u062a","\u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629","\u0627\u0644\u0645\u0633\u0623\u0644\u0629 \u0627\u0644\u0639\u0643\u0633\u064a\u0629"],y.d)
C.b1x=x(["\u0625\u062d\u062f\u0627\u062b\u064a","\u0627\u062d\u062f\u0627\u062b\u064a"],y.d)
C.b2U=x(["\u0627\u0644\u0645\u064a\u0644","\u0645\u064a\u0644","\u062e\u0637\u0648\u0637 \u0627\u0644\u062a\u0633\u0648\u064a\u0629","\u062e\u0637\u064a \u062a\u0633\u0648\u064a\u0629","\u062e\u0637\u064a \u0627\u0644\u062a\u0633\u0648\u064a\u0629","\u0643\u0648\u0646\u062a\u0648\u0631"],y.d)
C.b5t=x(["\u0645\u0642\u064a\u0627\u0633"],y.d)
C.b6E=x(["\u0646\u064a\u0641\u0648","\u0627\u0644\u062a\u0633\u0648\u064a\u0629","\u0641\u0631\u0642 \u0627\u0644\u0627\u0631\u062a\u0641\u0627\u0639","\u0627\u0644\u0645\u0646\u0633\u0648\u0628"],y.d)
C.b6I=x(["\u062a\u0627\u0643\u064a\u0648\u0645\u062a\u0631","\u0627\u0644\u062a\u0627\u0643\u064a\u0648"],y.d)
C.b9I=x(["\u0648\u0627\u062d\u062f","\u0623\u0637\u0648\u0627\u0644","\u0645\u0633\u0627\u062d\u0629","\u062d\u062c\u0645"],y.d)
C.b9T=x(["\u0645\u0648\u0634\u0648\u0631"],y.d)
C.baQ=x(["\u062e\u0637\u0623","\u0623\u062e\u0637\u0627\u0621","\u0627\u0644\u0623\u062e\u0637\u0627\u0621","\u0627\u062d\u062a\u0645\u0627\u0644"],y.d)
C.baT=x(["\u0632\u0627\u0648\u064a","\u0632\u0648\u0627\u064a\u0627","\u063a\u0631\u0627\u062f","\u0631\u0627\u062f\u064a\u0627\u0646","\u0633\u062a\u064a\u0646\u064a"],y.d)
C.baY=x(["\u0634\u0631\u064a\u0637","\u062a\u0635\u062d\u064a\u062d","\u0627\u0644\u062a\u0635\u062d\u064a\u062d"],y.d)
C.bnV=new A.a1(0.25,0.5)
C.boj=new A.a1(0.25,0.3)
C.bol=new A.a1(0.25,0.1)})()};
(a=>{a["orvr3ugcGH08B+4Ej2sCYN5Lzq4="]=a.current})($__dart_deferred_initializers__);
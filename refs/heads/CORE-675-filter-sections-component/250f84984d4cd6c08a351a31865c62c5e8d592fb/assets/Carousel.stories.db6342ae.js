import{s as l,R as s,j as p,a as e,F as k}from"./index.2bb00806.js";import{L as D,R}from"./RightArrow.f4af0eaa.js";import{T as I}from"./index.3a902843.js";import"./context.module.ededdc29.js";import"./useButton.module.dbd6cbdd.js";import"./FocusScope.module.da4c7380.js";import"./theme.c213f6fd.js";import"./palette.15e4d008.js";const T=l.div`
  position: relative;
  width: ${({customWidth:t})=>t||"30rem"};
  margin: 0 4rem;
`,G=l.div`
  position: inherit;
  overflow: hidden;
`,L=l.div`
  display: flex;
  width: auto;
  transition: transform 0.3s ease-in-out;
`,A=l.div`
  flex: 0 0 auto;
  margin-right: 1rem;
`,P=l(D)`
  position: absolute;
  top: 50%;
  left: -2rem;
  transform: translateY(-50%);
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({disabled:t})=>t?.5:1};
`,j=l(R)`
  position: absolute;
  top: 50%;
  right: -2rem;
  transform: translateY(-50%);
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({disabled:t})=>t?.5:1};
`,u=({children:t,customWidth:c})=>{var W,b;const[i,a]=s.useState(0),[m,h]=s.useState(null),[f,g]=s.useState(0),[w,y]=s.useState(!1),n=s.useRef(null),v=100,C=()=>{if(n.current){const r=n.current.clientWidth/t.length;a(o=>Math.max(o-r-v,0))}},$=()=>{if(n.current){const r=n.current.clientWidth/t.length,o=n.current.scrollWidth-n.current.clientWidth;a(d=>Math.min(d+r+v,o))}},M=r=>{h(r.clientX),y(!0)},X=r=>{if(!w||m===null)return;const o=(r.clientX-m)/10;g(o),n.current&&(n.current.style.transition="none",n.current.style.transform=`translateX(calc(-${i/10}rem + ${o}rem))`)},x=()=>{if(!!w&&(y(!1),h(null),n.current)){const r=i-f*10,o=n.current.scrollWidth-n.current.clientWidth,d=Math.max(0,Math.min(r,o));a(d),g(0),n.current.style.transition="transform 0.3s ease-in-out",n.current.style.transform=`translateX(-${d/10}rem)`}};return p(T,{customWidth:c,children:[e(P,{onClick:C,disabled:i===0}),e(G,{onPointerDown:M,onPointerMove:X,onPointerUp:x,onPointerLeave:x,children:e(L,{ref:n,style:{transform:`translateX(calc(-${i/10}rem + ${f}rem))`},children:t.map(r=>{const o=r.key;return e(A,{children:r},o!=null?o:null)})})}),e(j,{onClick:$,disabled:i>=(((W=n.current)==null?void 0:W.scrollWidth)||0)-(((b=n.current)==null?void 0:b.clientWidth)||0)})]})},S=[e("button",{children:"Slide 1"},"1"),e("button",{children:"Slide 2"},"2"),e("button",{children:"Slide 3"},"3"),e("button",{children:"Slide 4"},"4"),e("button",{children:"Slide 5"},"5"),e("button",{children:"Slide 6"},"6"),e("button",{children:"Slide 7"},"7"),e("button",{children:"Slide 8"},"8")],q=()=>e(u,{children:S}),z=()=>e(u,{customWidth:"10rem",children:S}),H=()=>e(u,{customWidth:"53rem",children:S}),J=()=>{const[t,c]=s.useState(new Set([]));return p(k,{children:[e(u,{customWidth:"25rem",children:[e(I,{selectedItems:t,handlerSelectedItems:c,children:[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"}]}),e(I,{selectedItems:t,handlerSelectedItems:c,children:[{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"}]})]}),p("p",{children:["Current selections: ",[...t].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{q as Default,H as LargeCarousel,z as SmallCarousel,J as WithToggleButtonGroups};

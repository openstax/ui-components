import{s as l,R as s,j as f,a as t,F as X}from"./index.5e3a4e7f.js";import{L as k,R as L}from"./RightArrow.505fb17a.js";import{T as C}from"./index.866c90a0.js";import"./context.module.f7c9ee8b.js";import"./useButton.module.26d54303.js";import"./FocusScope.module.e0d509d6.js";import"./theme.72849a34.js";import"./palette.15e4d008.js";const T=l.div`
  position: relative;
  width: ${({customWidth:n})=>n||"100%"};
  margin: 0 4rem;
`,G=l.div`
  position: inherit;
  overflow: hidden;
`,P=l.div`
  display: flex;
  width: auto;
  transition: transform 0.3s ease-in-out;
`,j=l.div`
  flex: 0 0 auto;
  margin-right: 1rem;
`,F=l(k)`
  position: absolute;
  top: 50%;
  left: -3rem;
  transform: translateY(-50%);
  cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
  opacity: ${({disabled:n})=>n?.5:1};
`,E=l(L)`
  position: absolute;
  top: 50%;
  right: -3rem;
  transform: translateY(-50%);
  cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
  opacity: ${({disabled:n})=>n?.5:1};
`,u=({children:n,customWidth:c})=>{const[i,a]=s.useState(0),[h,m]=s.useState(null),[p,S]=s.useState(0),[w,y]=s.useState(!1),e=s.useRef(null),[b,I]=s.useState(!1),[v,D]=s.useState(!1),x=100;s.useEffect(()=>{if(e.current){const r=i>=(e.current.scrollWidth||0)-(e.current.clientWidth||0);D(r),I(i===0)}},[i,e]);const $=()=>{if(e.current&&!b){const r=e.current.clientWidth/n.length;a(o=>Math.max(o-r-x,0))}},A=()=>{if(e.current&&!v){const r=e.current.clientWidth/n.length,o=e.current.scrollWidth-e.current.clientWidth;a(d=>Math.min(d+r+x,o))}},M=r=>{m(r.clientX),y(!0)},R=r=>{if(!w||h===null)return;const o=(r.clientX-h)/10;S(o),e.current&&(e.current.style.transition="none",e.current.style.transform=`translateX(calc(-${i/10}rem + ${o}rem))`)},W=()=>{if(!!w&&(y(!1),m(null),e.current)){const r=i-p*10,o=e.current.scrollWidth-e.current.clientWidth,d=Math.max(0,Math.min(r,o));a(d),S(0),e.current.style.transition="transform 0.3s ease-in-out",e.current.style.transform=`translateX(-${d/10}rem)`}};return f(T,{customWidth:c,children:[t(F,{onClick:$,width:"20",height:"15",disabled:b}),t(G,{onPointerDown:M,onPointerMove:R,onPointerUp:W,onPointerLeave:W,children:t(P,{ref:e,style:{transform:`translateX(calc(-${i/10}rem + ${p}rem))`},children:n.map(r=>{const o=r.key;return t(j,{children:r},o!=null?o:null)})})}),t(E,{onClick:A,width:"20",height:"15",disabled:v})]})},g=[t("button",{children:"Slide 1"},"1"),t("button",{children:"Slide 2"},"2"),t("button",{children:"Slide 3"},"3"),t("button",{children:"Slide 4"},"4"),t("button",{children:"Slide 5"},"5"),t("button",{children:"Slide 6"},"6"),t("button",{children:"Slide 7"},"7"),t("button",{children:"Slide 8"},"8")],H=()=>t(u,{children:g}),J=()=>t(u,{customWidth:"10rem",children:g}),Q=()=>t(u,{customWidth:"53rem",children:g}),V=()=>{const[n,c]=s.useState(new Set([]));return f(X,{children:[t(u,{customWidth:"25rem",children:[t(C,{selectedItems:n,onSelectionChange:c,children:[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"}]}),t(C,{selectedItems:n,onSelectionChange:c,children:[{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"}]})]}),f("p",{children:["Current selections: ",[...n].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{H as Default,Q as LargeCarousel,J as SmallCarousel,V as WithToggleButtonGroups};

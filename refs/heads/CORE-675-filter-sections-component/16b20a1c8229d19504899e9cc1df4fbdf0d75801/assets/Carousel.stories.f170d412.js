import{s as l,R as s,j as m,a as t,F as M}from"./index.1b9b4ac1.js";import{L as X,R as $}from"./RightArrow.d7f678eb.js";import{T as x}from"./index.0ec2f1f5.js";import"./context.module.bd5d5f40.js";import"./useButton.module.99fa2919.js";import"./FocusScope.module.c0ac4f92.js";import"./theme.aa5cf5ba.js";import"./palette.15e4d008.js";const L=l.div`
  position: relative;
  margin: 0 4rem;
`,T=l.div`
  position: inherit;
  overflow: hidden;
`,G=l.div`
  display: flex;
  width: auto;
  transition: transform 0.3s ease-in-out;
`,P=l.div`
  flex: 0 0 auto;
  margin-right: 1rem;
`,j=l(X)`
  position: absolute;
  top: 50%;
  left: -3rem;
  transform: translateY(-50%);
  cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
  opacity: ${({disabled:n})=>n?.5:1};
`,E=l($)`
  position: absolute;
  top: 50%;
  right: -3rem;
  transform: translateY(-50%);
  cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
  opacity: ${({disabled:n})=>n?.5:1};
`,I=({children:n})=>{const[i,c]=s.useState(0),[d,u]=s.useState(null),[h,f]=s.useState(0),[g,p]=s.useState(!1),e=s.useRef(null),[S,D]=s.useState(!1),[w,W]=s.useState(!1),y=100,b=()=>{if(e.current){const r=i>=(e.current.scrollWidth||0)-(e.current.clientWidth||0);W(r)}};s.useEffect(()=>{e.current&&(b(),window.addEventListener("resize",b),D(i===0))},[i,e]);const C=()=>{if(e.current&&!S){const r=e.current.clientWidth/n.length;c(o=>Math.max(o-r-y,0))}},A=()=>{if(e.current&&!w){const r=e.current.clientWidth/n.length,o=e.current.scrollWidth-e.current.clientWidth;c(a=>Math.min(a+r+y,o))}},R=r=>{u(r.clientX),p(!0)},k=r=>{if(!g||d===null)return;const o=(r.clientX-d)/10;f(o),e.current&&(e.current.style.transition="none",e.current.style.transform=`translateX(calc(-${i/10}rem + ${o}rem))`)},v=()=>{if(!!g&&(p(!1),u(null),e.current)){const r=i-h*10,o=e.current.scrollWidth-e.current.clientWidth,a=Math.max(0,Math.min(r,o));c(a),f(0),e.current.style.transition="transform 0.3s ease-in-out",e.current.style.transform=`translateX(-${a/10}rem)`}};return m(L,{children:[t(j,{onClick:C,width:"20",height:"15",disabled:S}),t(T,{onPointerDown:R,onPointerMove:k,onPointerUp:v,onPointerLeave:v,children:t(G,{ref:e,style:{transform:`translateX(calc(-${i/10}rem + ${h}rem))`},children:n.map(r=>{const o=r.key;return t(P,{children:r},o!=null?o:null)})})}),t(E,{onClick:A,width:"20",height:"15",disabled:w})]})},F=[t("button",{children:"Slide 1"},"1"),t("button",{children:"Slide 2"},"2"),t("button",{children:"Slide 3"},"3"),t("button",{children:"Slide 4"},"4"),t("button",{children:"Slide 5"},"5"),t("button",{children:"Slide 6"},"6"),t("button",{children:"Slide 7"},"7"),t("button",{children:"Slide 8"},"8")],H=()=>t(I,{children:F}),J=()=>{const[n,i]=s.useState(new Set([]));return m(M,{children:[t(I,{children:[t(x,{selectedItems:n,onSelectionChange:i,children:[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"}]}),t(x,{selectedItems:n,onSelectionChange:i,children:[{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"}]})]}),m("p",{children:["Current selections: ",[...n].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{H as Default,J as WithToggleButtonGroups};

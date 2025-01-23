import{s as l,R as s,j as g,a as t,F as M}from"./index.1e546c7c.js";import{L as X,R as $}from"./RightArrow.f6a69276.js";import{T as I}from"./index.0ed72719.js";import"./context.module.9c48efd0.js";import"./useButton.module.d03c5d12.js";import"./FocusScope.module.bd5344bb.js";import"./theme.9e15b8d9.js";import"./palette.15e4d008.js";const E=l.div`
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
`,z=l($)`
  position: absolute;
  top: 50%;
  right: -3rem;
  transform: translateY(-50%);
  cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
  opacity: ${({disabled:n})=>n?.5:1};
`,C=({children:n})=>{const[i,c]=s.useState(0),[h,m]=s.useState(null),[f,S]=s.useState(0),[p,w]=s.useState(!1),e=s.useRef(null),[v,D]=s.useState(!1),[b,W]=s.useState(!1),y=100,a=s.useCallback(()=>{if(e.current){const r=i>=(e.current.scrollWidth||0)-(e.current.clientWidth||0);W(r)}},[i,e]),d=s.useCallback(()=>{D(i===0)},[i]);s.useEffect(()=>(e.current&&(d(),a(),window.addEventListener("resize",d),window.addEventListener("resize",a)),()=>{window.removeEventListener("resize",d),window.removeEventListener("resize",a)}),[i,e,d,a]);const k=()=>{if(e.current&&!v){const r=e.current.clientWidth/n.length;c(o=>Math.max(o-r-y,0))}},L=()=>{if(e.current&&!b){const r=e.current.clientWidth/n.length,o=e.current.scrollWidth-e.current.clientWidth;c(u=>Math.min(u+r+y,o))}},A=r=>{m(r.clientX),w(!0)},R=r=>{if(!p||h===null)return;const o=(r.clientX-h)/10;S(o),e.current&&(e.current.style.transition="none",e.current.style.transform=`translateX(calc(-${i/10}rem + ${o}rem))`)},x=()=>{if(!!p&&(w(!1),m(null),e.current)){const r=i-f*10,o=e.current.scrollWidth-e.current.clientWidth,u=Math.max(0,Math.min(r,o));c(u),S(0),e.current.style.transition="transform 0.3s ease-in-out",e.current.style.transform=`translateX(-${u/10}rem)`}};return g(E,{children:[t(j,{onClick:k,width:"20",height:"15",disabled:v}),t(T,{onPointerDown:A,onPointerMove:R,onPointerUp:x,onPointerLeave:x,children:t(G,{ref:e,style:{transform:`translateX(calc(-${i/10}rem + ${f}rem))`},children:n.map(r=>{const o=r.key;return t(P,{children:r},o!=null?o:null)})})}),t(z,{onClick:L,width:"20",height:"15",disabled:b})]})},B=[t("button",{children:"Slide 1"},"1"),t("button",{children:"Slide 2"},"2"),t("button",{children:"Slide 3"},"3"),t("button",{children:"Slide 4"},"4"),t("button",{children:"Slide 5"},"5"),t("button",{children:"Slide 6"},"6"),t("button",{children:"Slide 7"},"7"),t("button",{children:"Slide 8"},"8")],J=()=>t(C,{children:B}),Q=()=>{const[n,i]=s.useState(new Set([]));return g(M,{children:[t(C,{children:[t(I,{selectedItems:n,onSelectionChange:i,children:[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"}]}),t(I,{selectedItems:n,onSelectionChange:i,children:[{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"}]})]}),g("p",{children:["Current selections: ",[...n].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{J as Default,Q as WithToggleButtonGroups};

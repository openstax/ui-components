import{s as l,R as i,j as g,a as t,F as X}from"./index.4d692fb5.js";import{L as E,R as T}from"./RightArrow.1254758b.js";import{T as I}from"./index.d7161949.js";import"./context.module.992083d1.js";import"./useButton.module.1e8601a1.js";import"./FocusScope.module.5c092a1e.js";import"./theme.ac00b3a8.js";import"./palette.15e4d008.js";const $=l.div`
  position: relative;
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
`,C=l.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;

  &:hover {
    box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  }

  svg {
    cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
    opacity: ${({disabled:o})=>o?.5:1};
    margin: 0;
  }

  &.left-arrow {
    left: -3rem;
  }

  &.right-arrow {
    right: -3rem;
  }
`,D=({children:o})=>{const[s,c]=i.useState(0),[h,m]=i.useState(null),[f,w]=i.useState(0),[S,p]=i.useState(!1),e=i.useRef(null),[b,k]=i.useState(!1),[v,W]=i.useState(!1),y=100,a=i.useCallback(()=>{if(e.current){const n=s>=(e.current.scrollWidth||0)-(e.current.clientWidth||0);W(n)}},[s,e]),d=i.useCallback(()=>{k(s===0)},[s]);i.useEffect(()=>(e.current&&(d(),a(),window.addEventListener("resize",d),window.addEventListener("resize",a)),()=>{window.removeEventListener("resize",d),window.removeEventListener("resize",a)}),[s,e,d,a]);const L=()=>{if(e.current&&!b){const n=e.current.clientWidth/o.length;c(r=>Math.max(r-n-y,0))}},A=()=>{if(e.current&&!v){const n=e.current.clientWidth/o.length,r=e.current.scrollWidth-e.current.clientWidth;c(u=>Math.min(u+n+y,r))}},M=n=>{m(n.clientX),p(!0)},R=n=>{if(!S||h===null)return;const r=(n.clientX-h)/10;w(r),e.current&&(e.current.style.transition="none",e.current.style.transform=`translateX(calc(-${s/10}rem + ${r}rem))`)},x=()=>{if(!!S&&(p(!1),m(null),e.current)){const n=s-f*10,r=e.current.scrollWidth-e.current.clientWidth,u=Math.max(0,Math.min(n,r));c(u),w(0),e.current.style.transition="transform 0.3s ease-in-out",e.current.style.transform=`translateX(-${u/10}rem)`}};return g($,{children:[t(C,{onClick:L,className:"left-arrow",disabled:b,children:t(E,{})}),t(G,{onPointerDown:M,onPointerMove:R,onPointerUp:x,onPointerLeave:x,children:t(P,{ref:e,style:{transform:`translateX(calc(-${s/10}rem + ${f}rem))`},children:o.map(n=>{const r=n.key;return t(j,{children:n},r!=null?r:null)})})}),t(C,{onClick:A,className:"right-arrow",disabled:v,children:t(T,{})})]})},z=[t("button",{children:"Slide 1"},"1"),t("button",{children:"Slide 2"},"2"),t("button",{children:"Slide 3"},"3"),t("button",{children:"Slide 4"},"4"),t("button",{children:"Slide 5"},"5"),t("button",{children:"Slide 6"},"6"),t("button",{children:"Slide 7"},"7"),t("button",{children:"Slide 8"},"8")],H=()=>t(D,{children:z}),J=()=>{const[o,s]=i.useState(new Set([]));return g(X,{children:[t(D,{children:[t(I,{selectedItems:o,onSelectionChange:s,children:[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"}]}),t(I,{selectedItems:o,onSelectionChange:s,children:[{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"}]})]}),g("p",{children:["Current selections: ",[...o].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{H as Default,J as WithToggleButtonGroups};

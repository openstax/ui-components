import{s as l,R as s,j as g,a as t,F as X}from"./index.8a38cd12.js";import{p as $}from"./palette.15e4d008.js";import{L as E,R as T}from"./RightArrow.4b671aed.js";import{T as I}from"./index.ef1cf176.js";import"./context.module.3ec39813.js";import"./useButton.module.23a57d54.js";import"./FocusScope.module.d970d811.js";import"./theme.b5a405fc.js";const G=l.div`
  position: relative;
  margin: 0 4rem;
`,P=l.div`
  position: inherit;
  overflow: hidden;
`,j=l.div`
  display: flex;
  width: auto;
  transition: transform 0.3s ease-in-out;
`,z=l.div`
  flex: 0 0 auto;
  margin-right: 1rem;
`,C=l.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: transparent;
  background: transparent;
  cursor: ${({disabled:o})=>o?"not-allowed":"pointer"};
  opacity: ${({disabled:o})=>o?.5:1};

  &:hover {
    border: 0.1rem solid ${$.pale};
  }

  svg {
    position: relative;
    margin-top: 0.5rem;
  }

  &.left-arrow {
    left: -3rem;
  }

  &.right-arrow {
    right: -3rem;
  }
`,D=({children:o})=>{const[i,c]=s.useState(0),[h,m]=s.useState(null),[f,p]=s.useState(0),[w,S]=s.useState(!1),e=s.useRef(null),[v,k]=s.useState(!1),[b,W]=s.useState(!1),y=100,a=s.useCallback(()=>{if(e.current){const n=i>=(e.current.scrollWidth||0)-(e.current.clientWidth||0);W(n)}},[i,e]),d=s.useCallback(()=>{k(i===0)},[i]);s.useEffect(()=>(e.current&&(d(),a(),window.addEventListener("resize",d),window.addEventListener("resize",a)),()=>{window.removeEventListener("resize",d),window.removeEventListener("resize",a)}),[i,e,d,a]);const L=()=>{if(e.current&&!v){const n=e.current.clientWidth/o.length;c(r=>Math.max(r-n-y,0))}},A=()=>{if(e.current&&!b){const n=e.current.clientWidth/o.length,r=e.current.scrollWidth-e.current.clientWidth;c(u=>Math.min(u+n+y,r))}},M=n=>{m(n.clientX),S(!0)},R=n=>{if(!w||h===null)return;const r=(n.clientX-h)/10;p(r),e.current&&(e.current.style.transition="none",e.current.style.transform=`translateX(calc(-${i/10}rem + ${r}rem))`)},x=()=>{if(!!w&&(S(!1),m(null),e.current)){const n=i-f*10,r=e.current.scrollWidth-e.current.clientWidth,u=Math.max(0,Math.min(n,r));c(u),p(0),e.current.style.transition="transform 0.3s ease-in-out",e.current.style.transform=`translateX(-${u/10}rem)`}};return g(G,{children:[t(C,{onClick:L,className:"left-arrow",disabled:v,children:t(E,{width:14,height:14})}),t(P,{onPointerDown:M,onPointerMove:R,onPointerUp:x,onPointerLeave:x,children:t(j,{ref:e,style:{transform:`translateX(calc(-${i/10}rem + ${f}rem))`},children:o.map(n=>{const r=n.key;return t(z,{children:n},r!=null?r:null)})})}),t(C,{onClick:A,className:"right-arrow",disabled:b,children:t(T,{width:14,height:14})})]})},B=[t("button",{children:"Slide 1"},"1"),t("button",{children:"Slide 2"},"2"),t("button",{children:"Slide 3"},"3"),t("button",{children:"Slide 4"},"4"),t("button",{children:"Slide 5"},"5"),t("button",{children:"Slide 6"},"6"),t("button",{children:"Slide 7"},"7"),t("button",{children:"Slide 8"},"8")],J=()=>t(D,{children:B}),Q=()=>{const[o,i]=s.useState(new Set([]));return g(X,{children:[t(D,{children:[t(I,{selectedItems:o,onSelectionChange:i,children:[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"}]}),t(I,{selectedItems:o,onSelectionChange:i,children:[{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"}]})]}),g("p",{children:["Current selections: ",[...o].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{J as Default,Q as WithToggleButtonGroups};

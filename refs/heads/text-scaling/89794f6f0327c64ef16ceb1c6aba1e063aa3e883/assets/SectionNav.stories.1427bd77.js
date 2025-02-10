import{s as u,R as w,j as h,a as t,F as v}from"./index.0e35f9e1.js";import{p as y}from"./palette.15e4d008.js";import{L as g,R as b}from"./RightArrow.8bdcdf6a.js";import{T as x}from"./index.872db060.js";import"./context.module.b83dae6a.js";import"./useButton.module.2e479d47.js";import"./FocusScope.module.2105fd97.js";import"./theme.6bab1d26.js";const A=u.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
  max-width: fit-content;
`,C=u.div`
  display: flex;
  position: inherit;
  overflow-x: auto;
  width: auto;
  transition: transform 0.3s ease-in-out;
`,N=u.div`
  flex: 0 0 auto;
  &:not(:last-child) {
    margin-right: 0.8rem;
  }
`,f=u.button`
  position: absolute;
  top: 50%;
  width: 2.8rem;
  height: 100%;
  transform: translateY(-50%);
  border: transparent;
  background: transparent;
  cursor: ${({disabled:n})=>n?"not-allowed":"pointer"};
  opacity: ${({disabled:n})=>n?.5:1};

  &:hover {
    border: 0.1rem solid ${y.pale};
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
`,k=({children:n,handlePrevArrow:e,handleNextArrow:o,isPrevArrowDisabled:c=!1,isNextArrowDisabled:d=!1})=>{const a=w.useRef(null);return h(A,{children:[t(f,{onClick:e,className:"left-arrow","aria-label":"move to previous item",disabled:c,children:t(g,{width:14,height:14})}),t(C,{ref:a,children:n.map((m,S)=>t(N,{children:m},`section-group-${S+1}`))}),t(f,{onClick:o,className:"right-arrow","aria-label":"move to next item",disabled:d,children:t(b,{width:14,height:14})})]})},K=()=>{const[n,e]=w.useState(0),o=[t("button",{onClick:()=>e(0),children:"Slide 1"},"1"),t("button",{onClick:()=>e(1),children:"Slide 2"},"2"),t("button",{onClick:()=>e(2),children:"Slide 3"},"3"),t("button",{onClick:()=>e(3),children:"Slide 4"},"4"),t("button",{onClick:()=>e(4),children:"Slide 5"},"5"),t("button",{onClick:()=>e(5),children:"Slide 6"},"6"),t("button",{onClick:()=>e(6),children:"Slide 7"},"7"),t("button",{onClick:()=>e(7),children:"Slide 8"},"8")];return h(v,{children:[t(k,{handlePrevArrow:()=>{e(a=>Math.max(a-1,0))},handleNextArrow:()=>{e(a=>Math.min(a+1,o.length-1))},isPrevArrowDisabled:n===0,isNextArrowDisabled:n===o.length-1,children:[o]}),h("span",{children:["Selected section: ",n+1]})]})},L=()=>{const n=[[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"}],[{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"},{key:"Section2.4",value:"2.4"},{key:"Section2.5",value:"2.5"}],[{key:"Section3.0",value:"3.0"},{key:"Section3.1",value:"3.1"},{key:"Section3.2",value:"3.2"},{key:"Section3.3",value:"3.3"},{key:"Section3.4",value:"3.4"}]],e=n.flat(),[o,c]=w.useState(new Set([e[0].key])),d=r=>{const i=document.querySelector(`[data-key="${r}"]`);i&&i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},a=()=>{c(r=>{const i=new Set(r),l=e.map(p=>p.key),s=l.indexOf([...r][0]);return s>0&&(i.clear(),i.add(l[s-1]),d(l[s-1])),i})},m=()=>{c(r=>{const i=new Set(r),l=e.map(p=>p.key),s=l.indexOf([...r][0]);return s<l.length-1&&(i.clear(),i.add(l[s+1]),d(l[s+1])),i})},S=n.map((r,i)=>t(x,{selectedItems:o,onSelectionChange:c,children:r},`section-${i+1}`));return h(v,{children:[t(k,{handlePrevArrow:a,handleNextArrow:m,isPrevArrowDisabled:o.has(e[0].key)||o.size===0,isNextArrowDisabled:o.has(e[e.length-1].key)||o.size===0,children:S}),h("p",{children:["Current selections: ",[...o].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{K as Default,L as WithToggleButtonGroups};

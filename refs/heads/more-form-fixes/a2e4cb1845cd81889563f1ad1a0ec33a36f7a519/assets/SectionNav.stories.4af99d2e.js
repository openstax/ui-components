import{s as u,R as w,j as h,a as t,F as f}from"./index.6d68e8e0.js";import{p as b}from"./palette.15e4d008.js";import{L as x,R as A}from"./RightArrow.3b5b8d20.js";import{T as C}from"./index.eeeddd6b.js";import"./context.module.bcbc041c.js";import"./useButton.module.232cbe65.js";import"./Collection.module.ae1c70ec.js";import"./theme.72d7bce0.js";import"./Tabs.e9d5a848.js";const k=u.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
  max-width: fit-content;
`,y=u.div`
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
`,v=u.button`
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
    border: 0.1rem solid ${b.pale};
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
`,g=({children:n,handlePrevArrow:e,handleNextArrow:i,isPrevArrowDisabled:c=!1,isNextArrowDisabled:d=!1})=>{const l=w.useRef(null);return h(k,{children:[t(v,{onClick:e,className:"left-arrow","aria-label":"move to previous item",disabled:c,children:t(x,{width:14,height:14})}),t(y,{ref:l,children:n.map((m,p)=>t(N,{children:m},`section-group-${p+1}`))}),t(v,{onClick:i,className:"right-arrow","aria-label":"move to next item",disabled:d,children:t(A,{width:14,height:14})})]})},L=()=>{const[n,e]=w.useState(0),i=[t("button",{onClick:()=>e(0),children:"Slide 1"},"1"),t("button",{onClick:()=>e(1),children:"Slide 2"},"2"),t("button",{onClick:()=>e(2),children:"Slide 3"},"3"),t("button",{onClick:()=>e(3),children:"Slide 4"},"4"),t("button",{onClick:()=>e(4),children:"Slide 5"},"5"),t("button",{onClick:()=>e(5),children:"Slide 6"},"6"),t("button",{onClick:()=>e(6),children:"Slide 7"},"7"),t("button",{onClick:()=>e(7),children:"Slide 8"},"8")];return h(f,{children:[t(g,{handlePrevArrow:()=>{e(l=>Math.max(l-1,0))},handleNextArrow:()=>{e(l=>Math.min(l+1,i.length-1))},isPrevArrowDisabled:n===0,isNextArrowDisabled:n===i.length-1,children:[i]}),h("span",{children:["Selected section: ",n+1]})]})},W=()=>{const n=[[{id:"Section1.1",value:"1.1"},{id:"Section1.2",value:"1.2"}],[{id:"Section2.0",value:"2.0"},{id:"Section2.1",value:"2.1"},{id:"Section2.2",value:"2.2"},{id:"Section2.3",value:"2.3"},{id:"Section2.4",value:"2.4"},{id:"Section2.5",value:"2.5"}],[{id:"Section3.0",value:"3.0"},{id:"Section3.1",value:"3.1"},{id:"Section3.2",value:"3.2"},{id:"Section3.3",value:"3.3"},{id:"Section3.4",value:"3.4"}]],e=n.flat(),[i,c]=w.useState(new Set([e[0].id])),d=a=>{const o=document.querySelector(`[data-section-id="${a}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},l=()=>{c(a=>{const o=new Set,r=e.map(S=>S.id),s=r.indexOf([...a][0]);return s>0&&(o.add(r[s-1]),d(r[s-1])),o})},m=()=>{c(a=>{const o=new Set,r=e.map(S=>S.id),s=r.indexOf([...a][0]);return s<r.length-1&&(o.add(r[s+1]),d(r[s+1])),o})},p=n.map((a,o)=>t(C,{selectedItems:i,onSelectionChange:c,children:a},`section-${o+1}`));return h(f,{children:[t(g,{handlePrevArrow:l,handleNextArrow:m,isPrevArrowDisabled:i.has(e[0].id)||i.size===0,isNextArrowDisabled:i.has(e[e.length-1].id)||i.size===0,children:p}),h("p",{children:["Current selections: ",[...i].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{L as Default,W as WithToggleButtonGroups};

import{s as u,R as w,j as s,a as t,F as S}from"./index.0958d440.js";import{p as g}from"./palette.15e4d008.js";import{L as b,R as x}from"./RightArrow.a086164b.js";import{T as A}from"./index.860c1e52.js";import"./useFocusRing.module.5faf7d13.js";import"./useButton.module.a97ddd89.js";import"./Collection.module.6c05d418.js";import"./context.module.1c33aef1.js";import"./useToggleState.module.27e03b19.js";import"./theme.48d111e7.js";import"./Tabs.5dc6b037.js";import"./useHasTabbableChild.module.cd41ca54.js";const C=u.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
  max-width: fit-content;
`,k=u.div`
  display: flex;
  position: inherit;
  overflow-x: auto;
  width: auto;
  transition: transform 0.3s ease-in-out;
`,I=u.div`
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
    border: 0.1rem solid ${g.pale};
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
`,f=({children:n,handlePrevArrow:e,handleNextArrow:i,isPrevArrowDisabled:a=!1,isNextArrowDisabled:c=!1})=>{const d=w.useRef(null);return s(C,{children:[t(v,{onClick:e,className:"left-arrow","aria-label":"move to previous item",disabled:a,children:t(b,{width:14,height:14})}),t(k,{ref:d,children:n.map((h,m)=>t(I,{children:h},`section-group-${m+1}`))}),t(v,{onClick:i,className:"right-arrow","aria-label":"move to next item",disabled:c,children:t(x,{width:14,height:14})})]})},E=()=>{const[n,e]=w.useState(0),i=[t("button",{onClick:()=>e(0),children:"Slide 1"},"1"),t("button",{onClick:()=>e(1),children:"Slide 2"},"2"),t("button",{onClick:()=>e(2),children:"Slide 3"},"3"),t("button",{onClick:()=>e(3),children:"Slide 4"},"4"),t("button",{onClick:()=>e(4),children:"Slide 5"},"5"),t("button",{onClick:()=>e(5),children:"Slide 6"},"6"),t("button",{onClick:()=>e(6),children:"Slide 7"},"7"),t("button",{onClick:()=>e(7),children:"Slide 8"},"8")];return s(S,{children:[t(f,{handlePrevArrow:()=>{e(d=>Math.max(d-1,0))},handleNextArrow:()=>{e(d=>Math.min(d+1,i.length-1))},isPrevArrowDisabled:n===0,isNextArrowDisabled:n===i.length-1,children:[i]}),s("span",{children:["Selected section: ",n+1]})]})},F=()=>{const n=[[{id:"Section1.1",value:"1.1"},{id:"Section1.2",value:"1.2"}],[{id:"Section2.0",value:"2.0"},{id:"Section2.1",value:"2.1"},{id:"Section2.2",value:"2.2"},{id:"Section2.3",value:"2.3"},{id:"Section2.4",value:"2.4"},{id:"Section2.5",value:"2.5"}],[{id:"Section3.0",value:"3.0"},{id:"Section3.1",value:"3.1"},{id:"Section3.2",value:"3.2"},{id:"Section3.3",value:"3.3"},{id:"Section3.4",value:"3.4"}]],e=n.flat(),[i,a]=w.useState(e?e[0].id:""),c=l=>{const o=document.querySelector(`[data-button-id="${l}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},d=()=>{a(l=>{const o=e.findIndex(p=>p.id===l);let r=l;return o>0&&(r=e[o-1].id,c(r)),r})},h=()=>{a(l=>{const o=e.findIndex(p=>p.id===l);let r=l;return o<e.length-1&&(r=e[o+1].id,c(r)),r})},m=n.map((l,o)=>t(A,{selectedItems:new Set([i]),onSelectionChange:r=>a(r.size?[...r][0]:""),items:l},`section-${o+1}`));return s(S,{children:[t(f,{handlePrevArrow:d,handleNextArrow:h,isPrevArrowDisabled:i===e[0].id||i.length===0,isNextArrowDisabled:i===e[e.length-1].id||i.length===0,children:m}),s("p",{children:["Current selected: ",i]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default,F as WithToggleButtonGroups};

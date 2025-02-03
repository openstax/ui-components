import{s as u,R as S,j as d,a as n,F as p}from"./index.adb3824b.js";import{p as v}from"./palette.15e4d008.js";import{L as y,R as g}from"./RightArrow.7a784c80.js";import{T as b}from"./index.3d9f9775.js";import"./context.module.8a6c92e2.js";import"./useButton.module.590035a4.js";import"./FocusScope.module.37813e5d.js";import"./theme.bd0fead7.js";const x=u.div`
  position: relative;
  margin: 0 4rem;
  max-width: fit-content;
`,A=u.div`
  display: flex;
  position: inherit;
  overflow-x: auto;
  width: auto;
  transition: transform 0.3s ease-in-out;
`,C=u.div`
  flex: 0 0 auto;
  margin-right: 1rem;
`,w=u.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: transparent;
  background: transparent;
  cursor: ${({disabled:t})=>t?"not-allowed":"pointer"};
  opacity: ${({disabled:t})=>t?.5:1};

  &:hover {
    border: 0.1rem solid ${v.pale};
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
`,f=({children:t,handlePrevArrow:e,handleNextArrow:r,isPrevArrowDisabled:a=!1,isNextArrowDisabled:h=!1})=>{const s=S.useRef(null);return d(x,{children:[n(w,{onClick:e,className:"left-arrow",disabled:a,children:n(y,{width:14,height:14})}),n(A,{ref:s,children:n(C,{children:t})}),n(w,{onClick:r,className:"right-arrow",disabled:h,children:n(g,{width:14,height:14})})]})},G=()=>{const[t,e]=S.useState(0),r=[n("button",{onClick:()=>e(0),children:"Slide 1"},"1"),n("button",{onClick:()=>e(1),children:"Slide 2"},"2"),n("button",{onClick:()=>e(2),children:"Slide 3"},"3"),n("button",{onClick:()=>e(3),children:"Slide 4"},"4"),n("button",{onClick:()=>e(4),children:"Slide 5"},"5"),n("button",{onClick:()=>e(5),children:"Slide 6"},"6"),n("button",{onClick:()=>e(6),children:"Slide 7"},"7"),n("button",{onClick:()=>e(7),children:"Slide 8"},"8")];return d(p,{children:[n(f,{handlePrevArrow:()=>{e(s=>Math.max(s-1,0))},handleNextArrow:()=>{e(s=>Math.min(s+1,r.length-1))},isPrevArrowDisabled:t===0,isNextArrowDisabled:t===r.length-1,children:r}),d("span",{children:["Selected section: ",t+1]})]})},K=()=>{const t=[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"},{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"},{key:"Section2.4",value:"2.4"},{key:"Section2.5",value:"2.5"},{key:"Section3.1",value:"3.1"},{key:"Section3.2",value:"3.2"},{key:"Section3.3",value:"3.3"},{key:"Section3.4",value:"3.4"}],[e,r]=S.useState(new Set([t[0].key])),a=i=>{console.log(i);const o=document.querySelector(`[data-key="${i}"]`);console.log(o),o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},h=()=>{r(i=>{const o=new Set(i),l=t.map(m=>m.key),c=l.indexOf([...i][0]);return c>0&&(o.clear(),o.add(l[c-1]),a(l[c-1])),o})},s=()=>{r(i=>{const o=new Set(i),l=t.map(m=>m.key),c=l.indexOf([...i][0]);return c<l.length-1&&(o.clear(),o.add(l[c+1]),a(l[c+1])),o})},k=n(b,{selectedItems:e,onSelectionChange:r,children:t});return d(p,{children:[n(f,{handlePrevArrow:h,handleNextArrow:s,isPrevArrowDisabled:e.has(t[0].key)||e.size===0,isNextArrowDisabled:e.has(t[t.length-1].key)||e.size===0,children:k}),d("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{G as Default,K as WithToggleButtonGroups};

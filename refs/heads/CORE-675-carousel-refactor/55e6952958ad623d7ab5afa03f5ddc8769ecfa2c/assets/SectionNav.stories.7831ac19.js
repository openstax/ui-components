import{s as u,R as S,j as d,a as n,F as p}from"./index.6fd16f1d.js";import{p as v}from"./palette.15e4d008.js";import{L as y,R as g}from"./RightArrow.05b664fb.js";import{T as b}from"./index.c63ad209.js";import"./context.module.e28c74c6.js";import"./useButton.module.a23993e8.js";import"./FocusScope.module.f7e109d0.js";import"./theme.6704b98c.js";const x=u.div`
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
`,k=({children:t,handlePrevArrow:e,handleNextArrow:r,isPrevArrowDisabled:c=!1,isNextArrowDisabled:h=!1})=>{const l=S.useRef(null);return d(x,{children:[n(w,{onClick:e,className:"left-arrow",disabled:c,children:n(y,{width:14,height:14})}),n(A,{ref:l,children:n(C,{children:t})}),n(w,{onClick:r,className:"right-arrow",disabled:h,children:n(g,{width:14,height:14})})]})},G=()=>{const[t,e]=S.useState(0),r=[n("button",{onClick:()=>e(0),children:"Slide 1"},"1"),n("button",{onClick:()=>e(1),children:"Slide 2"},"2"),n("button",{onClick:()=>e(2),children:"Slide 3"},"3"),n("button",{onClick:()=>e(3),children:"Slide 4"},"4"),n("button",{onClick:()=>e(4),children:"Slide 5"},"5"),n("button",{onClick:()=>e(5),children:"Slide 6"},"6"),n("button",{onClick:()=>e(6),children:"Slide 7"},"7"),n("button",{onClick:()=>e(7),children:"Slide 8"},"8")];return d(p,{children:[n(k,{handlePrevArrow:()=>{e(l=>Math.max(l-1,0))},handleNextArrow:()=>{e(l=>Math.min(l+1,r.length-1))},isPrevArrowDisabled:t===0,isNextArrowDisabled:t===r.length-1,children:r}),d("span",{children:["Selected section: ",t+1]})]})},K=()=>{const t=[{key:"Section1.1",value:"1.1"},{key:"Section1.2",value:"1.2"},{key:"Section2.0",value:"2.0"},{key:"Section2.1",value:"2.1"},{key:"Section2.2",value:"2.2"},{key:"Section2.3",value:"2.3"},{key:"Section2.4",value:"2.4"},{key:"Section2.5",value:"2.5"},{key:"Section3.1",value:"3.1"},{key:"Section3.2",value:"3.2"},{key:"Section3.3",value:"3.3"},{key:"Section3.4",value:"3.4"}],[e,r]=S.useState(new Set([t[0].key])),c=s=>{const o=document.querySelector(`[data-key="${s}"]`);o&&o.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},h=()=>{r(s=>{const o=new Set(s),i=t.map(m=>m.key),a=i.indexOf([...s][0]);return a>0&&(o.clear(),o.add(i[a-1]),c(i[a-1])),o})},l=()=>{r(s=>{const o=new Set(s),i=t.map(m=>m.key),a=i.indexOf([...s][0]);return a<i.length-1&&(o.clear(),o.add(i[a+1]),c(i[a+1])),o})},f=n(b,{selectedItems:e,onSelectionChange:r,children:t});return d(p,{children:[n(k,{handlePrevArrow:h,handleNextArrow:l,isPrevArrowDisabled:e.has(t[0].key)||e.size===0,isNextArrowDisabled:e.has(t[t.length-1].key)||e.size===0,children:f}),d("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{G as Default,K as WithToggleButtonGroups};

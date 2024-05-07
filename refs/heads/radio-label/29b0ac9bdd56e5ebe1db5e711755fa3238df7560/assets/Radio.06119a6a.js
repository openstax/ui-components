import{s as l,R as m,a as r,j as d}from"./index.7180f5f2.js";import{c as o}from"./theme.c0d335ad.js";import{C as u}from"./Tooltip.4bbd0006.js";import{a as h,b as f}from"./module.7b628986.js";const n=l.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?o.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,p=l.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${o.palette.white};
  opacity: ${e=>e.isDisabled?"40%":"100%"};
  font: inherit;
  color: ${o.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${e=>e.isDisabled?"#e6e6e6":"currentColor"};
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${o.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,y=l.div`
  display: inline-flex;
`,w=({children:e,disabled:t,...i})=>{let a=h({delay:0}),s=m.useRef(null),{triggerProps:c,tooltipProps:b}=f({delay:0},a,s);return i.tooltipText&&t?r(y,{children:d(n,{ref:s,isDisabled:!0,"aria-disabled":!0,...c,children:[r(p,{type:"radio",onFocus:()=>a.open(),isDisabled:!0,"aria-disabled":!0,...i}),e,a.isOpen&&r(u,{state:a,...b,placement:"right",children:i.tooltipText})]})}):d(n,{isDisabled:t,"aria-disabled":t,children:[r(p,{type:"radio",isDisabled:t,"aria-disabled":t,...i}),e]})};export{w as R};

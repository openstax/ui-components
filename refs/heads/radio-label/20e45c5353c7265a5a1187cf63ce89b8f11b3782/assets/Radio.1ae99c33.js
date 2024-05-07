import{s as l,R as n,a,j as d}from"./index.bc8d8fee.js";import{c as o}from"./theme.c8930371.js";import{C as f}from"./Tooltip.552e198d.js";import{a as h,b as y}from"./module.191d94f7.js";const p=l.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?o.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,c=l.input`
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
`,$=l.div`
  display: inline-flex;
`,w=({children:e,disabled:t,...i})=>{let r=h({delay:0}),s=n.useRef(null),b=n.useRef(null),{triggerProps:m,tooltipProps:u}=y({delay:0},r,s);return i.tooltipText&&t?a($,{children:d(p,{ref:s,isDisabled:!0,"aria-disabled":!0,...m,children:[a(c,{ref:b,onFocus:()=>r.open(),isDisabled:!0,"aria-disabled":!0,...i,type:"radio"}),e,r.isOpen&&a(f,{state:r,...u,placement:"right",children:i.tooltipText})]})}):d(p,{isDisabled:t,"aria-disabled":t,children:[a(c,{isDisabled:t,"aria-disabled":t,...i,type:"radio"}),e]})};export{w as R};

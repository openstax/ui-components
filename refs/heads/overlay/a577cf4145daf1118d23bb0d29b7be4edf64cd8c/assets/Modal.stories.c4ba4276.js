import{b as t,c as a,M as s}from"./Modal.6b46406e.js";import{B as d}from"./Button.19ffe365.js";import{E as l}from"./Error.d351e6e2.js";import{j as i,a as o,r as n}from"./index.44fe421c.js";import"./theme.1ea202d0.js";import"./palette.15e4d008.js";const c=e=>i(t,{...e,variant:"error",heading:"Error",children:[o(l,{}),o(a,{children:o(d,{onClick:e.onModalClose,children:"OK"})})]}),p=()=>{const[e,r]=n.exports.useState(!0);return o(t,{heading:"test",onModalClose:()=>r(!1),show:e,children:o(s,{children:"Message"})})},E=()=>{const[e,r]=n.exports.useState(!0);return o(c,{onModalClose:()=>r(!1),show:e,children:o(s,{children:"Message"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as Default,E as Error};
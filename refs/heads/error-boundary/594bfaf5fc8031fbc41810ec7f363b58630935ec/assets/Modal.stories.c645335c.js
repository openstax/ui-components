import{M as t,E as a,q as d,r as s}from"./Error.994ef2d3.js";import{B as l}from"./Button.af5b937a.js";import{j as i,a as e,r as n}from"./index.331ced3d.js";import"./theme.f33a0c91.js";import"./palette.15e4d008.js";const c=o=>i(t,{...o,variant:"error",heading:"Error",children:[e(a,{}),e(d,{children:e(l,{onClick:o.onModalClose,children:"OK"})})]}),f=()=>{const[o,r]=n.exports.useState(!0);return e(t,{heading:"test",onModalClose:()=>r(!1),show:o,children:e(s,{children:"Message"})})},p=()=>{const[o,r]=n.exports.useState(!0);return e(c,{onModalClose:()=>r(!1),show:o,children:e(s,{children:"Message"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,p as Error};

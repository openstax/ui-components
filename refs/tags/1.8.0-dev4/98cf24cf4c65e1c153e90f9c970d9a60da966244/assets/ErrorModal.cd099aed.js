import{B as i}from"./Button.9e99d91f.js";import{b as t,c as d}from"./Modal.c013e7e2.js";import{E as e}from"./Error.c03e3b6e.js";import{j as l,a as r}from"./index.667825f3.js";const f=o=>{const{children:a,heading:n,...s}=o;return l(t,{...s,variant:"error",heading:"Error",children:[r(e,{heading:n,children:a}),r(d,{children:r(i,{onClick:o.onModalClose,children:"OK"})})]})};export{f as E};
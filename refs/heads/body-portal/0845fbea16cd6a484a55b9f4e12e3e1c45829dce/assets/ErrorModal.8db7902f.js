import{B as i}from"./Button.9c2e53ee.js";import{b as t,c as d}from"./Modal.a67e9f6d.js";import{E as e}from"./Error.1a1da7dc.js";import{j as l,a as r}from"./index.12ab52f0.js";const f=o=>{const{children:a,heading:n,...s}=o;return l(t,{...s,variant:"error",heading:"Error",children:[r(e,{heading:n,children:a}),r(d,{children:r(i,{onClick:o.onModalClose,children:"OK"})})]})};export{f as E};
import{R as s}from"./index.9367c45b.js";import{V as c,I as i}from"./contexts.b872d547.js";import{g as u}from"./utils.e3275d2c.js";const d=()=>{const{setError:n}=s.useContext(c);return s.useCallback(e=>{n(e?{error:e,type:u(e),eventId:i(e)}:null)},[n])},l=n=>{const e=window.matchMedia(n),[r,a]=s.useState(e.matches),t=s.useCallback(o=>{o.matches?a(!0):a(!1)},[]);return s.useEffect(()=>(typeof e.addEventListener=="function"?e.addEventListener("change",t):e.addListener(t),()=>{typeof e.removeEventListener=="function"?e.removeEventListener("change",t):e.removeListener(t)}),[t,e]),r};export{l as a,d as u};

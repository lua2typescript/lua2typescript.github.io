import "./style.css"
import {transformLuaToTypeScript} from "./transpile";


const inputTextarea = document.querySelector("#input") as HTMLTextAreaElement;
const outputTextarea = document.querySelector("#output") as HTMLTextAreaElement;


const transpile = () => {
  let lua = inputTextarea.value;
  lua = unescape(encodeURIComponent(lua))

  const res = transformLuaToTypeScript(
    lua,
    {}
  )


  outputTextarea.value = res.tsCode;
}
inputTextarea.addEventListener('input', transpile);
transpile()

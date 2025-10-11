/* ...existing code... */
// Seahorse emoji: U+1F99E
const SEAHORSE = "\uD83E\uDD9E";
const display = document.getElementById("emojiDisplay");
const supportText = document.getElementById("supportText");
const fallbackImg = document.getElementById("fallbackImg");

function supportsEmoji(emoji){
  // Render emoji and a fallback character onto canvas and compare widths.
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.font = "40px sans-serif";
  const measurement = ctx.measureText(emoji).width;
  const fallback = ctx.measureText("\uFFFD").width; // replacement char width
  // If measurement differs from fallback and is > 0, assume support.
  return measurement && measurement !== fallback;
}

function updateUI(){
  display.textContent = SEAHORSE;
  const ok = supportsEmoji(SEAHORSE);
  if(ok){
    supportText.textContent = "Yes — your system can render the seahorse emoji.";
    fallbackImg.style.display = "none";
  } else {
    supportText.textContent = "Not supported on this system — using fallback image.";
    fallbackImg.style.display = "";
  }
  // show codepoint text already present in DOM
}

updateUI();

document.getElementById("copyEmoji").addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(SEAHORSE);
    alert("Seahorse emoji copied to clipboard");
  }catch(e){
    prompt("Copy the emoji manually:", SEAHORSE);
  }
});

document.getElementById("copyCode").addEventListener("click", async () => {
  const code = "U+1F99E (\"\\uD83E\\uDD9E\")";
  try{
    await navigator.clipboard.writeText(code);
    alert("Codepoint copied to clipboard");
  }catch(e){
    prompt("Copy the codepoint:", code);
  }
});
/* ...existing code... */


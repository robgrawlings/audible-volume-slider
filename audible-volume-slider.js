// ==UserScript==
// @name     		audible-volume-slider
// @namespace 	https://github.com/robgrawlings
// @description	Injects a volume slider into the audible cloud player.
// @version  		1.0.0
// @grant    		none
// @include  		/^https?:\/\/(www\.)?audible\.(.*?)\/cloudplayer.*$/
// @run-at 			document-end
// ==/UserScript==

void function usAddVolumeSlider() {
  const createInput = () => {
    let input = document.createElement("input")
    input.setAttribute("type", "range")
    input.setAttribute("min", "0")
    input.setAttribute("max", "100")
    input.setAttribute("value", "100")
    input.setAttribute("id", "usAudibleVolumeSlider")
    input.oninput = () => unsafeWindow.player.volume = input.value * 0.01
    //input.setAttribute("style", "") //style this later maybe
    return input
  }
  
  const createLabel = () => {
    let label = document.createElement("div")
    label.innerText = "Volume"
    label.setAttribute("class", "bc-text bc-size-mini bc-color-secondary")
    return label
  }
  
  const createOuter = () => {
    let outer = document.createElement("div")
    outer.setAttribute("style", "text-align: center; margin-bottom: 2rem")
    return outer
  }
  
  let input = createInput()
  let label = createLabel()
  let outer = createOuter()
  let controls = document.getElementById("adbl-cloud-player-controls")
  
  outer.appendChild(input)
  outer.appendChild(label)
  controls.insertBefore(outer, controls.firstChild)
}()

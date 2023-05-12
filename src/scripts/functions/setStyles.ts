function setStyles() {
    for (let i = 0; i < properties.length; i++) {
        properties[i].addEventListener("click", () => {
          let styleName = sets[id].name
          prop.style[styleName] = properties[i].textContent;
        });
      }
}
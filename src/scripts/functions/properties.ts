let prop_name: HTMLElement;
let properties: HTMLCollection;
let prop: HTMLDivElement;
let id: number;

function loadPage() {
  getIds()

  setProperties()
  setStyles()
}

window.setTimeout(() => {
  if (!route[1]) {
    return;
  }

  loadPage()
}, 250);

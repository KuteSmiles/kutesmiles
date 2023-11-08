(async function(){
  var fulldisplay = document.createElement("section");
  fulldisplay.style = `
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow: hidden;
  `;
  document.body.appendChild(fulldisplay);

  var topbar = document.createElement("div");
  topbar.style = `
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: calc((0.4cm) + (18pt));
    overflow: hidden;
    border-bottom: solid 1px #FFFFA3;
  `;
  fulldisplay.appendChild(topbar);
}).call({});

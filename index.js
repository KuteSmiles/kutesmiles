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
}).call({});

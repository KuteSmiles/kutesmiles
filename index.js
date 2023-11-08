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

  fullDisplay.addEventListener("contextmenu", (ev)=>ev.preventDefault());

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

  var clock = document.createElement("div");
  clock.style = `
    position: absolute;
    left: 0%;
    top: 0%;
    width: calc((0.4cm) + (100px));
    height: 100%;
    padding: 0.2cm;
    font-size: 16pt;
  `;
  topbar.appendChild(clock);

  var navtabs = document.createElement("div");
  navtabs.style = `
    position: absolute;
    left: calc((0.4cm) + (100px));
    top: 0%;
    width: calc((100%) - (0.4cm) - (100px));
    height: 100%;
    overflow: hidden;
  `;
  topbar.appendChild(navtabs);

  var xtabs = new Map();
  var active = null;

  var setTab = (tab)=>{
    if (!xtabs.has(tab)) return;
    var btn = xtabs.get(tab);
    for (var other of Array.from(xtabs.keys()))
      if (other === tab) other.remove(); else fulldisplay.appendChild(other);
    tab.style = `
      position: absolute;
      left: 0%;
      top: calc((0.4cm) + (18pt));
      width: 100%;
      height: calc((100%) - (0.4cm) - (18pt));
      overflow: hidden;
    `;
    active = tab;
  };
  var newTab = (title)=>{
    var tabButton = document.createElement("canvas");
    tabButton.width = 240;
    tabButton.height = 70;
    var ctx = tabButton.getContext("2d");
    ctx.clearRect(0, 0,240, 70);
    var path = new Path2D();
    path.moveTo(0, 70);
    path.lineTo(15, 0);
    path.lineTo(225, 0);
    path.lineTo(240, 70);

    ctx.fillStyle = "#030407";
    ctx.fill(path);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "12pt sans-serif";
    var metrics = ctx.measureText(title);
    var ascending = metrics.fontBoundingBoxAscent;
    var descending = metrics.fontBoundingBoxDescent;
    var height = ascending + descending;
    var width = metrics.width;
    ctx.textAlign = "center";
    var y = 35 - height / 2;
    y += ascending;
    ctx.fillText(title, 120, y);

    var tab = document.createElement("section");
    tab.style = `
      position: absolute;
      left: 0%;
      top: 0%;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `;

    xtabs.set(tab, tabButton);
    navtabs.appendChild(tabButton);
    tabButton.addEventListener("click", ()=>setTab(tab));

    if (!active) setTab(tab);

    return tab;
  };

  var tab_home = newTab("home");

  var iframe = document.createElement("iframe");
  iframe.style = `
    position: absolute;
    left: 0.3cm;
    top: 0.3cm;
    width: calc((100%) - (0.6cm));
    height: calc((100%) - (0.6cm));
  `;
  iframe.src = "https://linktr.ee/kutesmiles";
  tab_home.appendChild(iframe);
}).call({});

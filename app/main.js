const Assign_alert = "締切が近い課題があります。";

requestIdleCallback(() => {
    
    document.body.innerHTML = document.body.innerHTML.replaceAll(/\[.*?\]/g, "")


    var i = 0;
    document.body.innerHTML = document.body.innerHTML.replaceAll(Assign_alert, () => (i++, i % 2 ? "Go for it!" : "Don't give up!"))
    
  })

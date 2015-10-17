document.addEventListener("DOMContentLoaded", function() {

  var forcemenu = document.querySelector(".oak-inner");
  var forcetouch = document.querySelector(".forcetouchsupport");

  var fsm = StateMachine.create({
    initial: 'rest',
    events: [
      { name: 'mousedown',      from: 'rest',           to: 'mousedown' },
      { name: 'mouseup',        from: 'mousedown',      to: 'rest' },
      { name: 'forcemousedown', from: 'mousedown',      to: 'forcemousedown' },
      { name: 'forcemouseup',   from: 'forcemousedown', to: 'mousedown' }
    ], callbacks: {
      onforcemousedown: function() { forcetouch.className = "navigation-active";  }, //force down

    }
  });

  forcemenu.addEventListener("webkitmouseforcedown", function(ev) {
    fsm.forcemousedown();
    console.log("mouseforcedown");
  });

  forcemenu.addEventListener("webkitmouseforceup", function(ev) {
    fsm.forcemouseup();
    console.log("mouseforceup");
  });

  forcemenu.addEventListener("mouseup", function(ev) {
    fsm.mouseup();
    console.log("mouseup");
  });

  forcemenu.addEventListener("mousedown", function(ev) {
    fsm.mousedown();
    console.log("mousedown");
  });

  forcemenu.addEventListener("webkitmouseforcewillbegin", function(ev) {
    console.log("mouseforcewillbegin");
    // if not preventing default, force-mousing on text fires Quicklook
    ev.preventDefault();
  });

});

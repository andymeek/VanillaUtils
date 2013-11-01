/*
// +--------------------------------------------------------------------------------------------------------+  
// | Vanilla JavaScript Utilities/Helper functions object                                                                                 |                                            |
// +--------------------------------------------------------------------------------------------------------+
*/
VanillaUtils = {
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Cross browser add event
  // | Usage:
  // | HTML - <div id="parent"><div id="child">Hello</div></div>
  // | JS - VanillaUtils.addEvent(document.getElementById('parent'), 'click', function() { alert('clicked'); });
  // +------------------------------------------------------------------------------------------------------+
  */
    addEvent: function (element, event, fn, useCapture) {
        'use strict';
        if (element.addEventListener) {
            useCapture = useCapture === true ? true : false;
            element.addEventListener(event, fn, useCapture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, fn);
        } else {
            element['on' + event] = fn;
        }
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Cross browser remove event 
  // | Usage:
  // | VanillaUtils.removeEvent(document, 'click', function() { method(); });
  // +------------------------------------------------------------------------------------------------------+
  */
    removeEvent: function (element, event, fn, useCapture) {
        'use strict';
        if (element.addEventListener) {
            useCapture = useCapture === true ? true : false;
            element.removeEventListener(event, fn, useCapture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, fn);
        } else {
            element['on' + event] = null;
        }
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Cross browser stop default event
  // | Usage:
  // | HTML: <a id="link" href="http://google.com">Hello</a>
  // | JS: VanillaUtils.addEvent(document.getElementById('link'), 'click', function(e) { 
            VanillaUtils.stopDefault(e);
        });
    });
  // +------------------------------------------------------------------------------------------------------+
  */
    stopDefault: function (e) {
        'use strict';
        if (e && e.preventDefault) {
            e.preventDefault();
        } else if (window.event && window.event.returnValue) {
            window.eventReturnValue = false;
        }
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Cross browser stop default even
  // | Return (Bool)
  // | Usage:
  // | console.log(VanillaUtils.Utils.isIE());
  // +------------------------------------------------------------------------------------------------------+
  */
    isIE: function () {
        'use strict';
        return navigator.userAgent.indexOf('MSIE') !== -1;
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Trim white space
  // | @param str (String)
  // | Return str (String)
  // | Usage:
  // | console.log(VanillaUtils.trim(' Hello this is some text'));
  // +------------------------------------------------------------------------------------------------------+
  */
    trim: function (str) {
        'use strict';
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Has Class
  // | @param elm (Object)
  // | @param cName (String)
  // | Return (Bool)
  // | Usage:
  // | console.log(VanillaUtils.hasClass(document.getElementById('parent'), 'html-class'));
  // +------------------------------------------------------------------------------------------------------+
  */
    hasClass: function (elm, cName) {
        'use strict';
        return (' ' + elm.className + ' ').indexOf(' ' + cName + ' ') !== -1;
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Add Class
  // | @param elm (Object)
  // | @param cName (String)
  // | Usage:
  // | HTML - <div id="parent"><div id="child">Hello</div></div>
  // | JS - VanillaUtils.addClass(document.getElementById('parent'), 'html-class');
  // +------------------------------------------------------------------------------------------------------+
  */
    addClass: function (elm, cName) {
        'use strict';
        if (!this.hasClass(elm, cName)) {
            elm.className = (elm.className === '') ? cName : elm.className + ' ' + cName;
        }
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Add Class
  // | @param elm (Object)
  // | @param cName (String)
  // | Usage:
  // | HTML - <div id="parent"><div id="child">Hello</div></div>
  // | JS - VanillaUtils.removeClass(document.getElementById('parent'), 'red');
  // +------------------------------------------------------------------------------------------------------+
  */
    removeClass: function (elm, cName) {
        'use strict';
        elm.className = this.trim((' ' + elm.className + ' ').replace(' ' + cName + ' ', ' '));
    },
    /*
  // +------------------------------------------------------------------------------------------------------+  
  // | Has Parent
  // | @param elm (Object)
  // | @param id (String)
  // | Return (Bool)
  // | Usage:
  // | HTML - <div id="parent"><div id="child">Hello</div></div>
  // | JS - VanillaUtils.hasParent(document.getElementById('child'));
  // +------------------------------------------------------------------------------------------------------+
  */
    hasParent: function (elm, id) {
        'use strict';
        if (elm) {
            do {
                if (elm.id === id) {
                    return true;
                }
                if (elm.nodeType === 9) {
                    break;
                }
            }
            while ((elm = elm.parentNode));
        }
        return false;
    }

};


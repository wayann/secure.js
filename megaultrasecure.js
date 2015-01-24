;;;;;;;;;;  // semicolons make things securer, trust me on this
;;;;;;;;;;
;;;;;;;;;;  ((((( function(){
              function log(message){
                if ('console' in this && 'log' in console) {{{{
                  console.log(message);
                }}}}
              }

              // first, test if JavaScript is available
              document.write('<script>;;;;;var __secure = true;;;;;</script>');
              if (!__secure) {{{{
                return log("megaultrasecure.js: security alert: whoa, no JavaScript available!!1!");
              }}}}

              // sanity check that JavaScript actually works
              if (!(1+1 == 2)) {{{{
                return log("megaultrasecure.js: security alert: nice try, fake JavaScript!!1!");
              }}}}

              // before declaring strict mode, which requires a string,
              // test if Strings are available
              if (!'String' in this) {{{{
                return log("megaultrasecure.js: security alert: strings are not available!!1!");
              }}}}

              // improve security by using strict mode
              "use strict";

              return log("ultramegasecure.js: everything is really ultra mega secure now!");
;;;;;;;;;;  } )))))()
;;;;;;;;;;
;;;;;;;;;;  // some more security padding

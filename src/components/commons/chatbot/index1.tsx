import { useEffect } from "react";

export default function ChatBot() {
  useEffect(() => {
    const script = document.createElement("script");
    document.head.appendChild(script);
    script.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";

    script.onload = (): any => {
      if (process.window) {
        window.addEventListener(
          "session_connect",
          function (e) {
            this.session_connect(e.detail);
          }.bind(this)
        );
        if (
          typeof window.androidinterface != "undefined" ||
          (typeof webkit != "undefined" &&
            typeof webkit.messageHandlers != "undefined" &&
            typeof webkit.messageHandlers.iOSinterface != "undefined")
        ) {
        } else {
          script.onload = (function () {
            var w = window;
            if (w.ChannelIO) {
              return (
                window.console.error ||
                window.console.log ||
                function () {}
              )("ChannelIO script included twice.");
            }
            var ch = function () {
              ch.c(arguments);
            };
            ch.q = [];
            ch.c = function (args) {
              ch.q.push(args);
            };
            w.ChannelIO = ch;
            function l() {
              if (w.ChannelIOInitialized) {
                return;
              }
              w.ChannelIOInitialized = true;
              var s = document.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
              s.charset = "UTF-8";
              var x = document.getElementsByTagName("script")[0];
              x.parentNode.insertBefore(s, x);
            }
            if (document.readyState === "complete") {
              l();
            } else if (window.attachEvent) {
              window.attachEvent("onload", l);
            } else {
              window.addEventListener("DOMContentLoaded", l, false);
              window.addEventListener("load", l, false);
            }
          })();
          ChannelIO("boot", {
            pluginKey: "31b638f3-c4d1-4f94-841c-f499736d02f5",
          });
        }
      }
    };
  }, []);

  return <></>;
}

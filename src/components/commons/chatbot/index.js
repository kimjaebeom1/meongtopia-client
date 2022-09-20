import { useEffect } from "react";

export default function ChatBot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    document.head.appendChild(script);

    script.onload = () => {
      const w = window;
      if (w.ChannelIO) {
        return (window.console.error || window.console.log || function () {})(
          "ChannelIO script included twice."
        );
      }
      const ch = function () {
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
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        const x = document.getElementsByTagName("script")[0];
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
      // eslint-disable-next-line no-undef
      ChannelIO("boot", {
        pluginKey: "31b638f3-c4d1-4f94-841c-f499736d02f5",
      });
    };
  }, []);

  return <></>;
}

'use client'
import { Component } from 'react';


class GapifyWidget extends Component {
  componentDidMount() {
    // Add Gapify Settings
    window.gapifySettings = {
      hideMessageBubble: false,
      position: "right", // This can be left or right
      locale: "en", // Language to be set
      type: "standard", // [standard, expanded_bubble]
    };

    // Paste the script from inbox settings except the <script> tag
    (function (d, t) {
      var BASE_URL = "https://app.gapify.ai";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];

      g.src = BASE_URL + "/packs/js/sdk.js";
      s.parentNode.insertBefore(g, s);
      g.async = !0;
      g.onload = function () {
        window.gapifySDK.run({
          websiteToken: 'ypRJSWWLxNDdHG39yicrKjsA',
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }

  render() {
    return null;
  }
}

export default GapifyWidget;

goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.debug.LogBuffer");
  goog.module.declareLegacyNamespace();
  const LogBuffer = goog.require("goog.log.LogBuffer");
  exports.getInstance = () => {
    return LogBuffer.getInstance();
  };
  exports.isBufferingEnabled = () => {
    return LogBuffer.getInstance().isBufferingEnabled();
  };
  return exports;
});

//# sourceMappingURL=goog.debug.logbuffer.js.map

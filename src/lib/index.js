import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import screenfull from "screenfull";

const FullScreenComponent = ({ children, onChange, onError }) => {
  const ref = useRef();

  useEffect(() => {
    screenfull.onchange(() => {
      if (onChange) {
        onChange();
      }
    });
    screenfull.on("error", event => {
      if (onError) {
        onError();
      }
    });
  }, []);

  return children({
    ref,
    isEnabled: screenfull.isEnabled,
    onToggle: () => {
      screenfull.toggle(ref.current);
    },
    onRequest: () => {
      screenfull.request(ref.current);
    },
    onExit: () => {
      screenfull.exit(ref.current);
    }
  });
};

export default FullScreenComponent;

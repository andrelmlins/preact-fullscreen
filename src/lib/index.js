import { h, Component, createRef } from "preact";
import screenfull from "screenfull";

class FullScreenComponent extends Component {
  constructor(props) {
    super(props);

    this.ref = createRef();
  }

  componentDidMount() {
    screenfull.onchange(() => {
      if (this.props.onChange) {
        this.props.onChange();
      }
    });
    screenfull.on("error", event => {
      if (this.props.onError) {
        this.props.onError();
      }
    });
  }

  render(props) {
    return props.children({
      ref: this.ref,
      onToggle: () => {
        screenfull.toggle(this.ref.current);
      },
      onRequest: () => {
        screenfull.request(this.ref.current);
      },
      onExit: () => {
        screenfull.exit(this.ref.current);
      }
    });
  }
}

export default FullScreenComponent;

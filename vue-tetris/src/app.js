import { transform } from "./unit/const";

export default {
  mounted() {
    this.render();
    window.addEventListener("resize", this.resize.bind(this), true);
  },
  data() {
    return {
      size: {},
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
      filling: ""
    };
  },
  methods: {
    render() {
      let filling = 0;
      const size = (() => {
        const w = this.w;
        const h = this.h;
        const ratio = h / w;
        let scale;
        let css = {};
        if (ratio < 1.5) {
          scale = h / 960;
        } else {
          scale = w / 640;
          filling = (h - 960 * scale) / scale / 3;
          css = {
            "padding-top": Math.floor(filling) + 42 + "px",
            "padding-bottom": Math.floor(filling) + "px",
            "margin-top": Math.floor(-480 - filling * 1.5) + "px"
          };
        }
        css[transform] = `scale(${scale})`;
        return css;
      })();
      this.size = size;
      // this.start();
      this.filling = filling;
    },
    resize() {
      this.w = document.documentElement.clientWidth;
      this.h = document.documentElement.clientHeight;
      this.render();
    }
  }
};

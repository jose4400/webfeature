import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

animate(
  ".staggeranimation li",
  { opacity: [0, 1] },
  {
    delay: stagger(1, { start: 2 }),
  }
);

animate(
  ".staggeranimation .stag",
  { opacity: [0, 1] },
  {
    delay: stagger(1, { start: 2 }),
  }
);

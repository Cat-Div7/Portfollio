import { fadeInUp, staggerContainer, fadeIn, scaleIn } from "../lib/animations";

describe("animation variants", () => {
  it("fadeInUp hidden state has opacity 0", () => {
    expect(fadeInUp.hidden).toMatchObject({ opacity: 0 });
  });

  it("fadeInUp visible state has opacity 1", () => {
    expect(fadeInUp.visible).toMatchObject({ opacity: 1 });
  });

  it("staggerContainer has staggerChildren in transition", () => {
    const visible = staggerContainer.visible as { transition: { staggerChildren: number } };
    expect(visible.transition.staggerChildren).toBeDefined();
  });

  it("fadeIn hidden state has opacity 0", () => {
    expect(fadeIn.hidden).toMatchObject({ opacity: 0 });
  });

  it("scaleIn hidden state has scale less than 1", () => {
    const hidden = scaleIn.hidden as { scale: number };
    expect(hidden.scale).toBeLessThan(1);
  });
});
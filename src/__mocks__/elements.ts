const ELEMENTS_AMOUNT = 300;

export const ELEMENTS = Array.from({ length: ELEMENTS_AMOUNT }, (_, i) => ({
  label: `Element ${i + 1}`,
  value: i + 1,
}));

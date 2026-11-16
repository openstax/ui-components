export type TextResizerValue = -2 | -1 | 0 | 1 | 2 | 3;
export const textResizerValues: TextResizerValue[] = [-2, -1, 0, 1, 2, 3];
const textResizerScales = [0.75, 0.9, 1, 1.25, 1.5, 2];
export const textResizerValueMap = new Map(textResizerValues.map((v, i) => [v, textResizerScales[i]]));
export const textResizerMinValue = textResizerValues[0];
export const textResizerMaxValue = textResizerValues[textResizerValues.length - 1];
export const textResizerDefaultValue = textResizerValues[2];
export const textResizerStorageKey = 'textSize';

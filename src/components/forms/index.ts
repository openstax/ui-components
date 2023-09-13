/* 
 * controlled input helpers aim to:
 *   - provide data bindings to form state
 *   - improve behavior of mutable inputs to behave more like raw html and/or more intuitively. for example:
 *     - disabled checkboxes don't post a value
 *     - a selected select option that disappears and reappers will become selected when it reappears as long as
 *       a new option wasn't selected in the meantime.
 */
export * as Controlled from './controlled';

/* uncontrolled input helpers aim to:
 *   - maintain behavior of native react elements
 *   - provide basic consistent layout including labels and required indicators
 *   - provide basic additive quality of life features like onChangeValue and transformValue
 */
export * as Uncontrolled from './uncontrolled';

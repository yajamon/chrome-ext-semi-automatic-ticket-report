// その他を選択
/**
 * @type {NodeListOf<HTMLInputElement>}
 */
const radios = document.getElementsByName("violation_code");
for (let index = 0; index < radios.length; index++) {
  let element = radios[index];
  if (element.value === "other") {
    element.click();
    break;
  }
}
// その他の内容を選択
/**
 * @type {HTMLSelectElement}
 */
const select = document.getElementsByName("other_violation_code").item(0);
for (let index = 0; index < select.options.length; index++) {
  /**
   * @type {HTMLOptionElement}
   */
  let element = select.options[index];
  let regexp = /特定.*商品.*規定/g;
  console.log(element.innerText);
  if (element.innerText.match(regexp)) {
    element.selected = true;
    break;
  }
}

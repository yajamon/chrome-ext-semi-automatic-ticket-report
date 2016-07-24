// その他を選択
/**
 * @type {NodeListOf<HTMLInputElement>}
 */
var radios = document.getElementsByName("violation_code");
for (var index = 0; index < radios.length; index++) {
  var element = radios[index];
  if (element.value !== "other") {
    continue;
  }
  element.click();
  break;
}

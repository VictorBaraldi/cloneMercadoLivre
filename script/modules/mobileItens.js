export default class RemoveItem {
  constructor(element) {
    this.element = document.querySelector(element);
  }
  remove() {
    this.element.remove();
  }
}

export default class RemoveItem {
  constructor() {
    this.removeItens = [
      '.nav-header-disney',
      '.nav-header-conta',
      '.nav-itens',
      '.nav-itens',
    ];
  }
  remove(item) {
    const removeItem = document.querySelector(item);
    removeItem.remove();
  }

  loopItens(element, func) {
    if (this.screenX)
      element.forEach((element) => {
        func(element);
      });
  }

  screenX() {
    this.screenX = window.screen.width;
    return this.screenX < 1000 ? true : false;
  }

  add() {
    const container = document.querySelector('.nav-grid');
    const mobile = document.createElement('button');
    const carrinho = document.createElement('button');
    const endereco = document.createElement('div');
    mobile.innerText = 'mobile';
    carrinho.innerText = 'carrinho';
    endereco.innerHTML = 'Digite seu endereço';
    container.appendChild(mobile);
    container.appendChild(carrinho);
    container.appendChild(endereco);
  }

  init() {
    this.loopItens(this.removeItens, this.remove);
    this.add();
  }
}

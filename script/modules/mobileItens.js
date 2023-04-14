export default class RemoveItem {
  constructor() {
    this.removeItens = [
      '.nav-header-disney',
      '.nav-header-conta',
      '.nav-itens',
      '.nav-itens',
    ];
    this.container = document.querySelector('.nav-grid');
  }
  remove(item) {
    const removeItem = document.querySelector(item);
    removeItem.remove();
  }

  loopItens(element, func) {
    if (this.screenX < 1000)
      element.forEach((element) => {
        func(element);
      });
  }

  screenX() {
    this.screenX = window.screen.width;
    return this.screenX;
  }

  addItem(create, classe) {
    const createItem = document.createElement(create);
    createItem.classList.add(classe);
    this.container.appendChild(createItem);
  }

  addImg() {
    const divEnd = document.createElement('div');
    divEnd.innerHTML = `<img src = '../../assets/icons/local.svg'/><span>Informe seu CEP</span>`;
    divEnd.classList.add('nav-endereco');
    this.container.appendChild(divEnd);
  }

  add() {
    this.addItem('img', 'nav-mobile');
    this.addItem('img', 'nav-carrinho');
    this.addImg();
    this.divStyle();
  }

  divStyle() {
    const carrinho = document.querySelector('.nav-carrinho');
    const mobile = document.querySelector('.nav-mobile');
    carrinho.src = '../../assets/icons/cart.svg';
    carrinho.style.padding = '8px 16px 0px 0px';
    mobile.src = '../../assets/icons/menu.svg';
    mobile.style.padding = '8px 0px 0px 0px';
  }

  init() {
    this.screenX();
    this.loopItens(this.removeItens, this.remove);
    this.add();
  }
}

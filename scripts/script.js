'use strict';

function DomElement( selector, height, width, bg, fontSize, textContent ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textContent = textContent;
}

DomElement.prototype.create = function() {
    let element;
    if ( this.selector[0] === '.' ) {
        element = document.createElement('div');
        element.classList.add(`${this.selector.substr( 1, this.selector.length - 1 )}`);
    } else if ( this.selector[0] === '#' ) {
        element = document.createElement('p');
        element.id = `${this.selector.substr( 1, this.selector.length - 1 )}`;
    }

    element.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        display: flex;
    `;
    element.textContent = this.textContent;
    document.body.append( element );
};


const div = new DomElement( '.block', '200px', '200px', 'red', '28px', 'Просто текст' );

console.log(div);

div.create();
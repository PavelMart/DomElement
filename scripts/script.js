document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    function DomElement( selector, height, width, bg, fontSize, position, textContent ) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.position = position;
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

        this.addStyle( element );
    
        document.body.append( element );
    };

    DomElement.prototype.addStyle = function( element ) {
        element.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            position: ${this.position};
            top: ${this.top}px;
            left: ${this.left}px;
            display: block;
        `;
        element.textContent = this.textContent;
    };
    
    
    const div = new DomElement( '#block', '200px', '200px', 'red', '28px', 'absolute');
    
    div.top = +localStorage.getItem('divTop')  || 0;
    div.left = +localStorage.getItem('divLeft')  || 0;

    console.log(div);

    console.log(div.top);
    console.log(div.left);
    console.log(typeof div.top);
    console.log(typeof div.left);


    div.create();


    document.addEventListener( 'keydown', ( event ) => {
        const key = event.key;
        const element = document.querySelector('div') || document.querySelector('p');

        const moveBlock = function() {

            switch (key) {
                case 'ArrowUp':
                    div.top -= 10;
                    element.style.top = `${div.top}px`;
                    break;
            
                case 'ArrowDown':
                    div.top += 10;
                    element.style.top = `${div.top}px`;
                    break;
                    
                case 'ArrowLeft':
                    div.left -= 10;
                    element.style.left = `${div.left}px`;
                    break;

                case 'ArrowRight':
                    div.left += 10;
                    element.style.left = `${div.left}px`;
                    break;

                default:
                    break;
            }

            localStorage.setItem('divTop', div.top);
            localStorage.setItem('divLeft', div.left);

        };
        
        moveBlock();
        
    } );

} );
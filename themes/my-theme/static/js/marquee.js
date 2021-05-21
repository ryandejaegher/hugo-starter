(function () {
    // Create the template for the component
    const template = document.createElement('template');
    template.innerHTML = `
  <style>
      :host {
          --timing: 50s;
          --text-color: black;
          --bg-color: transparent;
          --font-size: 24px;
          --font-family: sans-serif;
          --horizontal-spacing: 0px;
          --vertical-spacing: 0px;
          --direction: alternate;
          overflow:hidden;
          display: block;
          background: var(--bg-color);
      }

      :host([full-width]) {
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        max-width: 100vw;
        position: relative;
        right: 50%;
        width: 100vw;
      }

      .marquee-wrapper {
        display: flex;
        animation: marquee var(--timing) linear infinite var(--direction);
        gap: 8px;
        width: fit-content;
      }

      ::slotted(span) {  
        display: inline-block;
        color: var(--text-color);
        font-size: var(--font-size);
        font-family: var(--font-family);
        margin-left: var(--horizontal-spacing);
        padding-top: var(--vertical-spacing);
        padding-bottom: var(--vertical-spacing);
        white-space: nowrap;

      }

      @keyframes marquee {
        from {
          transform: translate3d(0%,0,0);
        }
      
        to {
          transform: translate3d(-100%,0,0);
        }
      }
  </style>    
<div class="marquee-wrapper">
    <slot part="text"></slot>
</div>
  `;

    class CustomMarquee extends HTMLElement {
        // Always call super first in constrcutor
        constructor() {
            super();
            // Create shadow root
            this.attachShadow({
                mode: 'open'
            });

            // Insert the template into the shadow Root/DOM
            this.shadowRoot.append(template.content.cloneNode(true));
            this._hostStyle = this.shadowRoot.querySelector('style');

            this.shadowRoot.addEventListener('slotchange', e => {
                console.log(e);
            });
        }

        get count() {
            return this.getAttribute('count');
        }

        set count(newValue) {
            this.setAttribute('count', newValue);
        }

        get timing() {
            return this.getAttribute('timing');
        }

        set timing(newValue) {
            this.setAttribute('timing', newValue);
        }

        // Web Component lifecycle callbacks

        // Runs as soon as the component is used in document
        connectedCallback() {
            var text = this.textContent;
            this.innerHTML = '';
            var template = document.createElement('template');
            for (let i = 0; i < this.count; i++) {
                var span = `<span part="text">${text}</span>`;
                template.innerHTML += span;
            }
            this.append(template.content.cloneNode(true));

            if (this.hasAttribute('timing')) {
                console.log('this has timing');
                this.style.setProperty('--timing', `${this.timing}s`);
            }
        }

        // Runs as soon as the component is removed or disconnected from the document
        disconnectedCallback() {
            console.log('I have been removed');
        }

        // Runs when the component is moved within the document
        adoptedCallback() {
            console.log('I have moved');
        }

        // Runs when one of the documents observed elements is changed in some way
        attributeChangedCallback(name, oldValue, newValue) {
            console.log('My attributes have changed');
            console.log(`${name} changed from ${oldValue} to ${newValue}`);
        }

        // You need to list the attributes you want to observe in order for the attributeChangedCallback to work
        // This should return an array containing the names of the attributes you want to observe
        static get observedAttributes() {
            return ['count', 'timing'];
        }
    }

    window.customElements.define('x-marquee', CustomMarquee);
})();

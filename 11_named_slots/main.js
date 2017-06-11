Vue.component('modal', {
    template: `
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">
                <slot name="header"></slot>
              </p>
              <button class="delete"></button>
            </header>
            <section class="modal-card-body">
              <slot></slot>
            </section>
            <footer class="modal-card-foot">
              <slot name="footer">
                <a class="button is-success">Okay</a>
              </slot>
            </footer>
          </div>
        </div>
    `
    
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied(){
            this.couponApplied = true;
        }
    }
});

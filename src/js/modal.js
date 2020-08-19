(() => {
  "use strict";
  
  /**
   * Bootstrap Modal Js Class
   * @dvinciguerra
   */
  var Modal = function(el, options) {
      var self = this;
      
      this.el = document.querySelector(el);
      this.options = options;
      
      try {
        var list = document.querySelectorAll('#'+this.el.id+' [data-dismiss="modal"]');
        for (var x = 0; x < list.length; x++) {
          list[x].addEventListener('click', function(e){ 
            if(e) e.preventDefault();
            self.hide();
          });
        }
        this.el.addEventListener('click', (e) => {
          if ( this.el.classList.contains('show') && e.target === this.el) {
            self.hide();
            e.preventDefault();
          }
        },false);
      }
      catch(e){
        console.log(e);
      }
  };

  /**
   * Methods
   */
  Modal.prototype.show = function() {
      var self = this;
      // adding backdrop (transparent background) behind the modal
      if (self.options.backdrop) {
          var backdrop = document.getElementById('bs.backdrop');
          if (backdrop === null) {
            backdrop = document.createElement('div');
            backdrop.id = "bs.backdrop";
            backdrop.className = "modal-backdrop fade show";
            document.body.appendChild(backdrop);
          }
      }

      // show modal
      this.el.classList.add('show');
      this.el.style.display = 'block';
      //document.body.style.paddingRight = '13px';
      document.body.classList.add('modal-open');
  };

  Modal.prototype.hide = function() {
      var self = this;
      // hide modal
      this.el.classList.remove('show');
      this.el.style.display = 'none';
      //document.body.style = '';
      document.body.classList.remove('modal-open');

      // removing backdrop
      if (self.options.backdrop) {
          var backdrop = document.getElementById('bs.backdrop');
          if (backdrop !== null) document.body.removeChild(backdrop);
      }
  };

  // USAGE:
  document.addEventListener('DOMContentLoaded', function() {
    let covidModalId = document.getElementById('covid-modal');
    if (covidModalId) {
      let covidModal = new Modal('#covid-modal', {
        backdrop: true
      });
      covidModal.show();
    }
  });
})();

       //Табы с джейквери

$(document).ready(function(){
	$('.carousel__inner').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/carousel_icons/arrow_left_icons.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/carousel_icons/arrow_right_icons.png"></button>'
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	    $(this)
	      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
	      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });

	modal
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn();
	});
	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

  });

window.addEventListener('DOMContentLoaded', function() {
   
    //Табы на JS

   const tabs = document.querySelectorAll('.catalog__tab'),
   tabContent = document.querySelectorAll('.catalog__content'),
   tabsParent = document.querySelector('.catalog__tabs');

    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
    });

    tabs.forEach(item => {
        item.classList.remove('catalog__tab_active');
        });
    }

    function showTabContent(i = 1) {
        tabContent[i].classList.add('show');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('catalog__tab_active');
    }

    hideTabContent(); 
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('catalog__tab')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
                }
            });
        }
    });

    // modal

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item =>{
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        }); 

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });

        document.addEventListener('keydown', (e) => {
            if(e.code === "Escape") {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
          }); 
        
    }

    bindModal('.button_main', ".overlay", '.modal__close');
    bindModal('.button_mini', ".overlay-two", ".modal__close");

});

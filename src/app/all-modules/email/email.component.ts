import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {



/*tabs*/
var accordion = (function() {

    var $accordion = $('.crms-tasks');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');

    // default settings 
    var settings = {
        // animation speed
        speed: 400,

        // close all other accordion items if true
        oneOpen: false
    };

    return {
        // pass configurable object literal
        init: function($settings) {
            $accordion_header.on('click', function() {
                accordion.toggle($(this));
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.crms-task-item.active').length > 1) {
                $('.crms-task-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.crms-task-item.active').find('> .js-accordion-body').show();
        },
        toggle: function($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.crms-tasks').find('> .crms-task-item.active > .js-accordion-header')[0]) {
                $this.closest('.crms-tasks')
                    .find('> .crms-task-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()
            }

            // show/hide the clicked accordion item
            $this.closest('.crms-task-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();
$(document).ready(function() {
    accordion.init({
        speed: 300,
        oneOpen: true
    });
});
/*kanban view*/
$(function() {

    draggableInit();

    $('.panel-heading').on('click', function() {
        var $panelBody = $(this).parent().children('.panel-body');
        $panelBody.slideToggle();
    });
});

function draggableInit() {
    var sourceId;

    $('[draggable=true]').bind('dragstart', function(event) {
        sourceId = $(this).parent().attr('id');
        event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
    });

    $('.panel-body').bind('dragover', function(event) {
        event.preventDefault();
    });

    $('.panel-body').bind('drop', function(event) {
        var children = $(this).children();
        var targetId = children.attr('id');

        if (sourceId != targetId) {
            var elementId = event.originalEvent.dataTransfer.getData("text/plain");

            $('#processing-modal').modal('toggle'); //before post


            // Post data 
            setTimeout(function() {
                var element = document.getElementById(elementId);
                children.prepend(element);
                $('#processing-modal').modal('toggle'); // after post
            }, 1000);

        }

        event.preventDefault();
    });
}
$(document).on('click', '.top-nav-search .responsive-search', function() {
        $('.top-nav-search').toggleClass('active');
    });

    $(document).on('click', '#file_sidebar_toggle', function() {
        $('.file-wrap').toggleClass('file-sidebar-toggle');
    });

    $(document).on('click', '.file-side-close', function() {
        $('.file-wrap').removeClass('file-sidebar-toggle');
    });

    if ($('.kanban-wrap').length > 0) {
        $(".kanban-wrap").sortable({
            connectWith: ".kanban-wrap",
            handle: ".kanban-box",
            placeholder: "drag-placeholder"
        });
    }
     // Task Complete

    $(document).on('click', '#task_complete', function() {
        $(this).toggleClass('task-completed');
        return false;
    });

    // Multiselect

    if ($('#customleave_select').length > 0) {
        $('#customleave_select').multiselect();
    }
    if ($('#edit_customleave_select').length > 0) {
        $('#edit_customleave_select').multiselect();
    }

    // Leave Settings button show

    $(document).on('click', '.leave-edit-btn', function() {
        $(this).removeClass('leave-edit-btn').addClass('btn btn-white leave-cancel-btn').text('Cancel');
        $(this).closest("div.leave-right").append('<button class="btn btn-primary leave-save-btn" type="submit">Save</button>');
        $(this).parent().parent().find("input").prop('disabled', false);
        return false;
    });
    $(document).on('click', '.leave-cancel-btn', function() {
        $(this).removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
        $(this).closest("div.leave-right").find(".leave-save-btn").remove();
        $(this).parent().parent().find("input").prop('disabled', true);
        return false;
    });

    $(document).on('change', '.leave-box .onoffswitch-checkbox', function() {
        var id = $(this).attr('id').split('_')[1];
        if ($(this).prop("checked") == true) {
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', false);
            $("#leave_" + id + " .leave-action .btn").prop('disabled', false);
        } else {
            $("#leave_" + id + " .leave-action .btn").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
            $("#leave_" + id + " .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', true);
        }
    });

    $('.leave-box .onoffswitch-checkbox').each(function() {
        var id = $(this).attr('id').split('_')[1];
        if ($(this).prop("checked") == true) {
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', false);
            $("#leave_" + id + " .leave-action .btn").prop('disabled', false);
        } else {
            $("#leave_" + id + " .leave-action .btn").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").parent().parent().find("input").prop('disabled', true);
            $("#leave_" + id + " .leave-cancel-btn").closest("div.leave-right").find(".leave-save-btn").remove();
            $("#leave_" + id + " .leave-cancel-btn").removeClass('btn btn-white leave-cancel-btn').addClass('leave-edit-btn').text('Edit');
            $("#leave_" + id + " .leave-edit-btn").prop('disabled', true);
        }
    });

    // Placeholder Hide

    if ($('.otp-input, .zipcode-input input, .noborder-input input').length > 0) {
        $('.otp-input, .zipcode-input input, .noborder-input input').focus(function() {
            $(this).data('placeholder', $(this).attr('placeholder'))
                .attr('placeholder', '');
        }).blur(function() {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    }

    // OTP Input

    if ($('.otp-input').length > 0) {
        $(".otp-input").keyup(function(e) {
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
                $(e.target).next('.otp-input').focus();
            } else if (e.which == 8) {
                $(e.target).prev('.otp-input').focus();
            }
        });
    }
     // Email Inbox

    if ($('.clickable-row').length > 0) {
        $('.clickable-row').on('click', function() {
            window.location = $(this).data("href");
        });
    }


    if ($('.clickable-row').length > 0) {
        $('.clickable-row').on('click', function() {
            window.location = $(this).data("href");
        });
    }
    // Check all email

    $(document).on('click', '#check_all', function() {
        $('.checkmail').click();
        return false;
    });
    if ($('.checkmail').length > 0) {
        $('.checkmail').each(function() {
            $(this).on('click', function() {
                if ($(this).closest('tr').hasClass('checked')) {
                    $(this).closest('tr').removeClass('checked');
                } else {
                    $(this).closest('tr').addClass('checked');
                }
            });
        });
    }
      // Modal Popup hide show

    if ($('.modal').length > 0) {
        var modalUniqueClass = ".modal";
        $('.modal').on('show.bs.modal', function(e) {
            var $element = $(this);
            var $uniques = $(modalUniqueClass + ':visible').not($(this));
            if ($uniques.length) {
                $uniques.modal('hide');
                $uniques.one('hidden.bs.modal', function(e) {
                    $element.modal('show');
                });
                return false;
            }
        });
    }


  // Function to change webpage fonts

 $(".roboto-font").click(function(){
          $("body").addClass("roboto");
          $("body").removeClass("inter");
          $("body").removeClass("monstret");
          $("body").removeClass("poppins");
        });
    $(".poppins-font").click(function(){
          $("body").removeClass("roboto");
          $("body").removeClass("inter");
          $("body").removeClass("monstret");
          $("body").addClass("poppins");
        });
    $(".montserrat-font").click(function(){
          $("body").removeClass("roboto");
          $("body").removeClass("inter");
          $("body").addClass("monstret");
          $("body").removeClass("poppins");
        });

   $(".inter-font").click(function(){
          $("body").removeClass("roboto");
          $("body").addClass("inter");
          $("body").removeClass("monstret");
          $("body").removeClass("poppins");
        });

   $(".font-Default").click(function(){
        $("body").removeClass("roboto");
          $("body").addClass("inter");
          $("body").removeClass("monstret");
          $("body").removeClass("poppins");
   })
    



    /*local storage*/

    var topNavThemeClass = window.localStorage;


$(function() {

    var headerColors = `theme-default black-mode theme-orange theme-blue theme-grey theme-lgrey theme-dblue theme-pink 
    theme-purple theme-solid-pink theme-solid-orange theme-solid-purple theme-solid-blue theme-solid-green
     header-orange header-blue header-grey header-lgrey header-dblue header-pink 
    header-purple theme-dark theme-solid-black`;


    $(document).ready(function () {
        var navColor = localStorage.getItem('navbar-color');
        if (navColor) {
            $('body').removeClass(headerColors).addClass(navColor);
        }
    });
    $('#theme-change span').on('click', function() {
        if ($(this).hasClass("theme-default")) {
            $('body').removeClass(headerColors).addClass('theme-default');
            localStorage.setItem('navbar-color','theme-default');
        }

        if ($(this).hasClass("theme-solid-black")) {
            $('body').removeClass(headerColors).addClass('theme-solid-black');
            localStorage.setItem('navbar-color', 'theme-solid-black');
        }

        if ($(this).hasClass("theme-orange")) {
            $('body').removeClass(headerColors).addClass('theme-orange');
            localStorage.setItem('navbar-color', 'theme-orange');
        }

        if ($(this).hasClass("theme-dark")) {
            $('body').removeClass(headerColors).addClass('theme-dark');
            localStorage.setItem('navbar-color', 'theme-dark');
        }

        if ($(this).hasClass("theme-dark")) {
            $('body').removeClass(headerColors).addClass('theme-dark');
            localStorage.setItem('navbar-color', 'theme-dark');
        }

        if ($(this).hasClass("theme-blue")) {
            $('body').removeClass(headerColors).addClass('theme-blue');
            localStorage.setItem('navbar-color', 'theme-blue');
        }

        if ($(this).hasClass("theme-grey")) {
            $('body').removeClass(headerColors).addClass('theme-grey');
            localStorage.setItem('navbar-color', 'theme-grey');
        }

        if ($(this).hasClass("theme-lgrey")) {
            $('body').removeClass(headerColors).addClass('theme-lgrey');
            localStorage.setItem('navbar-color', 'theme-lgrey');
        }

        if ($(this).hasClass("theme-dblue")) {
            $('body').removeClass(headerColors).addClass('theme-dblue');
            localStorage.setItem('navbar-color', 'theme-dblue');
        }

        if ($(this).hasClass("theme-pink")) {
            $('body').removeClass(headerColors).addClass('theme-pink');
            localStorage.setItem('navbar-color', 'theme-pink');
        }

        if ($(this).hasClass("theme-purple")) {
            $('body').removeClass(headerColors).addClass('theme-purple');
            localStorage.setItem('navbar-color', 'theme-purple');
        }

        if ($(this).hasClass("theme-solid-pink")) {
            $('body').removeClass(headerColors).addClass('theme-solid-pink');
            localStorage.setItem('navbar-color', 'theme-solid-pink');
        }
        if ($(this).hasClass("theme-solid-orange")) {
            $('body').removeClass(headerColors).addClass('theme-solid-orange');
            localStorage.setItem('navbar-color', 'theme-solid-orange');
        }
        if ($(this).hasClass("theme-solid-purple")) {
            $('body').removeClass(headerColors).addClass('theme-solid-purple');
            localStorage.setItem('navbar-color', 'theme-solid-purple');
        }
        if ($(this).hasClass("theme-solid-blue")) {
            $('body').removeClass(headerColors).addClass('theme-solid-blue');
            localStorage.setItem('navbar-color', 'theme-solid-blue');
        }
        
        if ($(this).hasClass("theme-solid-green")) {
            $('body').removeClass(headerColors).addClass('theme-solid-green');
            localStorage.setItem('navbar-color', 'theme-solid-green');
        }
        

    });
    $('#ChangeprimaryDefault').on('click', function(){
     $('body').removeClass(headerColors).addClass('theme-default');
        localStorage.setItem('navbar-color','theme-default');
    });
   
   $('#ChangedarkDefault').on('click', function(){
     $('body').removeClass(headerColors).addClass('theme-default');
        localStorage.setItem('navbar-color','theme-default');
    });

});



    var topNavThemeClass1 = window.localStorage;


$(function() {

    var headerColors1 = `theme-default black-mode header-solid-pink header-solid-orange header-solid-purple header-solid-blue header-solid-green 
    header-gradient-color1  header-gradient-color2 header-gradient-color3 header-gradient-color4 header-gradient-color5 header-gradient-color6
    header-gradient-color7 header-solid-black  `;

    

    $(document).ready(function () {
        var navColor1 = localStorage.getItem('navbar-color1');
        if (navColor1) {
            $('body').removeClass(headerColors1).addClass(navColor1);
        }
    });
    $('#theme-change1 span').on('click', function() {
        if ($(this).hasClass("theme-default")) {
            $('body').removeClass(headerColors1).addClass('theme-default');
            localStorage.setItem('navbar-color1','theme-default');
        }

        if ($(this).hasClass("header-solid-black")) {
            $('body').removeClass(headerColors1).addClass('header-solid-black');
            localStorage.setItem('navbar-color1', 'header-solid-black');
        }

        if ($(this).hasClass("header-solid-pink")) {
            $('body').removeClass(headerColors1).addClass('header-solid-pink');
            localStorage.setItem('navbar-color1', 'header-solid-pink');
        }

        if ($(this).hasClass("header-solid-orange")) {
            $('body').removeClass(headerColors1).addClass('header-solid-orange');
            localStorage.setItem('navbar-color1', 'header-solid-orange');
        }

        if ($(this).hasClass("header-solid-purple")) {
            $('body').removeClass(headerColors1).addClass('header-solid-purple');
            localStorage.setItem('navbar-color1', 'header-solid-purple');
        }

        if ($(this).hasClass("header-solid-blue")) {
            $('body').removeClass(headerColors1).addClass('header-solid-blue');
            localStorage.setItem('navbar-color1', 'header-solid-blue');
        }

        if ($(this).hasClass("header-solid-green")) {
            $('body').removeClass(headerColors1).addClass('header-solid-green');
            localStorage.setItem('navbar-color1', 'header-solid-green');
        }

        if ($(this).hasClass("header-gradient-color1")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color1');
            localStorage.setItem('navbar-color1', 'header-gradient-color1');
        }
        if ($(this).hasClass("header-gradient-color2")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color2');
            localStorage.setItem('navbar-color1', 'header-gradient-color2');
        }
        if ($(this).hasClass("header-gradient-color3")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color3');
            localStorage.setItem('navbar-color1', 'header-gradient-color3');
        }
        if ($(this).hasClass("header-gradient-color4")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color4');
            localStorage.setItem('navbar-color1', 'header-gradient-color4');
        }
        if ($(this).hasClass("header-gradient-color5")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color5');
            localStorage.setItem('navbar-color1', 'header-gradient-color5');
        }
        if ($(this).hasClass("header-gradient-color6")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color6');
            localStorage.setItem('navbar-color1', 'header-gradient-color6');
        }
        if ($(this).hasClass("header-gradient-color7")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color7');
            localStorage.setItem('navbar-color1', 'header-gradient-color7');
        }
        
        
    });
    $('#ChageheaderDefault').on('click', function(){
     $('body').removeClass(headerColors1).addClass('theme-default');
        localStorage.setItem('navbar-color1','theme-default');
    });

  

});




    var topNavThemeClass2 = window.localStorage;

$(function() {

    var sidebarColors2 = `theme-default black-mode sidebar-solid-pink sidebar-solid-orange sidebar-solid-purple sidebar-solid-blue sidebar-solid-green 
    sidebar-gradient-color1  sidebar-gradient-color2 sidebar-gradient-color3 sidebar-gradient-color4 sidebar-gradient-color5 sidebar-gradient-color6
    sidebar-gradient-color7  sidebar-solid-black`;

    

    $(document).ready(function () {
        var navColor2 = localStorage.getItem('navbar-color2');
        if (navColor2) {
            $('body').removeClass(sidebarColors2).addClass(navColor2);
        }
    });
    $('#theme-change2 span').on('click', function() {
        if ($(this).hasClass("theme-default")) {
            $('body').removeClass(sidebarColors2).addClass('theme-default');
            localStorage.setItem('navbar-color2','theme-default');
        }

        if ($(this).hasClass("sidebar-solid-black")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-black');
            localStorage.setItem('navbar-color2', 'sidebar-solid-black');
        }

        if ($(this).hasClass("sidebar-solid-pink")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-pink');
            localStorage.setItem('navbar-color2', 'sidebar-solid-pink');
        }

        if ($(this).hasClass("sidebar-solid-orange")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-orange');
            localStorage.setItem('navbar-color2', 'sidebar-solid-orange');
        }

        if ($(this).hasClass("sidebar-solid-purple")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-purple');
            localStorage.setItem('navbar-color2', 'sidebar-solid-purple');
        }

        if ($(this).hasClass("sidebar-solid-blue")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-blue');
            localStorage.setItem('navbar-color2', 'sidebar-solid-blue');
        }

        if ($(this).hasClass("sidebar-solid-green")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-green');
            localStorage.setItem('navbar-color2', 'sidebar-solid-green');
        }

        if ($(this).hasClass("sidebar-gradient-color1")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color1');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color1');
        }
        if ($(this).hasClass("sidebar-gradient-color2")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color2');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color2');
        }
        if ($(this).hasClass("sidebar-gradient-color3")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color3');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color3');
        }
        if ($(this).hasClass("sidebar-gradient-color4")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color4');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color4');
        }
        if ($(this).hasClass("sidebar-gradient-color5")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color5');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color5');
        }
        if ($(this).hasClass("sidebar-gradient-color6")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color6');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color6');
        }
        if ($(this).hasClass("sidebar-gradient-color7")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color7');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color7');
        }
        

        
    });

    $('#ChagesidebarDefault').on('click', function(){
     $('body').removeClass(sidebarColors2).addClass('theme-default');
        localStorage.setItem('navbar-color2','theme-default');
    });

    

});


    
  // Summernote

    if ($('.summernote').length > 0) {
        $('.summernote').summernote({
            height: 200, // set editor height
            minHeight: null, // set minimum height of editor
            maxHeight: null, // set maximum height of editor
            focus: false // set focus to editable area after initializing summernote
        });
    }
  }

}

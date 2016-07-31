(function ($) {
    $.fn.ecTooltip = function (options) {

        var opts = $.extend({
            tooltipMarkup: '<div class="ec-tooltip-container" style="position: absolute; display: none;"></div>',
            containingElement: $('body'),
            offsetY: -5,
            offsetX: 20,
            fade: false,
            fadeTimer: 0,
        }, options);
        var element = $(this);
        var tooltip = $(opts.tooltipMarkup);
        var tooltipText = element.data('ec-text') || element.text();

        tooltip.text(tooltipText);
        opts.containingElement.append(tooltip);

        function enter (evt) {
            tooltip.show();
            tooltip.css({ top: evt.offsetY + opts.offsetY, left: evt.offsetX + opts.offsetX });
        }

        function move (evt) {
            tooltip.show();
            tooltip.css({ top: evt.offsetY + opts.offsetY, left: evt.offsetX + opts.offsetX });
        }

        function leave() {
            if (opts.fade) {
                return tooltip.fadeOut(opts.fadeTimer);
            }
            return tooltip.css({ display: 'none' });
        }

        element.on('mouseenter', function (evt) {
            return move(evt);
        });
        element.on('mousemove', function (evt) {
            return move(evt);
        });
        element.on('mouseleave', function () {
            return leave();
        });
    }
}(jQuery));

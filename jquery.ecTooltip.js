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

        opts.containingElement.append(tooltip);

        function enter (evt, text) {
            tooltip.text(text);
            tooltip.show();
            tooltip.css({ top: evt.pageY + opts.offsetY, left: evt.pageX + opts.offsetX });
        }

        function move (evt) {
            tooltip.show();
            tooltip.css({ top: evt.pageY + opts.offsetY, left: evt.pageX + opts.offsetX });
        }

        function leave() {
            if (opts.fade) {
                return tooltip.fadeOut(opts.fadeTimer);
            }
            return tooltip.css({ display: 'none' });
        }

        element.each(function (idx, el) {
            var el = $(el),
                text = el.data('ec-text') || element.text();
            el.on('mouseenter', function (evt) {
                return enter(evt, text);
            });
            el.on('mousemove', function (evt) {
                return move(evt);
            });
            el.on('mouseleave', function () {
                return leave();
            });
        });

    }
}(jQuery));

/**
 *
 * Name: Convert LinkedIn Profile to Printable
 * Description: Converts a LinkedIn Profile page into a printable format
 * Author: Aaron T. Grogg
 *
 * Fires a few click events on the page to expose hidden content.
 *
 */

(function() {

    [].slice.call(document.querySelectorAll(".view-more-bar span")).forEach(function(e) {
        e.click()
    }), setTimeout(function() {
        [].slice.call(document.querySelectorAll(".toggle-show-more")).forEach(function(e) {
            e.click()
        })
    }, 1000);

})();
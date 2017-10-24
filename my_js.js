$('button').on('click', function() {
    // Caching
    var self = $('.active');
    
    // Check if another element exists after the currently active one otherwise
    // find the parent and start again
    if (self.next().length) {
        self
            .removeClass('active')
            .next()
            .addClass('active');
    } else {
        self
            .removeClass('active')
            .parent()
            .find('span:first')
            .addClass('active');
    }
});
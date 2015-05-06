requirejs.config({
    paths: {
        'jquery': 'libraries/jquery-1.11.2',
        'mustache': 'libraries/mustache.js-master/mustache',
        'text': 'libraries/text-master/text'
    }
});

require(["jquery", "mustache", "text!../templates/madlibs.tmpl"],
        function(jquery, mustache, madlibs_template) {
    $('body').html(mustache.render(madlibs_template, {}));
});

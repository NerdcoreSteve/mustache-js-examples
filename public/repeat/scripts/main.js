requirejs.config({
    paths: {
        'jquery': 'libraries/jquery-1.11.2',
        'mustache': 'libraries/mustache.js-master/mustache',
        'text': 'libraries/text-master/text'
    }
});

require(["jquery", "mustache", "text!../templates/space_ships.tmpl"],
        function(jquery, mustache, madlibs_template) {

    //Could just as easily come from an ajax call
    var data = {space_ships: [{name: 'Enterprise',
                               universe: 'Star Trek',
                               radness: '9'},
                              {name: 'X-Wing',
                               universe: 'Star Wars',
                               radness: '8'},
                              {name: 'Trimaxium Drone Ship',
                               universe: 'Flight Of The Navigator',
                               radness: '6'}]};

    $('body').html(mustache.render(madlibs_template, data)); //populated
    //$('body').html(mustache.render(madlibs_template, {})); //default values shown

});

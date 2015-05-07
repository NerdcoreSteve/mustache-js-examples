requirejs.config({
    paths: {
        'jquery': 'libraries/jquery-1.11.2',
        'mustache': 'libraries/mustache.js-master/mustache',
        'text': 'libraries/text-master/text'
    }
});

require(["jquery",
         "mustache",
         "text!../templates/main.tmpl",
         "text!../templates/madlib.tmpl",
         "text!../templates/space_ships.tmpl"],
        function(jquery, mustache, main_template, madlib_template, space_ships_template) {

    var data = {madlibs: [{proper_noun: "Batman",
                           verbing: "skateboarding",
                           location: "office park",
                           time_period: "eon"},
                           {proper_noun: "Kermit The Frog",
                           verbing: "playing banjo",
                           location: "swamp",
                           time_period: "week"}],
                space_ships: [{name: 'Enterprise',
                               universe: 'Star Trek',
                               radness: '9'},
                              {name: 'X-Wing',
                               universe: 'Star Wars',
                               radness: '8'},
                              {name: 'Trimaxium Drone Ship',
                               universe: 'Flight Of The Navigator',
                               radness: '6'}]};

    $('body').html(mustache.render(main_template,
                                   data,
                                   {madlib_template: madlib_template,
                                    space_ships_template: space_ships_template}));
});

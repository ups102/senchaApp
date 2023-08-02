/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'senchaApp.Application',

    name: 'senchaApp',

    requires: [
        // This will automatically load all classes in the senchaApp namespace
        // so that application classes do not need to require each other.
        'senchaApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'senchaApp.view.main.Main'
});

var app = {
    Models: {},
    Views:  {},
    start: function() {
        var enums = new app.Models.Enumerable({});
            item  = new app.Models.Item({}),

        new app.Views.App({model: item, enums: enums, views: this.Views});    
    }
}

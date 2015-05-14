var app = {
    Models: {},
    Views:  {},
    start: function() {
        this.Models.Enumerable = new this.Models.Enumerable({});
        this.Models.Item       = new this.Models.Item({}),

        this.Views.App = new this.Views.App({model: this.Models.Item, enums: this.Models.Enumerable, views: this.Views});    
    }
}

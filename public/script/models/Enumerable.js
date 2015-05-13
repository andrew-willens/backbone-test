app.Models.Enumerable = Backbone.DeepModel.extend({
    url: "enums",
    initialize: function() {
        _.bindAll(this, "sayImDone");
        this.fetch(/*{ success: this.sayImDone }*/);
    },

    sayImDone: function() {
        alert('enums model synced with server.');
        console.log(this.toJSON());
    }
});

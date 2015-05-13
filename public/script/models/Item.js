app.Models.Item = Backbone.DeepModel.extend({
    url: "item",
    initialize: function() {
        _.bindAll(this, "sayImDone");
        this.fetch(/*{ success: this.sayImDone }*/);
    },

    sayImDone: function() {
        alert('item model synced with server.');
        console.log(this.toJSON());
    }
});

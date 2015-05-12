var Item = Backbone.Model.extend({
    initialize: function() {
        console.log("Item model initialized.");
    }
});

// initialize with data:
// var item;
// $.getJSON("data/item.json", function(data){
//     item = new Item(data.result.item);
// });
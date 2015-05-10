var Item = Backbone.Model.extend({
    initialize: function() {
        console.log("Item model initialized.");
    }
});

// initialize with data:
var item = new Item({
    "id": 123,
    "title": "Lorem Ipsum",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "dealerInternalNotes": "none available",
    "material": {
        "description": "Ceramic",
        "restricted": "N"
    },
    "measurement": {
        "unit": "in",
        "shape": "",
        "length": "4.5",
        "depth": "4.5",
        "height": "12"
    },
    "condition": {
        "description": "Good"
    }
});

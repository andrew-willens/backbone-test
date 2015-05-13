app.Views.App = Backbone.View.extend({
    tagName : 'form',
    id      : '1stdibs-form',
    _ready   : {
        item : false,
        enums: false
    },
    events: {
        'submit'  : 'saveItem',
    },

    initialize: function(data) {
        this.enums = data.enums;
        this.listenTo(this.model, "sync", this.itemIsReady);
        this.listenTo(this.enums, "sync", this.enumsAreReady);
    },

    render: function() {
        var views = app.Views; 

        // append form elements to this.$el
            //title
            this.$el.append( 
                new views.Title({
                    model: this.model
                }).el 
            );
            
            // description
            this.$el.append( 
                new views.Description({
                    description: this.model.get('item.description')
                }).el 
            );
            
            // internal notes
            this.$el.append( 
                new views.InternalNotes({
                    notes: this.model.get('item.dealerInternalNotes')
                }).el 
            );
            
            this.$el.append( 
                new views.Materials({
                    materials: this.enums.get('itemEnums.material'),
                    restricted: this.model.get('item.material.restricted') 
                }).el 
            );
            
            this.$el.append( 
                new views.Measurements({
                    model: this.model, 
                    enums: this.enums.get('itemEnums.measurement')
                }).el 
            );
            
            this.$el.append( 
                new views.Dimensions({
                    model: this.model
                }).el 
            );
            
            this.$el.append( 
                new views.Conditions(
                    this.enums.get('itemEnums.condition.description')
                ).el 
            );

            this.$el.append( 
                new views.Save().el 
            );
        // end append form elements

        $('#form-container').html(this.el);
    },

    itemIsReady: function() {
        this._ready.item = true;
        if (this._ready.item && this._ready.enums) this.render();
    },

    enumsAreReady: function() {
        this._ready.enums = true;
        if (this._ready.item && this._ready.enums) this.render();
    },

    saveItem: function(e) {
        e.preventDefault();
        alert('saving item!');
        console.log(this.$el.serialize()); 
        // this.model.save();
    }
});
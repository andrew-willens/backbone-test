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
    views: {},

    initialize: function() {
        this.template = _.template( $("#form-tpl").html() );
        this.listenTo(this.model, "sync", this.itemIsReady);
        this.listenTo(this.options.enums, "sync", this.enumsAreReady);
    },

    render: function() {
        var views = app.Views;

        var title = new this.views.Title({
                        title: this.model.get('item.title')
                    });

        console.log(title.options);

        this.$el.html( this.template() );
        title.setElement( $("#title-container") ).render();


        // append form elements to this.$el
            //title
            this.$el.append( 
                new views.Title({
                    title: this.model.get('item.title')
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
                    materials: this.options.enums.get('itemEnums.material'),
                    restricted: this.model.get('item.material.restricted') 
                }).el 
            );
            
            this.$el.append( 
                new views.Measurements({
                    model: this.model, 
                    enums: this.options.enums.get('itemEnums.measurement')
                }).el 
            );
            
            this.$el.append( 
                new views.Dimensions({
                    model: this.model
                }).el 
            );
            
            this.$el.append( 
                new views.Conditions(
                    this.options.enums.get('itemEnums.condition.description')
                ).el 
            );

            this.$el.append( 
                new views.Save().el 
            );
        // end append form elements
    },

    setViews: function(views) {
        for (var view in views) {
            this.views[view] = views[view];
        }
    },

    itemIsReady: function() {
        this._ready.item = true;
        if (this._ready.item && this._ready.enums) {
            this.setViews(this.options.views);
            this.render();
        }
    },

    enumsAreReady: function() {
        this._ready.enums = true;
        if (this._ready.item && this._ready.enums) {
            this.setViews(this.options.views);
            this.render();
        }
    },

    saveItem: function(e) {
        e.preventDefault();

        this.model.set(this.getFields());
        
        // if we were actually persisting the data
        // this.model.save(); ...

        console.log(this.model.attributes);
    },

    getFields: function() {
        var that = this,
            fields = {},
            selectors = [
                "textarea",
                "input[type='text']",
                "input[name=condition]:checked",
                "select option:selected"
            ].join(", ");

        this.$(selectors).each(function(i, input) {
            var input = that.$(input);
            fields["item." + input.attr("name")] = input.val();
        });
        if (this.$("input[name=restricted]:checked").length) fields.restricted = "Y";
  
        return fields;
    }
});
app.Views.App = Backbone.View.extend({
    
    el: "#form-container",
    _ready   : {
        item : false,
        enums: false
    },
    events: {
        'submit'  : 'saveItem',
    },
    views: {},

    initialize: function() {
        this.template = _.template( this.$("#form-tpl").html() );
        this.listenTo(this.model, "sync", this.itemIsReady);
        this.listenTo(this.options.enums, "sync", this.enumsAreReady);
    },

    render: function() {
        this.$el.html( this.template() );
        
        this.views.Title         = new this.views.Title();
        this.views.Description   = new this.views.Description();
        this.views.InternalNotes = new this.views.InternalNotes();
        this.views.Materials     = new this.views.Materials({enums: app.Models.Enumerable});
        this.views.Measurements  = new this.views.Measurements({enums: app.Models.Enumerable});
        this.views.Dimensions    = new this.views.Dimensions();
        this.views.Conditions    = new this.views.Conditions();
        this.views.Save          = new this.views.Save();

        this.assignView(this.views.Title, "#title-container");
        this.assignView(this.views.Description, "#description-container");
        this.assignView(this.views.InternalNotes, "#internalnotes-container");
        this.assignView(this.views.Materials, "#materials-container");
        this.assignView(this.views.Measurements, "#measurements-container");
        this.assignView(this.views.Dimensions, "#dimensions-container");
        this.assignView(this.views.Conditions, "#conditions-container");
        this.assignView(this.views.Save, "#save-container");

        return this;
    },

    assignView: function(view, selector) {
        view.setElement( this.$(selector) ).render();
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

        // "save"
        console.log(this.model.attributes);
        
        // if we were actually persisting the data
        // this.model.save(); ...
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
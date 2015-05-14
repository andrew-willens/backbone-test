app.Views.Form = Backbone.View.extend({
    
    el: "#form-container",
    _ready   : {
        item : false,
        enums: false
    },
    events: {
        'submit'  : 'saveItem',
    },

    initialize: function() {
        this.template = _.template( this.$("#form-tpl").html() );
        this.listenTo(this.model, "sync", this.itemIsReady);
        this.listenTo(this.options.enums, "sync", this.enumsAreReady);
    },

    render: function() {
        this.$el.html( this.template() );
        
        this.assignView(app.Views.Title, "#title-container");
        this.assignView(app.Views.Description, "#description-container");
        this.assignView(app.Views.InternalNotes, "#internalnotes-container");
        this.assignView(app.Views.Materials, "#materials-container");
        this.assignView(app.Views.Measurements, "#measurements-container");
        this.assignView(app.Views.Dimensions, "#dimensions-container");
        this.assignView(app.Views.Conditions, "#conditions-container");
        this.assignView(app.Views.Save, "#save-container");

        return this;
    },

    assignView: function(view, selector) {
        view.setElement( this.$(selector) ).render();
    },

    setSubViews: function(views) {
        app.Views.Title         = new app.Views.Title();
        app.Views.Description   = new app.Views.Description();
        app.Views.InternalNotes = new app.Views.InternalNotes();
        app.Views.Materials     = new app.Views.Materials();
        app.Views.Measurements  = new app.Views.Measurements();
        app.Views.Dimensions    = new app.Views.Dimensions();
        app.Views.Conditions    = new app.Views.Conditions();
        app.Views.Save          = new app.Views.Save();
    },

    itemIsReady: function() {
        this._ready.item = true;
        if (this._ready.item && this._ready.enums) {
            this.setSubViews(this.options.views);
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
            // console.log("item." + input.attr("name") )
            fields["item." + input.attr("name")] = input.val();
        });
        
        if (this.$("input[name='restricted']:checked").length) {
            fields['item.material.restricted'] = "Y";
        }
  
        return fields;
    }
});
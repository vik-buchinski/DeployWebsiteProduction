define(["local-storage"],function(a){return{init:function(){window.app.views.AdminHeader||(window.app.views.AdminHeader=Backbone.View.extend({render:function(){return this.$el.html(this.template()),this},events:{"click #log-out":"logOut"},logOut:function(){a.saveSession(null),window.app.router.navigate("signIn",!0)}}))}}});
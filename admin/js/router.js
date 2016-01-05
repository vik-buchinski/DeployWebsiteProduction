define(["admin-contacts","server-error","not-found","admin-albums-list","admin-album","admin-header","server","admin-about","local-storage","sign-in-view","view-loader","constants","backbone"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=Backbone.Router.extend({routes:{"":"adminHome",signIn:"signIn",bouquets:"adminBouquets","albums/:albumType":"adminAlbumsList","album/:albumId":"adminAlbum",contacts:"adminContacts",serverError:"serverError","*notFound":"notFound",notFound:"notFound"},notFound:function(){c.init(),k(l.PAGE_TEMPLATES_DATA.NOT_FOUND,function(){$("#pages-container").html((new app.views.NotFound).render().$el.i18n())})},serverError:function(){b.init(),k(l.PAGE_TEMPLATES_DATA.SERVER_ERROR,function(){$("#pages-container").html((new app.views.ServerError).render().$el.i18n())})},signIn:function(){j.init(),k(l.PAGE_TEMPLATES_DATA.ADMIN.SIGN_IN,function(){$("#pages-container").html((new app.views.SignIn).render().$el.i18n())})},adminHome:function(){this.adminAbout()},adminAbout:function(){var a=i.getSession();if(null!=a){var b=this;g.getAdminAbout(a.session.token,function(a){b.buildView(h,l.PAGE_TEMPLATES_DATA.ADMIN.ABOUT,{about_data:a})})}else window.app.router.navigate("signIn",!0)},adminBouquets:function(){var a=i.getSession();if(null!=a){var b=this;g.getAdminBouquetsImages(a.session.token,function(a){b.buildView(e,l.PAGE_TEMPLATES_DATA.ADMIN.ALBUM,{album_data:a,title:$.i18n.t("admin.bouquets-page.page-title"),selected_page:l.LEFT_PANELS.bouquets})})}else window.app.router.navigate("signIn",!0)},adminAlbumsList:function(a){var b=i.getSession();if(null!=b){var c=this;if(!l.ALBUM_TYPES[a.toLowerCase()])return alert($.i18n.t("album-type-missing-message")),!1;g.getAdminAlbumsList(b.session.token,a,function(b){c.buildView(d,l.PAGE_TEMPLATES_DATA.ADMIN.ALBUMS_LIST,{album_data:b,title:$.i18n.t("admin."+l.LEFT_PANELS[a.toLowerCase()]+".page-title"),album_type:l.LEFT_PANELS[a.toLowerCase()]})})}else window.app.router.navigate("signIn",!0)},adminAlbum:function(a){var b=i.getSession();if(null!=b){var c=this;g.getAdminAlbumById(b.session.token,a,function(a){var b=null,d=null;a.album_type&&(a.album_type=a.album_type.toLowerCase(),b=$.i18n.t("admin."+a.album_type+".page-title"),d=l.LEFT_PANELS[a.album_type]),c.buildView(e,l.PAGE_TEMPLATES_DATA.ADMIN.ALBUM,{album_data:a,title:b,selected_page:d})})}else window.app.router.navigate("signIn",!0)},adminContacts:function(){var b=i.getSession();if(null!=b){var c=this;g.getContactsDescription(function(b){c.buildView(a,l.PAGE_TEMPLATES_DATA.ADMIN.CONTACTS,{data:b,title:$.i18n.t("admin.contacts-page.page-title"),selected_page:l.LEFT_PANELS.contacts})})}else window.app.router.navigate("signIn",!0)},buildView:function(a,b,c,d,e,g){a.init(),k(b,function(){f.init(),k(l.PAGE_TEMPLATES_DATA.ADMIN.HEADER,function(){var a=new app.views[b.view_name](c).render().$el.i18n();a.prepend((new app.views.AdminHeader).render().$el.i18n()),$("#pages-container").html(a)})})}});return m});
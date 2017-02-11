this["JST"] = this["JST"] || {};

this["JST"]["admin/pages/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin.about-page.page-title"))) == null ? '' : __t) +
'</h3>\n\n<form class="breadcrumb">\n    <div class="form-group">\n        <label>' +
((__t = ($.i18n.t("admin.about-page.choose_title_image"))) == null ? '' : __t) +
'</label>\n        <div class="row">\n            <div class="col-sm-offset-0 col-sm-3">\n                <img id="title_image" src="';
 if(data && data.title_image_url) {;
__p += ' ' +
((__t = (data.title_image_url)) == null ? '' : __t) +
' ';
 } else { ;
__p += '../../img/placeholder_300x300.png';
 } ;
__p += '" class="img-responsive img-thumbnail">\n            </div>\n        </div>\n        <br />\n        <span class="alert-danger"><b>' +
((__t = ($.i18n.t("admin.about-page.title-image-alert"))) == null ? '' : __t) +
'</b></span>\n        <input id="title_image_input" name="title_image_input" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\n    </div>\n    <button id="save_title_image_btn" class="btn btn-default">' +
((__t = ($.i18n.t("admin.about-page.save-btn"))) == null ? '' : __t) +
'</button>\n    <button id="delete_title_image_btn" class="btn btn-danger">' +
((__t = ($.i18n.t("admin.about-page.delete-btn"))) == null ? '' : __t) +
'</button>\n</form>\n\n<br/>\n\n<form class="breadcrumb">\n    <div class="form-group">\n        <label for="image-row">' +
((__t = ($.i18n.t("admin.about-page.choose-photo-title"))) == null ? '' : __t) +
'</label>\n        <div class="row" id="image-row">\n            <div class="col-sm-offset-0 col-sm-3">\n                <img id="content_image" src="';
 if(data && data.image_url) {;
__p += ' ' +
((__t = (data.image_url)) == null ? '' : __t) +
' ';
 } else { ;
__p += '../../img/placeholder_300x300.png';
 } ;
__p += '" class="img-responsive img-thumbnail">\n            </div>\n        </div>\n        <br />\n        <input id="content_image_input" name="content_image_input" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\n    </div>\n    <div class="form-group">\n        <label for="description">' +
((__t = ($.i18n.t("admin.about-page.description-title"))) == null ? '' : __t) +
'</label>\n        <textarea cols="80" id="description" rows="8">';
 if(data && data.description) {;
__p += ' ' +
((__t = (data.description)) == null ? '' : __t) +
' ';
 } ;
__p += '</textarea>\n    </div>\n    <button id="submit-btn" class="btn btn-default">' +
((__t = ($.i18n.t("admin.about-page.save-btn"))) == null ? '' : __t) +
'</button>\n</form>\n';

}
return __p
};

this["JST"]["admin/pages/album.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin.album-page.page-title"))) == null ? '' : __t) +
'</h3>\n<div class="breadcrumb">\n    ';
 if(!data.is_expaned) { ;
__p += '\n        <div class="form-group">\n            <label for="album-edit-photo-row">' +
((__t = ($.i18n.t("admin.album-page.album-image"))) == null ? '' : __t) +
'</label>\n            <div class="row" id="album-edit-photo-row">\n                <div class="col-sm-offset-0 col-sm-3">\n                    <img id="album-image-preview" src="';
 if(data && data.album_main_image) { ;
__p +=
((__t = (data.album_main_image)) == null ? '' : __t);
 } else { ;
__p += '../../img/placeholder_300x300.png';
 } ;
__p += '" class="img-responsive img-thumbnail">\n                </div>\n            </div>\n            <br />\n            <span class="alert-danger"><b>' +
((__t = ($.i18n.t("admin.album-page.album-image-alert"))) == null ? '' : __t) +
'</b></span>\n            <input id="album-image" name="album-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\n        </div>\n\n        <div class="form-group row">\n            <div class="col-xs-3">\n                <label for="album-name">' +
((__t = ($.i18n.t("admin.album-page.album-name"))) == null ? '' : __t) +
'</label>\n                <input type="text" class="form-control" id="album-name" placeholder="' +
((__t = ($.i18n.t('admin.album-page.album-name'))) == null ? '' : __t) +
'" ';
 if(data && data.album_name) { ;
__p += 'value="' +
((__t = (data.album_name)) == null ? '' : __t) +
'"';
 } ;
__p += '/>\n            </div>\n        </div>\n    ';
 } ;
__p += '\n\n    <div class="form-group">\n        <label for="album-description">' +
((__t = ($.i18n.t("admin.album-page.album-description"))) == null ? '' : __t) +
'</label>\n        <textarea cols="80" id="album-description" rows="8">';
 if(data && data.album_description) {;
__p += ' ' +
((__t = (data.album_description)) == null ? '' : __t) +
' ';
 } ;
__p += '</textarea>\n    </div>\n\n    ';
 if(!data.is_expaned) { ;
__p += '\n        <div class="checkbox">\n            <label>\n                <input id="is-album-visible" type="checkbox" ';
 if(data && data.is_visible){ ;
__p += 'checked';
 } ;
__p += '> <b>Is Album visible</b>\n            </label>\n        </div>\n    ';
 } ;
__p += '\n\n    <button id="save-album-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.album-page.save-btn"))) == null ? '' : __t) +
'</button>\n</div>\n\n<iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe" style="visibility: hidden;"></iframe>\n<div class="breadcrumb">\n    <div class="form-group">\n        <label for="add-photo-row">' +
((__t = ($.i18n.t("admin.album-page.choose-title"))) == null ? '' : __t) +
'</label>\n        <div class="row" id="add-photo-row">\n            <div class="col-sm-offset-0 col-sm-3">\n                <img id="adding-image-preview" src="../../img/placeholder_300x300.png" class="img-responsive img-thumbnail">\n            </div>\n        </div>\n        <br />\n        <input id="adding-image" name="adding-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\n    </div>\n    <div class="form-group row">\n        <div class="col-xs-3">\n            <label for="image-description">' +
((__t = ($.i18n.t("admin.album-page.description"))) == null ? '' : __t) +
'</label>\n            <input type="text" class="form-control" id="image-description" placeholder="description">\n        </div>\n    </div>\n    <button id="submit-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.album-page.add-btn"))) == null ? '' : __t) +
'</button>\n</div>\n\n<br/>\n\n<div class="panel panel-default">\n    <div class="panel-heading">' +
((__t = ($.i18n.t("admin.album-page.list-title"))) == null ? '' : __t) +
'</div>\n    <div class="panel-body">\n        ';
 if(data.images && data.images.length > 0) { ;
__p += '\n            ';
 _.each(data.images, function(photo) { ;
__p += '\n                <div class="media preview-obj img-thumbnail">\n                    <div class="media-left">\n                        <img class="media-object" src="' +
((__t = (photo.image_url)) == null ? '' : __t) +
'">\n                    </div>\n                    <div class="media-body">\n                        <h4 class="media-heading">' +
((__t = (photo.description)) == null ? '' : __t) +
'</h4>\n                        <div class="media-actonbar">\n                            <button id="delete-btn" class="btn btn-danger" data-photo-number="' +
((__t = (photo.id)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\n                            <button id="edit-btn" class="btn btn-primary" data-photo-number="' +
((__t = (photo.id)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.album-page.edit"))) == null ? '' : __t) +
'</button>\n                        </div>\n                    </div>\n                </div>\n            ';
 }); ;
__p += '\n        ';
 } else { ;
__p += '\n            <span>' +
((__t = ($.i18n.t("admin.album-page.no-images"))) == null ? '' : __t) +
'</span>\n        ';
 } ;
__p += '\n    </div>\n</div>\n\n<div id="confirm-modal" class="modal fade">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title">' +
((__t = ($.i18n.t("admin.album-page.confirm-title"))) == null ? '' : __t) +
'</h4>\n            </div>\n            <div class="modal-body">\n                <p>' +
((__t = ($.i18n.t("admin.album-page.confirmation-text"))) == null ? '' : __t) +
'</p>\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-default" data-dismiss="modal">' +
((__t = ($.i18n.t("admin.album-page.modal-cancel"))) == null ? '' : __t) +
'</button>\n                <button type="button" class="btn btn-primary" id="confirm-delete-btn">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id="edit-photo-modal" class="modal fade">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title" id="edit-photo-name">' +
((__t = ($.i18n.t("admin.album-page.edit-modal-title"))) == null ? '' : __t) +
'</h4>\n            </div>\n            <div class="modal-body">\n                <div>\n                    <div class="form-group">\n                        <label for="edit-photo-row">' +
((__t = ($.i18n.t("admin.album-page.photo-description"))) == null ? '' : __t) +
'</label>\n                        <div class="row" id="edit-photo-row">\n                            <div class="col-sm-offset-0 col-sm-3">\n                                <img id="edit-image" src="../../img/placeholder_300x300.png" class="img-responsive img-thumbnail">\n                            </div>\n                        </div>\n                        <br />\n                        <input id="edit-avatar-image" name="edit-avatar-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\n                    </div>\n                    <div class="form-group row">\n                        <div class="col-xs-6">\n                            <label for="edit-image-description">' +
((__t = ($.i18n.t("admin.album-page.description"))) == null ? '' : __t) +
'</label>\n                            <input type="text" class="form-control" id="edit-image-description" placeholder="description">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-default" data-dismiss="modal">' +
((__t = ($.i18n.t("admin.album-page.modal-cancel"))) == null ? '' : __t) +
'</button>\n                <button type="button" class="btn btn-primary" id="save-changes-btn">' +
((__t = ($.i18n.t("admin.album-page.modal-save-changes"))) == null ? '' : __t) +
'</button>\n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["admin/pages/albums_list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin." + album_type + ".page-header"))) == null ? '' : __t) +
'</h3>\n<div class="breadcrumb">\n        <div class="form-group">\n            <label for="album-edit-photo-row">' +
((__t = ($.i18n.t("admin.album-page.add-new-album"))) == null ? '' : __t) +
'</label>\n            <div class="row" id="album-edit-photo-row">\n                <div class="col-sm-offset-0 col-sm-3">\n                    <img id="album-image-preview" src="../../img/placeholder_300x300.png" class="img-responsive img-thumbnail">\n                </div>\n            </div>\n            <br />\n            <span class="alert-danger"><b>' +
((__t = ($.i18n.t("admin.album-page.album-image-alert"))) == null ? '' : __t) +
'</b></span>\n            <input id="album-image" name="album-image" class="btn btn-default" type="file" accept=".gif,.png,.jpg,.tif,.jpeg">\n        </div>\n\n    <div class="form-group row">\n        <div class="col-xs-3">\n            <label for="album-name">' +
((__t = ($.i18n.t("admin.album-page.album-name"))) == null ? '' : __t) +
'</label>\n            <input type="text" class="form-control" id="album-name" placeholder="' +
((__t = ($.i18n.t('admin.album-page.album-name'))) == null ? '' : __t) +
'"/>\n        </div>\n    </div>\n\n    <div class="form-group">\n        <label for="album-description">' +
((__t = ($.i18n.t("admin.album-page.album-description"))) == null ? '' : __t) +
'</label>\n        <textarea cols="80" id="album-description" rows="8"></textarea>\n    </div>\n\n    <button id="save-album-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.album-page.add-new-album-btn"))) == null ? '' : __t) +
'</button>\n</div>\n\n<br/>\n\n<div class="panel panel-default">\n    <div class="panel-heading">' +
((__t = ($.i18n.t("admin.album-page.albums-list-title"))) == null ? '' : __t) +
'</div>\n    <div class="panel-body">\n        ';
 if(albums && albums.length > 0) { ;
__p += '\n            ';
 _.each(albums, function(album) { ;
__p += '\n                <div class="media preview-obj img-thumbnail">\n                    <div class="media-left">\n                        <img class="media-object" src="' +
((__t = (album.album_main_image)) == null ? '' : __t) +
'">\n                    </div>\n                    <div class="media-body">\n                        <h4 class="media-heading">' +
((__t = (album.album_name)) == null ? '' : __t) +
'</h4>\n                        <p class="media-heading">' +
((__t = ($.i18n.t("admin.album-page.is-visible-text"))) == null ? '' : __t) +
'' +
((__t = (album.is_visible)) == null ? '' : __t) +
'</p>\n                        <div class="media-actonbar">\n                            <a href="#album/' +
((__t = (album.id)) == null ? '' : __t) +
'" class="btn btn-primary">' +
((__t = ($.i18n.t("admin.album-page.edit"))) == null ? '' : __t) +
'</a>\n                            <button id="delete-btn" class="btn btn-danger" data-album-number="' +
((__t = (album.id)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\n                        </div>\n                    </div>\n                </div>\n            ';
 }); ;
__p += '\n        ';
 } else { ;
__p += '\n            <span>' +
((__t = ($.i18n.t("admin.album-page.no-albums"))) == null ? '' : __t) +
'</span>\n        ';
 } ;
__p += '\n    </div>\n</div>\n\n<div id="confirm-modal" class="modal fade">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n                <h4 class="modal-title">' +
((__t = ($.i18n.t("admin.album-page.confirm-title"))) == null ? '' : __t) +
'</h4>\n            </div>\n            <div class="modal-body">\n                <p>' +
((__t = ($.i18n.t("admin.album-page.confirmation-album-text"))) == null ? '' : __t) +
'</p>\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-default" data-dismiss="modal">' +
((__t = ($.i18n.t("admin.album-page.modal-cancel"))) == null ? '' : __t) +
'</button>\n                <button type="button" class="btn btn-primary" id="confirm-delete-btn">' +
((__t = ($.i18n.t("admin.album-page.delete"))) == null ? '' : __t) +
'</button>\n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["admin/pages/common/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n    <div class="container-fluid">\n        <div class="navbar-header">\n            <a class="navbar-brand" href="#/">' +
((__t = ($.i18n.t("admin.header.panel-name"))) == null ? '' : __t) +
'</a>\n        </div>\n        <div class="navbar-collapse collapse">\n            <ul class="nav navbar-nav navbar-right">\n                <li><a id="log-out">Log out</a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["admin/pages/common/main_container.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<link rel="stylesheet" href="../../../css/bootstrap.min.css"/>\n<link rel="stylesheet" href="../../../css/dashboard.css"/>\n\n<div class="container-fluid">\n    <div class="row">\n        <div class="col-sm-3 col-md-2 sidebar">\n            <ul class="nav nav-sidebar">\n                <li ';
 if(selected_page && all_pages.about === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#/">' +
((__t = ($.i18n.t("admin.left-panel.about"))) == null ? '' : __t) +
'</a></li>\n            </ul>\n            <ul class="nav nav-sidebar">\n                <li ';
 if(selected_page && all_pages.bouquets === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#albums/' +
((__t = (album_types.bouquets)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.bouquets"))) == null ? '' : __t) +
'</a></li>\n                <li ';
 if(selected_page && all_pages.decorations === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#albums/' +
((__t = (album_types.decorations)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.decorations"))) == null ? '' : __t) +
'</a></li>\n                <li ';
 if(selected_page && all_pages.invitations === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#albums/' +
((__t = (album_types.invitations)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.invitations"))) == null ? '' : __t) +
'</a></li>\n                <li ';
 if(selected_page && all_pages.graphic === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#albums/' +
((__t = (album_types.graphic)) == null ? '' : __t) +
'">' +
((__t = ($.i18n.t("admin.left-panel.graphic"))) == null ? '' : __t) +
'</a></li>\n            </ul>\n            <ul class="nav nav-sidebar">\n                <li ';
 if(selected_page && all_pages.contacts === selected_page) { ;
__p += 'class="active"';
 } ;
__p += '><a href="#contacts">' +
((__t = ($.i18n.t("admin.left-panel.contacts"))) == null ? '' : __t) +
'</a></li>\n            </ul>\n        </div>\n        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">\n\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["admin/pages/contacts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="page-header">' +
((__t = ($.i18n.t("admin.contacts-page.page-header"))) == null ? '' : __t) +
'</h3>\n<div class="breadcrumb">\n    <div class="form-group">\n        <label for="description">' +
((__t = ($.i18n.t("admin.contacts-page.text-title"))) == null ? '' : __t) +
'</label>\n        <textarea cols="80" id="description" rows="8">';
 if(data && data.description) { ;
__p += ' ' +
((__t = (data.description)) == null ? '' : __t) +
' ';
 } ;
__p += '</textarea>\n    </div>\n    \n    <button id="update-btn" class="btn btn-success">' +
((__t = ($.i18n.t("admin.contacts-page.save-btn"))) == null ? '' : __t) +
'</button>\n</div>';

}
return __p
};

this["JST"]["admin/pages/sign_in.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<link rel="stylesheet" href="../../css/bootstrap.min.css"/>\n\n<div class="container">\n    <form class="form-signin" id="admin-sign-in-form">\n        <h2 class="form-signin-heading">' +
((__t = ($.i18n.t("admin.sign-in-page.form-header"))) == null ? '' : __t) +
'</h2>\n        <label for="input-email" class="sr-only">' +
((__t = ($.i18n.t("admin.sign-in-page.email"))) == null ? '' : __t) +
'</label>\n        <input type="email" id="input-email" class="form-control" placeholder="' +
((__t = ($.i18n.t("admin.sign-in-page.email"))) == null ? '' : __t) +
'" required autofocus>\n        <label for="input-password" class="sr-only">' +
((__t = ($.i18n.t("admin.sign-in-page.password"))) == null ? '' : __t) +
'</label>\n        <input type="password" id="input-password" class="form-control" placeholder="' +
((__t = ($.i18n.t("admin.sign-in-page.password"))) == null ? '' : __t) +
'" required>\n        <button class="btn btn-lg btn-primary btn-block" type="submit">' +
((__t = ($.i18n.t("admin.sign-in-page.sign-in-btn"))) == null ? '' : __t) +
'</button>\n    </form>\n</div>\n';

}
return __p
};

this["JST"]["common/pages/not_found.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<style type="text/css">\n    .wrap {\n        display: table;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n        .wrap > .logo {\n            height: 100%;\n            display: table-cell;\n            vertical-align: middle;\n            text-align: center;\n            padding-left: 10%;\n            padding-right: 10%;\n        }\n        .wrap p {\n            font-family: Arial, Helvetica, sans-serif;\n        }\n            .wrap > .logo > img {\n                max-width: 100%;\n            }\n            .wrap p a {\n                color: #eee;\n                font-size: 13px;\n                margin-left: 30px;\n                padding: 5px;\n                background: #FF3366;\n                text-decoration: none;\n                -webkit-border-radius: .3em;\n                -moz-border-radius: .3em;\n                border-radius: .3em;\n            }\n                .wrap p a:hover {\n                    color: #fff;\n                }\n</style>\n<div class="wrap">\n    <div class="logo">\n        <img src="../../img/404.png" alt=""  />\n        <p><a href="#">Go back to Home</a></p>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["common/pages/server_error.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<style type="text/css">\n    .wrap {\n        display: table;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n    }\n        .wrap > .logo {\n            height: 100%;\n            display: table-cell;\n            vertical-align: middle;\n            text-align: center;\n            padding-left: 10%;\n            padding-right: 10%;\n        }\n        .wrap p {\n            font-family: Arial, Helvetica, sans-serif;\n        }\n            .wrap > .logo > img {\n                max-width: 100%;\n            }\n            .wrap p a {\n                color: #eee;\n                font-size: 13px;\n                margin-left: 30px;\n                padding: 5px;\n                background: #FF3366;\n                text-decoration: none;\n                -webkit-border-radius: .3em;\n                -moz-border-radius: .3em;\n                border-radius: .3em;\n            }\n                .wrap p a:hover {\n                    color: #fff;\n                }\n</style>\n<div class="wrap">\n    <div class="logo">\n        <img src="../../img/503.png" alt=""  />\n        <p><a href="#">Go back to Home</a></p>\n    </div>\n</div>\n';

}
return __p
};
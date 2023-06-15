
/* Apple Login */
window.onload = function() {
    AppleID.auth.init({
        clientId : '[CLIENT_ID]',
        scope : '[SCOPES]',
        redirectURI : '[REDIRECT_URI]',
        state : '[STATE]',
        nonce : '[NONCE]',
        usePopup : true
    });

    document.querySelector('.apple-log').addEventListener('click', function() {
        AppleID.auth.signIn();
    });
}

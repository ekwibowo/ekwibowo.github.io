var track = $('#track');
track.scenery();
track.train();

$('#nav-github').click(function () {
    var github = 'https://github.com/';
    var username = 'ekwibowo';
    window.open(github + username, '_blank');
});

$('#nav-info').click(function () {
    var contentElement = $('#content-info');
    if (contentElement.hasClass('active')) {
        contentElement.removeClass('active');
    } else {
        contentElement.addClass('active');
    }
});

$('button.collapse').click(function () {
    var idPanelToCollapse = $(this).data('collapse');
    var panelToCollapse = $('#' + idPanelToCollapse);
    if (panelToCollapse.hasClass('active')) {
        panelToCollapse.removeClass('active');
    }
});
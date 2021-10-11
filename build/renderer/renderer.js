
$(() => {
    loadMarketingVideo();
});

function loadMarketingVideo() {
    var video_file_path = ``;
    var video_file_name = "rick.mp4";
    var background_color = "black";

    var src = `${video_file_path}${video_file_name}`;
    $("#video_player").attr("src", src);
    $("body").css("background-color", background_color);
    $(".statusRow").css("background-color", background_color);
    $('#video').trigger('play');
}

/**
 * Created by kiost on 2017-06-12.
 */
var volume = $(".myAudio").prop("volume");
var backupVolume = volume;
function fn_volumeUp(flag) {
    if (flag === 'up') {
        volume = ($(".myAudio").prop("volume") + 0.1).toFixed(2);
        if (volume > 1) {
            volume = 1;
        }
        console.log('up', volume);
        $(".myAudio").prop("volume", volume);
    } else if (flag === 'down') {
        volume = ($(".myAudio").prop("volume") - 0.1).toFixed(2);
        if (volume < 0) {
            volume = 0;
        }
        console.log('down', volume);
        $(".myAudio").prop("volume", volume);
    } else {
        if (volume === 0) {
            volume = backupVolume;
            console.log('sound', volume);

        } else {
            backupVolume = volume;
            volume = 0;
            console.log('mute', volume);
        }

        $(".myAudio").prop("volume", volume);
    }
}

function fn_audio(audioNumber, that) {
    if ($(that).attr('class') === 'fa fa-play-circle-o') {
        $("a.bgm > i").attr('class', 'fa fa-play-circle-o');
        $(that).attr('class', 'fa fa-pause-circle-o');
        $(".myAudio").trigger('pause');
        $("#player" + audioNumber).trigger('play');
        $("#player" + audioNumber).unbind('ended').bind('ended', function (e) {
            $(that).attr('class', 'fa fa-play-circle-o');
        });
    } else {
        $(that).attr('class', 'fa fa-play-circle-o');
        $(".myAudio").trigger('pause');
    }
}

$(document).ready(function () {
    $("a.img").mouseenter(function () {
        console.log('mouse enter');
        $(this).css({
            background: '#004cb6',
            transition: '0.5s'
        });
    }).mouseleave(function () {
        $(this).css({
            background: '#026cff',
            transition: '0.5s'
        });

    });

    $(".circle").mouseenter(function () {
        $(this).css({
            background: '#004cb6',
            transition: '0.5s'
        });
    });
    $(".circle").mouseleave(function () {
        $(this).css({
            background: '#026cff',
            transition: '0.5s'
        });
    });
    $(".cell-number").mouseenter(function () {
        $(this).css({
            'background': '#004cb6',
            'transition': '0.5s',
            '-webkit-transform': 'rotate(360deg)'
        });
    });
    $(".cell-number").mouseleave(function () {
        $(this).css({
            'background': '#026cff',
            'transition': '0.5s',
            '-webkit-transform': 'rotate(0deg)'
        });
    });
    $(".myAudio").trigger('pause');
    $("#player1").trigger('play');
});
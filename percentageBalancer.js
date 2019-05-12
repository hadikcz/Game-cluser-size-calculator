$(function () {
    recalc();
    $("form").change(function() {
        recalc();
    });

    $('#removeServer').on('click', () => {
        let serverCount = $('#serverCount').val();
        $('#serverCount').val(--serverCount);
        recalc();
    });

    $('#addServer').on('click', () => {
        let serverCount = $('#serverCount').val();
        $('#serverCount').val(++serverCount);
        recalc();
    });
});

function recalc () {
    let playersCount = $('#playersCount').val();
    let serverCount = $('#serverCount').val();
    let oneServerCapacity = $('#oneServerCapacity').val();
    let destroyLess = $('#destroyServerLess').val();
    let createServerMore = $('#createNewServerMoreOrEqeul').val();
    //

    let totalCapacity = serverCount * oneServerCapacity;
    let percentageCapacity = Math.round((playersCount / totalCapacity) * 100);
    let serverUsage = Math.ceil(playersCount / oneServerCapacity);

    $('#selectedPlayersCount').html(playersCount);
    $('#selectedServerCount').html(serverCount);

    $('#totalCapacity').html(totalCapacity);
    $('#percentageUsage').html(percentageCapacity);
    let wasted = serverCount - serverUsage;
    $('#serverUsage').html(serverUsage + '/' + serverCount + ' (wasted: ' + wasted + ')');

    if (percentageCapacity >= createServerMore) {
        $('#action').html('<span class="orange">CREATE NEW SERVER!</span>');
    } else if (percentageCapacity <= destroyLess && serverCount > 1) {
        $('#action').html('<span class="red">Destroy ONE SERVER!</span>');
    } else {
        $('#action').html('<span class="lime">OK</span>');
    }
}

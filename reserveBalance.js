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
    let reserve = totalCapacity - playersCount;
    let percentageCapacity = Math.round((playersCount / totalCapacity) * 100);
    let serverUsage = Math.ceil(playersCount / oneServerCapacity);
console.log(reserve);
    $('#selectedPlayersCount').html(playersCount);
    $('#selectedServerCount').html(serverCount);

    $('#totalCapacity').html(totalCapacity);
    $('#percentageUsage').html(percentageCapacity);
    $('#reserve').html(reserve);
    let wasted = serverCount - serverUsage;
    $('#serverUsage').html(serverUsage + '/' + serverCount + ' (wasted: ' + wasted + ')');

    if (reserve <= createServerMore) {
        $('#action').html('<span class="orange">CREATE NEW SERVER!</span>');
    } else if (reserve >= destroyLess) {
        $('#action').html('<span class="red">Destroy ONE SERVER!</span>');
    } else {
        $('#action').html('<span class="lime">OK</span>');
    }
}

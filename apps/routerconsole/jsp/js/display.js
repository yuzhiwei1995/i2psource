$(document).ready(function(){
    console.log("ready");
    displayOrHide();
    $("input[name='pmode']").change(function(){
        console.log('hello');
        displayOrHide();
    })
})

function displayOrHide() {
    var rt = $("input[type='radio']:checked").val();
    console.log(rt);
    if(rt === 'I2PBridge'){
        $('#i2pbridge').show();
        $('#https1').hide();
        $('#https2').hide();

    } else if(rt === ''){
        $('#i2pbridge').hide();
        $('#https1').hide();
        $('#https2').hide();
    } else {
        $('#i2pbridge').hide();
        $('#https1').show();
        $('#https2').show();
    }
}

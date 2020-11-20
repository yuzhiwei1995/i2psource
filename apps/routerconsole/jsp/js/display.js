$('.optbox').onchange(function showAndHide() {

    var rt = $("input[type='radio']:checked").val();
    alert(rt)
    if(rt === 'I2PBridge'){
        $('#i2pbridge').style.display="";
        $('#https1').style.display="none";
        $('#https2').style.display="none";
    } else if(rt === ''){
        $('#i2pbridge').style.display="none";
        $('#https1').style.display="none";
        $('#https2').style.display="none";
    } else {
        $('#i2pbridge').style.display="none";
        $('#https1').style.display="";
        $('#https2').style.display="";
    }
})

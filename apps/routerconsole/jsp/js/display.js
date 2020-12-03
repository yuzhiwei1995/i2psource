
$(document).ready(function(){
    console.log("ready");
    displayOrHide();
    $("input[name='pmode']").change(function(){
        console.log('hello');
        displayOrHide();
    })

    $("#requestBridge").click(function () {
        console.log('requestBridge...');
        requestBridge();
    })
})

function displayOrHide() {
    var rt = $("input[type='radio']:checked").val();
    console.log(rt);
    if(rt === 'BRIDGE'){
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


function requestBridge() {
    var url = 'http://bridge.i2pbridge.cn/bridge/getBridge';
    console.log('start request');
    $.getJSON('http://bridge.i2pbridge.cn/bridge/getBridge', function (data) {
        console.log(data);
        let bridge = data.data.bridge;
        console.log(bridge);
        document.getElementById('bridgeReq').value = data.data.bridge;
        // $('#bridgeline').val(bridge);

    })
    // $.ajax({
    //     url: 'http://bridge.i2pbridge.cn/bridge/getBridge',
    //     type: 'GET',
    //     dataType: 'JSON',
    //     headers:{},
    //     success:function (result) {
    //         console.log(result);
    //     }
    //
    // });

    // var req = null;
    // if(window.XMLHttpRequest){
    //     req = new XMLHttpRequest();
    //     console.log('XML');
    // } else if (window.ActiveXObject){
    //     req = new ActiveXObject("Microsoft.XMLHTTP");
    //     console.log('Active');
    // } else {
    //     return;
    // }
    //
    // req.onreadystatechange = function(){
    //     console.log(req.responseText);
    //     console.log(req.responseXML);
    //     // processBridgeLine(req.resposeXML);
    // }
    // req.open('GET', url, true);
    // req.setRequestHeader("If-Modified-Since","Sat, 1 Jan 2000 00:00:00 GMT");
    // req.send(null);
    // console.log('end request');
}

function processBridgeLine(response) {
    console.log(response);
}

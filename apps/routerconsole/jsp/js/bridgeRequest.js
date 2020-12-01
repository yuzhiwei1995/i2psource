document.getElementById('requestBridge').addEventListener('click', event => {
  requestBridge();
});

function requestBridge() {
    $.get('http://localhost:8080/bridge/getBridge', function (data) {
        console.log(data);
    })
}

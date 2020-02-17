$(document).ready(function(){
                var domain = "zhu-jiahui.github.io/SDP/test.html";
          var options = {
            roomName: "My Jitsi Meet Room",
            width: 580,
            height: 600,
            parentNode: document.querySelector('#meet')
          }
        var api = new JitsiMeetExternalAPI(domain, options);
        });

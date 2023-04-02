<script>
  function checkForm() {
    var requiredFields = document.querySelectorAll("[required]");
    var allFieldsFilled = true;
    for (var i = 0; i < requiredFields.length; i++) {
      if (requiredFields[i].value == "") {
        allFieldsFilled = false;
        break;
      }
    }
    if (allFieldsFilled) {
      generageQRCode();

    } else {
      alert("Please fill out all required fields.");
      return false;
    }
  }


    function generageQRCode(){         
        var name = $('#names').val();
        var matchNum = $('#match').val();
        var robotColor = $("input:radio[name=robot]:checked").val();
        var teamNum = $('#teamnumber').val();
        var noShow = $('#noshow').val();

        var location = $("input:radio[name=location]:checked").val();
        var autoUpperCone = $('#auto_upper_cone').val();
        var autoMiddleCone = $('#auto_middle_cone').val();
        var autoLowerCone = $('#auto_lower_cone').val();
        var autoUpperCube = $('#auto_upper_cube').val();
        var autoMiddleCube = $('#auto_middle_cube').val();
        var autoLowerCube = $('#auto_lower_cube').val();
        var mobility = $('#mobility').val();
        var autoPickup = $('#auto_pickup').val();
        var autoDock = $("input:radio[name=auto_dock_engage]:checked").val();

        var upperCone = $('#teleop_upper_cone').val();
        var middleCone = $('#teleop_middle_cone').val();
        var lowerCone = $('#teleop_lower_cone').val();
        var upperCube = $('#teleop_upper_cube').val();
        var middleCube = $('#teleop_middle_cube').val();
        var lowerCube = $('#teleop_lower_cube').val();
        var substation = $('#substation').val();
        var ground = $('#ground').val();
        var links = $('#links').val();
        var beforeEndgame = $('#early_endgame').val();

        var teleDock = $("input:radio[name=endgame]:checked").val();
        var numDock = $('#num_docked').val();

        var driveSkill = $('#skill').val();
        var defenseSkill = $('#defense').val();

        var died = $('#died').val();
        var tipped = $('#tipped').val();
        var card = $('#card').val();
        var damage = $('#damage').val();

        var comment = $('#comments').val();

        var finalArray = [name, matchNum, robotColor, teamNum, noShow, location, autoUpperCone,
                autoMiddleCone, autoLowerCone, autoUpperCube, autoMiddleCube, autoLowerCube, mobility,
                autoPickup, autoDock, upperCone, middleCone, lowerCone, upperCube, middleCube, lowerCube,
                substation, ground, links, beforeEndgame, teleDock, numDock, driveSkill, defenseSkill, died, tipped,
                card, damage, comment];
        var finalString = finalArray.join(";");
        var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + finalString + '&amp;size=50x50';
        $('#barcode').attr('src', url);
        showQR();
    }

    function showQR() {
        <iframe src="index.html"></iframe>
        document.getElementById("barcode").style.display = "block";
    }
                
</script>
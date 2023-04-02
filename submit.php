<script>
  function checkForm() {
    var field = document.getElementsByName("names")[0];
    if (field.value == "") {
      alert("Please fill out the required field.");
      return false;
    }
    return true;
  }
</script>
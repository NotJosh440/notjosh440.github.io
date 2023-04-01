<?php
session_start();
unset($_SESSION['scouting']);
header('Location: index.php');
?>

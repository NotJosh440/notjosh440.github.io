<?php
if (preg_match('/\.html$/i', $_SERVER['REQUEST_URI'])) {
    header('Location: '.preg_replace('/\.html$/i', '', $_SERVER['REQUEST_URI']));
    exit;
}
?>
<?php 
mail(
  "lex_flame@mail.ua"
  "Ну, прувет"
  $_REQUEST["user_name"] . " " . $_REQUEST["user_Phone"]
);
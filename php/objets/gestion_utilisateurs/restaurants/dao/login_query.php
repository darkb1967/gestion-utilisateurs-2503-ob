<?php
session_start();
require_once './Dbconnexion.php';

$pdo = Dbconnexion::getInstance(); // instance du PDO

if (!$pdo) {
    die("La connexion à la base de donnée n'est pas établie.");
}

if (isset($_POST['login'])) {
    if ($_POST['username'] != "" && $_POST['password'] != "") {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql = "SELECT id, users_name, users_password FROM `db_users` WHERE `users_name` = ?";
        $query = $pdo->prepare($sql);   
        $query->execute([$username]); 
        
        if ($query->rowCount() > 0) {
            $fetch = $query->fetch();
            if (password_verify($password, $fetch['users_password'])) {
                $_SESSION['user'] = $fetch['id'];
                header("Location: ../menu.php");
                exit();
            } else {
                echo "<script>alert('Username ou mot de pass invalide')</script>";
                echo "<script>window.location = '../index.php'</script>";
             }
        } else {
            echo "<script>alert('Username ou mot de pass invalide')</script>";
            echo "<script>window.location = '../index.php'</script>";
        }
    } else {
        echo "<script>alert('Complètez les champs manquant !')</script>";
        echo "<script>window.location = '../index.php'</script>";
    }
}

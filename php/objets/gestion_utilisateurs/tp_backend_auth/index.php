<!DOCTYPE html>
<html lang="fr-FR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/form.css">
  <title><?php $titre= "Foire aux Vins"; echo $titre; ?> </title>
</head>

<body>
<?php 
require "./dao/CandidateRepository.php";
require "./dao/Dbconnexion.php";
require "./dao/DepartmentRepository.php";
require "./controllers/controllerInscription.php";

if(isset($_GET['page'])){
        $path= $_GET['page']??"home";
        
    }else{
        $path="home";
    }


    switch ($path) {
        case 'inscription':
            controllerInscription();
            break;

        case 'home':
            include "./view/home.php";
            break;

        default:
            include "./view/home.php";
            break;
    }
?>

<footer></footer>
</body>

</html>
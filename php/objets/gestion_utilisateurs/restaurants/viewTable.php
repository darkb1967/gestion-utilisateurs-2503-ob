<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/menu.css" media="screen" type="text/css" />
    <link rel="stylesheet" href="./css/view.css" media="screen" type="text/css" />
    <title>Table</title>
</head>
<body>
    <?php
        require_once "./view/header.php"
    ?>

    <main class="cadre">
                    
        <h1>Liste des restaurants</h1>

        <section>


            <div id="mytable"><?php
                require "./dao/Dbconnexion.php";
                require "./dao/RestaurantRepository.php";
                require "./view/tableau.php"; 

                $objResto = new RestaurantRepository();
                $data = $objResto->searchAll();
                
               
                if ($data && count($data) > 0) {
                    echo afficherTableau($data); 
                } else {
                    echo "<p>Aucune donnée à afficher.</p>"; 
                }
            ?></div>
            <br>

        </section>


        
    </main>
    
</body>
</html>
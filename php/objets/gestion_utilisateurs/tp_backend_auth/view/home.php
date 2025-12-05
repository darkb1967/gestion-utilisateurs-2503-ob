<?php
//controleur pricipale

$objCandidat = new CandidateRepository();

?>

<body>
  <h1>Liste des candidats inscrits à la foire aux vins Colmar</h1><br>

  <input type="button" value="Enregistrer un candidat" id="btnFormu">

  <?php

  function afficherTableau(array $data): string
  {

    $chainesHtml = "<table class='styled-table' ><thead><tr>";
    foreach (array_keys($data[0]) as $colonne) {
      if ($colonne != "id_user" && $colonne != "hashedPassword" && $colonne != "archive_user") {
        $chainesHtml .= "<th>" . htmlspecialchars($colonne) . "</th>";
      };
    }
    $chainesHtml .= "</tr></thead><tbody>";
    foreach ($data as $ligne) {
      $chainesHtml .= "<tr>";
      foreach ($ligne as $key => $value) {
        if ($key != "id_user" && $key != "hashedPassword" && $key != "archive_user") {
          $chainesHtml .= "<td>" . htmlspecialchars($value) . "</td>";
        };
      }
      $chainesHtml .= "</tr>";
    }
    $chainesHtml .= "</tbody></table>";
    return $chainesHtml;
  }


  $chaine = afficherTableau($objCandidat->searchAll());

  echo $chaine;
  ?>


  <script>
    const monbtn = document.querySelector("#btnFormu");
    monbtn.addEventListener("click", function() {
      window.location.href = 'http://localhost/objets/gestion_utilisateurs/tp_backend_auth/index.php?page=inscription';
    });
  </script>
<?php
class CandidateRepository{
    private ?PDO $dbConnect;
    private int $nbCol;

    public function __construct()
    {
        $this->dbConnect=Dbconnexion::getInstance();
        $this->nbCol=0;
    }

    public function searchAll(): array {
        $data=[];
        $rq="Select id_user, lastname_user, firstname_user, email_user, hashedPassword, department_user, age_user, archive_user from candidats where archive_user = 0";
        $stmt = $this->dbConnect->query($rq);
        $data = $stmt->fetchAll();

        return $data;
    }

    public function insertCandidat(string $lastname_user, string $firstname_user, string $email_user, string $hashedPassword, int $department_user, int $age_user, int $archive_user): int
    {
        $rq = "INSERT INTO candidats (lastname_user, firstname_user, email_user, hashedPassword, department_user, age_user, archive_user) VALUES (:lastname, :firstname, :email, :hashedPassword, :department, :age, :archive)";
        $PDOstmt = $this->dbConnect->prepare($rq);
        $PDOstmt->bindValue(":lastname", $lastname_user);
        $PDOstmt->bindValue(":firstname", $firstname_user);
        $PDOstmt->bindValue(":email", $email_user);
        $PDOstmt->bindValue(":hashedPassword", $hashedPassword);
        $PDOstmt->bindValue(":department", $department_user);
        $PDOstmt->bindValue(":age", $age_user);
        $PDOstmt->bindValue(":archive", $archive_user);
        $PDOstmt->execute();
        return $PDOstmt->rowCount();
        
    }

    public function deleteCandidats(int $_id): bool
    {
        $rq = "DELETE FROM candadats WHERE id = :ID";
        $PDOstmt = $this->dbConnect->prepare($rq);
        $PDOstmt->bindValue(":ID", $_id, PDO::PARAM_INT);
        return $PDOstmt->execute();
    }

    public function updateCandidats(int $_id, string $lastname_user, string $firstname_user, string $email_user, string $hashedPassword, int $department_user, int $age_user, int $archive_user): bool
    {
        $rq = "UPDATE candidats SET lastname_user=:lastname, firstname_user=:firstname, email_user:email, hashedPassword=:hashedPassword, department_user=:department, age_user=:age, archive_user=:archive WHERE id = :ID";
        $PDOstmt = $this->dbConnect->prepare($rq);
        $PDOstmt->bindValue(":ID", $_id, PDO::PARAM_INT);
        $PDOstmt->bindValue(":lastname", $lastname_user);
        $PDOstmt->bindValue(":firstname", $firstname_user);
        $PDOstmt->bindValue(":email", $email_user);
        $PDOstmt->bindValue(":hashedPassword", $hashedPassword);
        $PDOstmt->bindValue(":department", $department_user);
        $PDOstmt->bindValue(":age", $age_user);
        $PDOstmt->bindValue(":archive", $archive_user);
        return $PDOstmt->execute();
    }   
}
<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;


/**
 * @method string getUserIdentifier()
 */
#[ORM\Entity]


class User implements UserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id;

    #[ORM\Column]
    private ?int $cin;
    #[ORM\Column(length:255)]

    private ?string $nom;

    #[ORM\Column(length:255)]

    private ?string $prenom;

    #[ORM\Column(name: "dateuser", type: Types::DATE_MUTABLE, nullable: true, options: ["default" => "NULL"])]
    private  ?\DateTimeInterface $dateuser ;

    #[ORM\Column(name: "num_tel", type: "integer", nullable: false)]

    private ?int $numTel;

    #[ORM\Column(name: "adresse", type: "string", length: 255, nullable: false)]

    private ?string $adresse;

    #[ORM\Column(name: "email", type: "string", length: 255, nullable: false)]

    private ?string $email;

    #[ORM\Column(name: "password", type: "string", length: 255, nullable: false)]

    private ?string $password;

    #[ORM\Column(name: "role", type: "string", length: 255, nullable: false, options: ["default" => "'Client'"])]
    private ?string $role = '\'Client\'';

    #[ORM\Column(name: "image", type: "string", length: 255, nullable: false)]

    private ?string $image;

    #[ORM\Column(name: "ban", type: "boolean", nullable: false)]
    private ?bool $ban ;

    #[ORM\Column]

    private ?int $id_Code_Promo;
  /*  #[ORM\ManyToOne(targetEntity: Codepromo::class,inversedBy: 'Users')]
    private ?Codepromo $codepromo = null;*/

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    public function getCin(): ?int
    {
        return $this->cin;
    }

    public function setCin(?int $cin): void
    {
        $this->cin = $cin;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): void
    {
        $this->nom = $nom;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): void
    {
        $this->prenom = $prenom;
    }


    public function getNumTel(): ?int
    {
        return $this->numTel;
    }

    public function setNumTel(?int $numTel): void
    {
        $this->numTel = $numTel;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): void
    {
        $this->adresse = $adresse;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): void
    {
        $this->password = $password;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): void
    {
        $this->role = $role;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): void
    {
        $this->image = $image;
    }

    public function getBan(): ?bool
    {
        return $this->ban;
    }

    public function setBan(?bool $ban): void
    {
        $this->ban = $ban;
    }



    public function getDateuser(): ?\DateTimeInterface
    {
        return $this->dateuser;
    }

    public function setDateuser(?\DateTimeInterface $dateuser): void
    {
        $this->dateuser = $dateuser;
    }

    public function getIdCodePromo(): ?int
    {
        return $this->id_Code_Promo;
    }

    public function setIdCodePromo(?int $id_Code_Promo): void
    {
        $this->id_Code_Promo = $id_Code_Promo;
    }



    public function isBan(): ?bool
    {
        return $this->ban;
    }


    public function getRoles()
    {
        return $this->role;
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function getUsername()
    {
        return $this->nom;    }

    public function __call(string $name, array $arguments)
    {
        // TODO: Implement @method string getUserIdentifier()
    }
}

<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Ratings
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]

    private ?int $id;
    #[ORM\Column]

    private ?int $idUser = NULL;

    #[ORM\Column]

    private ?int $idRecette = NULL;

    #[ORM\Column]

    private ?int$rating = NULL;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    public function getIdUser(): ?int
    {
        return $this->idUser;
    }

    public function setIdUser(?int $idUser): void
    {
        $this->idUser = $idUser;
    }

    public function getIdRecette(): ?int
    {
        return $this->idRecette;
    }

    public function setIdRecette(?int $idRecette): void
    {
        $this->idRecette = $idRecette;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(?int $rating): void
    {
        $this->rating = $rating;
    }


}

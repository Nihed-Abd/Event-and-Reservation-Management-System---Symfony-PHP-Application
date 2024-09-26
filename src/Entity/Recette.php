<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Recette
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int$idRecette;

    #[ORM\Column(length:255)]

    private ?string$nomRecette;

    #[ORM\Column(length:255)]

    private ?string$ingredients;

    #[ORM\Column(length:255)]

    private ?string$tempsPreparation;

    #[ORM\Column]

    private ?int $idRegime;

    public function getIdRecette(): ?int
    {
        return $this->idRecette;
    }

    public function setIdRecette(?int $idRecette): void
    {
        $this->idRecette = $idRecette;
    }

    public function getNomRecette(): ?string
    {
        return $this->nomRecette;
    }

    public function setNomRecette(?string $nomRecette): void
    {
        $this->nomRecette = $nomRecette;
    }

    public function getIngredients(): ?string
    {
        return $this->ingredients;
    }

    public function setIngredients(?string $ingredients): void
    {
        $this->ingredients = $ingredients;
    }

    public function getTempsPreparation(): ?string
    {
        return $this->tempsPreparation;
    }

    public function setTempsPreparation(?string $tempsPreparation): void
    {
        $this->tempsPreparation = $tempsPreparation;
    }

    public function getIdRegime(): ?int
    {
        return $this->idRegime;
    }

    public function setIdRegime(?int $idRegime): void
    {
        $this->idRegime = $idRegime;
    }


}

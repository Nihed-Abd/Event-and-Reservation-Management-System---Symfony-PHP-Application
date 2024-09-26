<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Regime
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $idRegime;

    #[ORM\Column(length:255)]

    private ?string $typeRegime;

    #[ORM\Column(length:255)]

    private ?string $nomRegime;

    #[ORM\Column(length:255)]

    private ?string $instruction;

    public function getIdRegime(): ?int
    {
        return $this->idRegime;
    }

    public function setIdRegime(?int $idRegime): void
    {
        $this->idRegime = $idRegime;
    }

    public function getTypeRegime(): ?string
    {
        return $this->typeRegime;
    }

    public function setTypeRegime(?string $typeRegime): void
    {
        $this->typeRegime = $typeRegime;
    }

    public function getNomRegime(): ?string
    {
        return $this->nomRegime;
    }

    public function setNomRegime(?string $nomRegime): void
    {
        $this->nomRegime = $nomRegime;
    }

    public function getInstruction(): ?string
    {
        return $this->instruction;
    }

    public function setInstruction(?string $instruction): void
    {
        $this->instruction = $instruction;
    }


}

<?php

namespace App\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]

class Codepromo
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private ?int $id_Code_Promo;

    #[ORM\Column]

    private ?int $code;

    #[ORM\Column]

    private ?int $montantReduction;

    #[ORM\Column(length:255)]

    private ?string $statut;

    #[ORM\Column]

    private ?int $utilisationsRestantes;
    #[ORM\OneToMany(mappedBy: 'codepromo', targetEntity: User::class)]
    private Collection $Codes;

    public function getCodes(): Collection
    {
        return $this->Codes;
    }
    public function __construct()
    {
        $this->Codes = new ArrayCollection();
    }
    public function setCodes(Collection $Codes): void
    {
        $this->Codes = $Codes;
    }

    public function getIdCodePromo(): ?int
    {
        return $this->id_Code_Promo;
    }

    public function setIdCodePromo(?int $id_Code_Promo): void
    {
        $this->id_Code_Promo = $id_Code_Promo;
    }



    public function getCode(): ?int
    {
        return $this->code;
    }

    public function setCode(?int $code): void
    {
        $this->code = $code;
    }

    public function getMontantReduction(): ?int
    {
        return $this->montantReduction;
    }

    public function setMontantReduction(?int $montantReduction): void
    {
        $this->montantReduction = $montantReduction;
    }

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(?string $statut): void
    {
        $this->statut = $statut;
    }

    public function getUtilisationsRestantes(): ?int
    {
        return $this->utilisationsRestantes;
    }

    public function setUtilisationsRestantes(?int $utilisationsRestantes): void
    {
        $this->utilisationsRestantes = $utilisationsRestantes;
    }


}
